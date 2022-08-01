import React,{forwardRef} from 'react'
// forwardRef is used to interact different component here in this case User and App
function User(props,ref){
    return(
        <div>
            <input ref={ref} type="text" />
        </div>
    )
}
export default forwardRef(User);