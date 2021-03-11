import { ServiceModule } from "~/service/types/ServiceTypes"

/**
 * route prefix for @Get @Post @Arbitrary method
 * @param prefix url prefix
 * @returns 
 */
export default function ServiceRoutePrefix(prefix: string) {
    return function (target: ServiceModule) {
        target.prototype.$prefix = prefix
    }
}