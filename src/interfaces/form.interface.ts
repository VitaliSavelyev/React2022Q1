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
  label: GenderEnum[];
}

export interface FormControlSelect extends FormControl {
  label: string;
  options: CountryEnum[];
}

export interface FormControlInput extends FormControl {
  label: string;
}

export interface ValidationControl {
  required: boolean;
  validate?: CustomValidate;
}

export interface CustomValidate {
  firstLetter?: (type: string) => boolean
}

export interface IForm {
  name: FormControlInput;
  surname: FormControlInput;
  birthday: FormControlInput;
  country: FormControlSelect;
  married: FormControlInput;
  gender: FormControlRadio;
  photo: FormControlInput;
}
