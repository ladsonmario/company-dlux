//GLOBAL VARIABLES//
const q = (el) => document.querySelector(el);
const qs = (el) => document.querySelectorAll(el);
let onScroll = true;
let timer = 0;
let Mark = [];
let attributeAccordion = '';
let classCss = '';
let dataKeyIndex = 0;

//EVENTS//
window.onscroll = (e) => {
    if(onScroll && e.type === 'scroll') {
        qs('section').forEach(e => {
            let top = scrollY;
            let offset = e.offsetTop;
            let height = e.offsetHeight;
            let id = e.getAttribute('id');         
    
            if(top === 0) {
                removeActiveMenu();
                q(`a[href="#top"].nav-link`).classList.add('active--menu');
            }
            if(top > offset && top <= (offset + height)) {          
                removeActiveMenu();
                q(`a[href="#${id}"].nav-link`).classList.add('active--menu');                                   
            }        
        });
    }    
    scrollY !== 0 ? q('.button--top').style.display = 'flex' : q('.button--top').style.display = 'none';    
};

//START//
const start = () => {
    reset();
    addClickInTheMenu();
    loadingHours();    
    loadingModelCars();
    addAgeInTheForm();
    loadingModelCarsInTheAccordion();
    addFunctionDeliveryLocation();
    addAttributeAndClassInTheAccordionItem();
    addFunctionInTheButtonReservation();
    addFunctionInTheContinueReservation();
    addButtonCloseModal();
    addFunctionButtonTop();
}

//RESET VALUES//
const reset = () => {
    Mark = [];
    attributeAccordion = '';
    classCss = '';
    dataKeyIndex = 0;
    q('#car-select').value = '';
    q('#pick-up-date').value = '';
    q('#pick-up-time').value = '';
    q('#drop-off-date').value = '';
    q('#drop-off-time').value = '';
    q('#pick-up-location').value = 'Loja (Amadora)';
    q('#drop-off-location').value = 'Loja (Amadora)';
    q('#first-name').value = '';
    q('#last-name').value = '';
    q('#phone-number').value = '';
    q('#email-address').value = '';
    q('#email-address-confirm').value = '';
    q('#address').value = '';
    q('#city').value = '';
    q('#zip-code').value = '';

    q('#contact--form--first--name').value = '';
    q('#contact--form--last--name').value = '';
    q('#contact--form--telephone').value = '';
    q('#contact--form--email').value = '';
    q('#contact--form--message').value = '';
}

//ADD EVENTS AND THEIR FUNCTIONS//
const addClickInTheMenu = () => {
    qs('.nav-link').forEach(item => {
        item.addEventListener('click', scrollToIdOnClick);        
    });    
}

const addFunctionDeliveryLocation = () => {
    q('.delivery--location').addEventListener('click', showDeliveryLocationSelect);
}

const addFunctionInTheButtonReservation = () => {
    qs('#reservation--car').forEach(element => {
        element.addEventListener('click', changeCarInTheFormReservation);
    });
}

const addButtonCloseModal = () => {
    qs('.btn--close').forEach(element => {
        element.addEventListener('click', buttonCloseModal);
    });
}

const addFunctionButtonTop = () => {
    q('.button--top').addEventListener('click', handleClickButtonTop);
}

const addFunctionInTheContinueReservation = () => {
    q('#checkoutModalLabel').addEventListener('click', verifyDataInTheFormReservation);
}

//RENDER CARS//
const render = () => {
    loadingCars();
}

//FUNCTIONS//
const getScrollTopByHref = (element) => {
	const id = element.getAttribute('href');
	return q(id).offsetTop;
}

const scrollToPosition = (to) => {    
    window.scroll({ top: to, behavior: "smooth" });  
}

const scrollToIdOnClick = (event) => {
    onScroll = false;
    if(timer) { clearInterval(timer); }
    timer = setTimeout(() => { onScroll = true }, 1000);
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget) - 80;
	scrollToPosition(to);
    qs('a[href^="#"].nav-link').forEach(item => {
        item.classList.remove('active--menu');
    });
    event.target.classList.add('active--menu');
}

const removeActiveMenu = () => {
    qs('a[href^="#"].nav-link').forEach(item => {
        item.classList.remove('active--menu');
    });
}

const loadingModelCars = () => {
    cars.map(item => {
        let SelectCarsModels = document.createElement('option').cloneNode(true);

        SelectCarsModels.setAttribute('value', `${item.model}`);
        SelectCarsModels.innerHTML = `${item.id} ${item.model}`;


        q('.select--car--models').append(SelectCarsModels);
    });
}

