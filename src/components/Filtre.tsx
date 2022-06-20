
import React, { useEffect, useState } from "react";
import { getEvents } from "../api/evt";
import { Event } from "../api/types";
import ItemEvent from "./ItemEvent";

function Filtre() {

    // const [datas, setDatas] = useState([])

    // async function _getData() {
    //     const data = await _getData();
    //     setDatas(data);
    // }

    // useEffect(() => {
    //     fetch("http://localhost:3004/event")
    //         .then((response) => response.json)
    //         .then((json) => setDatas(json));
    // }, []);
    const fruit = {
        "event": [{
            "id": 1,
            "name": "name 1",
            "description": "desc 1",
            "adress": "adresse du premier"
        },
        {
            "id": 2,
            "name": "Name 2",
            "description": "desc 2",
            "adress": "adresse du deuxieme"
        }]
    };

    // const result = words.filter(word => word.length > 6);

    const [filter, setFilter] = useState('');

    return (
        <div className="Filtre">
            <p>
                Type to filter the list:
                <input id="filter"

                    value={filter}
                    onChange={event => setFilter(event.target.value)}
                />
            </p>
            <ul>
                {fruit.filter(f => f.includes(filter) || filter === '')
                    .map(f => <li key={f}>{f}</li>)}
            </ul>
        </div>
    );
}

export default Filtre;