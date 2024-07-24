function showNumbers() {
    let i = 1;
    let output = '';
    while (i <= 10) {
        output += i + '<br>';
        i++;
    }
    document.getElementById('numberList').innerHTML = output;
}

function resetNumbers() {
    document.getElementById('numberList').innerHTML = '';
}