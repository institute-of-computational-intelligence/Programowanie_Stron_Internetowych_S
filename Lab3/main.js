const random = Math.floor(Math.random() * 10 + 1);
document.getElementById("randomInput").placeholder = 'Poprawna odpowiedz ' + random;

const teatChanged = function (e) {
    if (e.target.value == random)
        document.getElementById("randomOutput").innerHTML = 'Brawo !'
    else
        document.getElementById("randomOutput").innerHTML = 'Źle !'
}

document.getElementById("randomInput").addEventListener('input', teatChanged);

//////////////////////

const math = function (e, num) {
    switch (num) {
        case 0:
            document.getElementById("mathOutput").innerHTML = document.getElementById("mathInput1").value * document.getElementById("mathInput2").value;
            break;
        case 1:
            document.getElementById("mathOutput").innerHTML = document.getElementById("mathInput1").value / document.getElementById("mathInput2").value;
            break
    }
}

document.getElementById("mathBtn1").addEventListener('click', math.bind(null, event, 0));
document.getElementById("mathBtn2").addEventListener('click', math.bind(null, event, 1));

//////////////////////

const temp = function (e, type) {
    switch (type) {
        case 0:
            document.getElementById("tempOutput").innerHTML = (5 / 9) * (document.getElementById("tempInput").value - 32);
            break;
        case 1:
            document.getElementById("tempOutput").innerHTML = 32 + ((9 / 5) * document.getElementById("tempInput").value);
            break
    }
}

document.getElementById("temp1").addEventListener('click', temp.bind(null, event, 0));
document.getElementById("temp2").addEventListener('click', temp.bind(null, event, 1));

///////////////////////

const quadrat = function (e) {
    let result = 1;
    for (let i = 0; i < document.getElementById("quadratInput2").value; ++i)
        result *= document.getElementById("quadratInput1").value;

    document.getElementById("quadratOutput").innerHTML = result
}

document.getElementById("quadratInput1").addEventListener('input', quadrat);
document.getElementById("quadratInput2").addEventListener('input', quadrat);

////////////////////////

const factorial = function (e) {
    let initial = document.getElementById("factorialInput").value;
    let result = initial;
    while (initial > 1) {
        result *= --initial;
    }

    document.getElementById('factorialOutput').innerHTML = result;
}

document.getElementById("factorialInput").addEventListener('input', factorial);

////////////////////////

function bubbleSort(a) {
    let swap;
    let n = a.length - 1;
    do {
        swap = false;
        for (let i = 0; i < n; i++) {
            if (a[i] > a[i + 1]) {
                let temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swap = true;
            }
        }
        n--;
    } while (swap);
    
    return a;
}