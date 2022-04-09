import React from "react";
import "./App.scss";
import ShowForm from "./componenets/showForm/showForm.component";
import ListForm from "./componenets/listForm/listForm.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isForm: true,
    };
  }
  render() {
    const { isForm } = this.state;
    return (
      <div className="page-container">
        <div
          className="change-state"
          onClick={() => this.setState({ isForm: !isForm })}
        >
          {isForm ? "Show List Form" : "Form"}
        </div>
        {isForm ? <ShowForm /> : <ListForm />}
      </div>
    );
  }
}
export default App;
