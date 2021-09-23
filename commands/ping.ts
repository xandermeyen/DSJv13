import { Message } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'testing',
    description: 'Replies with pong',

    slash: 'both',
    testOnly:true,

    callback: ({}) => {
      return 'Pong'
    },
} as ICommand
