import React, { useReducer } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getEvent, deleteEvent } from "../api/evt";
import { EventDescription, Event } from "../api/types";
import "./editevent.css";

type FormEvent =
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>;

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
  }, []);

  // async function handleAddOrCreateEvent(
  //   event: React.FormEvent<HTMLFormElement>
  // ) {
  //   // remove default reloading page
  //   event.preventDefault();

  //   // back to Home
  //   navigate("/");
  // }

  // function handleChange(event: FormEvent) {
  //   //
  //   const value =
  //     event.target.name === "userId"
  //       ? Number(event.target.value)
  //       : event.target.value;
  //   setFormData({
  //     name: event.target.name,
  //     value,
  //   });
  // }

  // async function handleDeleteEvent() {
  //   // back to Home
  //   await deleteEvent(Number(id));
  //   navigate("/");
  // }

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
      <div id="container"></div>
      <div className="contact-wrapper">
        <div className="envelope {{ flipCard ? 'active' : '' }}">
          <div className="back paper"></div>
          <div className="content">
            <div className="form-wrapper">
              <form>
                <div className="top-wrapper">
                  <div className="input">
                    <label>Nom de l'évènement</label>
                    <input type="text" name="name" value={formData.name} />
                  </div>
                  <div className="input">
                    <label>Description</label>
                    <input
                      type="text"
                      name="description"
                      value={formData.description}
                    />
                  </div>
                  <div className="input">
                    <label>Lieu</label>
                    <input type="text" name="lieu" value={formData.adress} />
                  </div>
                </div>
                <div className="bottom-wrapper">
                  <div className="input">
                    <label>Email</label>
                    <input type="text" name="email" />
                  </div>
                  <div className="input">
                    <label>Message</label>
                    <textarea name="message"></textarea>
                  </div>
                  <div className="submit">
                    <Link to="/">
                      <div
                        className="submit-card"
                        on-click="toggle('flipCard')"
                      >
                        Créer/modifier l'événement
                      </div>
                      <p className="control"></p>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="front paper"></div>
        </div>
      </div>
    </>
  );
};

export default EditEvent;
