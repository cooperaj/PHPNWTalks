/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

Pebble.timelineSubscribe('all', 
  function () { 
    console.log('Subscribed to topic: all');
  }, 
  function (errorString) { 
    console.log('Error subscribing to topic: ' + errorString);
  }
);                         

var wind = new UI.Window({ fullscreen: true });
var image = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  image: 'images/lanyard.png'
});
wind.add(image);
wind.show();
