import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import Item from '@/components/Item'
import Modal from '@/components/Modal'
// import './style.less'
let a = 1
export const ThemeContext = React.createContext(null)
const OptionOne = () => {
    const contextValue1 = {
        color: 'red',
        size: '14px'
    }
    const [contextValue, setContextValue] = useState(contextValue1)
    const [show, setShow] = useState(false)
    const [number, setNumber] = useState(1)
    const [name, setName] = useState({ a: 'hello' })
    const handleClick = e => {
        e.stopPropagation()
        setShow(true)
        setContextValue({
            name: 'zhw',
            age: 20
        })
    }
    useEffect(() => {
        setName({})
        setNumber(a++)
        const handleClickBody = () => {
            setShow(false)
        }
        window.addEventListener('click', handleClickBody)
        return () => {
            window.removeEventListener('click', handleClickBody)
        }
    }, [])
    useEffect(() => {
        setNumber(a)
    }, [number])
    useEffect(() => {
        console.log('aaaa')
    }, [name])
    console.log(show, 'how')
    console.log(name, 'aaa')
    const ItemProps = {
        name: 'zhw',
        age: 20,
        handleClick
    }
    return (
        <ThemeContext.Provider value={contextValue}>
            <div className='option-one'>
                {number}
                <Button onClick={handleClick}>点击展示弹出</Button>
                <Button onClick={handleClick}>点击展示弹出</Button>
                <Item {...ItemProps}/>
                <Modal
                    visible ={true}
                    title="测试"
                />
                <div className='option'>zhw</div>
                {show && <div onClick={e => e.stopPropagation()}>哈哈哈</div>}
            </div>
        </ThemeContext.Provider>

    )
}
export default OptionOne
