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
      if (!Friends.friends[newFriend]) {
        Friends.highlightFriends(newFriend);
        //$message.addClass('trueFriend');
      } else {
        Friends.unfriendFriends(newFriend);
      }

      console.log('added listener to:', newFriend);
      Friends.toggleStatus(newFriend);

    });
  },
  highlightFriends: function(newFriend) {

    var $newFriendMessages = $('.' + newFriend);
    $newFriendMessages.each(function(index, friendDOMelement) {
      var $friendDOMelement = $(friendDOMelement);
      $friendDOMelement.addClass('trueFriend');
      console.log('inside each', $friendDOMelement);
    });

  },

  unfriendFriends: function(newFriend) {
  
  
  }
};