import Block from "../view-modules/block";

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
    [key: string]: (value: string | number) => string;
}

export type TFormValues = {[key: string]: string | number};
export type TFormErrors = {[key: string]: string};