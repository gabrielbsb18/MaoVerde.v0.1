import React, { useState } from 'react';
import { CheckBox, Icon } from '@rneui/themed';

type CheckboxComponentProps = {};

const CheckboxComponent: React.FunctionComponent<CheckboxComponentProps> = () => {
const [check1, setCheck1] = useState(false);
const [check2, setCheck2] = useState(false);
const [check3, setCheck3] = useState(false);

return (
  <>
    <CheckBox
      title="Reflorestamento"
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      uncheckedColor= '#205D2D'
      checkedColor= '#205D2D'
      containerStyle= {{backgroundColor: '',marginVertical: -5}}
      textStyle= {{color: 'white'}}
      checked={check1}
      onPress={() => setCheck1(!check1)}
    />

    <CheckBox
      title="Proteção Meio Ambiante"
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      uncheckedColor= '#205D2D'
      checkedColor= '#205D2D'
      containerStyle= {{backgroundColor: '',marginVertical: -5}}
      textStyle= {{color: 'white'}}
      checked={check2}
      onPress={() => setCheck2(!check2)}
    />

    <CheckBox
      title="Cuidados de Animais"
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      uncheckedColor= '#205D2D'
      checkedColor= '#205D2D'
      containerStyle= {{backgroundColor: '',marginVertical: -5}}
      textStyle= {{color: 'white'}}
      checked={check3}
      onPress={() => setCheck3(!check3)}
    />
  </>
);
};


export default CheckboxComponent;