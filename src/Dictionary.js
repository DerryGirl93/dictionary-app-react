import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css"

export default function Dictionary(){
    let [keyword, setKeyword] = useState(null);


    function search(event){
        event.preventDefault();

        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`
        axios.get(apiUrl).then(handleResponse)
    }

    function handleResponse(response){
        console.log(response.data[0]);

    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);

    }
    return(
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} autoFocus={true} placeholder="Search for a Word"/>
            <button>Search</button>
        </form>
         
    </div>
    );
}