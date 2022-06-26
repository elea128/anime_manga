import { Faq, FaqDescription } from "./types";

const base_url = "https://anime-mon-manga.herokuapp.com/faq";

async function getFaq(faqID: Faq["id"]): Promise<Faq> {
  // get a unique event
  const response = await fetch(`${base_url}/${faqID}`);
  const data = await response.json();
  return data;
}

async function getFaqs(): Promise<Array<Faq>> {
  // get all events
  const response = await fetch(base_url);
  const data = await response.json();
  return data;
}

async function createFaq(post: FaqDescription): Promise<Faq> {
  // create a new faq
  return {
    id: 1,
    question: "question",
    reponse: "reponse",
  };
}

async function deleteFaq(postID: Faq["id"]): Promise<Faq["id"]> {
  // delete a existing post
  return 1;
}

export { getFaq, getFaqs, createFaq, deleteFaq };
