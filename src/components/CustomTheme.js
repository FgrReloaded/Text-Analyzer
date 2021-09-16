import React from 'react'

function CustomTheme(props) {
    return (
        <div className="container-fluid color-theme">
        <h5 style={props.Color} >Body Custom Theme</h5>
            <div className="row">
                <div className="col-2 bg-light mx-2 text-center" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleLight}>Normal Mode</div>
                <div className="col-1 bg-dark" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleDark}></div>
                <div className="col-1 bg-success" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleSuccess}></div>
                <div className="col-1 bg-primary" type="checkbox" id="flexSwitchCheckDefault" onClick={props.togglePrimary}></div>
                <div className="col-1 bg-danger" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleDanger}></div>
                <div className="col-1 bg-info" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleInfo}></div>
                <div className="col-1 bg-warning" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleWarning}></div>
            </div>
        </div>
    )
}

export default CustomTheme
