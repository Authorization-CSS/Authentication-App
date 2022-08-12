const app = require("./server/api/index");
const db = require("./server/db/index");
const PORT = process.env.PORT || 3000;

db.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
