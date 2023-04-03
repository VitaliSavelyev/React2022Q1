import React from "react";
import { CountryEnum } from "enums/country.enum";
import { useController } from "react-hook-form";

const CustomSelect = (props: any) => {
  const controlState = {
    control: props.control,
    name: props.name,
    rules: { ...props.formControl?.validation },
  };
  // @ts-ignore
  const { field } = useController({ ...controlState });
  const htmlFor = `${props.formControl.type}-${Math.random()}`;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "250px",
        margin: "30px",
      }}
    >
      <label htmlFor={htmlFor}>{`${props.formControl.label}:`}</label>
      <select {...field} id={htmlFor}>
        {props.formControl.options.map((label: CountryEnum, index: number) => {
          return (
            <option value={label} key={label + index}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CustomSelect;
