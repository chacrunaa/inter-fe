import { Button as MuiButton, ButtonProps, Tooltip, TooltipProps } from '@mui/material';
import { FC } from 'react';

interface ButtonComponentProps extends ButtonProps {
  tooltipProps?: Omit<TooltipProps, 'children'>;
}

const Button: FC<ButtonComponentProps> = ({ tooltipProps, children, ...buttonProps }) => {
  const button = <MuiButton {...buttonProps}>{children}</MuiButton>;
  return tooltipProps ? (
    <Tooltip {...tooltipProps}>
      <div>{button}</div>
    </Tooltip>
  ) : (
    button
  );
};

export default Button;
