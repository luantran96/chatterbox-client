var Friends = {

  friends: {},

  toggleStatus: function(newFriend) {
   
    Friends.friends[newFriend] = Friends.friends[newFriend] ? !Friends.friends[newFriend] : true;
    console.log(Friends.friends);
  },

  addListener: function($message) {

    $message.click(function(event) {

      var newFriend = $message.children().first().text().trim();
      console.log('added listener to:', newFriend);
      Friends.toggleStatus(newFriend);

    });
  }
};