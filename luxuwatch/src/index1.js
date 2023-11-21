import app from "./server.js";
import {connectDB}  from "./db.js";

connectDB();
app.listen(3000);
console.log("Server On port 3000");