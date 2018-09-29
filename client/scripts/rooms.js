var Rooms = {

  rooms: {},

  add: function(roomName) {
    roomName = roomName.trim();
    roomName = encodeURI(roomName);
    Rooms.rooms[(roomName||'').trim()] = roomName;
    console.log(Rooms.rooms);
  }
};