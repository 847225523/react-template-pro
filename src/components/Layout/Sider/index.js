import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import { useHistory } from 'react-router-dom'
import { routerConfig } from '@/router/config'
import {
    PieChartOutlined,
    MailOutlined
} from '@ant-design/icons'
import { useMatchRoute } from '@/components/Hooks'
import './index.less'

const { Sider } = Layout
const { SubMenu } = Menu

const renderMenu = (routerConfig) => {
    // eslint-disable-next-line array-callback-return
    return routerConfig.map(route => {
        if (route.children) {
            return <SubMenu key={route.key} icon={<MailOutlined />} title={route.name}>
                {
                    // eslint-disable-next-line array-callback-return
                    route.children.map(item => {
                        return (
                            <Menu.Item key={item.key} icon={<PieChartOutlined />}>
                                {item.name}
                            </Menu.Item>
                        )
                    })
                }
            </SubMenu>
        } else {
            return (
                <Menu.Item key={route.key} icon={<PieChartOutlined />}>
                    {route.name}
                </Menu.Item>
            )
        }
    })
}
const LayoutSider = () => {
    const history = useHistory()
    const [selectedKeys, setSelectedKeys] = useState([])
    const [openKeys, setOpenKeys] = useState([])
    const route = useMatchRoute()
    useEffect(() => {
        if (route) {
            setSelectedKeys([route.key])
            setOpenKeys([route.key.split('/')[0]])
        }
    }, [route])
    console.log(selectedKeys, openKeys, 'ddd')
    const handleClickItem = (item) => {
        const { key } = item
        setSelectedKeys([key])
        history.push(`/${key}`)
    }
    const handleOpen = (key) => {
        setOpenKeys(key)
    }
    return (
        <div className="xm-sider">
            <div className="xm-sider__title">react项目模版</div>
            <Sider width={180} className="xm-sider__content">
                <Menu mode="inline"
                    key={selectedKeys.length}
                    defaultSelectedKeys={selectedKeys}
                    defaultOpenKeys={openKeys}
                    onClick={handleClickItem}
                    onOpenChange={handleOpen}
                >
                    {renderMenu(routerConfig)}
                </Menu>
            </Sider>
        </div>
    )
}

export default LayoutSider
