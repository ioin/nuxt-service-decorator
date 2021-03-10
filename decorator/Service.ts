/**
 * register service error
 */
class ServiceRegisterError extends Error {
    name: string;
    message: string = "ServiceRegisterError";

    constructor(msg: string) {
        super();
        this.message = "Service regist error cause: " + msg;
    }
}


/**
 * register some services to current VueComponent
 * @param services 
 * @returns 
 */
function Service(...services: any[]) {
    return function (VueComponent: any) {
        if (services.length === 0) {
            throw new ServiceRegisterError('At least one service should be registered')
        }

        if (VueComponent.options.computed === undefined) {
            VueComponent.options.computed = {}
        }

        services.forEach(service => {
            let serviceName: string = service.__name;
            if (serviceName === undefined) {
                throw new ServiceRegisterError(`Be registered class ${service.name} is not a service module.Please add @Module("${service.name}") to class`)
            }
            let firstLetter = serviceName[0];
            serviceName = serviceName.replace(firstLetter, firstLetter.toLowerCase());

            service = new service();

            VueComponent.options.computed[serviceName] = {
                get() {
                    service.$axios = this.$axios;
                    return service;
                }
            }
        })
    }
}

export default Service;