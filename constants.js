let DATA_VIEW_ADDL_INFO_BIG_INDENT = false;
let EVENT_MAPPINGS = {
  'Original': {
    eventToGroup: {
      'Nothing': 'Nothing',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      'Error (Last Event Too Long)': 'Nothing',
      'Unlogged': 'Nothing',
      'Unknown': 'Unknown',
      'Programmatic Unlogged': 'Nothing',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___ & ___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___ & ___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___ & ___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___ & ___EVENT_DATA___': 'Fun',
      
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': '___EVENT_DATA___',
    },
    groupToColor: {
      'Nothing': 'lightblue',
      '___EVENT_DATA___': 'orange',
      '___EVENT_DATA___': 'blue',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': 'pink',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': 'red',
      '___EVENT_DATA___': 'green',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      'Fun': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      'Unknown': 'gray',
      'Default': 'black',
    },
  },
  'Cleaned': {
    eventToGroup: {
      'Nothing': 'Nothing',
      '___EVENT_DATA___': 'Nothing',
      'Error (Last Event Too Long)': 'Nothing',
      'Unlogged': 'Nothing',
      'Unknown': 'Nothing',
      'Programmatic Unlogged': 'Nothing',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': 'Pre and Post ___EVENT_DATA___ Preparations',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': 'Pre and Post ___EVENT_DATA___ Preparations',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___ & ___EVENT_DATA___': 'Fun',
      
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': '___EVENT_DATA___',
    },
    groupToColor: {
      'Nothing': 'lightblue',
      '___EVENT_DATA___': '___EVENT_DATA___',
      'Pre and Post ___EVENT_DATA___ Preparations': 'pink',
      '___EVENT_DATA___': 'red',
      '___EVENT_DATA___': 'orange',
      'Fun': '___EVENT_DATA___',
      '___EVENT_DATA___': 'blue',
      '___EVENT_DATA___': '___EVENT_DATA___',
      'Default': 'lightblue',
    },
  },
  'Super Cleaned': {
    eventToGroup: {
      'Nothing': 'Nothing',
      '___EVENT_DATA___': 'Nothing',
      'Error (Last Event Too Long)': 'Nothing',
      'Unlogged': 'Nothing',
      'Unknown': 'Nothing',
      'Programmatic Unlogged': 'Nothing',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': 'Pre and Post ___EVENT_DATA___ Preparations',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': 'Pre and Post ___EVENT_DATA___ Preparations',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___ & ___EVENT_DATA___': 'Fun',
      
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': 'Fun',
      '___EVENT_DATA___': '___EVENT_DATA___',
    },
    groupToColor: {
      'Nothing': 'lightblue',
      '___EVENT_DATA___': '___EVENT_DATA___',
      'Pre and Post ___EVENT_DATA___ Preparations': 'pink',
      '___EVENT_DATA___': 'red',
      'Fun': '___EVENT_DATA___',
      '___EVENT_DATA___': 'blue',
      '___EVENT_DATA___': '___EVENT_DATA___',
      'Default': 'lightblue',
    },
  },
  '___EVENT_DATA___ Only': {
    eventToGroup: {
      'Nothing': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      'Error (Last Event Too Long)': '___EVENT_DATA___',
      'Unlogged': '___EVENT_DATA___',
      'Unknown': '___EVENT_DATA___',
      'Programmatic Unlogged': 'Nothing',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ ___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___ & ___EVENT_DATA___': '___EVENT_DATA___',
      
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': '___EVENT_DATA___',
    },
    groupToColor: {
      '___EVENT_DATA___': '___EVENT_DATA___',
      '___EVENT_DATA___': 'orange',
      'Nothing': 'lightblue',
    },
  },
};
let DEFAULT_EVENT_MAPPING = 'Original';
let MULTI_EVENT_SPLIT = ' | ';
let TABLE_DATA_FULL_HEIGHT = 30; // in units of rem
let TABLE_STRIPE_WIDTH = 0.3; // in units of rem
