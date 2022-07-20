import React from 'react'
import { ThemeContext } from '../../views/option-one'
export default function Item (props) {
    const contextValue = React.useContext(ThemeContext)
    console.log(contextValue, 'contextValue')
    return (
        <div>index</div>
    )
}
