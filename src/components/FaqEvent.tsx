import React, { useReducer } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFaq } from "../api/faq";
import { FaqDescription, Faq } from "../api/types";

type FormData = { question: string; value: string | undefined | Number };

const formReducer = (state: Faq | FaqDescription, faq: FormData) => {
  return {
    ...state,
    [faq.question]: faq.value,
  };
};

const EditFaq = () => {
  const [formData, setFormData] = useReducer(
    formReducer,
    {} as Faq | FaqDescription
  );
  let { id } = useParams(); // event id from url

  async function _getFaq(id: number) {
    const data = await getFaq(id);
    convertToFormData(data);
  }
  useEffect(() => {
    //chaquef fois que l'id change
    _getFaq(Number(id));
  }, [id]);

  function convertToFormData(faq: Faq): void {
    // helper to convert event data into formData
    // use it before set formData with API data
    // ex: convertToFormData(data):
    (Object.keys(faq) as Array<keyof typeof faq>).map((key) => {
      setFormData({
        question: key,
        value: faq[key],
      });
    });
  }

  return (
    <>

      <div>
        <h3>Question</h3>
        <p>{formData.question}</p>
      </div>

      <div>
        <h3>Réponse</h3>
        <p>{formData.reponse}</p>
      </div>
    </>
  );
};

export default EditFaq;
