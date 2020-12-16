import React, { FC } from 'react';

import { CustomButtonContainer } from './styles';


interface ButtonInterface {
  children:string,
}

const CustomButton: FC<ButtonInterface> = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
