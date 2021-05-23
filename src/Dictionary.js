import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
    let [keyword, setKeyword] = useState(null);
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);


    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`
        axios.get(apiUrl).then(handleResponse)

        let pexelsApiKey = "563492ad6f9170000100000194fe90ce4fe043a68a1d53df85ce3789"
        let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse)
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);

    }


    function handleResponse(response) {
        setResults(response.data[0]);

    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);

    }
    return (
        <div className="Dictionary">
            <section>
                <form onSubmit={search}>
                    <input type="search" onChange={handleKeywordChange} autoFocus={true} placeholder="Search for a Word" id="search" />
                    <button type="submit">Search</button>
                </form>
            </section>

            <Results results={results} />
            <Photos photos={photos} />

        </div>
    );
}