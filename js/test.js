$WS.connect({
	key: "message",
	url: "ws://www.cllz.com:8080/websocket/message",
	onopen: function(event) {
		this.send('A new user joined!');
	},
	onmessage: function(event) {
		$("#content").append('<p>'+event.data+'</p>');
		console.log('Client received a message', event.data); 
	},
	onclose: function(event) {
		console.log('Client notified socket has closed', event.data);
	},
	onerror: function(event) {
		console.log("Error: " + event.data);
	}
});

$(document).ready(function(){
	$("#chat-send").bind('click', function() {
		var message = $("#chat-message").val();
		if (message && message.length > 0) {
			if($WS.repos.message) {
				$WS.repos.message.send(message);
			}
		}
		var message = $("#chat-message").val('');
	});
});