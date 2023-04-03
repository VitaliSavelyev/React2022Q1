import { IForm } from "interfaces/form.interface";
import { CountryEnum } from "../../enums/country.enum";
import { GenderEnum } from "../../enums/gender.enum";
const firstLetterValidator = (value: string): boolean => /[A-Z]/.test(value[0]);

export const initialState: IForm = {
  name: {
    type: "text",
    label: "Name",
    validation: {
      required: true,
      validate: {
        firstLetter: firstLetterValidator,
      },
    },
    errorMessage: "Your name invalid",
    valid: true,
  },
  surname: {
    type: "text",
    label: "Surname",
    validation: {
      required: true,
      validate: {
        firstLetter: firstLetterValidator,
      },
    },
    errorMessage: "Your surname invalid",
    valid: true,
  },
  birthday: {
    type: "date",
    label: "Birthday",
    validation: {
      required: true,
    },
    errorMessage: "Your date invalid",
    valid: true,
  },
  country: {
    type: "select",
    label: "Country",
    options: [
      CountryEnum.EMPTY,
      CountryEnum.BELARUS,
      CountryEnum.CHINA,
      CountryEnum.BRASIL,
    ],
    validation: {
      required: true,
    },
    errorMessage: "Your country does not choose",
    valid: true,
  },
  married: {
    type: "checkbox",
    label: "I am married",
    validation: {
      required: true,
    },
    errorMessage: "Sorry, but you married",
    valid: true,
  },
  gender: {
    type: "radio",
    label: [GenderEnum.MALE, GenderEnum.FEMALE],
    validation: {
      required: true,
    },
    errorMessage: "Your gender does not choose",
    valid: true,
  },
  photo: {
    type: "file",
    label: "Profile Picture",
    validation: {
      required: true,
    },
    errorMessage: "Your photo invalid",
    valid: true,
  },
};
