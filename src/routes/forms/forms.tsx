import React from "react";
import CustomInput from "./customInput/CustomInput";
import CustomSelect from "./customSelect/CustomSelect";
import CustomRadio from "./customRadio/CustomRadio";
import { IUser } from "../../interfaces/user.interface";
import { CountryEnum } from "../../enums/country.enum";
import { GenderEnum } from "../../enums/gender.enum";
import { users } from "../../db/dbusers";
import Card from "../home/Card/card";
import { initialState } from "./initialState";
import {
  IForm,
  ItemFormType,
  ValidationControl,
} from "interfaces/form.interface";

function validate(
  validation: ValidationControl,
  value: string | boolean
): boolean {
  if (validation?.required) {
    if (!value) {
      return false;
    }
  }
  if (validation.firstLetter && typeof value === "string") {
    const isFirstLater = /[A-Z]/.test(value);
    if (!isFirstLater) {
      return false;
    }
  }
  return true;
}

class UserForm extends React.Component<
  unknown,
  { formState: IForm; isHasPopup: boolean }
> {
  public formRef: React.RefObject<HTMLFormElement>;

  constructor(props: unknown) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      formState: { ...initialState },
      isHasPopup: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: React.SyntheticEvent<HTMLFormElement>): void {
    e.preventDefault();
    const user: IUser = {
      birthday: "",
      country: CountryEnum.BELARUS,
      gender: GenderEnum.XZ,
      id: "",
      married: false,
      name: "",
      photo: "",
      surname: "",
    };
    const updatedState = { ...this.state.formState };
    Object.entries(this.state.formState).forEach((value) => {
      const keyValue: ItemFormType = value[0] as ItemFormType;
      if (!!value[1]?.validation) {
        updatedState[keyValue].valid = validate(
          value[1]?.validation,
          keyValue !== "married"
            ? value[1].ref?.current?.value
            : value[1].ref?.current?.checked
        );
      }
      switch (keyValue) {
        case "name":
          user[keyValue] = value[1].ref?.current?.value;
          break;
        case "surname":
          user[keyValue] = value[1].ref?.current?.value;
          break;
        case "birthday":
          user[keyValue] = value[1].ref?.current?.value;
          break;
        case "country":
          user[keyValue] = value[1].ref?.current?.value;
          break;
        case "married":
          user[keyValue] = value[1].ref?.current?.checked;
          break;
        case "photo":
          user[keyValue] = value[1].ref?.current?.files[0]
            ? URL.createObjectURL(value[1].ref?.current?.files[0])
            : "";
          break;
      }
    });
    this.state.formState.gender.ref.some((ref) => {
      if (ref.current?.checked) {
        user.gender =
          ref.current?.value === GenderEnum.MALE
            ? GenderEnum.MALE
            : GenderEnum.FEMALE;
      }
      return ref.current?.checked;
    });
    updatedState.gender.valid = user.gender !== GenderEnum.XZ;
    const isInvalidForm = Object.values(updatedState).some(
      (control) => !control.valid
    );
    if (!isInvalidForm) {
      user.id = `${Math.random() * 10000}`;
      users.push(user);
      this.setState({ formState: { ...initialState }, isHasPopup: true });
      setTimeout(() => {
        this.setState({ isHasPopup: false });
      }, 3000);
      this.formRef?.current?.reset();
    } else {
      this.setState({ formState: updatedState });
    }
  }

  render() {
    return (
      <div>
        <div
          style={{
            padding: "20px",
            border: "1px solid red",
          }}
        >
          <form ref={this.formRef} onSubmit={this.handleSubmit}>
            <div
              style={{
                margin: "30px",
              }}
            >
              <CustomInput formControl={this.state.formState.name} />
            </div>

            <div
              style={{
                margin: "30px",
              }}
            >
              <CustomInput formControl={this.state.formState.surname} />
            </div>

            <div
              style={{
                margin: "30px",
              }}
            >
              <CustomInput formControl={this.state.formState.birthday} />
            </div>

            <div
              style={{
                margin: "30px",
              }}
            >
              <CustomSelect formControl={this.state.formState.country} />
            </div>

            <div
              style={{
                margin: "30px",
              }}
            >
              <CustomRadio formControl={this.state.formState.gender} />
            </div>

            <div
              style={{
                margin: "30px",
              }}
            >
              <CustomInput formControl={this.state.formState.married} />
            </div>

            <div
              style={{
                margin: "30px",
              }}
            >
              <CustomInput formControl={this.state.formState.photo} />
            </div>

            <button type="submit">Submit</button>
          </form>
          {this.state.isHasPopup ? (
            <h2
              style={{
                border: "2px solid green",
              }}
            >
              Card was created
            </h2>
          ) : null}
        </div>
        <div
          style={{
            display: "flex",
            padding: "20px",
            gap: "10px",
            flexWrap: "wrap",
            border: "1px solid red",
          }}
        >
          {users.map((card: IUser) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    );
  }
}

export default UserForm;
