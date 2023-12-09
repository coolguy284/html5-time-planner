function dateToFullString(dateObj) {
  return `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1 + '').padStart(2, '0')}-${(dateObj.getDate() + '').padStart(2, '0')} ${((dateObj.getHours() % 12 + 11) % 12 + 1 + '').padStart(2, '0')}:${(dateObj.getMinutes() + '').padStart(2, '0')}:${(dateObj.getSeconds() + '').padStart(2, '0')}.${(dateObj.getMilliseconds() + '').padStart(3, '0')} ${dateObj.getHours() >= 12 ? 'PM' : 'AM'} UTC${dateObj.getTimezoneOffset() > 0 ? '-' : '+'}${(Math.floor(Math.abs(dateObj.getTimezoneOffset()) / 60) + '').padStart(2, '0')}:${(Math.abs(dateObj.getTimezoneOffset()) % 60 + '').padStart(2, '0')}`;
}

function dateToFullStringWithOffset(dateObj, offset) {
  dateObj = new Date(dateObj.getTime() + offset * 60000);
  
  return `${dateObj.getUTCFullYear()}-${(dateObj.getUTCMonth() + 1 + '').padStart(2, '0')}-${(dateObj.getUTCDate() + '').padStart(2, '0')} ${((dateObj.getUTCHours() % 12 + 11) % 12 + 1 + '').padStart(2, '0')}:${(dateObj.getUTCMinutes() + '').padStart(2, '0')}:${(dateObj.getUTCSeconds() + '').padStart(2, '0')}.${(dateObj.getUTCMilliseconds() + '').padStart(3, '0')} ${dateObj.getUTCHours() >= 12 ? 'PM' : 'AM'} UTC${offset > 0 ? '-' : '+'}${(Math.floor(Math.abs(offset) / 60) + '').padStart(2, '0')}:${(Math.abs(offset) % 60 + '').padStart(2, '0')}`;
}

function dateToDateString(dateObj) {
  return `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1 + '').padStart(2, '0')}-${(dateObj.getDate() + '').padStart(2, '0')}`;
}

function dateStringToDate(dateStr) {
  let dateStrSplit = dateStr.split(' ');
  let dateStrTimeSplit = dateStrSplit[1].split(':');
  let hoursUnclocked = dateStrTimeSplit[0] == '12' ? 0 : dateStrTimeSplit[0];
  return new Date(new Date(`${dateStrSplit[0]}T${((dateStrSplit[2] == 'PM' ? parseInt(hoursUnclocked) + 12 : hoursUnclocked) + '').padStart(2, '0')}:${dateStrTimeSplit[1]}:${dateStrTimeSplit[2]}Z`).getTime() + (dateStrSplit[3][3] == '-' ? -1 : 1) * (parseInt(dateStrSplit[3].slice(4, 6)) * 60 + parseInt(dateStrSplit[3].slice(7, 9))) * -60_000);
}

// returns tz offset in minutes. UTC-XX:XX is negative. this is the opposite of Date.getTimezoneOffset()
function dateStringToTZOffset(dateStr) {
  let dateStrSplit = dateStr.split(' ');
  return (dateStrSplit[3][3] == '-' ? -1 : 1) * (parseInt(dateStrSplit[3].slice(4, 6)) * 60 + parseInt(dateStrSplit[3].slice(7, 9)));
}

function getEvents(eventName) {
  return eventName.split(MULTI_EVENT_SPLIT);
}

function getEventGroups(eventName) {
  let eventToGroupMapping = eventMappings[event_mappings_select.value].eventToGroup;
  
  return getEvents(eventName).map(eventNameEntry => {
    if (eventNameEntry in eventToGroupMapping) {
      return eventToGroupMapping[eventNameEntry];
    } else {
      return EVENT_MAPPINGS_DEFAULT_EVENT_GROUP;
    }
  });
}

function getEventGroup(eventNameSingle) {
  let eventToGroupMapping = eventMappings[event_mappings_select.value].eventToGroup;
  
  if (eventNameSingle in eventToGroupMapping) {
    return eventToGroupMapping[eventNameSingle];
  } else {
    return EVENT_MAPPINGS_DEFAULT_EVENT_GROUP;
  }
}

// getss the event with highest priority from a list
function getEventSingle(eventName) {
  return getEvents(eventName).map(x => [x, eventPriorities[x]]).reduce((a, c) => c[1] > a[1] ? c : a)[0];
}

function getEventGroupSingle(eventName) {
  return getEventGroup(getEventSingle(eventName));
}

function getEventGroupColors(groupNames) {
  return groupNames.map(getEventGroupColor);
}

function getEventGroupColor(groupName) {
  let groupToColorMapping = eventMappings[event_mappings_select.value].groupToColor;
  
  if (groupName in groupToColorMapping) {
    return groupToColorMapping[groupName];
  } else {
    return groupToColorMapping[EVENT_MAPPINGS_DEFAULT_EVENT_GROUP] ?? EVENT_MAPPINGS_DEFAULT_EVENT_GROUP_COLOR;
  }
}

function getEventColors(eventName) {
  return getEventGroupColors(getEventGroups(eventName));
}

function getEventColor(eventName) {
  return getEventGroupColor(getEventGroupSingle(eventName));
}

function eventArrOnlyToggles(eventNames) {
  return eventNames.reduce((a, c) => toggleEventsSet.has(c) ? a + 1 : a, 0) == eventNames.length;
}

function eventStringToEventArr(eventString) {
  return eventString.split(MULTI_EVENT_SPLIT).filter(x => x != EVENT_NOTHING);
}

function eventArrToEventString(eventArr) {
  if (eventArr.length == 0) {
    return EVENT_NOTHING;
  } else {
    return eventArr.join(MULTI_EVENT_SPLIT);
  }
}

function removeAllChildren(elem) {
  // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript/3955238#3955238
  while (elem.firstChild) {
    elem.removeChild(elem.lastChild);
  }
}

function removeAllChildrenButOne(elem) {
  while (elem.children.length > 1) {
    elem.removeChild(elem.lastChild);
  }
}
