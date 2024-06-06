import React from "react";
import "./Sidebar.css"; 
import BarChartIcon from '@mui/icons-material/BarChart';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import InfoIcon from '@mui/icons-material/Info';
import pfp from "../Img/UNCHR.jpeg" 
//import pfp18 from "../Img/UNHCR.jpeg"; 
import pfp0 from "../Img/Barry.jpeg";
import pfp2 from "../Img/UNICEF.png";
import pfp3 from "../Img/Michelle.jpeg";
import pfp4 from "../Img/Obama.png";
import pfp5 from "../Img/Internet_Society.png";
import pfp6 from "../Img/ACLU.png";
import pfp7 from "../Img/BLM.png";
import pfp8 from "../Img/UnitedSikhs.jpeg";
import pfp9 from "../Img/ICJ.jpeg";
import pfp10 from "../Img/AfricanU.png";
import pfp11 from "../Img/UN.png";
import pfp12 from "../Img/ICC.png";
import pfp13 from "../Img/EU.png";
import pfp14 from "../Img/Accessnow.png";
import pfp15 from "../Img/IGF.jpeg";
import pfp16 from "../Img/PI.png";
import pfp17 from "../Img/Greta.jpeg"
import pfp18 from "../Img/Malala.jpeg"
import pfp19 from "../Img/RickH.jpeg"
import pfp20 from "../Img/AL.png"
import pfp21 from "../Img/Antonio.jpeg"
import pfp22 from "../Img/CC.jpeg"
import pfp23 from "../Img/HRW.png"
import pfp24 from "../Img/AI.jpeg"
import pfp25 from "../Img/NAACP.png"
import pfp26 from "../Img/TAP.png" 
import pfp27 from "../Img/John.jpeg"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList"> 

                    <li className="sidebarListItem">
                        <BarChartIcon className="sidebarIcon"/>
                        <span className="sidbarListItemText"> Outreach</span>
                    </li>
                    <li className="sidebarListItem">
                        <ThumbUpIcon className="sidebarIcon"/>
                        <span className="sidbarListItemText"> Likes</span>
                    </li>
                    <li className="sidebarListItem">
                        <RssFeedIcon className="sidebarIcon"/>
                        <span className="sidbarListItemText"> Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupsIcon className="sidebarIcon"/>
                        <span className="sidbarListItemText"> Groups</span>
                    </li>
                
                    <li className="sidebarListItem">
                        <BookmarkIcon className="sidebarIcon"/>
                        <span className="sidbarListItemText"> Bookmarks</span>
                    </li>
                   
                    <li className="sidebarListItem">
                        <PlayCircleIcon className="sidebarIcon"/>
                        <span className="sidbarListItemText"> Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <InfoIcon className="sidebarIcon"/>
                        <span className="sidbarListItemText"> About us </span>
                    </li>

                    <button className="sidebarButton">More...</button>

                    <hr className="sidebarHr"/>

                    <h2 className="Following"> Friends </h2>

                     <ul className="sidebarFriendList">
                        <li className="sidebarFriend">
                            <img className = "sidebarFriendImg" src={pfp} alt="" />
                            <span className="sidebarFriendName">UNHCR</span>
                        </li>
                        <li className="sidebarFriend">
                            <img className = "sidebarFriendImg" src={pfp0} alt="" />
                            <span className="sidebarFriendName">Barack Obama</span>
                        </li>
                        <li className="sidebarFriend">
                            <img className = "sidebarFriendImg" src={pfp2} alt="" />
                            <span className="sidebarFriendName">UNICEF </span>
                        </li>
                        <li className="sidebarFriend">
                            <img className = "sidebarFriendImg" src={pfp3} alt="" />
                            <span className="sidebarFriendName">Michelle Obama</span>
                        </li>
                        <li className="sidebarFriend">
                            <img className = "sidebarFriendImg" src={pfp4} alt="" />
                            <span className="sidebarFriendName">Obama Foundation</span>
                        </li>
                        <li className="sidebarFriend">
                            <img className = "sidebarFriendImg" src={pfp5} alt="" />
                            <span className="sidebarFriendName">Internet Society </span>
                        </li>
                        <li className="sidebarFriend">
                            <img className = "sidebarFriendImg" src={pfp6}alt="" />
                            <span className="sidebarFriendName">ACLU</span>
                        </li>
                        <li className="sidebarFriend">
                            <img className = "sidebarFriendImg" src={pfp7}alt="" />
                            <span className="sidebarFriendName">BLM</span>
                        </li>
                        <li className="sidebarFriend">
                            <img className = "sidebarFriendImg" src={pfp8}alt="" />
                            <span className="sidebarFriendName">United Sikhs</span>
                        </li>
                        <li className="sidebarFriend">
                            <img className = "sidebarFriendImg" src={pfp9} alt="" />
                            <span className="sidebarFriendName">International Court of Justice</span>
                        </li>
                        <li className="sidebarFriend">
                            <img className = "sidebarFriendImg" src={pfp10} alt="" />
                            <span className="sidebarFriendName">African Union</span>
                        </li>
                        <li className="sidebarFriend">
                            <img className = "sidebarFriendImg" src={pfp11}alt="" />
                            <span className="sidebarFriendName">United Nations </span>
                        </li>
                        <li className="sidebarFriend">
                            <img className = "sidebarFriendImg" src={pfp12} alt="" />
                            <span className="sidebarFriendName">International Criminal Court</span>
                        </li>
                        <li className="sidebarFriend">
                            <img className = "sidebarFriendImg" src={pfp13} alt="" />
                            <span className="sidebarFriendName">European Union</span>
                        </li>
                        <li className="sidebarFriend">
                            <img className = "sidebarFriendImg" src={pfp14} alt="" />
                            <span className="sidebarFriendName">Access Now</span>
                        </li>
                        <li className="sidebarFriend">
                            <img className = "sidebarFriendImg" src={pfp15}alt="" />
                            <span className="sidebarFriendName">Internet Governence Forum</span>
                        </li>
                        <li className="sidebarFriend">
                            <img className = "sidebarFriendImg" src={pfp16} alt="" />
                            <span className="sidebarFriendName">Privacy International</span>
                        </li>
                        
                    </ul> 
                </ul>

                <div className="friendsContainer">
                    <span className="rightTop2">
                        <b><u>suggested Follows</u></b>
                    </span>

                    <span className="suggestedFriends">
                        <ul>
                            <li className="sidebarFriend">
                                <img className = "sidebarFriendImg" src={pfp17} alt="" />
                                <span className="sidebarFriendName">Greta Thurnberg</span>
                            </li>
                            <li className="sidebarFriend">
                                <img className = "sidebarFriendImg" src={pfp18} alt="" />
                                <span className="sidebarFriendName"> Malala Yousafzai </span>
                            </li>
                            <li className="sidebarFriend">
                                <img className = "sidebarFriendImg" src={pfp19} alt="" />
                                <span className="sidebarFriendName"> Rick Hansen</span>
                            </li>
                            <li className="sidebarFriend">
                                <img className = "sidebarFriendImg" src={pfp20} alt="" />
                                <span className="sidebarFriendName"> Al Jazheera </span>
                            </li>
                            <li className="sidebarFriend">
                                <img className = "sidebarFriendImg" src={pfp21} alt="" />
                                <span className="sidebarFriendName">Antonio Gueterres </span>
                            </li>
                            <li className="sidebarFriend">
                                <img className = "sidebarFriendImg" src={pfp22} alt="" />
                                <span className="sidebarFriendName">Catholic Charities</span>
                            </li>
                            <li className="sidebarFriend">
                                <img className = "sidebarFriendImg" src={pfp23} alt="" />
                                <span className="sidebarFriendName">Human Rights Watch</span>
                            </li>
                            <li className="sidebarFriend">
                                <img className = "sidebarFriendImg" src={pfp24} alt="" />
                                <span className="sidebarFriendName">Amnesty International</span>
                            </li>
                            <li className="sidebarFriend">
                                <img className = "sidebarFriendImg" src={pfp25} alt="" />
                                <span className="sidebarFriendName">NAACP</span>
                            </li>
                            <li className="sidebarFriend">
                                <img className = "sidebarFriendImg" src={pfp26} alt="" />
                                <span className="sidebarFriendName">The Advocacy Project </span>
                            </li>
                            <li className="sidebarFriend">
                                <img className = "sidebarFriendImg" src={pfp27} alt="" />
                                <span className="sidebarFriendName">John Lewis </span>
                            </li>
                           
                        </ul>
                    </span>
                </div>
                
            </div>
        </div>
    )
}
