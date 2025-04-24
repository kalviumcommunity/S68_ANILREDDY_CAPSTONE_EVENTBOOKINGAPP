const mongoose = require('mongoose');


const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    availableSeats: {
        type: Number,
        required: true
    },
    description: String
}, {
  timestamps: true
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/.+\@.+\..+/, "Please enter a valid email adderss"],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Event', eventSchema);
module.exports = mongoose.model('User', userSchema);