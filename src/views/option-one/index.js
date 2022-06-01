import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
// import './style.less'
const OptionOne = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState({ a: 'hello' })
    const handleClick = e => {
        e.stopPropagation()
        setShow(true)
    }
    useEffect(() => {
        setName({})
        const handleClickBody = () => {
            setShow(false)
        }
        window.addEventListener('click', handleClickBody)
        return () => {
            window.removeEventListener('click', handleClickBody)
        }
    }, [])
    useEffect(() => {
        console.log('aaaa')
    }, [name])
    console.log(show, 'how')
    console.log(name, 'aaa')
    return (
        <div className='option-one'>
            <Button onClick={handleClick}>点击展示弹出</Button>
            <div className='option'>zhw</div>
            {show && <div onClick={e => e.stopPropagation()}>哈哈哈</div>}
        </div>
    )
}
export default OptionOne
