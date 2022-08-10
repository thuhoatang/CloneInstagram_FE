import "./Input.css";
import React, { Component } from "react";

export default class Input extends Component {
  state = { valueInput: "", typeInput: "password" };

  onInputChange = (event) => {
    this.setState({ valueInput: event.target.value });
  };

  eventChangeTypeInput = (type) => {
    this.setState({ typeInput: type });
  };

  render() {
    const { spanNamePropInput, typeNamePropInput, input, meta} = this.props; // input là props được nhận từ Field
    // console.log(m);

    const addClassNameSpan =
      input?.value != "" ? "addClassNameSpan" : "";

    let term = "";

    if (typeNamePropInput == "password") {
      term = this.state.typeInput;
    } else {
      term = typeNamePropInput;
    }

    const showTitleButton =
      this.state.typeInput === "password" ? "Hiển thị" : "Ẩn";

    return (
      <div className="input_login">
        <div className="input_login_child">
          <label className="input_login_label">
            <span className={`span_hint ${addClassNameSpan}`}>
              {spanNamePropInput}
            </span>
            <input
              onChange={this.onInputChange}
              className="input_text"
              aria-label="Phone number, username, or email"
              type={term}
              {...input}
              required
            />
          </label>

          {/* <p>{meta.error}</p> */}

          {/*Button Password */}
          {typeNamePropInput === "password" ? (
            <button
              onClick={() =>this.eventChangeTypeInput(this.state.typeInput == "password" ? "text" : "password")}
              // type="button"
              className="btn_password">{showTitleButton}</button>) : ("")}
        </div>
      </div>
    );
  }
}
