export default `
    <main class={{styles.container}}>
        <div class={{styles.credentials}}>
            <div class="avatar"></div>
            <div class={{styles.seperator}}>
                <p class={{styles.name}}>{{first_name}}</p>
                <div class="exit"></div>
            </div>
        </div>
        <form class={{styles.form}}>
        <div class="inputs {{styles.inputs}}">
        </div>
        <div class="errors">
        </div>
        <div class="{{styles.links}} links">
        </div>
        </form>
        <a class={{styles.sidebar}} href="/messenger">
        <button class={{styles.return}}></button>
        </a>
    </main>
    <div class="popup"></div>
`;
