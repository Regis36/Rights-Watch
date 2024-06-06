import React from "react"
import { useState, useEffect } from "react"; 
import "./Search.css"
import SearchForm from "./Searchform";
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
const Search =() =>{
    const [articles, setArticles] = useState([])
    const [term, setTerm] = useState('human rights')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=bmPixIZJg4FQwtJjPvsj5sA36ovSg20V`
        const fetchArticles = async () => {
            try{
                    const res = await fetch(url)
                    const articles = await res.json()
                    console.log(articles.response.doc)
                    setArticles(articles.response.docs)
                    setIsLoading(false)
                }
            
            catch(error){
                console.error(error)
            }
        }

        fetchArticles()
    }, [term])

    return(
        <>
            <h2 className="text-center text-3xl"> Latest <span className="badge bg-danger">News</span> </h2>
            <div className="showCase">
                <div className="overlay pc-5">
                    <h1 className="text-4xl font-bold text-white text-center mb-4 lg:text-6xl">
                         Viewing Articles about {term}
                    </h1>
                    <SearchForm SearchText= {(text) => setTerm(text)} 
                    />
                </div>
            </div>

            {isLoading ? (<h1 className="text-center mt-20 font-bold text-6xl">Loading...</h1>) :( 
                <section className="grid grid-cols-1 gap-10 px-5 pt-10 pb-20">
                    {articles?.map((article) => {
                        const {abstract, headline:{main}, byline:{original}, 
                        lead_paragraph, news_desk, section_name, 
                        web_url, id, word_count } = article

                        return (
                            <article key={id} className="bg-white py-10 px-5 rounded-lg lg:w-10/12 lg:mx-auto">
                                <h2 className="font-bold text-2xl mb-2 lg:text-2xl">{main}</h2>
                                <p>{abstract}</p>
                                <p> {lead_paragraph}</p>

                                <ul className="my-4">
                                    <li>{original}</li>
                                    <li> <span className="font-bold">News Desk:</span>  {news_desk}</li>
                                    <li><span className="font-bold">Section: </span>{section_name}</li>
                                    <li><span className="font-bold">Word count:</span> {word_count}</li>
                                </ul>
                                <button >
                                    <a href={web_url} target = "_blank" className="underline" > 
                                        web Resource
                                    </a>
                                </button>
                                
                                
                                {/**Add a bar under for users to leave a like, comment, or share 
                                     * Make a engagement component that will use Mui icons for the engagement actions  
                                    */}
                                <hr></hr>
                                <section className="pt-4 pb-0 flex space-x-20 justify-center ">
                                    <FavoriteOutlinedIcon/>
                                   <ChatBubbleOutlineOutlinedIcon/> 
                                   <AutorenewOutlinedIcon/>
                                </section>
                            </article>
                        )
                    })}
                </section>
            )}
            
        </>
    )
}

export default Search 