import React, { useState, useRef, useEffect } from 'react'
import Circle from '@/components/Circle'
const eachRenderNum = 500
const Setting = () => {
    const boxRef = useRef(null)
    const index = 1
    const [dataList, setDataList] = useState([])
    const [renderList, setRenderList] = useState([])
    const [position, setPosition] = useState({
        width: 0, height: 0 // 位置信息
    })
    const toRenderList = (index, times) => {
        if (index > times) return
        setRenderList([...renderList, renderNewList(index)])
        requestIdleCallback(() => { /* 用 requestIdleCallback 代替 setTimeout 浏览器空闲执行下一批渲染 */
            toRenderList(++index, times)
        })
    }
    const renderNewList = (index) => {
        const list = dataList.slice((index - 1) * eachRenderNum, index * eachRenderNum)
        return <React.Fragment key={index} >
            {
                list.map((item, index) => <Circle key={index} position={position} />)
            }
        </React.Fragment>
    }
    useEffect(() => {
        const { offsetHeight, offsetWidth } = boxRef.current
        const originList = new Array(20000).fill(1)
        setDataList(originList)
        setPosition({ ...position, width: offsetWidth, height: offsetHeight })
        const times = Math.ceil(originList.length / eachRenderNum) /* 计算需要渲染此次数 */
        toRenderList(index, times)
    }, [])

    return (
        <div ref={boxRef}>
            {renderList}
        </div>
    )
}

export default Setting
