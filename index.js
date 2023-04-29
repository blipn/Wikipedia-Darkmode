function init() {
  const background = '#d7d7d7'
  const background2 = '#adadad'
  const link = '#a26f37'
  const range = document.createRange()
  const frag = range.createContextualFragment(`
  <style>
    .vector-header-container, .vector-feature-zebra-design-disabled, body {
      background-color: ${background2}!important;
    }
    .mw-page-container, .bandeau-niveau-modere, .cdx-menu-item--highlighted {
      background-color: ${background}!important;
    }
    html {
      mix-blend-mode: difference !important;
    }
    img { 
      filter: invert(1); 
    }
    a {
      color: ${link}!important;
    }
  </style>
  `
  )
  document.querySelector("head").append(frag)  
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == 'complete' && tab.active) {
    if(tab.url.includes(".wikipedia.org/")) {
      chrome.scripting.executeScript({
        target: { tabId },
        function: init
      })
    }
  }
})
