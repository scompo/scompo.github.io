'use strict'

import changeText from './modules/example-1.mjs'

async function example1() {
    return changeText('new text')
        .then(r => {
            let example1Text = document.getElementById('example-1-text')
            example1Text.innerText = r
            return 'example 1 done'
        })
}

example1()
    .then(console.log)