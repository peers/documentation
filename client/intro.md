---
sidebar_position: 1
---
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Setup

### Include the Javascript client

To use PeerJS in your web app, you need to add the PeerJS client library to your webpage.

<Tabs>
<TabItem value="import" label={"NPM"}>

```bash
npm i --save peerjs
```

```ts
import { Peer } from "peerjs";
```

</TabItem>
<TabItem value="module" label={"ES6"}>

```html
<script type="module">
	import { Peer } from "https://esm.sh/peerjs@1.4.7";
</script>
```

</TabItem>
<TabItem value="classic" label={"Global"}>

```html
<script
	src="https://cdn.jsdelivr.net/npm/peerjs@1.4.7/dist/peerjs.min.js"
	integrity="sha256-nzknQ7h6GZC+ElR8hVgCHkXve40jXh8om8YAkw/sgQY="
	crossorigin="anonymous"
></script>
```

</TabItem>
</Tabs>

### Create the Peer object

The [Peer](/api/client/class/Peer) object is where we create and receive connections.

```ts
const peer = new Peer();
```

Every `Peer` is assigned a random, unique ID when it’s created.

```ts
peer.on("open", (id) => {
	console.log("My peer ID is: " + id);
});
```

When we want to connect to another peer, we’ll need to know their peer id. **You’re in charge of communicating the peer IDs between users of your site**.

## Usage

To use PeerJS in your web app, you need to create a `Peer` object and connect to other peers using their IDs.

### Data Connection

You can start a data connection by calling [`peer.connect`](/api/client/class/Peer#connect) with the peer ID of the destination peer.

```ts
const conn = peer.connect("dest-peer-id");
```

Anytime another peer attempts to connect to your peer ID, you’ll receive a `connection` event.

```ts
peer.on('connection', conn => {
    ...
});
```

The `peer.connect` and the callback of the `connection` event will both provide a [`DataConnection`](/api/client/class/DataConnection) object. This object will allow you to send and receive data:

```ts
conn.on("open", () => {
	// Receive messages
	conn.on("data", (data) => {
		console.log("Received", data);
	});

	// Send messages
	conn.send("Hello!");
});
```

### Media Connection

You can make a video or audio call by calling [`peer.call`](/api/client/class/Peer#call) with the peer ID of the destination peer and your media stream.

```ts
// Call a peer, providing our mediaStream
const call = peer.call("dest-peer-id", mediaStream);
```

When a peer calls you, the `call` event is emitted. Unlike data connections, when receiving a call event, the call must be answered or no connection is established.

```ts
peer.on("call", (call) => {
	// Answer the call, providing our mediaStream
	call.answer(mediaStream);
});
```

When calling or answering a call, a [`MediaStream`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) should be provided. The `MediaStream` represents the local video (webcam) or audio stream and can be obtained with some (browser-specific) version of [`getUserMedia`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia).

When answering a call, the `MediaStream` is optional and if none is provided then a one-way call is established.

Once the call is established, its [`open` property](/api/client/class/MediaConnection#open) is set to `true`.

The `peer.call` and the callback of the `call` event provide a [`MediaConnection`](/api/client/class/MediaConnection) object. The `MediaConnection` object itself emits a `stream` event whose callback includes the video/audio stream of the other peer.

```ts
call.on("stream", (stream) => {
	// `stream` is the MediaStream of the remote peer.
	// Here you'd add it to an HTML video/canvas element.
});
```
