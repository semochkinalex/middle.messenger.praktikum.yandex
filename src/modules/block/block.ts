import EventBus from '../../modules/event-bus/event-bus';

import type { IBlockChild, IBlockMeta, IBlockProps } from '../types/types';

import * as handlebars from 'handlebars';
import { isEqual } from '../helpers/helpers';

export default class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render'
    };

    private _element: HTMLElement;
    private _meta: IBlockMeta;
    private _children: Map<IBlockChild, string>;

    public props: IBlockProps;
    public eventBus: () => EventBus;

    constructor(tagName = 'div', className = '', props: IBlockProps = {}) {
        const eventBus = new EventBus();
        
        this._children = new Map();

        this._meta = {
            tagName,
            className,
            props
        };

        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);

        eventBus.emit(Block.EVENTS.INIT);
    }

    private _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }

    private _createResources() {
        const { tagName, className } = this._meta;
        this._element = this._createDocumentElement(tagName, className);
    }

    private _init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    private _componentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        this.componentDidMount();
    }

    public componentDidMount(): void {}

    private _componentDidUpdate() {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        this.componentDidUpdate();
    }

    public componentDidUpdate(): void {}

    public setProps = (nextProps: IBlockProps): void => {
        if (!nextProps) {
            return;
        }
        const newProps = Object.assign({}, this.props, nextProps);

        if (!isEqual(this.props, newProps)) {
            Object.assign(this.props, nextProps);
        }
    };

    public setChild = (child: IBlockChild, cssSelector: string): void => {
        this._children.set(child, cssSelector);
    };

    public unsetChild = (child: IBlockChild): void => {
        this._children.delete(child);
    };

    private _updateChildren = () => {
        for (const element of this._children) {
            const [child, cssSelector] = element;

            let section: DocumentFragment | HTMLElement;
            if (Array.isArray(child)) {
                section = document.createDocumentFragment();

                child.forEach((block) => {
                    section.append(block.element)
                });
            } else {
                section = child.element;
            }
            const position = this._element.querySelector(cssSelector);
            if (position) {
                position.appendChild(section);
            } else {
                console.error(`Error in block ${cssSelector}`);
            }
        }
    };

    private _addEvents(): void {
        const { events = {} } = this.props;

        Object.keys(events).forEach(eventName => {
            this._element.addEventListener(eventName, events[eventName]);
        });
    }

    private _removeEvents(): void {
        const { events = {} } = this.props;

        Object.keys(events).forEach(eventName => {
            this._element.removeEventListener(eventName, events[eventName]);
        });
    }

    get element(): HTMLElement {
        return this._element;
    }

    private _render() {
        const block = this.render();
        this._removeEvents();
        this._element.innerHTML = handlebars.compile(block)(this.props);
        this._updateChildren();
        this._addEvents();
    }

    public getContent() {
        return this.element;
    }

    public render() {};

    private _makePropsProxy(props: IBlockProps) {
        const proxyProps = new Proxy(props, {
            set: (target, prop, value) => {
                if (typeof prop === 'symbol') {
                    throw new Error("Can't use symbols");
                }
                target[prop] = value;
                this.eventBus().emit(Block.EVENTS.FLOW_CDU);
                return true;
            },
            deleteProperty: function() {
                throw new Error("Permission error.");
            }
        });
        return proxyProps;
    }

    private _createDocumentElement(tagName: string, className: string): HTMLElement {
        const element = document.createElement(tagName);

        element.className = className;

        return element;
    }

    public show(): void {
        this._element.style.display = 'block';
    }

    public hide(): void {
        this._element.style.display = 'none';
    }
}