import {FormControlRadio} from "interfaces/form.interface";
import React from "react";
import {useController} from "react-hook-form";

const CustomRadio = (props: any) => {
    const controlState = {control: props.control, name: props.name, rules: {...props.formControl?.validation}}
    const {field, fieldState} = useController(controlState);
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                width: "250px",
                margin: "30px"
            }}
        >
            <label>Gender:</label>
            <input
                {...field}
                type={props.formControl.type}
                id={props.formControl.label[0]}
                name="gender"
                value={props.formControl.label[0]}
            />
            <label htmlFor={props.formControl.label[0]}>{props.formControl.label[0]}</label>

            <input
                {...field}
                type={props.formControl.type}
                id={props.formControl.label[1]}
                name="gender"
                value={props.formControl.label[1]}
            />
            <label htmlFor={props.formControl.label[1]}>{props.formControl.label[1]}</label>
            {fieldState.invalid ? (
                <span>{props.formControl.errorMessage || ""}</span>
            ) : null}
        </div>
    )
}

export default CustomRadio;
