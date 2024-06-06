import "./Share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import PlaceIcon from "@mui/icons-material/Place";
import image2 from "../Img/profilepic.JPG";

//import {PermMediaIcon, PlaceIcon, RepeatIcon, EmojiEmotionsIcon  } from "@mui/icons-materal"

export default function Share(){
    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={image2} alt="" className="shareImg" />
                    <input placeholder= "Whats on your mind Regis? " className="shareInput"/>
                </div>
                <hr className="shareHr" />
                <div className="">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon className="shareIcon"/>
                            <span className="shareOptionText">Picture or Video </span>
                        </div>
                        <div className="shareOption">
                            <PlaceIcon className="shareIcon"/>
                            <span className="shareOptionText">Location </span>
                        </div>
                        
                    </div>
                    <button className="postButton">
                        Share
                    </button>
                </div>

            </div>
        </div>
    )
}