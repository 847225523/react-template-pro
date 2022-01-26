import React from 'react'
import { Layout } from 'antd'

const { Sider } = Layout

const LayoutSider = () => {
    return (
        <div className="xm-sider">
            <div className="xm-sider__title">react项目模版</div>
            <Sider
                width={180}
                className="xm-sider__content"
            >
                <div>首页</div>
                {/* <Menu
                    mode="inline"
                    selectedKeys={paths}
                    onClick={handleMenuClick}
                    defaultOpenKeys={defaultOpenKeys}
                >
                    {renderMenus(routes)}
                </Menu> */}
            </Sider>
        </div>
    )
}

export default LayoutSider
