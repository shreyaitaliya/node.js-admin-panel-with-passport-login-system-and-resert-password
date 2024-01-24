const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    category: {
        type: String,
        require: true,
    },
})

const tblName = mongoose.model('category', categorySchema);

module.exports = tblName;