{/** These NYT top stories will be placed in an accordian style layout 
    This way it would be easier to see all of them in one place
*/}

const TopStory = ({title, description, author, url}) =>{
    return (
        <>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <h5> {title.slice(0,50)} </h5>
                        {/* <p>{author}</p> */}
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>{description?description.slice(0,90):"Read the full article to find out more"}</p>
                            <a href={url} className ="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default TopStory