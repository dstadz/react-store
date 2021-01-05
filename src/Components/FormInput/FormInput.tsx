import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './styles';



const FormInput = (
  handleChange: ()=> void,
  type?:string,
  name?:string,
  value?:string,
  onChange?:()=>void,
  label?:string,
  required?:boolean
) => {
  const props = { type, name, value, label, required}
  return (
  <GroupContainer>
    <FormInputContainer />
    {label
    ? <FormInputLabel
      //className={props.value.length ? 'shrink' : ''}
      >
        {label}
      </FormInputLabel>
    : null
    }
  </GroupContainer>
  )
}

export default FormInput;
