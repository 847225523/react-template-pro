import React from 'react'

import Grid from './components/Grid'
const testPng = require('@/assets/c4ff.png')
const App = (props) => {
    return (
        <div>
            <h1>哈哈111</h1>
            <div>111</div>
            <img src={testPng} style={{ width: 200, height: 200 }} />
            <Grid />
        </div>
    )
}
export default App
