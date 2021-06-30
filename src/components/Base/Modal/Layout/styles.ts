import styled from "styled-components/native";
import {
  space,
  color,
  typography,
  border,
  flexbox,
  boxShadow,
  backgroundColor,
} from "styled-system";
import ICON from "@expo/vector-icons/build/MaterialCommunityIcons";
import BaseModal from "react-native-modal";

import { Wrapped } from "../../Wrapped";
import { metrics } from "../../../../styles";
import { IModalLayout } from "../data";

export default {
  //@ts-ignore
  ModalWrapped: styled(BaseModal)<IModalLayout>`
    ${space};
    ${color};
    ${typography};
    ${border};
    ${flexbox};
    ${boxShadow};
    ${backgroundColor};
    margin: 0;
    padding: 0;
  `,
  ModalContent: styled(Wrapped)`
    padding-left: ${metrics.defaultSpace()}px;
    padding-right: ${metrics.defaultSpace()}px;
    border-top-left-radius: ${metrics.defaultSpace()}px;
    border-top-right-radius: ${metrics.defaultSpace()}px;
  `,
  CloseContainer: styled(Wrapped).attrs({
    activeOpacity: 0.6,
    hitSlop: { top: 12, left: 12, bottom: 12, right: 12 },
  })`
    width: ${metrics.defaultSpace(4)}px;
    height: ${metrics.defaultSpace(4)}px;
    overflow: hidden;
    border-radius: ${metrics.defaultSpace(2)}px;
  `,
  CloseIcon: styled(ICON).attrs({
    size: 20,
    color: "white",
    name: "close",
  })``,
};
