/* eslint-disable react/prop-types */
import React from 'react'
import Dialog from './dialog'

// class Modal extends React.PureComponent{
//     constructor(props){
//         super(props)
//     }
//     const renderFooter = () => {
//         const { onOk , onCancel , cancelText , okText, footer  } = this.props
//         if(footer && React.isValidElement(footer)) return footer
//         return
//         <div className="model_bottom" >
//         <div className="model_btn_box" >
//             <button className="searchbtn"  onClick={(e)=>{ onOk && onOk(e) }} >{okText || '确定'}</button>
//             <button className="concellbtn" onClick={(e)=>{ onCancel && onCancel(e) }} >{cancelText || '取消'}</button>
//         </div>
//     </div>
//     }
//     const renderTop = () => {
//         const {title,onClose} = this.props
//         return <div className="model_top" >
//         <p>{title}</p>
//         <span className="model_top_close"  onClick={()=> onClose && onClose()} >x</span>
//     </div>
//     }
//      /* 渲染弹窗内容 */
//     const renderContent=()=>{
//         const { content , children } = this.props
//         return  React.isValidElement(content) ? content
//                 : children ? children : null
//     }
//     render(){
//         const { visible, width = 500 ,closeCb , onClose  } = this.props
//         return <Dialog closeCb={closeCb} width={width} visible={visible} onClose={onClose}>
//             {this.renderTop()}
//             {this.renderContent()}
//             {this.renderFooter()}
//         </Dialog>
//     }
// }

export default function Modal (props) {
    const { visible, width = 500, closeCb, onClose, content, children, title } = props
    const renderFooter = () => {
        const { onOk, onCancel, cancelText, okText, footer } = props
        if (footer && React.isValidElement(footer)) return footer
        return (<div className="model_bottom" >
            <div className="model_btn_box" >
                <button className="searchbtn" onClick={(e) => { onOk && onOk(e) }} >{okText || '确定'}</button>
                <button className="concellbtn" onClick={(e) => { onCancel && onCancel(e) }} >{cancelText || '取消'}</button>
            </div>
        </div>)
    }
    const renderTop = () => {
        return <div className="model_top" >
            <p>{title}</p>
            <span className="model_top_close" onClick={() => onClose && onClose()} >x</span>
        </div>
    }
    /* 渲染弹窗内容 */
    const renderContent = () => {
        return React.isValidElement(content)
            ? content
            : children || null
    }
    return <Dialog closeCb={closeCb} width={width} visible={visible} onClose={onClose}>
        {renderTop()}
        {renderContent()}
        {renderFooter()}
    </Dialog>
}
