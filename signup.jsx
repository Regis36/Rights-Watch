import React from 'react' ; 
import "./signup.css";

function Signup () { 
    return (
        <div className='Register'>
            
            
            <div className='RegisterBox'>
            <div className='Title'><h1>RIGHTS WATCH</h1></div>
                <div className='Register-Top'>
                    <div className='Signup-title'>
                        <h3> Sign Up</h3>
                        
                    </div>
                </div>

                <div className='Register-Bottom'>
                    <div className='RegisterForm'>
                        <form>

                            <label for="fname"> 
                            <input className='Register-input'type="text" placeholder='First Name' />
                            </label>

                            <label for="lname"> 
                            <input className='Register-input' type="text" placeholder='Last Name'/>
                            </label>

                            <br/> 

                            <label for="email"> 
                            <input className='Register-input'type="text" placeholder='Email'/> 
                            </label>

                            <br/>

                            <label for = "picturePath"> Enter a picture:
                            <input className='image' id="image" type="file" accept = "image/*"/>
                            <input type="submit" />
                            </label>

                            <br />
                            <br />

                            <label for="username"> 
                            <input className='Register-input' type="text"  placeholder='Username'/>
                            </label>
                            
                            <br />

                            <label for="password">
                            <input className='Register-input' type="password"  placeholder='Password'/>
                            </label>

                            <label for="password" >
                            <input className='Register-input' type="password" placeholder='Re-enter password'/>
                            </label>

                            <br/> <br />
                            <label for="Birthday"> Birthday: </label>
                                <select className='Register-input' name= "Month" id ="Month" >  
                                    <option value= "January"> January</option>
                                    <option> February </option>
                                    <option> March </option>
                                    <option> April </option>
                                    <option> May </option>
                                    <option> June </option>
                                    <option> July </option>
                                    <option> August </option>
                                    <option> September </option>
                                    <option> October </option>
                                    <option> November </option>
                                    <option> December </option>
                                </select>
                                <select className='Register-input' name = "Day" id= "Day" >
                                    <option value="one"> 1</option>
                                    <option value="two"> 2</option>
                                    <option value="three">3</option>
                                    <option value="four">4</option>
                                    <option value="five">5</option>
                                    <option value="six">6</option>
                                    <option value="seven">7</option>
                                    <option value="eight">8</option>
                                    <option value="nine">9</option>
                                    <option value="ten">10</option>
                                    <option value="eleven">11</option>
                                    <option value="twelve">12</option>
                                    <option value="thirteen">13</option>
                                    <option value="fourteen">14</option>
                                    <option value="fifteen">15</option>
                                    <option value="sixteen">16</option>
                                    <option value="seventeen">17</option>
                                    <option value="eighteen">18</option>
                                    <option value="nineteen">19</option>
                                    <option value="twenty">20</option>
                                    <option value="twentyone">21</option>
                                    <option value="twentytwo">22</option>
                                    <option value="twentythree">23</option>
                                    <option value="twentyfour">24</option>
                                    <option value="twentyfive">25</option>
                                    <option value="twentysix">26</option>
                                    <option value="twentyseven">27</option>
                                    <option value="twentyeight">28</option>
                                    <option value="twentynine">29</option>
                                    <option value="thirty">30</option>
                                    <option value="thirtyone">31</option>
                                    

                                </select>
                                <input className='Register-input' type="text"  placeholder='Year'/>
                            
                            <br />
                            <br/>
                            <div className='Gender'>
                                <span className='Gender'> Gender: </span>
                                <label class= "radio">
                                    <input type="radio" name="Answer"/> Male
                                    <input type="radio" name= "Answer"/> Female
                                </label>
                            </div>
                            <br/>
                             
                                <span className='Interests '><u><b>Interests:</b></u> </span>
                                    <br />
                                <div className='Interests-checklist'>
                                    <label class="radio">
                                        <input type="checkbox" /> Arms
                                        <span class="radio"></span>
                                    </label>

                                    <label class="radio">
                                        <input type="checkbox"/> Crisis and Conflict
                                        <span class="radio"></span>
                                    </label>

                                    <label class="container">
                                        <input type="checkbox"/>Disability Rights
                                        <span class="radio"></span>
                                    </label>
                                    <br />
                                    <label class="container">
                                        <input type="checkbox" />Women Rights
                                        <span class="radio"></span>
                                    </label>

                                    <label class="container">
                                        <input type="checkbox"/> Children Rights 
                                        <span class="radio"></span>
                                    </label>
                                    <label class="container">
                                        <input type="checkbox"/>Economic Justice and Rights  
                                        <span class="radio"></span>
                                    </label>
                                    <br />
                                    <label class="container">
                                        <input type="checkbox" /> Environment and Human Rights 
                                        <span class="radio"></span>
                                    </label>

                                    <label class="container">
                                        <input type="checkbox"/> Free Speech 
                                        <span class="radio"></span>
                                    </label>

                                    <label class="container"> 
                                        <input type="checkbox"/> Health 
                                        <span class="radio"></span>
                                    </label>
                                    <label class="container">
                                        <input type="checkbox" /> LGBT Rights 
                                        <span class="radio"></span>
                                    </label>

                                    <label class="container">
                                        <input type="checkbox"/> Refugees and Migrants  
                                        <span class="radio"></span>
                                    </label>

                                    <label class="container"> 
                                        <input type="checkbox"/> Rights of Older People 
                                        <span class="radio"></span>
                                    </label>

                                    <label class="container"> 
                                        <input type="checkbox"/> United Nations
                                        <span class="radio"></span>
                                    </label>

                                    <label class="container"> 
                                        <input type="checkbox"/> International Justice 
                                        <span class="radio"></span>
                                    </label>

                                    <label class="container"> 
                                        <input type="checkbox"/> Technology and Rights 
                                        <span class="radio"></span>
                                    </label>

                                    <label class="container"> 
                                        <input type="checkbox"/> Terrorism / Counterterrorism 
                                        <span class="radio"></span>
                                    </label>

                                    <label class="container"> 
                                        <input type="checkbox"/> Torture
                                        <span class="radio"></span>
                                    </label>

                                    <label class="container"> 
                                        <input type="checkbox"/> United Nations
                                        <span class="radio"></span>
                                    </label>
                                </div>

                        </form>
                    </div>

                    <button className='SignupButtons' 
                    > 
                        Sign Up
                    </button>
                </div>
            </div>

            


            {/* include username, password, reneter password, birthday (scroll down) , Gender (radio button), and interests  */}

            
        </div>
        
    ) 
}

export default Signup; 