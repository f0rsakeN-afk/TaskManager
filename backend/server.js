const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const port = process.env.PORT;
const DB = process.env.DB;
const password = process.env.PASSWORD;

const DBString = DB.replace('<password>', password);
mongoose.connect(DBString).then(() => {
    console.log("Database connection successful");
}).catch(err => {
    console.error("Database connection error:", err);
});
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})