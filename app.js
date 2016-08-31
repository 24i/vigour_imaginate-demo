'use strict'

var urlinate = require('urlinate')

module.exports = exports = {
  class: 'app',
  // ELEMENTS
  controls: {
    class: 'controls',
    imaginator: {
      tag: 'input',
      class: 'input',
      props: {
        placeholder: 'URL of imaginator',
        value: {
          $: 'imaginator'
        }
      },
      on: {
        input (e, stamp) {
          let state = e.state.getRoot()
          state.set({ imaginator: e.event.target.value })
        }
      }
    },
    input: {
      tag: 'input',
      class: 'input',
      props: {
        placeholder: 'URL of source image',
        value: {
          $: 'input'
        }
      },
      on: {
        input (e, stamp) {
          let state = e.state.getRoot()
          state.set({ input: e.event.target.value })
        }
      }
    },
    known: {
      tag: 'p',
      title: {
        tag: 'strong',
        text: 'Known transforms: '
      },
      list: {
        tag: 'span',
        text: 'ctx-identity, ctw-resize'
      }
    },
    transforms: {
      tag: 'textarea',
      class: 'input',
      props: {
        value: {
          $: 'transforms'
        }
      },
      on: {
        input (e, stamp) {
          let state = e.state.getRoot()
          state.set({ transforms: e.event.target.value })
        }
      }
    },
    url: {
      tag: 'input',
      props: {
        value: {
          $: ['$root.imaginator', '$root.input', '$root.transforms'],
          $transform: toUrl
        }
      }
    }
  },
  original: {
    tag: 'img',
    props: {
      src: {
        $: '$root.input'
      }
    }
  },
  img: {
    tag: 'img',
    props: {
      src: {
        $: ['$root.imaginator', '$root.input', '$root.transforms'],
        $transform: toUrl
      }
    }
  }
}

function toUrl (state) {
  return urlinate(state.imaginator.val, {
    input: state.input.val,
    use: JSON.parse(state.transforms.val)
  })
}
