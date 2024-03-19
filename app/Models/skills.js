const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
    skillName: {
        type: String,
        required: true
    },
    percentage: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Skills', skillsSchema);