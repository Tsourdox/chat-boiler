import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "../../comms";
import "./style.css";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

const messages = document.getElementById("messages");
const form = document.getElementById("form");
const input = document.getElementById("input") as HTMLInputElement;

form?.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input?.value) {
    socket.emit("chatMessage", input.value);
    input.value = "";
  }
});

socket.on("welcome", (message) => {
  console.log(message);
});

socket.on("chatMessage", (message) => {
  const item = document.createElement("li");
  item.textContent = message;
  messages?.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
