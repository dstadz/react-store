import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './styles';

interface FormElement {
  type?:string,
  name?:string,
  value?:string

}

interface FormPropsInterface {
  [index:number]: FormElement
}
const FormInput = (
  handleChange: ()=> void,
  label: string,
  ...props: FormPropsInterface[] ) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label
    ? <FormInputLabel
      //className={props.value.length ? 'shrink' : ''}
      >
        {label}
      </FormInputLabel>
    : null
    }
  </GroupContainer>
);

export default FormInput;
