var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
  
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:

      console.log(data);
      var currentlySelectedRoom = $('.RoomDropDown :selected').text();

      for (var i = data.results.length-1; i > 0;i--) {
      
        if(currentlySelectedRoom === data.results[i].roomname){
          MessagesView.renderMessage(data.results[i]); 
        }

      }

      callback();
    });
  },

  send: function(message) {

    Parse.create(message);
    
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
