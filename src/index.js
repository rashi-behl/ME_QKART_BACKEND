const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server = config.mongoose.url;

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
mongoose
  .connect(server)
  .then(() => console.log("Connected to DB at", server))
  .catch((e) => console.log("Failed to connect to DB", e));

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

const PORT = config.port || 8083;
app.listen(PORT, () => {
  console.log("Server is listening at", PORT, "...");
});
