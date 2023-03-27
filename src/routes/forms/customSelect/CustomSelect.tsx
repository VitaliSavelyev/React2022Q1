import React from "react";
import { FormControlSelect } from "../forms";
import { CountryEnum } from "enums/country.enum";

class Input extends React.Component<{ formControl: FormControlSelect }> {
  public htmlFor: string;

  constructor(props: { formControl: FormControlSelect }) {
    super(props);
    this.htmlFor = `${this.props.formControl.type}-${Math.random()}`;
  }

  render() {
    return (
      <div>
        <label htmlFor={this.htmlFor}>{this.props.formControl.label}</label>
        <select id={this.htmlFor} ref={this.props.formControl.ref}>
          {this.props.formControl.options.map(
            (label: CountryEnum, index: number) => {
              return (
                <option value={label} key={label + index}>
                  {label}
                </option>
              );
            }
          )}
        </select>
      </div>
    );
  }
}

export default Input;
