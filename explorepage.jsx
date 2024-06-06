import React from "react";
//import animate from "../Globe/globe";
import Topbar from "../Topbar/tobar"
//import Globe from "../Globe/globe";
import Globe from "../Globe/globe2";
import "./explorepage.css" ; 
import VectorMap from "../Map/map"; 
import NavBar from "../News/Navbar";
import NewsBoard from "../News/Newboard";
import NewsBoard_2 from "../News/Newsboard_2";
import Search from "../News/Search";
import { useState } from "react"; 


export default function  Homepage () {
    
    const [category,setCategory] = useState("world"); //initialize the state to display the general news

    return(
        <>
        <div className = "topbar">
            {<Topbar/>}
        </div>
        
        
       
        <div className="body">
            {<Search/>}
            {/* < NewsBoard_2 category={category}/>  */}
            {/* <NewsBoard category= {category}/> */}
            {/* <h1># OF TREATY RATIFICATIONS</h1>
            {<VectorMap/>} */}
            {/* {<ChoroplethGlobe data={data}/>} */}
        </div>
        
        </>

    )
}; 

 
