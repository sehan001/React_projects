import React from "react";
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === " " || this.state.email === " ") {
      alert("all the fields are mandatory");
      return;
    }
    this.props.AddContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>add contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            ></input>
          </div>
          <div className="field">
            <label>e-mail</label>
            <input
              type="text"
              name="email"
              placeholder="E-Mail"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            ></input>
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}
export default AddContact;
