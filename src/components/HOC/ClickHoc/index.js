import React, { useEffect, useRef } from 'react'

const ClickHoc = (Component) => {
    return function Wrap (props) {
        const dom = useRef(null)
        useEffect(() => {
            const handleClick = () => console.log('aaaa')
            dom.current.addEventListener('click', handleClick)
            return () => dom.current.removeEventListener('click', handleClick)
        }, [])
        return <div ref={dom}><Component {...props}/></div>
    }
}

export default ClickHoc
