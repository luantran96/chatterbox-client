var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

    $('select').on('change', function(e) {
        
      $('#chats').empty();
      App.fetch();
      Friends.render();

    });

    RoomsView.$button.click(function() {
      let newRoom = prompt('Enter new room name');

      if (newRoom) {
        Rooms.add(newRoom);
        RoomsView.renderRoom(newRoom);
      }
    });

    RoomsView.render();
  },

  render: function() {
    for (var room in Rooms.rooms) {
      RoomsView.renderRoom(Rooms.rooms[room]);
    }
  },

  renderRoom: function(room) {

    RoomsView.$select.append(`<option>${room}</option>`);
  }
};
