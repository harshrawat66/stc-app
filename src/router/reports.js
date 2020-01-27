const express = require('express')
const Reports = require('../models/reports')
const Company = require('../models/companies')
const Login = require('../models/logins')
const auth = require('../auth/studentAuth')
const router = new express.Router()

// router.post('/report/add', async (req, res) => {
//     const report = new Reports(req.body)
//     try{
//         await report.save();
//         res.status(201).send(report);
//     } catch (e) {
//         res.status(400).send(e);
//     }
// });

// router.post('/company/add', async (req, res)=> {
//     const company = new Company(req.body)
//     try{
//         await company.save();
//         res.status(201).send(company);
//     } catch (e) {
//         res.status(400).send(e);
//     }
// })

// router.get('/report', async (req, res)=> {
//     try{
//         const report = await Reports.find({});
//         res.render('report');
//     }catch(e){
//         res.status(500).send();
//     }
// });

router.get('/report/:id', auth, async(req, res) => {
    const _id = req.params.id;
    try {
        const report = await Reports.find({ companyTitle: _id }).populate('companyTitle').populate('addedBy').exec() ;
        if (!report) {
            return res.status(404).send();
        }
        res.send(report);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get('/report/viewreport/:id', auth, async(req, res) => {
    const _id = req.params.id;
    try {
        const report = await Reports.find({ _id }).populate('companyTitle').populate('addedBy').exec() ;
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