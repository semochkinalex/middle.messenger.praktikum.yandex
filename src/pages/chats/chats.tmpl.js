export default `
    <main class={{styles.main}}>
        <nav class={{styles.navbar}}>
            <div class={{styles.profile}}>
                <div class={{styles.credentials}}>
                    <img class={{styles.avatar}} alt="Profile Avatar" src={{avatar}} />
                    <p class={{styles.username}}>{{username}}</p>
                </div>
                <div class={{styles.button}}>
                    <button class="{{styles.actionIcon}} {{styles.settings}}"></button>
                    <button class="{{styles.actionIcon}} {{styles.exit}}"></button>
                </div>
            </div>
            <input type="text" placeholder="Поиск" class={{styles.search}} />
            <div class={{styles.divider}}></div>
            <ul class={{styles.list}}>
                {{#each chats}}
                    {{> chat}}
                {{/each}}
            </ul>
        </nav>
        <section class={{styles.chat}}>
            {{#if selectedChat}}
                {{> chatbox chat=selectedChat}}
            {{else}}
                <p class={{styles.empty}}>Выберите чат чтобы отправить сообщение</p>
            {{/if}}
        </section>
    </main>
`;