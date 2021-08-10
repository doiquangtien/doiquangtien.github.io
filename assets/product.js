const icon = document.querySelector('.js-icon')

function sleep(ms){
    return new Promise(function(resolve){
        setInterval(resolve, ms)
    })
}
sleep(1000)
.then(function(){
    icon.classList.toggle('green')
    return sleep(1000)
})
.then(function(){
    icon.classList.toggle('red')
    return sleep(1000)
})
.then(function(){
    icon.classList.toggle('yellow')
    return sleep(1000)
})