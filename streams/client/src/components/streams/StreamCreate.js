import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderInput(formProps) {
    return (
      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      // />
      <input {...formProps.input} />
    );
  }

  render() {
    return (
      <form>
        <Field name="title" type="text" component={this.renderInput} />
        <Field name="description" type="text" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
