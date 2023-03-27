import React from "react";
import { GenderEnum } from "../enums/gender.enum";
import { CountryEnum } from "../enums/country.enum";

interface FormControl {
  type: string;
  validation?: ValidationControl;
  errorMessage?: string;
  valid: boolean;
}

export interface FormControlRadio extends FormControl {
  ref: React.RefObject<HTMLInputElement>[];
  label: GenderEnum[];
}

export interface FormControlSelect extends FormControl {
  ref: React.RefObject<HTMLSelectElement>;
  label: string;
  options: CountryEnum[];
}

export interface FormControlInput extends FormControl {
  ref: React.RefObject<HTMLInputElement>;
  label: string;
}

export interface ValidationControl {
  required: boolean;
  firstLetter?: boolean;
}

export type ItemFormType =
  | "name"
  | "surname"
  | "birthday"
  | "country"
  | "gender"
  | "married"
  | "photo";

export interface IForm {
  name: FormControlInput;
  surname: FormControlInput;
  birthday: FormControlInput;
  country: FormControlSelect;
  married: FormControlInput;
  gender: FormControlRadio;
  photo: FormControlInput;
}
