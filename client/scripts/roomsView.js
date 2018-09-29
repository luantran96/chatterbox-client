var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

    RoomsView.$button.click(function() {

      let newRoom = prompt("Enter new room name ");
      console.log(newRoom);
      Rooms.add(newRoom);
    });
  },

  render: function() {
  },

  renderRoom: function(room) {

    RoomsView.$select.append(`<option>${room}</option>`);
  }
};
