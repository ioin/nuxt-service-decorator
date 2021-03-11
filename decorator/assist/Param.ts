/**
 *  used by send param if you return nothing in function
 * @param name send param name
 * @param defaultValue  default value
 * @returns Parameter decorator
 */
export default function Param(name: string, defaultValue?: any) {
    return function (target: any, methodName: string, index: number) {
        const method = target[methodName];
        if (method.$sends || (method.$sends = [])) {
            method.$sends[index] = { name, defaultValue }
        }
    }
}