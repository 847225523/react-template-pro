import { routerConfig } from '@/router/config'
import { match } from './match'

function findRouteByPathName (data, pathname) {
    for (let i = 0; i < data.length; i++) {
        if (match(pathname, data[i])) {
            return data[i]
        }
        if (data[i].children && match(pathname, data[i].children)) {
            return data[i].children.filter(item => item.path === pathname)[0]
        }
    }

    return null
}

function find (pathname) {
    return findRouteByPathName(routerConfig, pathname)
}
export default find
