import React, { useEffect, useState } from "react";
import { getEvents } from "../api/evt";
import { Event } from "../api/types";
import ItemEvent from "./ItemEvent";

const ListEvent = () => {
  const [events, setEvents] = useState<Array<Event>>([]);
  const [loading, setLoading] = useState(false);

  async function _getEvents() {
    const data = await getEvents();
    setEvents(data);
  }
  useEffect(() => {
    _getEvents();
  }, []);

  function renderItem(values: Event) {
    return (
      <div key={values.id}>
        <ItemEvent {...values} />
      </div>
    );
  }

  if (loading) {
    return (
      <section className="hero">
        <div className="hero-body">
          <p className="title">Loading ...</p>
        </div>
      </section>
    );
  }

  if (events.length === 0) {
    return (
      <section className="hero">
        <div className="hero-body">
          <p className="title">Aucun évènement pour le moment...</p>
        </div>
      </section>
    );
  }
  return <ul className="post-list">{events.map(renderItem)}</ul>;
};

export default ListEvent;
