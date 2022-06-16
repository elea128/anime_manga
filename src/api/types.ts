export type Event = {
  id: string;
} & EventDescription;

export type EventDescription = {
  name: string;
  description: string;
  adress: string;
};
