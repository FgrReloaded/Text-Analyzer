import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import CustomTheme from './components/CustomTheme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }
  const [Mode, setMode] = useState('light')
  const [newStyle, setNewStyle] = useState({ color: '#212529' })
  const [redColor, setRedColor] = useState({ color: '212529' })
  const [btnOutline, setBtnOutline] = useState('btn-success')
  const [btnDanger, setBtnDanger] = useState('btn-danger')
  const [textStyle, setTextStyle] = useState({ background: 'white', color: '#212529' })
  const [color, setColor] = useState(null)
  const [changeStyle, setChangeStyle] = useState({ color: '#212529' })
  const toggleDark = () => {
    if (Mode !== 'dark') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      setNewStyle({ color: '#28a745' })
      setRedColor({ color: '#dc3545' })
      setBtnOutline('btn-outline-success')
      setBtnDanger('btn-outline-danger')
      setTextStyle({ background: 'none', color: 'white' })
      showAlert('Dark Mode Enabled', 'success')
      setChangeStyle({ color: '#28a745' })
      setColor({color:'#28a745'})
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setNewStyle({ color: '#212529' })
      setRedColor({ color: '#212529' })
      setBtnDanger('btn-danger')
      setBtnOutline('btn-success')
      setTextStyle({ background: 'white', color: '#212529' })
      showAlert('Light Mode Enabled', 'success')
      setColor(null)
    }
  }
 
  const toggleLight = () => {
    if (Mode !== 'light') {
     
    }
  }
  const toggleDanger = () => {
    if (Mode !== 'danger') {
      setMode('danger')
      document.body.style.backgroundColor = '#cc4350'
      setNewStyle({ color: '#212529' })
      setRedColor({ color: '#212529' })
      setBtnDanger('btn-outline-light')
      setBtnOutline('btn-outline-dark')
      setTextStyle({ background: 'white', color: '#212529' })
      showAlert('Blood Mode Enabled', 'success')
      setColor({ color: 'white' });
    }
  }
  const toggleInfo = () => {
    if (Mode !== 'info') {
      setMode('info')
      document.body.style.backgroundColor = '#2196f3'
      setNewStyle({ color: '#212529' })
      setRedColor({ color: '#212529' })
      setBtnDanger('btn-outline-dark')
      setBtnOutline('btn-outline-light')
      setTextStyle({ background: 'white', color: '#212529' })
      showAlert('Blood Mode Enabled', 'success')
      setChangeStyle({ color: 'white' })
    }
  }
  const toggleSuccess = () => {
    if (Mode !== 'success') {
      setMode('success')
      document.body.style.backgroundColor = '#80b380'
      setNewStyle({ color: '#212529' })
      setRedColor({ color: '#212529' })
      setBtnDanger('btn-outline-dark')
      setBtnOutline('btn-outline-primary')
      setTextStyle({ background: 'white', color: '#212529' })
      showAlert('Blood Mode Enabled', 'success')
      setColor(null)
    }
  }
  const toggleWarning = () => {
    if (Mode !== 'warning') {
      setMode('warning')
      document.body.style.backgroundColor = '#e5b832'
      setNewStyle({ color: '#212529' })
      setRedColor({ color: '#212529' })
      setBtnDanger('btn-outline-danger')
      setBtnOutline('btn-outline-success')
      setTextStyle({ background: 'white', color: '#212529' })
      showAlert('Blood Mode Enabled', 'success')
    }
  }
  return (
    <>
      <Router>
      <Navbar mode={Mode} />
      <CustomTheme Color={color} toggleWarning={toggleWarning} toggleDark={toggleDark} togglePrimary={togglePrimary} toggleSuccess={toggleSuccess} toggleLight={toggleLight} toggleDanger={toggleDanger} toggleInfo={toggleInfo} />
      <Alert alert={alert} />

            <Switch>
              <Route exact path="/">
                <TextForm heading="Text Analyzer -Word Counter | Convert Uppercase to Lowercase and Lowercase to Uppercase" newStyle={newStyle} textStyle={textStyle} preview={redColor} btn={btnOutline} newBtn={btnDanger} showAlert={showAlert} />
              </Route>
              <Route exact path="/about" >
                <About myStyle={changeStyle} />
              </Route>
            </Switch>
      </Router>
    </>
  );
}
export default App;
