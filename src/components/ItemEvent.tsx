import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Event } from "../api/types";

const ItemEvent = (props: Event) => {
    return (
        <Link to={"/event/${props.id}"} key={`key-${props.id}`}>
            <div className="card"></div>
            <div className="media-content">
                <p className="title is-4 post-title">{props.name}</p>
            </div>
            <div className="content post-content">{props.description}</div>
            <div className="content post-content">{props.adress}</div>
        </Link>
    );
};

export default ItemEvent;
