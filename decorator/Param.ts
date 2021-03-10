/**
 *  用于函数上的基础传播参数
 *  适用于没用return值时，将当前的参数列表作为返回值而传递
 * @param name 
 * @param defaultValue 
 * @returns 
 */
export default function Param(name: string, defaultValue?: any) {
    return function (target: FunctionConstructor, methodName: string, index: number) {
        const method = target[methodName];
        if (method.$sends || (method.$sends = [])) {
            method.$sends.push([
                name,
                defaultValue
            ])
        }
    }
}