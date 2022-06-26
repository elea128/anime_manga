import React, { useReducer } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFaq } from "../api/faq";
import { FaqDescription, Faq } from "../api/types";
import { Link } from "react-router-dom";

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
            <Link to={`/faq`}>
                <div
                    style={{
                        visibility: "hidden",
                        position: "absolute",
                        width: "0px",
                        height: "0px",
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <symbol viewBox="0 0 24 24" id="expand-more">
                            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </symbol>
                        <symbol viewBox="0 0 24 24" id="close">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </symbol>
                    </svg>
                </div>

                <details open>
                    <summary>
                        {formData.question}
                        <svg
                            className="control-icon control-icon-expand"
                            width="24"
                            height="24"
                            role="presentation"
                        >
                            <use
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xlinkHref="#expand-more"
                            />
                        </svg>
                        <svg
                            className="control-icon control-icon-close"
                            width="24"
                            height="24"
                            role="presentation"
                        >
                            <use
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xlinkHref="#close"
                            />
                        </svg>
                    </summary>
                    <p>{formData.reponse}</p>
                </details>
                <div className="card"></div>
            </Link>
        </>
    );
};

export default EditFaq;