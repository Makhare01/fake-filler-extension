import { MessagePassingActions, sendMessageToTab } from "../message";

chrome.action.onClicked.addListener(async (tab) => {
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id ?? 0, allFrames: true },
      files: ["inject.js"],
    },
    () => void chrome.runtime.lastError
  );

  await sendMessageToTab({
    action: MessagePassingActions.fillForm,
  });
});