const showDeliveryLocationSelect = () => {        
    let LocationSelect = q('.delivery--location--select');
    LocationSelect.style.display !== 'flex' ? LocationSelect.style.display = 'flex' : LocationSelect.style.display = 'none';
}

const loadingHours = () => {
    hours.map(item => {
        let OptionItem = document.createElement('option').cloneNode(true);    
        
        OptionItem.setAttribute('value', item);    
        OptionItem.innerHTML = item;
    
        qs('.select-hours')[0].append(OptionItem);        
    });
    hours.map(item => {
        let OptionItem = document.createElement('option').cloneNode(true);    
        
        OptionItem.setAttribute('value', item);    
        OptionItem.innerHTML = item;
    
        qs('.select-hours')[1].append(OptionItem);    
    });
}

const addAgeInTheForm = () => {
    let age = [];
    for(let i = 18; i <= 100; i++) {
        age.push(i);
    }    
    
    for(let i = 0; i < age.length; i++) {
        let OptionAge = document.createElement('option');
        OptionAge.setAttribute('value', age[i]);
        OptionAge.innerHTML = age[i];
        
        q('#age').append(OptionAge);
    }
    
}

const loadingModelCarsInTheAccordion = () => {
    markAndClass[0].map((item, index) => {
        const accordionItem = document.createElement('div').cloneNode(true);
        let filterMark = cars.filter(mark => mark.id === item);
        accordionItem.innerHTML = `
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                    ${item}
                    <img src="${markAndClass[2][index]}" alt="" />
                </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordion">
                    <div class="accordion-body car--container">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="list--car">
                                    <div class="list-group"></div>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="car--info">
                                    <div class="car--model h3">${filterMark[0].id} ${filterMark[0].model}</div>                                    
                                    <input type="hidden" class="car--model--value" value="${filterMark[0].model}" />                                                                            
                                    <img class="car--image img-fluid rounded" src="${filterMark[0].img}" alt="" />
                                    <a class="link--car" href="./cars/${filterMark[0].id}/${filterMark[0].model}.html">Mais informações sobre ${filterMark[0].id} ${filterMark[0].model}</a>
                                    <table class="table table-striped my-3">     
                                        <tbody>
                                            <tr>
                                                <th scope="col">Modelo</th>
                                                <td class="model--car">${filterMark[0].model}</td>
                                            </tr>
                                            <tr>
                                                <th scope="col">Motor</th>
                                                <td class="motor--car">${filterMark[0].motor}</td>
                                            </tr>
                                            <tr>
                                                <th scope="col">Classe</th>
                                                <td class="class--car">${filterMark[0].class}</td>
                                            </tr>
                                            <tr>
                                                <th scope="col">Câmbio</th>
                                                <td class="exchange--car">${filterMark[0].exchange}</td>
                                            </tr>
                                            <tr>
                                                <th scope="col">1 dia</th>
                                                <td class="day--car">${filterMark[0].day}</td>
                                            </tr>
                                            <tr>
                                                <th scope="col">Caução</th>
                                                <td class="warranty--car">${filterMark[0].warranty}</td>
                                            </tr>  
                                            <tr>
                                                <th scope="col">Idade Mínima</th>                                            
                                                <td class="age--car">${filterMark[0].age}</td>
                                            </tr>                           
                                        </tbody>                              
                                    </table>
                                    <a class="btn btn-lg btn-outline-warning" id="reservation--car" href="#reservation">RESERVAR ESTE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;                
        q('#accordion').append(accordionItem);        
    });
}

const loadingCars = () => {     
    Mark = cars.filter(item => item.id === attributeAccordion);          
    let CarArea = q(`.${classCss}`);          
    if(!CarArea.querySelector('.car--name')) {
        for(let i in Mark) {        
            const itemName = document.createElement('a');
            itemName.classList.add("list-group-item", "list-group-item-action", "car--name");
            itemName.innerHTML = Mark[i].model;
            itemName.setAttribute('key-item', i);
            itemName.addEventListener('click', getKeyAndItemMount);        
            CarArea.querySelector('.list-group').append(itemName);
        }
    }         
}

const getKeyAndItemMount = (event) => {    
    let key = event.target.getAttribute('key-item');    
    removeAndAddClassActiveCarName(key);
    let CarInfo = qs('.car--info')[dataKeyIndex];    
    CarInfo.querySelector('.car--model').innerHTML = `${Mark[0].id} ${Mark[key].model}`;
    CarInfo.querySelector('.car--model--value').value = `${Mark[key].model}`;          
    CarInfo.querySelector('.car--image').src = Mark[key].img;
    CarInfo.querySelector('.model--car').innerHTML = Mark[key].model;
    CarInfo.querySelector('.motor--car').innerHTML = Mark[key].motor;
    CarInfo.querySelector('.class--car').innerHTML = Mark[key].class;    
    CarInfo.querySelector('.exchange--car').innerHTML = Mark[key].exchange;
    CarInfo.querySelector('.day--car').innerHTML = Mark[key].day;
    CarInfo.querySelector('.warranty--car').innerHTML = Mark[key].warranty;
    CarInfo.querySelector('.age--car').innerHTML = Mark[key].age; 
    
    CarInfo.querySelector('.link--car').innerHTML = `Mais informações sobre ${Mark[0].id} ${Mark[key].model}`;
    CarInfo.querySelector('.link--car').setAttribute('href', `./cars/${Mark[0].id}/${Mark[key].model}.html`);
}

const removeAndAddClassActiveCarName = (key) => {
    let ListGroup = qs('.list-group')[dataKeyIndex];    
    ListGroup.querySelectorAll('.car--name').forEach(element => {
        element.classList.remove('active');        
    });
    ListGroup.querySelectorAll('.car--name')[key].classList.add('active');
}

const addAttributeAndClassInTheAccordionItem = () => {    
    for(let i = 0; i < markAndClass[0].length; i++) {
        qs('.accordion-item').forEach((element, index) => {        
            element.setAttribute('data-key-mark', markAndClass[0][index]);
            element.setAttribute('data-class', markAndClass[1][index]);
            element.setAttribute('data-key-index', index);
            element.classList.add(markAndClass[1][index]);
        }); 
    }  
    qs('.accordion-item').forEach(element => {
        element.addEventListener('click', getClassAndAttribute);
    });          
}

const getClassAndAttribute = (event) => {
    classCss = event.currentTarget.getAttribute('data-class');
    attributeAccordion = event.currentTarget.getAttribute('data-key-mark'); 
    dataKeyIndex = event.currentTarget.getAttribute('data-key-index');     
    render();
}

const changeCarInTheFormReservation = () => {    
    const CarInfo = qs('.car--info')[dataKeyIndex];    
    q('.select--car--models').value = CarInfo.querySelector('.car--model--value').value;    
}

const verifyDataInTheFormReservation = (event) => {             
    event.preventDefault();

    const carSelect = q('#car-select').value;    
    const pickUpDate = q('#pick-up-date').value;
    const pickUpTime = q('#pick-up-time').value;
    const dropOffDate = q('#drop-off-date').value;
    const dropOffTime = q('#drop-off-time').value;
    const pickUpLocation = q('#pick-up-location').value;
    const dropOffLocation = q('#drop-off-location').value;    

    if(carSelect === '' || pickUpDate === '' || dropOffDate === '') {           
        q('#car-select-form-msg').classList.remove('hidden');               
        setTimeout(() => {
            q('#car-select-form-msg').classList.add('hidden');            
        }, 3000);                                        
    } else {
        const carSelectedFilter = cars.filter(item => item.model === carSelect);

        q('#exhoraretirada').innerHTML = pickUpTime;
        q('#exhoraentrega').innerHTML = dropOffTime;
        q('#pickup-location-field').innerHTML = pickUpLocation;
        q('#dropoff-location-field').innerHTML = dropOffLocation;

        q('#selected-car').setAttribute('value', `${carSelectedFilter[0].id} ${carSelectedFilter[0].model}`);
        q('#date-up').setAttribute('value', pickUpDate);
        q('#pick-up').setAttribute('value', pickUpTime);
        q('#date-drop').setAttribute('value', dropOffDate);
        q('#drop-off').setAttribute('value', dropOffTime);
        q('#pickup-location').setAttribute('value', pickUpLocation);
        q('#dropoff-location').setAttribute('value', dropOffLocation);       

        q('.car--name--form').innerHTML = `${carSelectedFilter[0].id} ${carSelectedFilter[0].model}`;
        q('.car--img--form').src = carSelectedFilter[0].img;
        q('.motor--car--form').innerHTML = carSelectedFilter[0].motor;        
        q('.class--car--form').innerHTML = carSelectedFilter[0].class;
        q('.exchange--car--form').innerHTML = carSelectedFilter[0].exchange;

        q('#modal--form').style.display = 'flex';
    }
}

const buttonCloseModal = () => {
    q('#modal--form').style.display = 'none';
}

const handleClickButtonTop = () => {   
    scroll({ top: 0 });
}

//INIT START//
start();