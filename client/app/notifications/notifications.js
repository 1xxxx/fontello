'use strict';


/*global $, _, N*/


////////////////////////////////////////////////////////////////////////////////


function notify(type, options, message) {
  if (!message) {
    message = options;
    options = {};
  }

  $.noty(_.extend({layout: 'topRight'}, options, {
    type:   type,
    text:   message,
    theme:  'noty_theme_twitter'
  }));
}


////////////////////////////////////////////////////////////////////////////////


N.on('notification', notify);
