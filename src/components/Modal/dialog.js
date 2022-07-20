import React, { useState, useMemo, useEffect } from 'react'
import ReactDom from 'react-dom'
export default function dialog (props) {
    const { width, visible, closeCb, onClose } = props
    /* 控制弹窗隐藏以及动画效果 */
    const controlShow = (f1, f2, value, timer) => {
        f1(value)
        return setTimeout(() => {
            f2(value)
        }, timer)
    }
    // 控制modalShow效果展示
    const [modelShow, setModalShow] = useState(visible)
    const [modalShowAync, setModalShowAync] = useState(visible)
    const renderChildren = useMemo(() => {
        return ReactDom.createPortal((
            <div style={{ display: modelShow ? 'block' : 'none' }}>
                <div className='container' style={{ opacity: modalShowAync ? 1 : 0 }}>
                    <div className="wrap" >
                        <div style={{ width: width + 'px' }} > {props.children} </div>
                    </div>
                    <div className='modal' onClick={() => onClose() && onClose()} style={{ opacity: modalShowAync ? 0.6 : 0 }}/>
                </div>
            </div>
        ), document.body)
    }, [modelShow, modalShowAync])
    useEffect(() => {
        let timer
        if (visible) {
            timer = controlShow(setModalShow, setModalShowAync, visible, 30)
        } else {
            timer = controlShow(setModalShow, setModalShowAync, visible, 1000)
        }
        return () => {
            timer && clearTimeout(timer)
        }
    }, [visible])
    useEffect(() => {
        !modelShow && typeof closeCb === 'function' && closeCb()
    }, [modelShow])
    return renderChildren
}
