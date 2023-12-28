function getPseudoRawDataFromStorage() {
  let events = eventManager.getAllEvents();
  
  let maxEventsShown = editPageEventsShown.get();
  
  if (!Number.isSafeInteger(maxEventsShown)) {
    maxEventsShown = Infinity;
  }
  
  if (maxEventsShown < 0) {
    maxEventsShown = 0;
  }
  
  if (events.length > maxEventsShown) {
    let elidedNum = events.length - maxEventsShown;
    
    events = [
      `<${elidedNum} event${elidedNum != 1 ? 's' : ''} elided>`,
      ...events.slice(elidedNum),
    ];
  }
  
  return {
    ...(
      edit_show_other_data.checked ?
        {
          eventButtons: eventManager.getEventButtons(),
          eventPriorities: eventManager.getEventPriorities(),
          eventMappings: eventManager.getEventMappings(),
        } :
        {}
    ),
    ...(
      edit_show_events.checked ?
        { events } :
        {}
    ),
  };
}

function setPseudoRawDataInStorage(pseudoRawData) {
  if ('eventButtons' in pseudoRawData) {
    eventManager.setEventButtons(pseudoRawData.eventButtons);
  }
  
  if ('eventPriorities' in pseudoRawData) {
    eventManager.setEventPriorities(pseudoRawData.eventPriorities);
  }
  
  if ('eventMappings' in pseudoRawData) {
    eventManager.setEventMappings(pseudoRawData.eventMappings);
  }
  
  if ('events' in pseudoRawData) {
    if (typeof pseudoRawData.events[0] == 'string') {
      let match = /^<(\d+) events? elided>$/.exec(pseudoRawData.events[0]);
      
      let startIndex = parseInt(match[1]);
      
      if (Number.isSafeInteger(startIndex)) {
        eventManager.spliceAndAddEvents(startIndex, Infinity, pseudoRawData.events.slice(1));
      } else {
        alert('Index elided statement invalid');
      }
    } else {
      eventManager.setAllEvents(pseudoRawData.events);
    }
  }
}

function setPseudoRawData() {
  let parsedJson;
  
  try {
    parsedJson = JSON.parse(pseudo_raw_data_text.value);
  } catch {
    alert('JSON invalid');
  }
  
  setPseudoRawDataInStorage(parsedJson);
}

function reloadPseudoRawData() {
  pseudo_raw_data_text.value = prettifyJson(getPseudoRawDataFromStorage());
}

function editPageScrollToTop() {
  scrollToTop(pseudo_raw_data_text);
}

function editPageScrollToBottom() {
  scrollToBottom(pseudo_raw_data_text);
}
