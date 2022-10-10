//GLOBAL VARIABLES//
const q = (el) => document.querySelector(el);
const qs = (el) => document.querySelectorAll(el);
const carModel = document.title.valueOf().split('|')[1].trim();

//START//
const start = () => {
    loadingOneCar();
}

//FUNCTIONS//
const loadingOneCar = () => {  
    const oneCar = cars.filter(item => item.model === carModel);
    
    q('.one--car--model').innerHTML = `${oneCar[0].id} ${oneCar[0].model}`;
    q('.one--car--image').src = `../.${oneCar[0].img}`;
    q('.model--one--car').innerHTML = oneCar[0].model;
    q('.motor--one--car').innerHTML = oneCar[0].motor;
    q('.class--one--car').innerHTML = oneCar[0].class;
    q('.exchange--one--car').innerHTML = oneCar[0].exchange;
    q('.day--one--car').innerHTML = oneCar[0].day;
    q('.warranty--one--car').innerHTML = oneCar[0].warranty;
    q('.age--one--car').innerHTML = oneCar[0].age;
}

//INIT START//
start();