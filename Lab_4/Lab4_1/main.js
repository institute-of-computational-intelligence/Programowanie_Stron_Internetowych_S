const num = Math.ceil(Math.random() * 10);
console.log(num);
const gnum = prompt('Guess the number between 1 and 10 inclusive');
if (gnum == num) {
    console.log('Matched');
    alert('Matched');
}
else {
    console.log('Not matched, the number was ' + gnum);
    alert('Not matched, the number was ' + gnum);
}