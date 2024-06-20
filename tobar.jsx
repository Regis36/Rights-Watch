import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatIcon from '@mui/icons-material/Chat';
import image2 from '../Img/profilepic.JPG';

export default function Topbar(){
    return(
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="topbarContainer">
                    <a className="logo" href="/userpage">RightsWatch</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="searchbar">
                        <SearchIcon className="searchIcon"/>
                        <input placeholder= "Search for Friends, Profiles,or Human Right topics" className="searchInput"/>
                    </div>
                    
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link " aria-current="page" href="/homepage">Explore Page </a>
                            <a className="nav-link" href="/userpage">User Page</a>
                            <a className="nav-link" href="/Map">Map</a>
                            <a className="nav-link" href="/globe">Globe</a>
                        </div>
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
                </div>
            </nav>
        // <div className="topbarContainer">
        //     <div className="topbarLeft">
        //         <span className="logo">RIGHTS WATCH </span>
        //     </div>
        //     <div className="topbarCenter">
        //         <div className="searchbar">
        //             <SearchIcon className="searchIcon"/>
        //             <input placeholder= "Search for Friends, Profiles,or Human Right topics" className="searchInput"/>
        //         </div>

        //     </div>

        //     {/**links to other components: Homepage, Newsfeed,  */}
        //     <div className="topbarRight"> 
        //         <div className="topbarLinks"> 
        //             <span className="topbarLink"> <a href="/homepage"> Explore</a>  </span>
        //             <span className="topbarLink"> <a href="/userpage"> Userpage</a>  </span>

        //         </div>

       
        //         {/**Imge for a profile picture outsourced from the Img folder  */}
        //         {/* <img src="/Images/cryinngJordan.jpeg" alt="PFP" className="topbarImg" /> */}
        //     </div>
            
        // </div>
    )
}