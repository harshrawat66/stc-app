const mongoose = require('mongoose')
const dbPath = require('../configBreakout')

mongoose.connect(dbPath.dbPath, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})