

var Messages = {

	message : function(userName,Text, roomName) {
	 this.username = userName;
	 this.text = Text;
	 this.roomname = roomName; 
	},

	createMessage: function(userName,Text, roomName) {
		var message = new Messages.message(userName,Text,roomName);
		return message;
	},
	
	sendMessage: function(message) {

		$.ajax({
		  // This is the url you should use to communicate with the parse API server.
		  url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
		  type: 'POST',
		  data: JSON.stringify(message),
		  contentType: 'application/json',
		  success: function (data) {
		    console.log('chatterbox: Message sent');
		  },
		  error: function (data) {
		    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
		    console.error('chatterbox: Failed to send message', data);
		  }
		});
	}
};

// Parse server : http://parse.sfm8.hackreactor.com/


var retrieveMessage = function() {

		$.ajax({
		  // This is the url you should use to communicate with the parse API server.
		  url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
		  type: 'GET',
		  data: JSON.stringify(message),
		  contentType: 'application/json',
		  success: function (data) {
		    console.log('chatterbox: Message sent');
		  },
		  error: function (data) {
		    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
		    console.error('chatterbox: Failed to send message', data);
		  }
		});

}

