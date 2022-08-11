const app = require('./server/app');
const db = require('./server/db/index');
const PORT = process.env.PORT || 3000;

db.sync({force: true}).then(function(){
    app.listen(PORT, () =>{
        console.log(`Listening on port ${PORT}`)
    })
});



