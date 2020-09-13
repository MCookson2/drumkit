const keys = document.querySelectorAll('[data-key]')

keys.forEach(key => {
    key.addEventListener('click', function(){
        var dataSet = key.dataset.key;
        document.querySelector(`audio[data-key="${dataSet}"]`).play();
        key.classList.add('playing')
        setTimeout(function(){
            key.classList.remove('playing')
        }, 500)
    })
})

window.addEventListener('keydown', function(event){
    var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    var key = document.querySelector(`div[data-key="${event.keyCode}"`)
    audio.play()
    key.classList.add('playing')
        setTimeout(function(){
            key.classList.remove('playing')
        }, 500)   
})