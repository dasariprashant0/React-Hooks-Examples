import React, { useEffect, useState } from "react";

function createConnection(serverUrl, roomId) {
  return {
    connect() {
      console.log(`Connecting to ${roomId} room at ${serverUrl} ...`);
    },
    disconnect() {
      console.log(`Disconnected from ${roomId} room at ${serverUrl}`);
    },
  };
}

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return (
    <>
      <label htmlFor="">
        Server URL:{" "}
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

const Effect3 = () => {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>useEffect3 Hook Example3:</h1>
      <p>Please open the console to see the changes</p>
      <>
        <label htmlFor="">
          Choose the chat room:{" "}
          <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
            <option value="general">General</option>
            <option value="travel">Travel</option>
            <option value="music">Music</option>
          </select>
        </label>
        <button onClick={() => setShow(!show)}>
          {show ? "Close Chat" : "Open Chat"}
        </button>
        {show && <hr />}
        {show && <ChatRoom roomId={roomId} />}
      </>
    </div>
  );
};

export default Effect3;
