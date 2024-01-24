const categorymodel = require('../models/categorymodel');

const tablecategery = async (req, res) => {
    try {
        let user = await categorymodel.find({});
        return res.render('categorys/tablecategery', {
            record: user,
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

const formcategory = (req, res) => {
    return res.render('categorys/formcategory');
}

const Addcategory = async (req, res) => {
    try {
        let user = await categorymodel.create({
            category: req.body.category,
        })
        return res.redirect('tablecategery');
    } catch (error) {
        console.log(error);
        return false;
    }
}

const deleterecord = async (req, res) => {
    try {
        let delId = await categorymodel.findById(req.query.delid);
        if (!delId) {
            console.log("delete not feach");
            return res.redirect('back');
        }
        let deleid = await categorymodel.findByIdAndDelete(req.query.delid);
        let alldelRecord = await categorymodel.deleteMany({ categoryId: req.query.delid });
        console.log(alldelRecord);
        return res.redirect('back');
    } catch (error) {
        console.log(error);
        return false;
    }
}

const editRecord = async (req, res) => {
    try {
        let edituser = await categorymodel.findById(req.query.editId);
        return res.render('categorys/edit', {
            single: edituser
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

const updatecategory = async (req, res) => {
    try {
        let upadteUser = await categorymodel.findByIdAndUpdate(req.body.editid, {
            category: req.body.category
        })
        return res.redirect('/tablecategery');
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = ({
    tablecategery, formcategory, Addcategory, deleterecord, editRecord, updatecategory
})