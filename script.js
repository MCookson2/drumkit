const keys = document.querySelectorAll('div[data-key]')

// moved function in forEach loop to its own function.
function playSound(k){
    var dataSet = k.dataset.key;
    var audio = document.querySelector(`audio[data-key="${dataSet}"]`)
    audio.currentTime = 0;
    audio.play()

    k.classList.add('playing')
}

// add function to remove class on event 'transitionend'
function removeClass(k){
    k.classList.remove('playing')
}

keys.forEach(key => key.addEventListener('click', function() {
    playSound(key)
}));

keys.forEach(key => key.addEventListener('transitionend', function() {
    removeClass(key)
}));

window.addEventListener('keydown', function(event){
    var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    var key = document.querySelector(`div[data-key="${event.keyCode}"`)
    if (!audio) return;
    
    audio.currentTime = 0;
    audio.play()

    key.classList.add('playing')
})