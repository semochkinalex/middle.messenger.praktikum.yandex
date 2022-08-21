import Block from "../core/block";

export type TFormHandler = (a: TFormValues, b: TFormErrors) => void;

export type IBlockChild = Block | Array<Block>;

export interface IBlockEvents {
  [key: string]: (e: Event) => unknown;
}

export interface IBlockMeta {
  tagName: string;
  className: string;
  props: IBlockProps;
}

export interface IBlockProps {
  [key: string]: unknown;
  events?: IBlockEvents;
}

export interface IPageChildren {
  [key: string]: Block | Block[];
}

export interface IValidationProperties {
  [key: string]: (value: string | number, values?: TFormValues) => string;
}

export type TFormValues = { [key: string]: string | number };
export type TFormErrors = { [key: string]: string };

export interface IChatPreview extends IBlockProps {
  username: string;
  avatar: string;
  timestamp: string;
  latestMessage: string;
  repliedTo?: boolean;
  isSelected: boolean;
  unreadMessagesCount: number;
}

export interface IRequest {
  [key: string]: unknown;
  data?: Document | XMLHttpRequestBodyInit | null | undefined;
  headers?: object;
  timeout?: number;
  method?: "GET" | "PUT" | "DELETE" | "POST" | "PATCH";
}

export interface IAppStateProps {[key: string]: unknown};