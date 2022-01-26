export const routerConfig = [
    {
        path: 'home',
        name: '首页',
        children: [
            {
                path: '/home/option-one',
                component: 'option-one',
                name: '选择1'
            },
            {
                path: '/home/option-two',
                component: 'option-two',
                name: '选择2'
            }
        ]
    },
    {
        path: 'mine',
        name: '我的',
        children: [
            {
                path: '/mine/myself',
                component: 'myself',
                name: '我的'
            }
        ]
    },
    {
        path: 'setting',
        name: '设置',
        children: [
            {
                path: '/setting/my-setting',
                component: 'setting',
                name: '设置'
            }
        ]
    }
]
