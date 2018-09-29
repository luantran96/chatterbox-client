var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {	

  },

  render: function() {
  },


  renderMessage: function(message) {

    let $message = $(MessageView.render(message));
    Friends.addListener($message);
    MessagesView.$chats.prepend($message);
  }
};