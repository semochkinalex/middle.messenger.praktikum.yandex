export default `
    <section class={{styles.chats}}>
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
            {{> chat username="Alex" date="18:19" avatar="https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg" }}
        </ul>
    </main>
`;