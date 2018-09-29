var Rooms = {

  rooms: JSON.parse(window.localStorage.getItem('rooms')) || {},

  add: function(roomName) {
    roomName = roomName.trim();
    Rooms.rooms[(roomName||'').trim()] = roomName;
    window.localStorage.setItem('rooms', JSON.stringify(Rooms.rooms));
    console.log(Rooms.rooms);
  }
};