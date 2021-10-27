import React from 'react'

import './style.less'
const Row = () => {
    const handleClick = () => {
        console.log('aaa')
        console.log('cc')
    }

    return (
        <div className='row row1' onClick={handleClick}>
            kobe
        </div>
    )
}
export default Row
