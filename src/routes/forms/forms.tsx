import React, {useState} from "react";
import CustomInput from "./customInput/CustomInput";
import CustomSelect from "./customSelect/CustomSelect";
import CustomRadio from "./customRadio/CustomRadio";
import {IUser, IUserForm} from "../../interfaces/user.interface";
import {CountryEnum} from "../../enums/country.enum";
import {users} from "../../db/dbusers";
import Card from "../home/Card/card";
import {initialState} from "./initialState";
import {FieldValues, useForm} from "react-hook-form";

const defaultValues = {
    name: "",
    surname: "",
    birthday: "",
    country: CountryEnum.BELARUS,
    married: false,
    gender: "",
}

const UserForm = () => {
    const {handleSubmit, control, reset, register, formState: {errors}} = useForm({
        mode: "onSubmit",
        reValidateMode: "onSubmit",
    });
    const onSubmit = (formState: FieldValues) => {
        const user: IUser = {
            birthday: formState.birthday,
            country: formState.country,
            gender: formState.gender,
            id: `${Math.random() * 10000}`,
            married: formState.married,
            name: formState.name,
            photo: URL.createObjectURL(formState.photo[0]),
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
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            width: "250px",
                            margin: "30px",
                        }}
                    >
                        <label>{`${initialState.name.label}:`}</label>
                        <input
                            {...register('name', {...initialState.name.validation})}
                            type={initialState.name.type}
                        />
                        {errors['name'] ? (
                            <div>{initialState.name.errorMessage || ""}</div>
                        ) : null}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            width: "250px",
                            margin: "30px",
                        }}
                    >
                        <label>{`${initialState.surname.label}:`}</label>
                        <input
                            {...register('surname', initialState.surname.validation)}
                            type={initialState.surname.type}
                        />
                        {errors['surname'] ? (
                            <div>{initialState.surname.errorMessage || ""}</div>
                        ) : null}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            width: "250px",
                            margin: "30px",
                        }}
                    >
                        <label>{`${initialState.birthday.label}:`}</label>
                        <input
                            {...register('birthday', initialState.birthday.validation)}
                            type={initialState.birthday.type}
                        />
                        {errors['birthday'] ? (
                            <div>{initialState.birthday.errorMessage || ""}</div>
                        ) : null}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            width: "250px",
                            margin: "30px",
                        }}
                    >
                        <label>{`${initialState.country.label}:`}</label>
                        <select {...register('country', initialState.country.validation)}>
                            {initialState.country.options.map((label: CountryEnum, index: number) => {
                                return (
                                    <option value={label} key={label + index}>
                                        {label}
                                    </option>
                                );
                            })}
                        </select>
                        {errors['country'] ? (
                            <div>{initialState.country.errorMessage || ""}</div>
                        ) : null}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            width: "250px",
                            margin: "30px",
                        }}
                    >
                        <label>Gender:</label>
                        {initialState.gender.label.map((item: string, idx: number) => (
                            <div key={`${Math.random()}idx`}>
                                <input
                                    {...register('gender', initialState.gender.validation)}
                                    type={initialState.gender.type}
                                    id={initialState.gender.label[idx]}
                                    value={initialState.gender.label[idx]}
                                />
                                <label htmlFor={initialState.gender.label[idx]}>
                                    {initialState.gender.label[idx]}
                                </label>
                            </div>
                        ))}
                        {errors['gender'] ? (
                            <span>{initialState.gender.errorMessage || ""}</span>
                        ) : null}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            width: "250px",
                            margin: "30px",
                        }}
                    >
                        <label>{`${initialState.married.label}:`}</label>
                        <input
                            {...register('married', initialState.married.validation)}
                            type={initialState.married.type}
                        />
                        {errors['married'] ? (
                            <div>{initialState.married.errorMessage || ""}</div>
                        ) : null}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            width: "250px",
                            margin: "30px",
                        }}
                    >
                        <label>{`${initialState.photo.label}:`}</label>
                        <input type="file" {...register('photo', initialState.photo.validation)}/>
                        {errors['photo'] ? (
                            <div>{initialState.married.errorMessage || ""}</div>
                        ) : null}
                    </div>

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
                    <Card key={card.id} card={card}/>
                ))}
            </div>
        </div>
    );
};

export default UserForm;
