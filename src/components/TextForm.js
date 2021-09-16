import React, {useState} from 'react'

export default function TextForm(props) {
    function changeUp() {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to Uppercase', 'success');
    }
    function changeDown() {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to Lowercase', 'success');
    }
    function clear() {
        let newText = ('');
        setText(newText)
    }
    function copy() {
        navigator.clipboard.writeText(text);
        props.showAlert('Text Copied', 'success');
    }
    function handleChange(event) {
        setText(event.target.value);
    }
    function extraSpaces(){
        let extraSpaces = text.split(/[ ]+/);
        setText(extraSpaces.join(" "))
    }
    const [text, setText] = useState("");
    let sum = 0.008 * text.split(/\s+/).filter((word)=>{return word.length!==0}).length
    return (
        <>
        <div className="container my-3">
            <h3 className='text-center text-success'>{props.heading}</h3>
            <div className="row flex-column">
                <div className="form-group">
                <textarea className="form-control" name="text" id="text_box" onChange={handleChange} placeholder='Enter Your Text' style={props.textStyle} value={text} rows="2"></textarea>
                <button disabled={text.length===0} className={`my-2 btn ${props.btn} float-right`} onClick={changeDown}  >Change Lowercase</button>
                <button disabled={text.length===0} className={`btn ${props.btn} m-2 float-right`} onClick={changeUp}  >Change To Uppercase</button>
                <button disabled={text.length===0} className={`btn ${props.newBtn} my-2`} onClick={clear} >Clear Text</button>
                <button disabled={text.length===0} className={`btn ${props.btn} m-2 float-right`} onClick={extraSpaces} >Remove Extra Spaces</button>
                <button disabled={text.length===0} className={`btn ${props.newBtn} m-2`} onClick={copy}  >Copy Text</button>
                </div>
                <div className="box" style={props.newStyle} >
                    <p>{text.split(/\s+/).filter((word)=>{return word.length!==0}).length} Words and {text.length} Characters.</p>
                    <p> <strong>{sum}</strong> Minutes or <b>{60 * sum}</b> Seconds To Read This.</p>
                </div>
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h4>Preview of your text</h4>
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p onChange={handleChange} style={props.preview} >{text.length>0?text:'Nothing To Preview'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
        </div>
        </>
    )
}