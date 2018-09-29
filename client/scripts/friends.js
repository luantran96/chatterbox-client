var Friends = {

  friends: JSON.parse(window.localStorage.getItem('friends')) || {},

  toggleStatus: function(newFriend) {
   
  // 
    Friends.friends[newFriend] = Friends.friends[newFriend] ?
      !Friends.friends[newFriend] : true;
    window.localStorage.setItem('friends', JSON.stringify(Friends.friends));
  
    console.log(Friends.friends);
  },

  addListener: function($message) {

    $message.click(function(event) {
      
      var newFriend = $message.children().first().text().trim();

      if (!Friends.friends[newFriend]) {
        Friends.highlightFriends(newFriend);
      } else {
        Friends.unfriendFriends(newFriend);
      }

      console.log('added listener to:', newFriend);
      Friends.toggleStatus(newFriend);

    });
  },

  render: function() {
    _.each(Friends.friends, function(isFriend, friend) {
      console.log('This is friend:', friend);
      if (isFriend) {
        Friends.highlightFriends(friend);
      }
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

    var $newFriendMessages = $('.' + newFriend);
    $newFriendMessages.each(function(index, friendDOMelement) {
      var $friendDOMelement = $(friendDOMelement);
      $friendDOMelement.removeClass('trueFriend');
      console.log('inside each', $friendDOMelement);
    });  
  }
};