const express = require('express')
const Reports = require('../models/reports')
const router = new express.Router()

// router.post('/report', async (req, res) => {
//     const report = new Reports(req.body)
//     try{
//         await report.save();
//         res.status(201).send(report);
//     } catch (e) {
//         res.status(400).send(e);
//     }
// });

// router.get('/report', async (req, res)=> {
//     try{
//         const report = await Reports.find({});
//         res.render('report');
//     }catch(e){
//         res.status(500).send();
//     }
// });

router.get('/report/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const report = await Reports.find({ companyTitle: _id });
        if (!report) {
            return res.status(404).send();
        }
        res.send(report);
    } catch (e) {
        res.status(500).send();
    }
});
router.get('/report/viewreport/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const report = await Reports.find({ _id });
        if (!report) {
            return res.status(404).send();
        }
        res.send(report);
    } catch (e) {
        res.status(500).send();
    }
})

// router.patch('/report/:id', async(req, res) => {
//     const updates = Object.keys(req.body);
//     const allowedUpdates = ['companyTitle', 'costToCompany', 'candidatesAppeared', 'candidatesSelected', 'report', 'jobEligibility', 'jobProfile'];
//     const isValidOpertion = updates.every((update) => {
//         return allowedUpdates.includes(update);
//     });
//     if (!isValidOpertion) {
//         return res.status(400).send({ error: 'Invalid Updates!' });
//     }
//     try {
//         const report = await Reports.findByIdAndUpdate(req.params.id, req.body, {
//             new: true,
//             runValidators: true
//         });
//         if (!report) {
//             return res.status(404).send();
//         }
//         res.send(report);
//     } catch (e) {
//         res.status(400).send(e);
//     }
// });

// router.delete('/report/:id', async(req, res) => {
//     try {
//         const report = await Reports.findByIdAndDelete(req.params.id)
//         if (!report) {
//             return res.status(404).send();
//         }
//         res.send(report);
//     } catch (e) {
//         res.status(500).send();
//     }
// });

module.exports = router;