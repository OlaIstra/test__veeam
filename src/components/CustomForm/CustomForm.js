import React from "react";

import Form from "../UI/Form/Form"
import Label from "../UI/Label/Label"

import DefaultButton from "../DefaultComponents/DefaultButton"
import DefaultTextInput from "../DefaultComponents/DefaultTextInput"
import DefaultNumberInput from "../DefaultComponents/DefaultNumberInput"
import DefaultDateInput from "../DefaultComponents/DefaultDateInput"
import DefaultTextarea from "../DefaultComponents/DefaultTextarea"
import DefaultCheckbox from "../DefaultComponents/DefaultCheckbox"
import DefaultRadio from "../DefaultComponents/DefaultRadio"


import "./CustomForm.css";


class CustomForm extends React.Component {

    state = {
        value: this.props.value
    }

    renderForm = () => {

        let tags = this.state.value.tags || [];

        return tags.map(item => {
            let {tag, ...others} = item

            switch (tag) {
                case "button":
                    return <DefaultButton {...others} key={others.keyID}/>
                case "textarea":
                    return <DefaultTextarea {...others} key={others.keyID}/>
                case "text":
                    return <DefaultTextInput {...others} key={others.keyID}/>
                case "number":
                    return <DefaultNumberInput {...others} key={others.keyID}/>
                case "date":
                    return <DefaultDateInput {...others} key={others.keyID}/>
                case "checkbox":
                    return <DefaultCheckbox {...others} key={others.keyID}/>
                case "radio":
                    let radios = item.options.map(elem => {
                        return <DefaultRadio {...elem} key={elem.keyID}/>
                    });
                    return (
                        <div className="radio__group" key={Math.random() * 100}>
                            <Label>{others.label}</Label>
                            <div>
                                {radios}
                            </div>
                        </div>
                    )
                default:
                    return null
            }

        });
    };

    render() {
        let title = this.state.value.formTitle

        return (
            <div className="custom__form">
                <h2 className="form-title">{title}</h2>
                <Form key={this.state.value.key}>
                    <div className="form-actions">
                        {this.renderForm()}
                    </div>
                    <DefaultButton type="submit" title="Done"/>
                </Form>
            </div>
        );
    }
}

export default CustomForm
