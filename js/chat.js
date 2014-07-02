$WS.connect({
	key: "message",
	url: "ws://localhost:8080/webchat/cbus",
	onopen: function(event) {
		this.send('{"header":{"type": "request", "uid": "111111111"},  "module":{"name":"oauth", "action":"login", "data": {"username":"adrian", "password":"abc123_"}}}');
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