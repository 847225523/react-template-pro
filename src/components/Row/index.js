import React from 'react'

import style from './style.less'
const  Row = () =>{
    const handleClick = () => {
        console.log('aaa')
    }

    return (
        <div className='row' onClick={handleClick}>
            kobe
        </div>
    )
}
export default Row
