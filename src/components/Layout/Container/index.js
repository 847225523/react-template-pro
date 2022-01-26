/* eslint-disable react/prop-types */
import React from 'react'
import { Layout } from 'antd'
import Sider from '../Sider'
import './index.less'

const { Content } = Layout

const Container = (props) => {
    const { children } = props
    return (
        <Layout className="xm-container">
            <Sider />
            <Content className="xm-container__content">{children}</Content>
        </Layout>
    )
}
export default Container
