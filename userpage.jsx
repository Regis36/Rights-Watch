import React from "react";
import "./userpage.css"; 
// import Topbar from "../Topbar/tobar";
import Sidebar from "../Sidebar/Sidebar";
import Newsfeed from "../Newsfeed/Newsfeed";
import Rightbar from "../Rightbar/Rightbar";
import { Box } from "@mui/material";
// import NavBar from "../Navbar/navbar";
import Topbar from "../Topbar/tobar";
/** This is the page the user will see once they are logged into their accounts
 * the page will resemble something like what is shown on Linkedin once logged on 
 * This is where they will see the newsfeed (Central-newsfeed.jsx)
 * metadata about their posts and their friends activity status  (Left - sidebar.jsx)
 * Recent updates on topics of their interest (Right - Rightbar.jsx)
 */

export default function Userpage() {
    return (
        <div>
            <Box>
                <Topbar/>
            </Box>
            
            <div className="homeContainer">
                <Sidebar/>
                <Newsfeed/>
                <Rightbar/>
            </div>
            
        </div>
    )
}
