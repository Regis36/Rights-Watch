import Post from "../Post/Post"; 
import Share from "../Share/Share"
import Post2 from "../Post/Post2";

import "./Newsfeed.css"

export default function Newsfeed() {
    return (
        <div className="newsfeed">
            <div className="newfeedWrapper">
                <Share/>
                <Post/>
                <Post2/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                
                
            </div>
        </div>
    )
}