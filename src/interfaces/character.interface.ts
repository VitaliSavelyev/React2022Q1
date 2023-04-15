export interface CharacterInterface {
  id: string;
  name: string;
  species: string;
  type: string;
  status: string;
  gender: string;
  image: string;
  birthday: string,
  location: string,
}
export interface DataInterface {
  results: CharacterInterface[];
}
