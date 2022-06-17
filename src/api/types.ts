export type Event = {
  id: number;
} & EventDescription;

export type EventDescription = {
  name: string;
  description: string;
  adress: string;
};
