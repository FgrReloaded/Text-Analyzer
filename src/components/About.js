import React from 'react'

export default function About(props) {
    return (
        <>
            <div className="container my-4" style={props.myStyle} >
                <div className="row flex-column align-items-center">

                    <h1 className="text-center my-2">About Text Analyzer</h1>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <strong> Analyze Text Smartly</strong>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    This Text Analyzer will analyze your text very frequently and allow you many powerful and smart features to make use of.
                                    These Features Includes Of Following:
                                    <ul>
                                        <li>Word Counter-This Word Counter will count all the words as well as characters that is included in your text.</li>
                                        <li>Time Reader-This Feature will help you to know that how much time is required to read whole text included in the box. <br/> Note:It take average reading speed of people so its not respective for anyone or it will not be always true.</li>
                                        <li>Toggle Uppercase-This Feature will convert your whole text character in uppercase in single click.</li>
                                        <li>Toggle Lowercase-This Feature will convert your whole text character in lowercase in single click.</li>
                                        <li>Extra Space Remover-Using This Feature you can remove all the spaces that is useless in your text.</li>
                                        <li>Copy Text-You can copy your whole edited text in as single click.</li>
                                        <li>Night Mode-For better prespective view we have added a night mode so that will made easy for you to use this in night.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <strong>About Author</strong>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Author and Owner of this website is FgrReloaded who is an independent programmer and coder. FgrReloaded is a new web developer who always engaged in creating website and learning new techs.
                                    <br/>
                                    <p>If you are interested in communicating with FgrReloaded for business purpose then You can communicate him via email:-fgrbusiness@gmail.com</p>
                                    <p>If you are interested in collaborating with FgrReloaded then You can communicate him via this email:-fgrtogether@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <strong>Check out FgrReloaded Social Platform.</strong>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Github:-
                                    <br/>
                                    Stack overflow:-
                                    <br/>
                                    Youtube:-
                                    <br/>
                                    Feverr:-
                                    <br/>
                                    Upwork:-
                                    <br/>
                                    Facebook:-
                                    <br/>
                                    Linkedln:-
                                    <br/>
                                    Telegram Channel:-
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
