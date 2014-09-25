// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    // this.model.on('change:collection', function() {
    //   this.render();
    // });

// this.model.on('add'){this.collection.playFirst();}

    this.render();

  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});


// this.$el.children().detach();

// this.$el.html('<th>Library</th>').append(
//   this.collection.map(function(song){
//     return new LibraryEntryView({model: song}).render();
//   })
