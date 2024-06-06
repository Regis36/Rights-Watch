import { MoreVert } from "@mui/icons-material";
import "./Post.css"; 
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

export default function Post2(){
    return (
        <div className = "post">
            <div className="postWrappers">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src='../Img/hueyFreeman.jpeg' alt="" className="postProfileImg" />
                        <span className="postUsername">Huey Freeman</span>
                        <span className="postDate"> 6 hours ago </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">FREE, FREE, PALESTINE!! FROM THE RIVER TO THE SEA!!! </span>
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