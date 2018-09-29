var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    var newMessage = Messages.createMessage('LT','Im super hungry','default');
    App.send(newMessage);

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      var currentlySelectedRoom = $('.RoomDropDown :selected').text();
       console.log(data);
      for(var i = 0 ; i < 50; i++){

          
          if(currentlySelectedRoom === data.results[i].roomname){
            // Only add in html it matches room name
            console.log(data.results[i]);
            //MessagesView.renderMessage(data.results[i]); 
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
