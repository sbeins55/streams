import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div
          className={"ui basic red pointing prompt label transition visible"}
        >
          <div>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete={"off"} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className={"ui form error"}
      >
        <Field name={"title"} component={this.renderInput} label={"Title"} />
        <Field
          name={"description"}
          component={this.renderInput}
          label={"Description"}
        />
        <button className={"ui button primary"}>Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    // only ran if the user did not enter a title
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    // only ran if the user did not enter a title
    errors.description = "You must enter a description";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);

export default connect(
  null,
  {
    createStream
  }
)(formWrapped);