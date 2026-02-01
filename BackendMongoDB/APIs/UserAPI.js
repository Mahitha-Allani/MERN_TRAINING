import express from 'express';
import { UserModel } from '../Schemas/userSchema.js';
export const userApp = express.Router();

//USER API ROUTES
userApp.post('/users', async (req, res) => {
    //get user obj from req body
    let newUser = req.body;
    //insert user obj into db
    let newUserDoc = new UserModel(newUser); 
    console.log(newUserDoc);      
    //save in database
    await newUserDoc.save();
    //send response
    res.status(201).json({ message: 'User created successfully'});
}
);
//create route to get all users
//read user
userApp.get('/users', async(req, res) => {
    //fetch all users from db
    const usersList=await UserModel.find()
    //send response
    res.status(200).json({message:'Users fetched successfully',payload:usersList});

});

//read users by id
userApp.get('/users/:id', async(req, res) => {
    //get user id from req params
    let objId=req.params.id;
    //fetch user from db by id
    let userObj=await UserModel.findById(objId);
    //send response
    res.status(200).json({message:'User fetched successfully',payload:userObj});
});

//update user 
userApp.put('/users/:id', async(req, res) => {
    //get user id from req params
    let objId=req.params.id;
    //get modified user from req body
    let modifiedUser=req.body;
    console.log(modifiedUser);
    //update user in db by id
    let latestUser=await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},{new:true});
    //send response
    res.status(200).json({message:'User updated successfully',payload:latestUser});
})

//delete user
userApp.delete('/users/:id', async(req, res) => {
    //get user id from req params
    let objId=req.params.id;
    //delete user from db by id
    let deletedUser=await UserModel.findByIdAndDelete(objId);
    //send response
    res.status(200).json({message:'User deleted successfully',payload:deletedUser});
})