import React from 'react'

// props.children vient <MessageBox>{error}</MessageBox>
function MessageBox(props) {
    return (
        <div className={`alert alert-${props.variant ||  'info'}`}>
            {props.children}
        </div>
    )
}

export default MessageBox
