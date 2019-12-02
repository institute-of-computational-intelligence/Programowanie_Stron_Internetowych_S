
///zad1

const pItem=document.querySelector('p');
const buttonItem=document.querySelector('.button1');
buttonItem.addEventListener('click',()=>{
    pItem.classList.toggle('zad1');
})


///zad2

const imgItem=document.querySelector('img');
const buttonItem2=document.querySelector('.button2');
const inputItem=document.querySelector('input');

buttonItem2.addEventListener('click',()=>{
    imgItem.src=inputItem.value;
})

//zad3
const input2Item=document.querySelector('.pole1')
const input3Item=document.querySelector('.pole2');
const buttonItem3=document.querySelector('.button3');
let i=0;
buttonItem3.addEventListener('click',()=>{
    if(i<3){
    if(input3Item.value!=''&&input2Item.value!=''){
        let newA=document.createElement('a');
        newA.textContent=input3Item.value;
        newA.href=input2Item.value;
        let li=document.querySelectorAll('li');
        li[i].appendChild(newA);
        i++;
    }    
}
})