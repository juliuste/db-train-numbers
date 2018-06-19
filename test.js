'use strict'

const tape = require('tape')
const trainNumbers = require('./index')
const moment = require('moment')

tape('db-train-numbers', async (t) => {
	const start = moment(new Date).subtract(1, 'hours').toDate()
	const end = moment(new Date).add(2, 'hours').toDate()

	const data = await trainNumbers(start, end)
	t.ok(Array.isArray(data), 'result type')
	t.ok(data.length >= 50, 'result length')
	for (let entry of data) {
		t.ok(entry.train.length >= 2, 'entry train')
		t.ok(entry.journeyRef.length >= 10, 'entry journeyRef')
	}

	t.end()
})
