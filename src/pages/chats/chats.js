import Handlebars from 'handlebars';
import ChatsTemplate from './chats.tmpl';
import * as styles from './chats.module.scss';

import ChatboxTemplate from '../../components/chatbox/chatbox.tmpl';
import ChatPreviewTemplate from '../../components/chat-preview/chat-preview.tmpl';
import ChatMessageTemplate from '../../components/message/message.tmpl';

Handlebars.registerPartial('chatbox', ChatboxTemplate);
Handlebars.registerPartial('chat', ChatPreviewTemplate);
Handlebars.registerPartial('message', ChatMessageTemplate);

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

const selectedChat = {
    recipient: {
        displayName: "Oleg",
        avatar: 'https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg'
    },
    messages: [
        {
            message: `Okay, I pull up, hop out at the after party
            You and all your friends, yeah, they love to get naughty
            Sippin' on that Henn', I know you love that Bacardi
            1942, I take you back in that 'Rari`,
            timestamp: "18:19",
            isRecieved: true,
        },
        {
            message: `Okay, I pull up, hop out at the after party
            You and all your friends, yeah, they love to get naughty
            Sippin' on that Henn', I know you love that Bacardi
            1942, I take you back in that 'Rari`,
            timestamp: "18:19",
            isRecieved: false,
            isSeen: true,
        }
    ]
}


const render = template({styles, username: "fennyflop", avatar: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg', chats, selectedChat});

export default render;