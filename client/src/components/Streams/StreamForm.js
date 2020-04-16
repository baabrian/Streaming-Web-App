import React from 'react';
import { Field, reduxForm, clearSubmitErrors } from 'redux-form';

class StreamForm extends React.Component {
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    renderError({ error, submitFailed }) {
        if (submitFailed && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }


    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? "error" : ""}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input
                    autoComplete="off"
                    onChange={input.onChange}
                    value={input.value}
                />
                {this.renderError(meta)}
            </div>
        );
    }

    render() {
        //console.log(this.props);
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button type="submit" className="ui button primary">Submit</button>
            </form>
        );
    }
};

const validate = (formValues) => {
    const error = {};

    console.log("Validate function has been called");
    if (!formValues.title) {
        error.title = "Invalid Title";
    }

    if (!formValues.description) {
        error.description = "Invalid Description";
    }

    return error;
};

export default reduxForm({
    form: "streamForm",
    validate: validate,
})(StreamForm);

