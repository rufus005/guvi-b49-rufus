var divColor = document.getElementById('divColor')
divColor.addEventListener('mouseover', function (event) {
    console.log(event)
    divColor.style.color = 'red';
});

divColor.addEventListener('mouseleave', function (event) {
    divColor.style.colour = 'black';
});