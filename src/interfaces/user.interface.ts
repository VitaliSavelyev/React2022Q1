import { CountryEnum } from "../enums/country.enum";
import { GenderEnum } from "../enums/gender.enum";

export interface IUserForm {
  name: string;
  surname: string;
  birthday: string;
  country: CountryEnum;
  married: boolean;
  gender: GenderEnum;
  photo: File;
}

export interface IUser {
  id: string;
  name: string;
  surname: string;
  birthday: string;
  country: CountryEnum;
  married: boolean;
  gender: GenderEnum;
  photo: string;
}
