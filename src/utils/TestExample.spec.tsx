import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';

interface IComponentDeTest {
  press(email: string, password: string): void;
}

const ComponentDeTest: React.FC<IComponentDeTest> = ({ press }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View testID={`ComponentDeTest`}>
      <TextInput
        testID={`email`}
        value={email}
        onChangeText={setEmail}
        placeholder={'Email'}
      />
      <TextInput
        testID={`password`}
        value={password}
        onChangeText={setPassword}
        placeholder={'Password'}
      />
      <Button
        testID={`button`}
        onPress={() => press(email, password)}
        title={'Botão'}
      />
    </View>
  );
};

// Passando a props testID, podemos usar o getByTestId
// getByTestId(): é usado para acessar o componente pela flag testID
// toBeTruthy(): usado para verificar se o componente está na tela
// getByText(): usado para acessar o componente por um texto

// Exemplo de mock de library
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

// Exemplo de um mock fn global
const exemploDeFn = jest.fn();

// Exemplo de teste de render
describe('Render ComponentDeTest', () => {
  it('Should be ComponentDeTest exist', () => {
    const { getByTestId } = render(<ComponentDeTest press={exemploDeFn} />);
    const currentElement = getByTestId(`ComponentDeTest`);
    expect(currentElement).toBeTruthy();
  });
});

// Exemplo mais completo
describe('ComponentDeTest ', () => {
  it('Should be ComponentDeTest is functional', () => {
    // capturando elementos
    const { getByTestId } = render(<ComponentDeTest press={exemploDeFn} />);
    const emailInput = getByTestId(`email`);
    const passwordInput = getByTestId(`password`);
    const buttonElement = getByTestId(`button`);
    // checkando se os elementos estão na tela
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(buttonElement).toBeTruthy();
    // modificando valores dos campos
    fireEvent.changeText(emailInput, 'test@email.com');
    fireEvent.changeText(passwordInput, '123123');
    // clicando no botão
    fireEvent.press(buttonElement);
    // verificando a função
    expect(exemploDeFn).toHaveBeenCalledWith('test@email.com', '123123');
  });
});
