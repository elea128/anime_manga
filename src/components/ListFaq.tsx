import React, { useEffect, useState } from "react";
import ItemFaq from "./ItemFaq";
import { getFaqs } from "../api/faq";
import { Faq } from "../api/types";

const ListFaq = () => {
  const [faqs, setFaqs] = useState<Array<Faq>>([]);
  const [loading] = useState(false);

  async function _getFaqs() {
    const data = await getFaqs();
    setFaqs(data);
  }
  useEffect(() => {
    _getFaqs();
  }, []);

  function renderItem(values: Faq) {
    return (
      <>
        <div key={values.id}>
          <ItemFaq {...values} />
        </div>
      </>
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

  if (faqs.length === 0) {
    return (
      <section className="hero">
        <div className="hero-body">
          <p className="title">Questions/réponses à venir...</p>
        </div>
      </section>
    );
  }
  return (
    <ul className="post-list">
      <h2>Questions les plus fréquentes</h2>
      {faqs.map(renderItem)}
    </ul>
  );
};

export default ListFaq;
