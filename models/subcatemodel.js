const mongoose = require('mongoose');

const SubcategorySchema = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    subcategory: {
        type: String,
        require: true,
    },
})

const tblName = mongoose.model('subcategory', SubcategorySchema);

module.exports = tblName;