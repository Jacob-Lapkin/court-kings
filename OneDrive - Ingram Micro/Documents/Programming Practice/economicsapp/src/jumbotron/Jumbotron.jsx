import './Jumbotron.css'
import React from 'react'
import {useState} from 'react'

function Jumbotron(props) {
    let [term, setTerm] = useState('')
    function settingTerm(e) {
        setTerm(e.target.value)
        props.onChange(term)
    }

    return (
        <>
        <div className='jumbo-container'>
            <div class='title-div'>
            <p>Economics learning with a touch of fun</p>
            </div>
            <div className='search-container'>
                <input onChange={settingTerm} placeholder='Search subject' className='search-widget'/>
            </div>
        </div>
        </>
    )
}

export default Jumbotron