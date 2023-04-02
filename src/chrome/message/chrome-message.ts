import { getCurrentTabId } from "../utils";

type Message = { action: string; payload?: any }

export const pingTab = (msg: Message) =>
  new Promise(async (resolve, reject) => {
    const tabId = await getCurrentTabId()
    const { action, payload } = msg
    chrome.tabs.sendMessage(tabId, { action, payload }, response => {
      // Check if receiving end exists
      if (chrome.runtime.lastError) {
        reject('NO_EXTENSION')
        return
      }

      if (!response) {
        reject('NO_RESPONSE')
        return
      }

      resolve(response)
    })
  })

export const sendMessageToTab = ({
  msg,
  successAction,
  fallbackAction,
}: {
  msg: Message
  successAction?: (_response: any) => void
  fallbackAction?: (_error?: any) => void
}) => {
  if (chrome.runtime) {
    pingTab(msg)
      .then(response => {
        successAction?.(response)
      })
      .catch(error => {
        fallbackAction?.(error)
      })
  } else {
    fallbackAction?.()
  }
}
