import Handlebars from 'handlebars';
import ChatsTemplate from './chats.tmpl';
import * as styles from './chats.module.css';

import ChatPreviewTemplate from '../../components/chat-preview/chat-preview.tmpl';

Handlebars.registerPartial('chat', ChatPreviewTemplate);

const template = Handlebars.compile(ChatsTemplate);


const render = template({styles, username: "fennyflop", avatar: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg'});

export default render;