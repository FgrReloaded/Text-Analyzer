import React from 'react'

function Alert(props) {
    const capitalize =(word)=>{
        let lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
        <div className="container-fluid h-2">{
       props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible my-2 fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        </div>}
        </div>
    )
}

export default Alert
