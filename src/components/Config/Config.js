import React from "react";

import DefaultButton from "../DefaultComponents/DefaultButton"

import "./Config.css";

const parseJson = require('parse-json');

class Config extends React.Component {

    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = () => {
        this.props.updateData(parseJson(this.state.value))
    }

    render() {
        return (
            <div>
        <textarea
            value={this.state.value}
            onChange={this.handleChange}
        />
                <DefaultButton
                    onClick={this.handleSubmit}
                    title="Apply"
                />
            </div>
        );
    }
}


export default Config
