import {FormControlInput} from "interfaces/form.interface";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {useController} from "react-hook-form";

const CustomInput = (props: any) => {
    const controlState = {control: props.control, name: props.name, rules: {...props.formControl?.validation}}
    const {field, fieldState} = useController(controlState);
    const htmlFor = `${props.formControl.type}-${Math.random()}`
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                width: "250px",
                margin: "30px"
            }}
        >
            <label
                htmlFor={htmlFor}
            >{`${props.formControl.label}:`}</label>
            {props.formControl.type !== 'file' ? (
                <input
                    {...field} placeholder={props.formControl.name}
                    type={props.formControl.type}
                    id={htmlFor}
                />
            ) : <input
                {...field} placeholder={props.formControl.name}
                accept="image/*"
                type={props.formControl.type}
                id={htmlFor}
            />}

            {fieldState.invalid ? (
                <div>{props.formControl.errorMessage || ""}</div>
            ) : null}
        </div>
    );
}

export default CustomInput;
