const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./db");
const authRoutes = require("./routes/authRoutes");
const mentorRoutes = require("./routes/mentorRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Sync database
sequelize.sync().then(() => console.log("Database synced successfully!"));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api", mentorRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log('Server running on http://localhost:${PORT}'));

/*

// yaha se chat system embed hua 


const http = require("http");
const socketIo = require("socket.io");
require("dotenv").config();



const server = http.createServer(app); // Create HTTP server
const io = socketIo(server); // Attach Socket.IO to the server


// Middleware
app.use(express.json());

// WebSocket Chat Server Code
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Listen for chat messages
  socket.on("sendMessage", (data) => {
    console.log("Message received:", data);
    // Broadcast the message to all connected clients
    io.emit("receiveMessage", data);
  });

  // Handle user disconnect
  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

// Test route to check server status
app.get("/", (req, res) => {
  res.send("Chat server is running!");
});

const initChatServer = require("./chatServer");
initChatServer(server);



document.getElementById("send-message").addEventListener("click", () => {
    const message = document.getElementById("chat-message").value.trim();
  
    if (!message) {
      console.log("Message is empty!"); // Debug log
      return; // Do nothing if the message is empty
    }
  
    console.log("Message to send:", message); // Debug log to verify input
  });
  */