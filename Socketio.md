Socket.io
===========================

***WEBSOCKET?***

* 서버와 클라이언트 간 socket connection을 유지해서 언제든 양방향 통신/데이터 전송이 가능한 Transport Protocol

***SOCKET.IO?***

* 서버와 클라이언트의 효율적인 양방향 통신 구조 => 실시간 어플리케이션에 구현
* 각 클라이언트에서 서버로 정보를 보냄(emit)
* 서버는 받은 정보를 나머지 다른 클라이언트들에게 보냄(emit).

***Event***

* connect
* disconnect
* error
* reconnect (통신이 끊어지면 계속 재접속 시도)

***Data Transport***

* emit 전송
* on 수신

```javascript
// server
socket.emit('message', msg);

// client
socket.on('message', callback());
```

***Usage***

* 연 포트와 소켓을 연동 (소켓과 서버 포트를 다른 곳에서 열 수 있음)
* 클라이언트측에서 정보를 보낼 서버 따로 설정

```javascript
// main.js
import socketIO from 'socket.io';

const server = app.listen(port);
const io = socketIO(server);

io.on('connection', (socket) => {
	console.log('user connected');

	socket.on('disconnect', () => {
		console.log('user disconnected');
	});

	socket.on('SEND_MESSAGE', (data) => {
		io.emit('RECIEVED_MESSAGE', data);
	});
});
```

```javascript
// Component.js
import socketIOClient from 'socket.io-client';

this.socket = socketIOClient('http://192.168.219.135:3000');
this.socket.on('RECIEVED_MESSAGE', (data) => {
	console.log('Client Recieved data!');
	addMessage(data);
});

_onSendMessage = (e) => {
	e.preventDefault();
	this.socket.emit('SEND_MESSAGE', {
		author: this.state.foo,
		quote: this.state.bar
	});
}
```








