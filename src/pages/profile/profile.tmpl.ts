export default `
    <main class={{styles.container}}>
        <div class={{styles.credentials}}>
            <button class="{{styles.change}} avatar" onclick={{handleAvatar}}>
                Поменять аватар
            </button>
            <img class="avatar {{styles.avatar}}" alt="{{first_name}} avatar" src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x2.jpg" />
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
