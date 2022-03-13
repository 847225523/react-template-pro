import { useLocation } from 'react-router-dom'
import { findRouteByPathName } from '@/utils'
const useMatchRoute = () => {
    const location = useLocation()
    const { pathname } = location
    return findRouteByPathName(pathname)
}

export default useMatchRoute
