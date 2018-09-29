var MessagesView = {

  $chats: $('#chats'),


  initialize: function() {	
      
    $('.Refresh').click(function () {

      $('#chats').empty();
      App.fetch();
      
    });

  },

  render: function() {
  },


  renderMessage: function(message) {

    let $message = $(MessageView.render(message));
    Friends.addListener($message);
    MessagesView.$chats.prepend($message);
  }
};