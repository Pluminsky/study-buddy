import React from 'react';
import { StyledButtton } from './Button.styles';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

const Button = (props) => (
  <StyledButtton {...props}>
    <DeleteIcon />
  </StyledButtton>
);

export default Button;
