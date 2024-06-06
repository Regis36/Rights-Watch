import React from "react";
import "./Userfeed.css"
import Bio from "../Bio/Bio";
import Interests from "../Interests/Interests";
import Post from "../Post/Post";

export default function Userfeed() {
    return(
        <div className="userfeed">
            <div className="userfeedWrapper">
                <u>Userfeed</u>
                {<Bio/>}
                <u>Interests</u> 
                {<Interests/>}
                <u>Posts</u>
                {<Post/>}

                {/*Userbar Component : to allow vistors to see the users posts, shared posts, and likes  */}
                   
            </div>
        </div>
    )
}
