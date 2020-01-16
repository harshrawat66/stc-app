const express = require('express')
const Reports = require('../models/reports')
const router = new express.Router()

router.post('/reports', async (req, res) => {
    const report = new Reports(req.body)
    try{
        await report.save();
        res.status(201).send(report);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/reports', async (req, res)=> {
    try{
        const report = await Reports.find({});
        res.send(report);
    }catch(e){
        res.status(500).send();
    }
});

router.get('/reports/:id', async (req, res)=> {
    const _id =  req.params.id;
    try{
        const report = await Reports.findById(_id) ;
        if(!report){
            return res.status(404).send();
        }
        res.send(report);
    }catch(e){
        res.status(500).send();
    }
});

router.patch('/reports/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['companyTitle', 'costToCompany', 'candidatesAppeared', 'candidatesSelected','report','jobEligibility','jobProfile'] ;
    const isValidOpertion = updates.every((update)=> {
        return allowedUpdates.includes(update) ;
    });
    if(!isValidOpertion){
        return res.status(400).send({error: 'Invalid Updates!'});
    }
    try{
        const report = await Reports.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if(!report){
            return res.status(404).send();
        }
        res.send(report);
    }catch(e){
        res.status(400).send(e) ;
    }
});

router.delete('/reports/:id', async (req,res) =>{
    try{
        const report = await Reports.findByIdAndDelete(req.params.id)
        if(!report){
            return res.status(404).send();
        }
        res.send(report);
    }catch(e){
        res.status(500).send() ;
    }
});

module.exports = router;