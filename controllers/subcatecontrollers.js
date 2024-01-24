const categoryModel = require('../models/categorymodel');
const subcategoryModel = require('../models/subcatemodel');

const tablesub = async (req, res) => {
    try {
        let subcategory = await subcategoryModel.find({}).populate('categoryId');
        return res.render('subcategory/tablesub', {
            record: subcategory
        });
    } catch (error) {
        console.log(error);
        return false;
    }
}

const formsub = async (req, res) => {
    try {
        let subcategory = await categoryModel.find({})
        return res.render('subcategory/formsub', {
            category: subcategory
        });
    } catch (error) {
        console.log(error);
        return false;
    }
}

const Addsubcategory = async (req, res) => {
    try {
        let categoryadd = await subcategoryModel.create({
            categoryId: req.body.category,
            subcategory: req.body.subcategory
        })
        return res.redirect('back');
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = ({
    tablesub, formsub, Addsubcategory
})