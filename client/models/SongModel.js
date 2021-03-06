// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  // no longer called from library
  // now called from queue
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  ended: function(){
    this.trigger('ended', this);
  },
  enqueue: function(){
    this.trigger('enqueue', this);
  },
  dequeue: function(){
    this.trigger('dequeue', this);
  }
});
