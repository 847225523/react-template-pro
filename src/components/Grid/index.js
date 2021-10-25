import React from 'react'
import { css, cx } from '@emotion/css'
import Row from '@/components/Row'
import style from './index.scss'
export default function Grid() {
    return (
        <div className='grid'>
        <h1 className={css`background-color:rebeccapurple`}>kobe</h1>
            <Row/>
            <Row/>  
            <Row/>
        </div>
    )
}
