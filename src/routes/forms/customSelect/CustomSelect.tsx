import React from 'react'
import classes from './CustomSelect'
import {FormControlSelect} from "../forms";
import { CountryEnum } from 'enums/country.enum';

function isInvalid(control: FormControlSelect) {
    return !control.valid && !!control?.validation
}

class Input extends React.Component<{formControl: FormControlSelect}> {

    public htmlFor: any
    public cls: any

    constructor(props: {formControl: FormControlSelect}) {
        super(props)
        this.htmlFor = `${this.props.formControl.type}-${Math.random()}`
    }

    render() {
        return (
            <div>
                <label htmlFor={this.htmlFor}>{this.props.formControl.label}</label>
                <select
                    id={this.htmlFor}
                    ref={this.props.formControl.ref}
                >
                    { this.props.formControl.options.map((label: CountryEnum, index: number) => {
                        return (
                            <option
                                value={label}
                                key={label + index}
                            >
                                {label}
                            </option>
                        )
                    }) }
                </select>
            </div>
        )
    }


}

export default Input
