import "./Rightbar.css"

import {useEffect, useState} from "react"
import TopStory from "../News/Topstory"
 

let url=`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=plarCFKGwZheRNy7PcOM3doogBEiEDgg`

export default function Rightbar() {
    const [stories,setStories ] = useState([]); 

    useEffect(()=>{
        const fetchStories = async () => { 
            try{
                const res = await fetch(url)
                const stories = await res.json()
                console.log(stories.response)
                setStories(stories.results)
            }
            catch(error){
                console.error(error)
            }
        }
        fetchStories()
    } , [])

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="trendingContainer">
                    <span className="rightTop">
                        <b><u>Trending Rights Watch News </u></b>
                    </span>

                    <span className="articleList">
                        {/**api to NYT Top stories */}
                        {stories?.map((story,index) => {
                            const {abstract, title, byline, url} = story

                            return(
                                // <article key ={index}>
                                //     <h5>{title}</h5>
                                //     <h6>{byline}</h6>
                                //     <p>{abstract}</p>
                                //     <a href={url} target = "_blank"> Read More</a>
                                // </article>
                                <TopStory 
                                    key= {index}
                                    title= {story.title}
                                    description = {story.abstract}
                                    author= {story.byline}
                                    url = {story.url}
                                />
                                
                            )
                        })}

                    </span>


                    <button className="moreButton">Show More </button>  <br />
                </div>

                <hr className="rightbarHr"/>

                
            </div>
        </div>
    )
} 