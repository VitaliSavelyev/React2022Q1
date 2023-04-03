import React, { useState } from "react";
import CustomInput from "./customInput/CustomInput";
import CustomSelect from "./customSelect/CustomSelect";
import CustomRadio from "./customRadio/CustomRadio";
import { IUser } from "../../interfaces/user.interface";
import { CountryEnum } from "../../enums/country.enum";
import { users } from "../../db/dbusers";
import Card from "../home/Card/card";
import { initialState } from "./initialState";
import { useForm } from "react-hook-form";

const UserForm = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      birthday: "",
      country: CountryEnum.BELARUS,
      married: false,
      gender: "",
      photo: "",
      ggg: "",
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
  const onSubmit = (formState: any) => {
    console.log(formState);
    const user: IUser = {
      birthday: formState.birthday,
      country: formState.country,
      gender: formState.gendr,
      id: `${Math.random() * 10000}`,
      married: formState.married,
      name: formState.name,
      photo: formState.photo,
      surname: formState.surname,
    };
    users.push(user);
    setIsHasPopup(true);
    reset();
    setTimeout(() => {
      setIsHasPopup(false);
    }, 3000);
  };
  const [isHasPopUp, setIsHasPopup] = useState(false);

  return (
    <div>
      <div
        style={{
          padding: "20px",
          border: "1px solid red",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            control={control}
            name="name"
            formControl={initialState.name}
          />
          <CustomInput
            control={control}
            name="surname"
            formControl={initialState.surname}
          />
          <CustomInput
            control={control}
            name="birthday"
            formControl={initialState.birthday}
          />
          <CustomSelect
            control={control}
            name="country"
            formControl={initialState.country}
          />
          <CustomRadio
            control={control}
            name="gender"
            formControl={initialState.gender}
          />
          <CustomInput
            control={control}
            name="married"
            formControl={initialState.married}
          />
          {/*<CustomInput control={control} name="photo" formControl={initialState.photo}/>*/}
          <button type="submit">Submit</button>
        </form>
        {isHasPopUp ? (
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
};

export default UserForm;
