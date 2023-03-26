import React from 'react'
import classes from './CustomRadio'
import {FormControlRadio} from "../forms";

function isInvalid(control: FormControlRadio) {
    return !control.valid && !!control?.validation
}

class Input extends React.Component<{formControl: FormControlRadio}> {

    public htmlFor: any

    constructor(props: {formControl: FormControlRadio}) {
        super(props)
        this.htmlFor = `${this.props.formControl.type}-${Math.random()}`
    }

    render() {
        return (
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                width: "250px"
            }}>
                <label>Gender:</label>
                <input type="radio" id="male" name="gender" value="male" className="radio-input" ref={this.props.formControl.ref[0]}/>
                    <label htmlFor="male">{this.props.formControl.label[0]}</label>

                    <input type="radio" id="female" name="gender" value="female" className="radio-input" ref={this.props.formControl.ref[1]}/>
                    <label htmlFor="female">{this.props.formControl.label[1]}</label>
                {
                    isInvalid(this.props.formControl)
                        ? <span>{this.props.formControl.errorMessage || ''}</span>
                        : null
                }
            </div>
        )
    }


}

export default Input
