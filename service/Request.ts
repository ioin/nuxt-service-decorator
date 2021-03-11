import { MethodConfig, Send, ServiceModule, Store } from "./types/ServiceTypes";
import { isObject, urlJoin } from './utils'



function checkParams(this: ServiceModule, callArgs: any[], rtnParams?: any, sends: Send[] = [], store: Store[] = []) {

    let requestParam: any = {};
    if (isObject(rtnParams)) {
        // has return object
        requestParam = { ...rtnParams };
    } else if (callArgs.length === 1 && isObject(callArgs[0])) {
        requestParam = { ...callArgs[0] }
    }
    // set the send
    sends.forEach(({ name, defaultValue }, i) => {
        let arge = callArgs[i];
        if (arge === rtnParams) {
            console.error('@Param Error: can not set a return value also used by @Param arge')
        } else {
            requestParam[name] = arge ?? defaultValue;
        }
    })

    // set form store where not in requestParam

    store.forEach(({ name, keyChain, storeKey, defaultValue }) => {
        let state = this.$store.state;
        state = keyChain.reduce((state, keyname) => {
            return state !== undefined ? state[keyname] : ""
        }, state);

        if (state === undefined && defaultValue === state) {
            console.warn(`can not got any value by keychain ${storeKey} and not provider default value`);
        } else {
            if (requestParam[name] === undefined) {
                requestParam[name] = state;
            }
        }
    })

    return requestParam;
}



function Request(url: string = "") {
    return function ReuqestDepercator(service: ServiceModule, methodName: string, descriptor: PropertyDescriptor) {
        let _method = descriptor.value;
        let _methodConfig: MethodConfig = _method.$config ?? {};

        descriptor.value = async function (this: ServiceModule) {
            const callArgs = Array.prototype.slice.call(arguments);

            const prefix = service.$prefix ?? "";

            url = url === "" ? callArgs[_methodConfig.url ?? 0] : url

            const requestUrl = urlJoin(prefix, url)

            let rtnParams = await _method.apply(this, callArgs);

            rtnParams = checkParams.call(this, callArgs, rtnParams, _method.$sends, _method.$store)



        }
    }
}


export default Request