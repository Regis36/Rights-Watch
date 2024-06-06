import React from "react";
import "./Bio.css"
import image2 from "../Img/profilepic.JPG";
import Interests from "../Interests/Interests";

export default function Bio() {
    return(
        <div className="bioContainer">
            <div className="profileTitle">
                <img src={image2} alt="" className="profilePic"/> 
                <h3>Regis Enama </h3> 
                <br /><br />
            </div>

            <hr />
            
            <div className="about">
                <div className= "description"> 
                

                    <ul>
                        <li>BA in Computer Science from CUNY Hunter College </li>
                        <li>Human Right Advocate </li>
                        <li>Focus on Human Rights law as it pretains to the internet</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}