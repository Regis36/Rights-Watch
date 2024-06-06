import { MoreVert } from "@mui/icons-material";
import "./Post.css"; 
import image2 from "../Img/profilepic.JPG";
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

export default function Post(){
    return (
        <div className = "post">
            <div className="postWrappers">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={image2} alt="" className="postProfileImg" />
                        <span className="postUsername">Regis Enama</span>
                        <span className="postDate"> 5 hours ago </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hi Everyone, Wondering if anyone here has heard any recent updates on the Ukraine conflict? I'm looking online and a lot of the facts are either biased or dont fully explain the topic in easy to understand language </span>
                    <img src="Images/Ukraine.jpeg" alt="" className="PostImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft"> 
                        <span className="pt-4 pb-0 flex space-x-20 justify-center items-center">
                            <FavoriteOutlinedIcon/> 10
                            <ChatBubbleOutlineOutlinedIcon/> 20
                            <AutorenewOutlinedIcon/> 5
                        </span>
                    </div>

                    
                </div>

            </div>
        </div>
    )
}