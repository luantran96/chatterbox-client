var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

    $('select').on('change', function(e) {

      console.log(this.value);        
      $('#chats').empty();
      App.fetch();

    });

    RoomsView.$button.click(function() {

      let newRoom = prompt('Enter new room name');
      console.log(newRoom);
      Rooms.add(newRoom);
      RoomsView.renderRoom(newRoom);
    });
  },

  render: function() {
  },

  renderRoom: function(room) {

    RoomsView.$select.append(`<option>${room}</option>`);
  }
};
