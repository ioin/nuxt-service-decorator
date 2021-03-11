export function urlJoin(...args: string[]) {
    return args.join('/').replace(/\/\//g, "/");
}

export function isFormData(param: any): param is FormData {
    return ({}).toString.call(param) === "[object FormData]"
}

export function isObject(param:any):param is object {
    return  ({}).toString.call(param) === "[object Object]"
}