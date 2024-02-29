import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is require'],
    },
    subject: {
        type: String,
        required: [true, 'subject is require'],
    }
});
const User_Model = mongoose.model('userData', UserSchema);
export default User_Model