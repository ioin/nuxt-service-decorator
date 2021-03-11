import { ServiceModule } from "~/service/types/ServiceTypes";

/**
 * mark param as request url for dynamic
 * @param service current class service 
 * @param methodName current method
 * @param index url param index
 */
export default function Url(service: ServiceModule, methodName: keyof ServiceModule, index: number) {
    const method = service[methodName];

    if (!method.$config) {
        method.$config = {}
    }
    method.$config.url = index;
}