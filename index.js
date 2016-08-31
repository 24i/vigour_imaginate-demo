'use strict'

require('./style.css')

const render = require('brisky/render')

var app = require('./app')
var state = require('./state')

global.document.getElementsByTagName('body')[0].appendChild(render(app, state))

global.state = state
