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
    const {
      spanNamePropInput,
      typeNamePropInput,
      input,
      meta: {error, touched, warning },
      checkInput,
      coreSpriteInputRefresh,
    } = this.props; // input là props được nhận từ Field


    console.log(warning);

    let renderCoreSpriteInputRefresh = coreSpriteInputRefresh ? (
      <button className="btn_coreSpriteInputRefresh">
        <iconify-icon
          className=""
          icon="ooui:reload"
          style={{
            fontSize: "25px",
            color: "#77afe1",
            position: "absolute",
            left: "190px",
            top: "11px",
          }}
        ></iconify-icon>
      </button>
    ) : null;

    let renderCheckInput = checkInput ? (
      <iconify-icon
        className="icon_tick"
        icon="teenyicons:tick-circle-outline"
        style={{
          fontSize: "21px",
          color: "#cbcccd",
          position: "absolute",
          left: "220px",
          top: "13px",
        }}
      ></iconify-icon>
    ) : null;

    const renderInputPassword = typeNamePropInput !== "password" ? (error ? (<iconify-icon className="icon_tick" icon="iconoir:delete-circled-outline" style={{ fontSize: "23px", color: "#e8293a", position: "absolute", left: "220px", top: "13px", }} ></iconify-icon>) : renderCheckInput) : null

    const addClassNameSpan = input?.value != "" ? "addClassNameSpan" : "";

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
            

            {warning ? renderCoreSpriteInputRefresh : null}
            {/* {renderCoreSpriteInputRefresh} */}

            {touched && renderInputPassword}
            
          </label>

          {/* <p>{meta.error}</p> */}

          {/*Button Password */}
          {typeNamePropInput === "password" ? (
            <button
              type="button"
              onClick={() =>
                this.eventChangeTypeInput(
                  this.state.typeInput == "password" ? "text" : "password"
                )
              }
              // type="button"
              className="btn_password"
            >
              {showTitleButton}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
