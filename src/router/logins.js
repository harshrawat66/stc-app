const express = require('express')
const Users = require('../models/logins')
const router = new express.Router()

router.post('/login/add', async (req, res) => {
    const user = new Users(req.body)
    try{
        await user.save();
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});

// router.get('/login', async (req, res)=> {
//     try{
//         const user = await Users.find({});
//         res.send(user);
//     }catch(e){
//         res.status(500).send();
//     }
// });

// router.get('/login/:id', async (req, res)=> {
//     const _id =  req.params.id;
//     try{
//         const user = await Users.findById(_id) ;
//         if(!user){
//             return res.status(404).send();
//         }
//         res.send(user);
//     }catch(e){
//         res.status(500).send();
//     }
// });

// router.patch('/login/:id', async (req, res) => {
//     const updates = Object.keys(req.body);
//     const allowedUpdates = ['userName', 'password'] ;
//     const isValidOpertion = updates.every((update)=> {
//         return allowedUpdates.includes(update) ;
//     });
//     if(!isValidOpertion){
//         return res.status(400).send({error: 'Invalid Updates!'});
//     }
//     try{
//         const user = await Users.findByIdAndUpdate(req.params.id, req.body, {
//             new: true,
//             runValidators: true
//         });
//         if(!user){
//             return res.status(404).send();
//         }
//         res.send(user);
//     }catch(e){
//         res.status(400).send(e) ;
//     }
// });

// router.delete('/login/:id', async (req,res) =>{
//     try{
//         const user = await Users.findByIdAndDelete(req.params.id)
//         if(!user){
//             return res.status(404).send();
//         }
//         res.send(user);
//     }catch(e){
//         res.status(500).send() ;
//     }
// });

module.exports = router;