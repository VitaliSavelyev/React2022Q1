import React from "react";
import { CountryEnum } from "../../enums/country.enum";
import { GenderEnum } from "../../enums/gender.enum";
import { IForm } from "./forms";

export const initialState: IForm = {
  name: {
    ref: React.createRef(),
    type: "text",
    label: "Name",
    validation: {
      required: true,
      firstLetter: true,
    },
    errorMessage: "Your name invalid",
    valid: true,
  },
  surname: {
    ref: React.createRef(),
    type: "text",
    label: "Surname",
    validation: {
      required: true,
      firstLetter: true,
    },
    errorMessage: "Your name invalid",
    valid: true,
  },
  birthday: {
    ref: React.createRef(),
    type: "date",
    label: "Birthday",
    validation: {
      required: true,
    },
    errorMessage: "Your date invalid",
    valid: true,
  },
  country: {
    ref: React.createRef(),
    type: "select",
    label: "country",
    options: [CountryEnum.BELARUS, CountryEnum.CHINA, CountryEnum.BRASIL],
    validation: {
      required: true,
    },
    errorMessage: "Your country does not choose",
    valid: false,
  },
  married: {
    ref: React.createRef(),
    type: "checkbox",
    label: "I am married",
    valid: true,
  },
  gender: {
    ref: [React.createRef(), React.createRef()],
    type: "radio",
    label: [GenderEnum.MALE, GenderEnum.FEMALE],
    validation: {
      required: true,
    },
    errorMessage: "Your gender does not choose",
    valid: true,
  },
  photo: {
    ref: React.createRef(),
    type: "file",
    label: "Profile Picture",
    validation: {
      required: true,
    },
    errorMessage: "Your photo invalid",
    valid: true,
  },
};
