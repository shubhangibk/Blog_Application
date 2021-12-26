import mongoose from 'mongoose';



const Connection = async (username, password) => {
    const URL = 'mongodb+srv://Shubh:newpass@cluster0.xdthg.mongodb.net/Blogs?retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;