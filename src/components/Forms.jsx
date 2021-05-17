import React from "react";
import Form from "./Form.jsx";
import { FormData } from "../data/FormData.js";
import FormTable from "./FormTable.jsx";

export default class Forms extends React.Component {

  constructor() {
    super();
    this.state = {
      total_forms: 1,
      forms: [ new FormData(1) ],
      mode: this.initialiseModes(),
    };
  }

  initialiseModes() {
    const mode1 = { value: "Edit" };
    const mode2 = { value: "Preview" };
    mode1.next = mode2;
    mode2.next = mode1;
    return mode1;
  }

  createForm = () => {
    const forms = this.state.forms;
    const total_forms = this.state.total_forms;

    forms.push(new FormData(total_forms+1));

    this.setState({ forms });
    this.setState({ total_forms: total_forms+1 });
  };

  changeMode = () => {
    const mode = this.state.mode.next;
    this.setState({ mode });
  };

  render() {
    const mode = this.state.mode;
    const forms = this.state.forms;
    let body;
    if (mode.value === "Edit")
    {
      body = forms.map((form) => <Form form={form} />);
    }
    else if (mode.value === "Preview")
    {
      body = <FormTable forms={forms} />;
    }
    return (
      <div>
        {body}
        <br />
        <button onClick={this.changeMode}>{mode.next.value}</button>
        <button onClick={this.createForm}>New Form</button>
      </div>
    );
  }
}
