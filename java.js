const scriptURL = 'https://script.google.com/macros/s/AKfycbzdMXYHCwbznhot9EfZk_I6PsRPbt6vNAZpzbWRXAKH-BVvCvzHw68dj8mv03qOvwLY/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = alert("Your response has recorded")
            setTimeout(function () {
                msg.innerHTML = ""
            },)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

var submitButton = document.getElementById('ms');
submitButton.addEventListener('click', function () {
    alert('Your response is recorded');
});