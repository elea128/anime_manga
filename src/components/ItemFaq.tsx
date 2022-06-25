import { Link } from "react-router-dom";
import { Faq } from "../api/types";

const ItemFaq = (props: Faq) => {
  return (
    <Link to={`/faq/${props.id}`} key={`key-${props.id}`}>
      <div className="card"></div>
      <div className="media-content">
        <p className="title is-4 post-title">{props.question}</p>
      </div>
      <div className="content post-content">{props.reponse}</div>
    </Link>
  );
};

export default ItemFaq;
