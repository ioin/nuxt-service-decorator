import { ServiceModule } from "~/service/types/ServiceTypes";

/**
 * used by send param where in store state
 * @param storeKey a key in vuex, get a module value use dot split 
 * @param rename if null will use the last split dot of storeKey 
 * @param defaultValue 
 * @returns Parameter decorator
 */
export default function Store(storeKey: string, rename?: string, defaultValue?: any) {
    return function (service: ServiceModule, methodName: keyof ServiceModule, index: number) {
        const method = service[methodName];
        if (method.$store || (method.$store = [])) {
            let keyChain = storeKey.split(".")
            method.$store.push({ storeKey, keyChain, name: rename ?? keyChain[keyChain.length - 1], defaultValue })
        }
    }
}