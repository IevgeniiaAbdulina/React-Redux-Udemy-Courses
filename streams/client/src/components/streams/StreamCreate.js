import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderInput() {
    return <input />;
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
