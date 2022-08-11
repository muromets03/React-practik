import { ErrorMessage, Field } from "formik";
import React from "react";
import cx from "classnames";
import styles from "./InputLabel.module.scss";

const InputInLabel = (props) => {
  const { name, ...restprops } = props;
  return (
    <label>
   
      <span> Eneter your {name}</span>
      <Field name={name} type="text" placeholder={name} {...restprops}>
        {({ field, form, meta }) => {
          const inputClassnames = cx(styles.input, {
            [styles.invalid]: meta.error && meta.touched,
          });
          return (
            <input {...field} className={inputClassnames} {...restprops} />
          );
        }}
      </Field>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </label>
  );
};

export default InputInLabel;
