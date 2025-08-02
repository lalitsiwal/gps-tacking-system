import express from 'express';
import cors from 'cors';
import connectDB from './DB/connectDB.js'

const app = express();

// MIDDLEWARE

// ROUTES



const PORT = process.env.PORT || 5055;

app.listen(PORT, () => {
    connectDB();
    console.log(`server running at port ${PORT}`);
})
