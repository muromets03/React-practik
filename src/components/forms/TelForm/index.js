import React, { Component } from "react";
import cx from "classnames";
import styles from "./TelForm.module.css";

const initialValues = {
  user_name: "",
  user_telephone: "",
  isuser_name: true,
  isuser_telephone: true,
};

class Telform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialValues,
    };
  }

  handlerForm = (event) => {
    event.preventDefault();

    this.setState({ ...initialValues });
    // event.target.reset();
  };
  handlerInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value, [`is${name}Valid`]: !value.includes(" ") });
  };
  render() {
    const { name, telephone, isuser_name , isuser_telephone} =
      this.state;

    const nameClassName = cx(styles.input, { [styles.invalid]: !isuser_name });

    const telephoneClassName = cx(styles.input, { [styles.invalid]: !isuser_telephone,});


    return (

      <form className={styles.form} onSubmit={this.handlerForm}>
        <label>
          Enter Yours Name
          <input
            name="user_name"
            type="text"
            value={name}
            className={nameClassName}
            onChange={this.handlerInput}
          ></input>
        </label>
        <label>
          Enter your phone number
          <input
            name="user_telephone"
            placeholder="+38"
            type="text"
            value={telephone}
            className={telephoneClassName}
            onChange={this.handlerInput}
          />
        </label>
        <label>
          
          Push button and we tel for you
          <input type="submit" value="send" />
        </label>
      </form>
    );
  }
}

export default Telform;
