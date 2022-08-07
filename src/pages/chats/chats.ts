import Handlebars from "handlebars";
import ChatsTemplate from "./chats.tmpl";
import * as styles from "./chats.module.scss";

import Block from "../../modules/core/block";
import { IBlockProps, IChatPreview } from "../../modules/types/types";
import { Page } from "../../modules/core/page";
import ChatPreview from "../../components/chat-preview/chat-preview";
import Message from "../../components/message/message";

const chats = [
  {
    avatar:
      "https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg",
    username: "Homie",
    latestMessage:
      "DDDDOkay, I pull up, hop out at the after party. Okay, I pull up, hop out at the after party. Okay, I pull up, hop out at the after party. Okay, I pull up, hop out at the after party.Okay, I pull up, hop out at the after partyOkay, I pull up, hop out at the after partyOkay, I pull up, hop out at the after party",
    timestamp: "19:13",
    isSelected: true,
    unreadMessagesCount: 0,
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6YOvuinDaAUV_YLUnPSK-7YcOkUTu7qHhPw&usqp=CAU",
    username: "+7 (916) 523-23-75",
    latestMessage: "Baby, please don't leave me!!!",
    unreadMessagesCount: 99,
    timestamp: "19:13",
    isSelected: false,
  },
];

const selectedChat = {
  recipient: {
    displayName: "Oleg",
    avatar:
      "https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg",
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
    },
  ],
};

interface IChatProps extends IBlockProps {
  username: string;
  avatar: string;
  chats: Array<IChatPreview>;
  selectedChat: object;
}

class Chats extends Block {
  constructor(props: IChatProps) {
    super("main", styles.main, { styles, ...props }, ".handlebar");
  }

  render() {
    return Handlebars.compile(ChatsTemplate)(this.props);
  }
}

const ChatsBlock = new Chats({
  username: "fennyflop",
  avatar:
    "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x2.jpg",
  chats,
  selectedChat,
  events: {
    submit: (evt) => {
      evt.preventDefault();
      const message = (<HTMLInputElement>document?.querySelector(".input"))
        .value;
      if (!message) return;
      console.log(message);
    },
  },
});

const ChatsPage = new Page(ChatsBlock, {
  ".list": chats.map((chat) => {
    return new ChatPreview(chat);
  }),
  ".messages": selectedChat.messages.map((message) => {
    return new Message(message);
  }),
});

export default ChatsPage;
