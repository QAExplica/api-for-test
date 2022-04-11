const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const tableUser = require('../database/assignment-database')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post('/assignments', (req, res) => {
    var { title, description, observation, taskDoer, estimatedTime } = req.body

    if (title != null) {
        if (title.trim().length == 0) {
            res.statusCode = 400
            res.json("The title fields can't be empty")
            return
        }

        if (title.length > 45) {
            res.statusCode = 400
            res.json('The title field must contain a maximum of 45 characters')
            return
        }
    } else {
        res.statusCode = 400
        res.json('The title fields cannot be null')
        return
    }

    if (description != null) {
        if (description.trim().length == 0) {
            res.statusCode = 400
            res.json("The description fields can't be empty")
            return
        }

        if (description.length > 40) {
            res.statusCode = 400
            res.json('The description field must contain a maximum of 40 characters')
            return
        }
    } else {
        res.statusCode = 400
        res.json('The description fields cannot be null')
        return
    }

    if (observation != null) {
        if (observation.trim().length == 0) {
            res.statusCode = 400
            res.json("The observation fields can't be empty")
            return
        }

        if (observation.length > 20) {
            res.statusCode = 400
            res.json('The observation field must contain a maximum of 20 characters')
            return
        }
    } else {
        res.statusCode = 400
        res.json('The observation fields cannot be null')
        return
    }

    if (taskDoer != null) {
        if (taskDoer.trim().length == 0) {
            res.statusCode = 400
            res.json("The taskDoer fields can't be empty")
            return
        }

        if (taskDoer.length > 10) {
            res.statusCode = 400
            res.json('The taskDoer field must contain a maximum of 10 characters')
            return
        }
    } else {
        res.statusCode = 400
        res.json('The taskDoer fields cannot be null')
        return
    }

    if (estimatedTime != null) {
        if (estimatedTime.trim().length == 0) {
            res.statusCode = 400
            res.json("The estimatedTime fields can't be empty")
            return
        }
    } else {
        res.statusCode = 400
        res.json('The estimatedTime fields cannot be null')
        return
    }

    tableUser.create({
        title: title,
        description: description,
        observation: observation,
        taskDoer: taskDoer,
        estimatedTime: estimatedTime
    }).then(() => {
        res.sendStatus(200)
    })
})