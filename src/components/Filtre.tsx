import axios from "axios";
import { any, props } from "cypress/types/bluebird";
import { data } from "cypress/types/jquery";
import React, { useEffect, useState } from "react";
import { getEvents } from "../api/evt";
// import Event from "./ItemEvent";
// import ItemEvent from "./ItemEvent";
import { Event } from "../api/types"

function Filtre() {

    const [data, setData] = useState<Array<Event>>([])
    const [value, setValue] = useState("");

    useEffect(() => {
        loadEventData();
    }, []);

    const loadEventData = async () => {
        return await axios
            .get("http://localhost:3004/event")
            .then((response) => setData(response.data))
            .catch((err) => console.log(err));
    }

    console.log("Data", data);

    const handleSearch = async (e: any) => {
        e.preventDefault();
        return await axios.get(`http://localhost:3004/event?q=${value}`)
            .then((response) => {
                setData(response.data);
                setValue("");
            })
            .catch((err) => console.log(err));

    };

    return (
        <section>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Chercher un évènement"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit"> Rechercher </button>

            </form>

            <h1>Mes évènements</h1>
            {data.length === 0 ? (
                <div>
                    <div> Aucun évènement trouvé... </div>
                </div>
            ) : (data.map((item, id) =>
                <div key={id}>
                    <div>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                        <div>{item.description}</div>
                        <div>{item.adress}</div>
                    </div>

                </div>
            )
            )}
        </section>
    )
}

export default Filtre;