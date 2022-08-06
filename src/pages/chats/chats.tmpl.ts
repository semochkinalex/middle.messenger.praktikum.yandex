export default `
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
            <ul class="{{styles.list}} list">
            </ul>
        </nav>
        <section class={{styles.chat}}>
        {{#if selectedChat}}
                <div class={{styles.recipient}}>
                    <div class={{styles.credentials}}>
                        <img class={{styles.recipientAvatar}} src={{selectedChat.recipient.avatar}} alt="" />
                        <p class={{styles.recipientName}}>{{selectedChat.recipient.displayName}}</p>
                    </div>
                    <button class={{styles.more}}></button>
                </div>
                <ul class="messages {{styles.messages}}"></ul>
                <form class="{{styles.handlebar}} handlebar">
                    <button class={{styles.attatch}}></button>
                    <input class="input {{styles.input}}" name="message" placeholder="Сообщение" />
                    <button class={{styles.send}} type="submit"></button>
                </form>
            {{else}}
                <p class={{styles.empty}}>Выберите чат чтобы отправить сообщение</p>
            {{/if}}
        </section>
`;
