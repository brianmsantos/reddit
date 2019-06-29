import mongoose from 'mongoose';
///way to define our model/data tables 
const { Scehma } = mongoose;

const userSchema = new Schema ({
    username: {
        type: String,
        required: true, 
        //5 is the min length, with the next property being the message in case it is not 5 chars or more
        minlength: [5, 'Username must be 5 characters or more.']
    }, 
    password: {
        type: String,
        required: true, 
        minlength: [8, 'Password must be 8 characters or more.']
    },
});

//attach schema to our model 
//write some encryption for password

const User = mongoose.model('User', userSchema)
export default User;