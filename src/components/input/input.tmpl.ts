export default `
    <input class={{styles.input}} value={{value}} placeholder={{attributes.placeholder}} type={{attributes.type}} />
    {{#if error}}
        <p class="{{styles.text}} {{styles.error}}">{{error}}</p>
    {{/if}}
`;
