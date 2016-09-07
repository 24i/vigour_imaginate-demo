'use strict'

const createState = require('vigour-state/s')

module.exports = exports = createState({
  imaginator: {
    val: 'http://localhost:3000'
  },
  input: {
    val: 'http://www.birdchannel.com/images/articles/bird-word-of-day/word-of-day-flock.jpg'
  },
  transforms: {
    val: `
[
  ["ctx-resize", {
    "width": 300,
    "height": 200
  }]
]
`
  }
})
