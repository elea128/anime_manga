export type Event = {
  id: number;
} & EventDescription;

export type EventDescription = {
  name: string;
  description: string;
  adress: string;
};

export type Faq = {
  id: number;
} & FaqDescription;

export type FaqDescription = {
  question: string;
  reponse: string;
};
