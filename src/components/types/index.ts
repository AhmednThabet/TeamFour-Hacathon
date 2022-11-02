import type { HTMLProps, FC } from "react";
import type { ImageProps } from "next/image";
import type { DivElementType } from "types";

export interface CardProps extends DivElementType {}
export type CardType = FC<CardProps>;

export interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  helperText?: string;
  inputClassName?: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  inputSize?: "small" | "medium" | "large";
}
export type InputType = FC<InputProps>;

export interface LogoProps extends Omit<ImageProps, "src" | "alt"> {
  src?: string;
  alt?: string;
}
export type LogoType = FC<LogoProps>;

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
}
export type ButtonType = FC<ButtonProps>;

export interface SelectProps extends HTMLProps<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  selectClassName?: string;
  selectSize?: "small" | "medium" | "large";
  options: { value: string; label: string }[];
}
export type SelectType = FC<SelectProps>;
