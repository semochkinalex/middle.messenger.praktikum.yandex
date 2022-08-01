// import SignInPage from "./pages/sign-in/sign-in.js";

import Block from './modules/block/block';

import "./vendor/styles.scss";

const main = document.querySelector(".main");

class Alert extends Block {

    constructor(props: any = {}, className = 'fragment') {
        super('div', className, props);
    }

    render(): string {
        return `<p>{{text}}</p><div class="button"></div><div class="button2"></div>`;
    }

}

class Button extends Block {
    constructor(props: any = {}, className = 'fragment') {
        super('button', 'button', props);
    }

    render(): string {
        return `{{text}}`;
    }
}

function attachComponent(child: any, cssSelector: string, parent?: Block): void {
    let target;
    if (parent) {
        parent.setChild(child, cssSelector);
        target = parent.element;
    } else {
        target = document;
    }

    let content: DocumentFragment | HTMLElement;
    if (Array.isArray(child)) {
        content = document.createDocumentFragment();
        child.forEach(block => content.append(block.element));
    } else {
        content = child.element;
    }

    const root = target.querySelector(cssSelector);
    if (root) {
        root.appendChild(content);
    } else {
        throw new Error(`Не удалость добавить элемент в блок ${cssSelector}`);
    }
}

const button = new Button({text: "little"});

const boomer = new Button({text: "kawai"})

const alert = new Alert({
    text: "helloqwdqwd",
    events: {
        'mouseover': () => console.log("agooga")
    }
})

setTimeout(() => {
    button.setProps({
        text: "Booba"
    })
}, 1000)

attachComponent(alert, '.main')
attachComponent(button, '.button', alert);
attachComponent(boomer, '.boomer', alert);
// attachComponent(button, '.main')

// console.log(alert.getContent());
