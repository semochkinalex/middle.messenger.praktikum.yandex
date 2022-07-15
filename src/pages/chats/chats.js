import Handlebars from 'handlebars';
import ChatsTemplate from './chats.tmpl';
import * as styles from './chats.module.css';

import ChatPreviewTemplate from '../../components/chat-preview/chat-preview.tmpl';

Handlebars.registerPartial('chat', ChatPreviewTemplate);

const template = Handlebars.compile(ChatsTemplate);

const chats = [
    {
        avatar: 'https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg',
        username: "Homie",
        latestMessage: "Okay, I pull up, hop out at the after party. Okay, I pull up, hop out at the after party. Okay, I pull up, hop out at the after party. Okay, I pull up, hop out at the after party.Okay, I pull up, hop out at the after partyOkay, I pull up, hop out at the after partyOkay, I pull up, hop out at the after party",
        timestamp: '19:13',
        isSelected: true,
        unreadMessagesCount: 0,
    },
    {
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6YOvuinDaAUV_YLUnPSK-7YcOkUTu7qHhPw&usqp=CAU',
        username: "+7 (916) 523-23-75",
        latestMessage: "Baby, please don't leave me!!!",
        unreadMessagesCount: 99,
        timestamp: '19:13',
        isSelected: false,
    }
]


const render = template({styles, username: "fennyflop", avatar: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg', chats});

export default render;