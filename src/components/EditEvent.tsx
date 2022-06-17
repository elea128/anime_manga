import React, { useReducer, useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getEvent, createEvent, deleteEvent } from "../api/evt";
import { EventDescription, Event } from "../api/types";
import Field from "../private/Field";

type FormEvent =
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>

type FormData = { name: string; value: string | undefined | Number };

const formReducer = (state: Event | EventDescription, event: FormData) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const EditEvent = () => {
  const [formData, setFormData] = useReducer(
    formReducer,
    {} as Event | EventDescription
  );
  let { id } = useParams(); // event id from url
  const navigate = useNavigate(); // create a navigate function instance

  async function _getEvent(id: number) {
    const data = await getEvent(id);
    convertToFormData(data);
  }
  useEffect(() => {
    //chaquef fois que l'id change
    _getEvent(Number(id));
  }, [id]);

  async function handleAddOrCreateEvent(
    event: React.FormEvent<HTMLFormElement>
  ) {
    // remove default reloading page
    event.preventDefault()

    // back to Home
    navigate('/')
  }

  function handleChange(event: FormEvent) {
    //
    const value =
      event.target.name === 'userId'
        ? Number(event.target.value)
        : event.target.value
    setFormData({
      name: event.target.name,
      value,
    })
  }

  async function handleDeleteEvent() {
    // back to Home
    await deleteEvent(Number(id));
    navigate("/");
  }

  function convertToFormData(event: Event): void {
    // helper to convert event data into formData
    // use it before set formData with API data
    // ex: convertToFormData(data):
    (Object.keys(event) as Array<keyof typeof event>).map((key) => {
      setFormData({
        name: key,
        value: event[key],
      });
    });
  }

  return (
    <>
      <form className="event-form" onSubmit={handleAddOrCreateEvent}>
        <Field label="Nom de l'évènement">
          <input
            name="Name"
            className="input"
            type="text"
            placeholder="Nom de l'évènement"
            value={formData.name}
          />
        </Field>
        <Field label="Description">
          <textarea
            name="description"
            className="textarea"
            placeholder="Description de l'évènement ainsi que la date"
            value={formData.description}
          />
        </Field>

        <Field label="Lieu">
          <input
            name="adress"
            className="input"
            type="text"
            placeholder="Adresse/Lien de l'évènement"
            value={formData.adress}
          />
        </Field>

        {!!id && (
          <Field label="Extra actions">
            <button
              type="button"
              className="button is-warning"
              onClick={handleDeleteEvent}
            >
              Delete post
            </button>
          </Field>
        )}

        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <button type="submit" className="button is-primary">
              Valider
            </button>
          </p>
          <p className="control">
            <Link to="/" className="button is-light">
              Annuler
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default EditEvent;
