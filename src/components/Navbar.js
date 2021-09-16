import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id='navbar'>
        <Link className={`navbar-brand text-${props.mode==='danger'?'light':'primary' } text-${props.mode==='success'?'light':'primary'} text-${props.mode==='primary'?'light':'primary'} `} to="/">{document.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className={`nav-link text-${props.mode==='danger'?'info':'danger'}`} to="/" >Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode==='danger'?'info':'danger'}`} to="/about" >About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
      )
}
