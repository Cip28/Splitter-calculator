
const button=document.querySelector('#button');
const form=document.querySelector('.container form');
const bill=document.querySelector('.bill');

const five=document.querySelector('#five');
const ten=document.querySelector('#ten');
const fifteen=document.querySelector('#fifteen');
const tfive=document.querySelector('#tfive');
const fifty=document.querySelector('#fifty');
const custom=document.querySelector('.custom');


five.addEventListener('dblclick', (e) => {
    e.preventDefault();
    //bill input value
    let billValue=parseInt(bill.value);
    //tip calculator for each button 
    let tip=0.05*billValue;
    //number of people at the table
    let number=document.querySelector('.input-text');

   let tipAmount=document.querySelector('#amount');
   let numberValue=parseInt(number.value);

   if(numberValue<=0 || numberValue===""){
    form.classList.add('error');
}else{
    form.classList.remove('error');
}

   //amount tip per person
   tipAmount.innerHTML="$"+(tip/numberValue).toFixed(2);

   let total=document.querySelector('#total');
   //total per person
   total.innerHTML="$"+((billValue+tip)/numberValue).toFixed(2);
});

ten.addEventListener('dblclick', (e) => {
    e.preventDefault();
      //bill input value
      let billValue=parseInt(bill.value);
      //tip calculator for each button 
      let tip=0.1*billValue;
      //number of people at the table
      let number=document.querySelector('.input-text');
  
     let tipAmount=document.querySelector('#amount');
     let numberValue=parseInt(number.value);


     if(numberValue<=0 || numberValue===""){
        form.classList.add('error');
    }else{
        form.classList.remove('error');
    }

     //amount tip per person
     tipAmount.innerHTML="$"+(tip/numberValue).toFixed(2);
  
     let total=document.querySelector('#total');
     //total per person
     total.innerHTML="$"+((billValue+tip)/numberValue).toFixed(2);
});
fifteen.addEventListener('dblclick', (e) => {
    e.preventDefault();
    //bill input value
    let billValue=parseInt(bill.value);
    //tip calculator for each button 
    let tip=0.15*billValue;
    //number of people at the table
    let number=document.querySelector('.input-text');

   let tipAmount=document.querySelector('#amount');
   let numberValue=parseInt(number.value);

   if(numberValue<=0 || numberValue===""){
    form.classList.add('error');
}else{
    form.classList.remove('error');
}

   //amount tip per person
   tipAmount.innerHTML="$"+(tip/numberValue).toFixed(2);

   let total=document.querySelector('#total');
   //total per person
   total.innerHTML="$"+((billValue+tip)/numberValue).toFixed(2);
});
tfive.addEventListener('dblclick', (e) => {
    e.preventDefault();
    //bill input value
    let billValue=parseInt(bill.value);
    //tip calculator for each button 
    let tip=0.25*billValue;
    //number of people at the table
    let number=document.querySelector('.input-text');

   let tipAmount=document.querySelector('#amount');
   let numberValue=parseInt(number.value);
  
   if(numberValue<=0 || numberValue===""){
    form.classList.add('error');
}else{
    form.classList.remove('error');
}
  
   //amount tip per person
   tipAmount.innerHTML="$"+(tip/numberValue).toFixed(2);

   let total=document.querySelector('#total');
   //total per person
   total.innerHTML="$"+((billValue+tip)/numberValue).toFixed(2);
});
fifty.addEventListener('dblclick', (e) => {
    e.preventDefault();

    //bill input value
    let billValue=parseInt(bill.value);
    //tip calculator for each button 
    let tip=0.5*billValue;
    //number of people at the table
    let number=document.querySelector('.input-text');

   let tipAmount=document.querySelector('#amount');
   let numberValue=parseInt(number.value);
  
   if(numberValue<=0 || numberValue===""){
    form.classList.add('error');
    }else{
        form.classList.remove('error');
    }
  
    //amount tip per person
   tipAmount.innerHTML="$"+(tip/numberValue).toFixed(2);

   let total=document.querySelector('#total');
   //total per person
   total.innerHTML="$"+((billValue+tip)/numberValue).toFixed(2);
});

custom.addEventListener('dblclick', (e) => {
    e.preventDefault();

    
    let customValue=parseInt(custom.value);
    //bill input value
    let billValue=parseInt(bill.value);
    //tip calculator for each button 
    let tip=parseInt(customValue)/100*billValue;
    //number of people at the table
    let number=document.querySelector('.input-text');

   let tipAmount=document.querySelector('#amount');
   let numberValue=parseInt(number.value);
   //amount tip per person
   tipAmount.innerHTML="$"+(tip/numberValue).toFixed(2);

   let total=document.querySelector('#total');
   //total per person
   total.innerHTML="$"+((billValue+tip)/numberValue).toFixed(2);
});


button.addEventListener('click',(e) => {
    e.preventDefault();
    let total=document.querySelector('#total');
    total.innerHTML=0;

    let tipAmount=document.querySelector('#amount');
    tipAmount.innerHTML=0;

    const bill=document.querySelector('.bill');
    // let billValue=bill.value;
    bill.value="$"+0.00;

    let number=document.querySelector('.input-text');
    number.value="$"+0.00;

});

