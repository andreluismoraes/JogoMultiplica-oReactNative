import React from "react";

import { BtnClick, NumberText } from "./style";

const Button = ({ onPress, children, ...rest }) => {
  return (
    <BtnClick onPress={onPress} {...rest}>
      <NumberText>{children}</NumberText>
    </BtnClick>
  );
};

export default Button;
