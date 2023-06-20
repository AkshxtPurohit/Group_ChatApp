

const io = require( "socket.io" )();
const socketapi = {
    io: io
};
var onlineusers=[];

    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);
      
        socket.on("message", (data) => {
          // watchman emits to everyone
          io.emit("message", data);
          console.log("Message is being sent to everyone", data.message);
        });
      
        socket.on("username enter", (data) => {
          // watchman emits to everyone
          io.emit("username enter", data);
        });
      
        socket.on("username left", (data) => {
          io.emit("username left", data);
        });
      
        socket.on("disconnect", () => {
          console.log("User disconnected:", socket.id);
        });
      });


module.exports = socketapi;