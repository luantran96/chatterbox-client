var FormView = {

  $form: $('form'),
  $message: $('#message'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    let inputText = FormView.$message[0].value;
    inputText = encodeURI(inputText);
    event.preventDefault();
    console.log(inputText);

    var currentlySelectedRoom = $('.RoomDropDown :selected').text();
    console.log(currentlySelectedRoom);
    var newMessage = Messages.createMessage(App.username, inputText, currentlySelectedRoom);
    console.log(newMessage);
    App.send(newMessage);
    MessagesView.renderMessage(newMessage);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};