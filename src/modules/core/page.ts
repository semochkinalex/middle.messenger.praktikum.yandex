import Block from "./block";
import { IPageChildren } from "../types/types";

export class Page {
  private _parent: Block;
  private _children?: IPageChildren;
  private _selector = ".body";

  constructor(parent: Block, children?: IPageChildren, selector = ".body") {
    this._parent = parent;
    this._children = children;
    this._selector = selector;
  }

  public render() {
    const parent = document.querySelector(this._selector);
    if (parent) parent.innerHTML = "";

    this._addElement(this._parent, this._selector);

    if (this._children) {
      if (Object.keys(this._children).length > 0) {
        for (const [selector, child] of Object.entries(this._children)) {
          this._addElement(child, selector, this._parent);
        }
      }
    }
  }

  private _addElement(
    element: Block | Block[],
    selector: string,
    parent?: Block
  ) {
    let target;

    if (parent) {
      parent.setChild(element, selector);
      target = parent.element;
    } else {
      target = document;
    }

    let content: DocumentFragment | HTMLElement;
    if (Array.isArray(element)) {
      content = document.createDocumentFragment();
      element.forEach((block) => content.append(block.element));
    } else {
      content = element.element;
    }

    const root = target.querySelector(selector);

    if (root) {
      root.appendChild(content);
    } else {
      throw new Error(`Couldn't add ${selector}`);
    }
  }
}