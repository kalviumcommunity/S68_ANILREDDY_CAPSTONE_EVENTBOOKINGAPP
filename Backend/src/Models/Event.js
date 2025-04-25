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

module.exports = mongoose.model('Event', eventSchema);
