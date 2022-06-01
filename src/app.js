import React, { Suspense } from 'react'
import 'antd/dist/antd.css'
import { HashRouter } from 'react-router-dom'
import zhCN from 'antd/lib/locale/zh_CN'
import { ConfigProvider, Skeleton } from 'antd'
import Routes from '@/router'
import Container from '@/components/Layout/Container'

const App = (props) => {
    return (
        <ConfigProvider locale={zhCN}>
            <HashRouter>
                <Container>
                    <Suspense fallback={<Skeleton />}>
                        <Routes />
                    </Suspense>
                </Container>
            </HashRouter>
        </ConfigProvider>
    )
}
export default App
