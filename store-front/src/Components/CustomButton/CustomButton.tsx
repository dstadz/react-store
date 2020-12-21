import React, { FC } from 'react';
import { CustomButtonContainer } from './styles';

const CustomButton: FC<{ children:string }> = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
