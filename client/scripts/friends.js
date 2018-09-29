var Friends = {

  friends: {},

  toggleStatus: function(newFriend) {
   
    Friends.friends[newFriend] = Friends.friends[newFriend] ? !Friends.friends[newFriend] : true;
    console.log(Friends.friends);
  },

  addListener: function($message) {

    $message.click(function(event) {
      
      var newFriend = $message.children().first().text().trim();

      // FIX THIS TOMORROW !!!
      ////////////////////////
      /////////////////////////////////////////////////////////////
      if(!Friends.friends[newFriend]){
        $message.addClass('trueFriend');
      }else{
        $message.removeClass('trueFriend');
        }

      console.log('added listener to:', newFriend);
      Friends.toggleStatus(newFriend);

    });
  }
};