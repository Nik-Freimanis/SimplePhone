import { forwardRef } from "react";
import s from "./styles.module.scss";

const Input = forwardRef((props, ref) => {
  return <input className={s.input} ref={ref} {...props} />;
});

Input.displayName = "Input";
export { Input };
