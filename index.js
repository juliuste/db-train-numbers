'use strict'

const merge = require('lodash.merge')
const zugradar = require('db-zugradar-client')
const moment = require('moment')
const PQueue = require('p-queue')
const unionBy = require('lodash.unionby')

const defaults = {
    interval: 10
}

const generateDates = (start, end, interval) => {
    const dates = [+start]
    let current = moment(+start)
    while (+current < +end) {
        current = moment(+current).add(interval, 'minutes')
        dates.push(+current)
    }
    return dates.map(n => new Date(n))
}

// todo: validate options & params

const trainNumbers = async (start, end, opt = {}) => {
    const options = merge({}, defaults, opt)

    const dates = generateDates(start, end, options.interval)

    const queue = new PQueue({concurrency: 16})

    const data = await queue.addAll(dates.map(d => (() => zugradar.positions(d, true))))
    return unionBy(...data, 'name').map(d => ({train: d.name, journeyRef: d.id}))
}

module.exports = trainNumbers
