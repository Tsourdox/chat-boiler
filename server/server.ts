import { Server, Socket } from "socket.io";
import { ClientToServerEvents, InterServerEvents, ServerSocketData, ServerToClientEvents } from "../comms";

const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, ServerSocketData>();

// These types can be used to type parameters when defining functions
type IOServer = typeof io;
type IOSocket = Socket<ClientToServerEvents, ServerToClientEvents>;

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.emit("welcome", "Welcome to our chat app!");

  socket.on("chatMessage", (message) => {
    io.emit("chatMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

io.listen(4000);
