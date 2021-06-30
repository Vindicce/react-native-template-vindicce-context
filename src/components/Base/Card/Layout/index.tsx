import * as React from "react";
import { ICardLayout } from "../data";
import { Wrapped } from "../../Wrapped";
import { metrics } from "../../../../styles";

const { defaultSpace } = metrics;

export const Card: React.FC<ICardLayout> = ({
  children,
  onPress,
  ...props
}) => (
  <Wrapped
    {...props}
    bg={"white"}
    p={defaultSpace(2)}
    borderRadius="Light"
    boxShadow="0px 2px 2px rgba(0, 0, 0, 0.1)"
    onPress={onPress}
  >
    {children}
  </Wrapped>
);
