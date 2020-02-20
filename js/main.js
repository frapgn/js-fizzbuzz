for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        var div = document.createElement('DIV');
        div.setAttribute('class', 'item');
        div.innerHTML = 'FizzBuzz';
        document.getElementById('container').appendChild(div);
        // console.log('FizzBuzz');
    } else if (i % 5 == 0) {
        var div = document.createElement('DIV');
        div.setAttribute('class', 'item');
        div.innerHTML = 'Buzz';
        document.getElementById('container').appendChild(div);
        // console.log('Buzz')
    } else if (i % 3 == 0) {
        var div = document.createElement('DIV');
        div.setAttribute('class', 'item');
        div.innerHTML = 'Fizz';
        document.getElementById('container').appendChild(div);
        // console.log('Fizz')
    } else {
        var div = document.createElement('DIV');
        div.setAttribute('class', 'item');
        div.innerHTML = i;
        document.getElementById('container').appendChild(div);
        // console.log(i);
    }
}
