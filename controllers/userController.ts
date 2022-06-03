import express from 'express'
import userModel from '../models/userModel'

class UserController{
    user = new userModel();
    getAllUsers = async(request: express.Request, response: express.Response) => {
		const users = await this.user.userModel.find({})
    console.log(users)
    response.send(users)
    // response.render('pages/home',{message:users})
	}
    createUser = async(request:express.Request,response:express.Response)=>{
        const data = request.body;
        const username = data.username;
        const password = data.password;
        const user = await this.user.userModel({username:username,password:password})
        user.save();
        if(user!=null){
            console.log("User",user," Created Sucessfuly")
            response.send(`User" ${user} Created Sucessfuly`)
        }else{
            console.log("An error occoured while creating user.")
            response.send(`User" ${user} Failed to Create`)
        }
    }
    updateUser = async(request:express.Request,response:express.Response)=>{
        const data = request.body;
        const username = data.username;
        const password = data.password;
        const user = await this.user.userModel.findOneAndUpdate({username:username},{password:password})
        if(user!=null){
            user.save()
            console.log("User",user," Created Sucessfuly")
            response.send(`Password Updated" ${user} Sucessfuly`)
        }else{
            console.log("An error occoured while creating user.")
            response.send(`User" ${user} Failed to Update`)
        }
    }
    deleteUser =async (request:express.Request,response:express.Response) => {
        const data = request.body;
        const username = data.username;
        const password = data.password;
        const user = await this.user.userModel.deleteOne({username:username,password:password})
        if(user.deletedCount==1){
            response.send(`${username}Deleted`)
        }else{
            response.send("User Not Found...")
        }
        
    }
}
export default UserController