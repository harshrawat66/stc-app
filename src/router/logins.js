const fetch = require('node-fetch');
const express = require('express');
const jwt = require('jsonwebtoken');
const studentUsers = require('../models/studentLogins');
const {jwtSigningKey} = require('../configBreakout')
const auth = require('../auth/studentAuth')
const router = new express.Router();

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

// router.post('/login/add', async (req, res) => {
//     const user = new Users(req.body)
//     try{
//         await user.save();
//         res.status(201).send(user);
//     } catch (e) {
//         res.status(400).send(e);
//     }
// });

router.post('/login/', async (req, res) => {
    const url = 'http://tech.kiet.edu/api/hrms/login/';
    const send = req.headers.authorization ;
    try{
        fetch(url, {
        method: 'post',
        headers: { 'Authorization': send },
            }).then(res => res.json()).then( async (json) => {
                const token = jwt.sign({ _id: json.data.lib_id },jwtSigningKey);
                const student = new studentUsers({
                    userName: json.data.lib_id,
                    token, 
            }); 
                await student.save() ;
                const reqToken = 'Bearer ' + token ;
                res.status(201).append('Authorization', reqToken).send({token}) ;
        }).catch((e) => {
            res.status(400).send({error: 'Not Authenticated 1'});
        })
    } catch (e) {
        res.status(400).send({error: 'Not Authenticated 2'});
    }
});

router.post('/logout', auth, async (req, res) => {
    try{
        await req.user.remove();
        res.send(req.user)
    }catch(e){
        res.status(500).send() ;
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