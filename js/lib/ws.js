var $WS = {repos:{}};

$WS.connect = function(options) {
	if (WebSocket) {
		var socket = new WebSocket(options.url);

		if (options.onopen) {
			socket.onopen = options.onopen;
		}

		if (options.onmessage) {
			socket.onmessage = options.onmessage;
		}
		
		if (options.onclose) {
			socket.onclose = options.onclose;
		}

		if (options.onerror) {
			socket.onerror = options.onerror;
		}

		if (options.key) {
			$WS.repos[options.key] = socket;
		}

		return socket;
	} else {
		return null;
	}
	
}