import React from "react";
import Topbar from "../Topbar/tobar";
import "./Profile.css"; 
import Sidebar from "../Sidebar/Sidebar";
import Userfeed from "../Userfeed/Userfeed";
import Rightbar from "../Rightbar/Rightbar";

export default function Profile() {
    return (
        <div>
            <Topbar/>

            <div className="profileContainer">
                <Sidebar/>
                <Userfeed/>
                <Rightbar/>
            </div>
            

            {/* first we want to have a section for the users profile, pfp, bio, interests, and credentials */}
            {/* Next we want to have a separate section showing the viewer all of their posts  */}
            {/* Next we want to show the analytics (similar to Linked in) */}
        </div>
    )
}
