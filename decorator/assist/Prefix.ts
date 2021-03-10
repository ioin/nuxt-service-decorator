export default function ServiceRoutePrefix(prefix: string) {
    return function (target: any) {
        target.prototype.$prefix = prefix
    }
}