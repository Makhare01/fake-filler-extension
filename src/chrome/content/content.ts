import { MessagePassingActions } from "../message";

chrome.runtime.onMessage.addListener((msg, _, sendResponse) => {
  if (msg.action === MessagePassingActions.fill) {
    const inputs = document.querySelectorAll('input')
    console.log(inputs.entries)
    console.log(inputs.values)
    console.log(inputs.item)
    
    for(let i = 0; i< inputs.length; i++) {
      i === 0 ? inputs[i].value = `ჯამბულ` : inputs[i].value = `გაზაევ`
    }
    return;
  }

  return true;
});
