import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {IInputLayout} from '~/components/Basics/Input/data';
import {color, space, border, boxShadow} from 'styled-system';

export default {
  Input: styled(TextInput)<IInputLayout>`
    ${space};
    ${color};
    ${border};
    ${boxShadow};

    color: #141313;
  `,
};
