import { FormControlInput } from "interfaces/form.interface";
import React from "react";

function isInvalid(control: FormControlInput) {
  return !control.valid && !!control?.validation;
}

class Input extends React.Component<{ formControl: FormControlInput }> {
  public htmlFor: string;

  constructor(props: { formControl: FormControlInput }) {
    super(props);
    this.htmlFor = `${this.props.formControl.type}-${Math.random()}`;
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "250px",
        }}
      >
        <label
          htmlFor={this.htmlFor}
        >{`${this.props.formControl.label}:`}</label>
        <input
          accept={this.props.formControl.type === "file" ? "image/*" : ""}
          type={this.props.formControl.type}
          id={this.htmlFor}
          ref={this.props.formControl.ref}
        />
        {isInvalid(this.props.formControl) ? (
          <div>{this.props.formControl.errorMessage || ""}</div>
        ) : null}
      </div>
    );
  }
}

export default Input;
