'use strict'

const createState = require('vigour-state/s')

module.exports = exports = createState({
  imaginator: {
    val: 'http://localhost:3000'
  },
  input: {
    val: 'http://yeshoua.net/wp-content/uploads/2015/10/agneau.jpg'
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
  },
  transformsError: {
    val: ''
  }
})
