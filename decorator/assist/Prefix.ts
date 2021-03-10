/**
 * route prefix for @Get @Post @Arbitrary method
 * @param prefix 
 * @returns 
 */
export default function ServiceRoutePrefix(prefix: string) {
    return function (target: any) {
        target.prototype.$prefix = prefix
    }
}