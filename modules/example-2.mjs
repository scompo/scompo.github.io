const RANDOM_WORDS = ['first', 'second', 'third', 'fourth', 'a really really really long one']

async function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

async function getWord() {
    return randomElement(RANDOM_WORDS)
}

async function updateInnerText(t, string) {
    t.innerText = string
}

function changeText(text) {
    getWord()
        .then(word => updateInnerText(text, word))
}

async function bindListener(control, text) {
    return control.addEventListener("click", () => { changeText(text) }, false);
}

export default async function() {
    const CONTROL_ID = 'example-2-control'
    const TEXT_ID = 'example-2-text'
    const control = document.getElementById(CONTROL_ID)
    const text = document.getElementById(TEXT_ID)
    return bindListener(control, text)
        .then(() => 'example 2 done')
}