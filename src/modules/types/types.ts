import Block from "../block/block";

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