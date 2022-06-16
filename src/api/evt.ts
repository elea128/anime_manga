import { Event, EventDescription } from "./types";
import axios from "axios";

const base_url = "http://localhost:3004/events";

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

async function createEvent(event: EventDescription): Promise<Event> {
  // create a new event
  const { data } = await axios.post(`${base_url}`, event);
  return data;
}

async function deleteEvent(eventID: Event["id"]): Promise<Event["id"]> {
  const { data } = await axios.delete(`${base_url}/${eventID}`);
  return data;
}

export { getEvent, getEvents, createEvent, deleteEvent };
