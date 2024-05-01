import {BaseButton, GoogleSignInButton, InvertedButton} from  './button.styles';
import {FC, ButtonHTMLAttributes} from "react";

export enum BUTTON_TYPE_CLASSES  {
  base = 'base',
  google= 'google-sign-in',
  inverted= 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) : typeof BaseButton => {
   return {
    [BUTTON_TYPE_CLASSES.base] : BaseButton,
    [BUTTON_TYPE_CLASSES.google] : GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted] : InvertedButton,
   }[buttonType];
}

export type ButtonProps = {
  buttonType? : BUTTON_TYPE_CLASSES,
  children : any
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button : FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps}>
      {children}
    </CustomButton>
  );
};

export default Button;