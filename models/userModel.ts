const mongoose = require('mongoose');

const UserTable = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }


})
class userModel {
userModel = mongoose.model('UserTable', UserTable)

}
export default userModel