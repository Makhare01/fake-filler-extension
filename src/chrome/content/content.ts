import { MessagePassingActions } from "../message";
import { Messages } from "../messages";
import { getRandomEmail } from "../utils/input";

export const randomEmail = getRandomEmail();

export type Message = {
  action: MessagePassingActions;
  payload: any;
};

type MessageHandler = (
  message: Message,
  sender: chrome.runtime.MessageSender,
  callback: <T>(response?: T) => void
) => void;

const OnMessageHandler: MessageHandler = async (
  { action, payload },
  _,
  callback
) => {
  try {
    const result = await Messages[action]?.(payload);
    callback(result);
  } catch (error) {
    callback(error);
  }
};

chrome.runtime.onMessage.addListener(OnMessageHandler);
