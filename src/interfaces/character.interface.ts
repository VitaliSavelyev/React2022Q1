export interface CharacterInterface {
  id: string;
  name: string;
  species: string;
  type: string;
  status: string;
  gender: string;
  episode: [string];
  image: string;
  url: string;
  created: Date;
}
export interface DataInterface {
  results: CharacterInterface[];
}
