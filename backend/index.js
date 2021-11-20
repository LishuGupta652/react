// imports
import express from express;


// App Config
const app = express;
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.JSON())

// DB config

// Api routes
app.get('/', (req, res ) => {
    res.status(200).send("hello")
})


// listen
app.listen(PORT, () => { console.log(`app live on http://localhost:${PORT}`);})