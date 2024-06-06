import React, {useState} from 'react'

const SearchForm = ({SearchText}) => {
    const [text, setText] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()

        SearchText(text)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder='e.g Palestine'
                className='py-1 px-2 rounded-l-lg'
                onChange={(e) => setText(e.target.value)} 
                />
                <button type='submit'
                className="py-1 px-2 rounded-r-lg text-white bg-blue-600 hover:bg-blue-200">Search</button>
            </form>
        </div>
    )
}
export default SearchForm 