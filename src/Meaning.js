import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css"

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <div className="definition">Definition: {definition.definition}</div>
                        <br />
                        <div className="example">Example: {definition.example}</div>
                        <br />
                        <div>
                        <Synonyms synonyms={definition.synonyms} />
                    </div>
                    </div>
    );
})}
        </div >

    );
}