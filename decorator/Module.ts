
/**
 * declare a service module
 * @param name service name. this name will be register in vue component at lowercase first letter
 */
export default function ServiceModule(name: string) {
    return function (clazz: any) {
        clazz.__name = name;
    }
}