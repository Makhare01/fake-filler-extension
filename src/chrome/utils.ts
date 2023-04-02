const queryInfo = { active: true, lastFocusedWindow: true }

export const getCurrentTabUrl = async () => {
  const [tabs] = await chrome.tabs.query(queryInfo)

  return tabs?.url
}

export const getCurrentTabId = async () => {
  const [tabs] = await chrome.tabs.query(queryInfo)

  return tabs.id!
}