import { Event, EventDescription } from "./types";

const base_url = "https://anime-mon-manga.herokuapp.com/event";

async function getEvent(eventID: Event["id"]): Promise<Event> {
  // get a unique event
  const response = await fetch(`${base_url}/${eventID}`);
  const data = await response.json();
  return data;
}

async function getEvents(): Promise<Array<Event>> {
  // get all events
  const response = await fetch(base_url);
  const data = await response.json();
  return data;
}

async function createEvent(post: EventDescription): Promise<Event> {
  // create a new post
  return {
    id: 1,
    name: "name",
    description: "description",
    adress: "adress",
    url: "url",
  };
}

async function deleteEvent(postID: Event["id"]): Promise<Event["id"]> {
  // delete a existing post
  return 1;
}

export { getEvent, getEvents, createEvent, deleteEvent };
