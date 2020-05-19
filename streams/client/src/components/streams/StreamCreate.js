import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render() {
    return (
      <form className="ui form">
        <Field
          name="title"
          type="text"
          component={this.renderInput}
          label="Title"
        />
        <Field
          name="description"
          type="text"
          component={this.renderInput}
          label="Description"
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
