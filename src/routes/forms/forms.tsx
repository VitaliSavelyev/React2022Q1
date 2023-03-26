import React from "react";
import CustomInput from "./customInput/CustomInput";
import CustomSelect from "./customSelect/CustomSelect";
import CustomRadio from "./customRadio/CustomRadio";
import {IUser} from "../../interfaces/user.interface";
import {CountryEnum} from "../../enums/country.enum";
import {GenderEnum} from "../../enums/gender.enum";

export interface FormControlRadio {
    ref: React.RefObject<HTMLInputElement>[];
    type: string;
    label: GenderEnum[];
    validation?: ValidationControl;
    errorMessage?: string;
    valid: boolean;
}

export interface FormControlSelect {
    ref: React.RefObject<HTMLSelectElement>;
    type: string;
    label: string;
    options: CountryEnum[];
    validation?: ValidationControl;
    errorMessage?: string;
    valid: boolean;
}

export interface FormControlInput {
    ref: React.RefObject<HTMLInputElement>;
    type: string;
    label: string;
    validation?: ValidationControl;
    errorMessage?: string;
    valid: boolean;
}

export interface ValidationControl {
    required: boolean,
    firstLetter?: boolean
}

export interface IForm{
    name: FormControlInput;
    surname: FormControlInput;
    birthday: FormControlInput;
    country: FormControlSelect;
    married: FormControlInput;
    gender: FormControlRadio;
    photo: FormControlInput;
}

function validate(validation: ValidationControl, value: string | boolean): boolean {
    if(validation?.required) {
        if(!value){
            return false;
        }
    }
    if(validation.firstLetter && typeof value === 'string') {
        const isFirstLater = /[A-Z]/.test(value)
        if(!isFirstLater){
            return false
        }
    }
    return true
}

class UserForm extends React.Component<unknown, { formState: IForm }> {

    constructor(props: unknown) {
        super(props);
        this.state = {
            formState: {
                name: {
                    ref: React.createRef(),
                    type: 'text',
                    label: 'Name',
                    validation: {
                        required: true,
                        firstLetter: true
                    },
                    errorMessage: 'Your name invalid',
                    valid: true,
                },
                surname: {
                    ref: React.createRef(),
                    type: 'text',
                    label: 'Surname',
                    validation: {
                        required: true,
                        firstLetter: true
                    },
                    errorMessage: 'Your name invalid',
                    valid: true,
                },
                birthday: {
                    ref: React.createRef(),
                    type: 'date',
                    label: 'Birthday',
                    validation: {
                        required: true,
                    },
                    errorMessage: 'Your date invalid',
                    valid: true,
                },
                country: {
                    ref: React.createRef(),
                    type: 'select',
                    label: 'country',
                    options: [CountryEnum.BELARUS, CountryEnum.CHINA, CountryEnum.BRASIL],
                    validation: {
                        required: true,
                    },
                    errorMessage: 'Your country does not choose',
                    valid: false,
                },
                married: {
                    ref: React.createRef(),
                    type: 'checkbox',
                    label: 'I am married',
                    valid: true,
                },
                gender: {
                    ref: [React.createRef(), React.createRef()],
                    type: 'radio',
                    label: [GenderEnum.MALE, GenderEnum.FEMALE],
                    validation: {
                        required: true,
                    },
                    errorMessage: 'Your gender does not choose',
                    valid: true,
                },
                photo: {
                    ref: React.createRef(),
                    type: 'file',
                    label: 'Profile Picture',
                    validation: {
                        required: true,
                    },
                    errorMessage: 'Your photo invalid',
                    valid: true,
                }
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e: any) {
        e.preventDefault();
        let user: IUser = {
            birthday: "",
            country: CountryEnum.BELARUS,
            gender: GenderEnum.XZ,
            id: "",
            married: false,
            name: "",
            photo: "",
            surname: ""
        };
        const updatedState = { ...this.state.formState }
        Object.entries(this.state.formState).forEach((value, index) => {
            switch (value[0]) {
                case 'name': {
                    if(!!value[1]?.validation) {
                        updatedState[value[0]].valid = validate(value[1]?.validation, value[1].ref?.current?.value)
                    }
                    user[value[0]] = value[1].ref?.current?.value
                }
                break;
                case 'surname': {
                    if(!!value[1]?.validation) {
                        updatedState[value[0]].valid = validate(value[1]?.validation, value[1].ref?.current?.value)
                    }
                    user[value[0]] = value[1].ref?.current?.value
                }
                break;
                case 'birthday': {
                    if(!!value[1]?.validation) {
                        updatedState[value[0]].valid = validate(value[1]?.validation, value[1].ref?.current?.value)
                    }
                    user[value[0]] = value[1].ref?.current?.value
                }
                    break;
                case 'country': {
                    if(!!value[1]?.validation) {
                        updatedState[value[0]].valid = validate(value[1]?.validation, value[1].ref?.current?.value)
                    }
                    user[value[0]] = value[1].ref?.current?.value
                }
                    break;
                case 'married': {
                    if(!!value[1]?.validation) {
                        updatedState[value[0]].valid = validate(value[1]?.validation, value[1].ref?.current?.checked)
                    }
                    user[value[0]] = value[1].ref?.current?.checked
                }
                    break;
                case 'photo': {
                    if(!!value[1]?.validation) {
                        updatedState[value[0]].valid = validate(value[1]?.validation, value[1].ref?.current?.value)
                    }
                    user[value[0]] = value[1].ref?.current?.files[0] ? URL.createObjectURL(value[1].ref?.current?.files[0]) : ''
                }
                    break;
            }
        })
        this.state.formState.gender.ref.some(ref => {
            if(ref.current?.checked) {
                user.gender = ref.current?.value === GenderEnum.MALE ? GenderEnum.MALE : GenderEnum.FEMALE
            }
            return ref.current?.checked
        })
        if(user.gender === GenderEnum.XZ){
            updatedState.gender.valid = false;
        } else {
            updatedState.gender.valid = true;
        }
        const isInvalidForm = Object.values(updatedState).some(control => !control.valid)
        if(!isInvalidForm){
            user.id =`${Math.random()*10000}`

        } else {
            this.setState({formState: updatedState})
        }
    }

    render() {
        return (
            <div style={{
                display: "flex",
                padding: "20px",
                justifyContent: "space-between",
                flexWrap: "wrap",
                border: "1px solid red",
            }}>
                <form onSubmit={this.handleSubmit}>
                    <div style={{
                        margin: "30px",
                    }}>
                        <CustomInput
                            formControl={this.state.formState.name}
                        />
                    </div>

                    <div style={{
                        margin: "30px",
                    }}>
                        <CustomInput
                            formControl={this.state.formState.surname}
                        />
                    </div>

                    <div style={{
                        margin: "30px",
                    }}>
                        <CustomInput
                            formControl={this.state.formState.birthday}
                        />
                    </div>

                    <div style={{
                        margin: "30px",
                    }}>
                        <CustomSelect formControl={this.state.formState.country}/>
                    </div>


                    <div style={{
                        margin: "30px",
                    }}>
                        <CustomRadio formControl={this.state.formState.gender}/>
                    </div>

                    <div style={{
                        margin: "30px",
                    }}>
                        <CustomInput formControl={this.state.formState.married}/>
                    </div>

                    <div style={{
                        margin: "30px",
                    }}>
                        <CustomInput formControl={this.state.formState.photo}/>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
};

export default UserForm;
