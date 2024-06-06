import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatIcon from '@mui/icons-material/Chat';
import image2 from '../Img/profilepic.JPG';

export default function Topbar(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">RIGHTS WATCH </span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchIcon className="searchIcon"/>
                    <input placeholder= "Search for Friends, Profiles,or Human Right topics" className="searchInput"/>
                </div>

            </div>

            {/**links to other components: Homepage, Newsfeed,  */}
            <div className="topbarRight"> 
                <div className="topbarLinks"> 
                    <span className="topbarLink"> <a href="/homepage"> Explore</a>  </span>
                    <span className="topbarLink"> <a href="/userpage"> Userpage</a>  </span>

                </div>

                <div className="topbarIcons">
                    <button className="IconButton"> 
                        <div className="topbarIconItem">
                            <PersonIcon/>
                            <span className="topbarIconBadge">2 </span>
                        </div>
                    </button>
                    
                </div>

                <div className="topbarIcons">
                    <button className="IconButton">
                        <div className="topbarIconItem">
                            <NotificationsActiveIcon/>
                            <span className="topbarIconBadge">15</span>
                        </div>
                    </button>
                    
                </div>
                
                <div className="topbarIcons">
                    <button className="IconButton">
                        <div className="topbarIconItem">
                            <ChatIcon/>
                            <span className="topbarIconBadge">75 </span>
                        </div>
                    </button>
                    
               
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <a href="/profilepage">
                            <img src= {image2} alt="" className="topbarImg" />
                        </a>
                    </div>
                </div>
                {/**Imge for a profile picture outsourced from the Img folder  */}
                {/* <img src="/Images/cryinngJordan.jpeg" alt="PFP" className="topbarImg" /> */}
            </div>
            
        </div>
    )
}