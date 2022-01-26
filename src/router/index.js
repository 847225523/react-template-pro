import React, { lazy } from 'react'
import { Route } from 'react-router-dom'
import { routerConfig } from './config'

// eslint-disable-next-line react/prop-types
export const R = ({ children = [], path, component }) => {
    console.log({ children, path, component })
    // 嵌套路由注册
    if (children.length > 0) {
        return children.map((route) => {
            return <R
                key={route.path}
                {...route}
                path={route.path}
            />
        })
    }

    return (
        <Route
            exact
            path={path}
            component={lazy(() => import(`@/views/${component}`))}
        />
    )
}
const Routes = () => {
    return (
        <>
            {
                routerConfig.map(route => {
                    return <R key={route.path} {...route}/>
                })
            }
        </>
    )
}
console.log(Routes, 'RoutesRoutesRoutes')

export default Routes
