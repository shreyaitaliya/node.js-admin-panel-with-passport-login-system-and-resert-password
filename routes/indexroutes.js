const express = require('express');

const routes = express.Router();

const registercontoller = require('../controllers/registercontrollers');
const categorycontoller = require('../controllers/categorycontrollers');
const subcategoryconteroolr = require('../controllers/subcatecontrollers');

const passport = require('passport');

routes.get('/', registercontoller.login);
routes.get('/register', registercontoller.register);
routes.post('/registerUser', registercontoller.registerUser);
routes.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), registercontoller.loginuser);
routes.get('/dashbord', passport.checkUser, registercontoller.dashbord);
routes.get('/profile', registercontoller.profile);
routes.post('/updaterUser', registercontoller.updaterUser);
routes.get('/logout', registercontoller.logout);
routes.get('/tablecategery', categorycontoller.tablecategery);
routes.get('/formcategory', categorycontoller.formcategory);
routes.post('/Addcategory', categorycontoller.Addcategory);
routes.get('/deleterecord', categorycontoller.deleterecord);
routes.get('/editRecord', categorycontoller.editRecord);
routes.post('/updatecategory', categorycontoller.updatecategory);
routes.get('/forgetpassword', registercontoller.forgetpassword);
routes.post('/resetpassword', registercontoller.resetpassword);
routes.get('/otp', registercontoller.otp);
routes.post('/postOtp', registercontoller.postOtp);
routes.get('/newpassword', registercontoller.newpassword);
routes.post('/addpassword', registercontoller.addpassword);
routes.get('/tablesub', subcategoryconteroolr.tablesub);
routes.get('/formsub', subcategoryconteroolr.formsub);
routes.post('/Addsubcategory', subcategoryconteroolr.Addsubcategory);



module.exports = routes;