export const match = (pathname, routeConfig) => {
    if (routeConfig.length) {
        return routeConfig.some(route => route.path === pathname)
    }
    return routeConfig.path === pathname
}
