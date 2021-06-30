import * as React from "react";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Wrapped } from "../../Wrapped";
import { Linear } from "../../Linear";
import { IModalLayout } from "../data";
import C from "./styles";

export const Modal: React.FC<IModalLayout> = ({
  flex,
  children,
  closeModal,
  coin,
  bg = "white",
  type = "default",
  hasClosableButton = true,
  ...props
}) => {
  const insets = useSafeAreaInsets();
  const bottomInsets = insets.bottom || 2;

  if (type === "transparent") {
    return (
      <C.ModalWrapped {...props} useNativeDriverForBackdrop useNativeDriver>
        <Wrapped mx={2} mt={3}>
          {children}
        </Wrapped>
      </C.ModalWrapped>
    );
  }

  if (type === "full") {
    return (
      <C.ModalWrapped {...props} useNativeDriverForBackdrop useNativeDriver>
        <Wrapped flex={flex} bg={bg}>
          {hasClosableButton && (
            <C.CloseContainer ml={1} mt={bottomInsets} onPress={closeModal}>
              <Linear coin={coin} flex={1} center>
                <C.CloseIcon />
              </Linear>
            </C.CloseContainer>
          )}
          {children}
        </Wrapped>
      </C.ModalWrapped>
    );
  }

  if (Platform.OS === "ios") {
    return (
      <C.ModalWrapped
        {...props}
        pt={insets.top * 2}
        justifyContent="flex-end"
        useNativeDriverForBackdrop
        useNativeDriver
      >
        <C.ModalContent
          flex={flex}
          bg={bg}
          pt={hasClosableButton ? 1 : bottomInsets}
          pb={bottomInsets}
        >
          {hasClosableButton && (
            <C.CloseContainer mb={2} onPress={closeModal}>
              <Linear coin={coin} flex={1} center>
                <C.CloseIcon />
              </Linear>
            </C.CloseContainer>
          )}
          {children}
        </C.ModalContent>
      </C.ModalWrapped>
    );
  } else {
    return (
      <C.ModalWrapped
        {...props}
        pt={insets.top * 2}
        justifyContent="flex-end"
        useNativeDriverForBackdrop
        useNativeDriver
      >
        <C.ModalContent
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          flex={flex}
          bg={bg}
          pt={hasClosableButton ? 1 : bottomInsets}
          pb={bottomInsets}
        >
          {hasClosableButton && (
            <C.CloseContainer mb={2} onPress={closeModal}>
              <Linear coin={coin} flex={1} center>
                <C.CloseIcon />
              </Linear>
            </C.CloseContainer>
          )}
          {children}
        </C.ModalContent>
      </C.ModalWrapped>
    );
  }
};
