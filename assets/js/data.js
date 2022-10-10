/* ATTENTION, HERE ARE ALL THE DATA USED IN THE CONSTRUCTION 
OF THE PAGE LIKE HOURS, CARS, YOUR INFORMATION AND IMAGES 
SO DO NOT MOVE IF YOU DON'T KNOW */


//HOURS USED TO SELECT US FROM THE VEHICLE RESERVATION FORM
const hours = [
    '09:30 AM', 
    '10:00 AM', 
    '10:30 AM', 
    '11:00 AM', 
    '11:30 AM', 
    '12:00 PM', 
    '12:30 PM',
    '01:00 PM',
    '01:30 PM',
    '02:00 PM',
    '02:30 PM',
    '03:00 PM',
    '03:30 PM',
    '04:00 PM',
    '04:30 PM',
    '05:00 PM',
    '05:30 PM',
    '06:00 PM',
    '06:30 PM',
    '07:00 PM',
    '07:30 PM',
    '08:00 PM',
    '08:30 PM',
    '09:00 PM',
    '09:30 PM',
    '10:00 PM',
    '10:30 PM',
    '11:00 PM',
    '11:30 PM',
    '12:00 AM',
    '12:30 AM',
    '01:00 AM',
    '01:30 AM',
    '02:00 AM',
    '02:30 AM',
    '03:00 AM',
    '03:30 AM',
    '04:00 AM',
    '04:30 AM',
    '05:00 AM',
    '05:30 AM',
    '06:00 AM'
];

//MARK = BRAND OF THE VEHICLE USED TO MAKE THE FILTERS
//CLASSCSS = USED ​​TO SELECT VEHICLE AREA
//LOGO = VEHICLE BRAND LOGO PATH
const markAndClass = [
    mark = [
        'Mercedes-Benz',
        'Alfa Romeo',
        'BMW',
        'Ford',
        'Citroen',
        'Peugeot',
        'Renault',
        'Volkswagen',
        'Range Rover'
    ],
    classCss = [
        'mercedes',
        'romeo',
        'bmw',
        'ford',
        'citroen',
        'peugeot',
        'renault',
        'volkswagen',
        'ranger-rover'
    ],   
    logo = [
        './assets/images/mark/mercedes.png',
        './assets/images/mark/alfa-romeo.png',
        './assets/images/mark/bmw.png',
        './assets/images/mark/ford.png',
        './assets/images/mark/citroen.png',
        './assets/images/mark/peugeot.png',        
        './assets/images/mark/renault.png',
        './assets/images/mark/volkswagen.png',
        './assets/images/mark/land-rover.png'
    ]
];

//DATA OF ALL VEHICLES IN GENERAL
const cars = [
    {
        id: 'Mercedes-Benz',
        model: 'GLE 400 AMG',
        class: 'Premium',            
        motor: 'Gasóleo',
        exchange: 'Automático',
        day: '335,00 €',
        warranty: '950,00 €',
        age: '25 anos',
        img: './assets/images/gle-400-amg.png'
    },
    {
        id: 'Mercedes-Benz',
        model: 'GLC 220 4MATIC',
        class: 'Premium',
        motor: 'Gasóleo',
        exchange: 'Automático',
        day: '155,00 €',
        warranty: '850,00 €',
        age: '25 anos',
        img: './assets/images/glc-220-4matic.png'
    },
    {
        id: 'Mercedes-Benz',
        model: 'A200D AMG',
        class: 'Premium',
        motor: 'Gasóleo',
        exchange: 'Automático',
        day: '122,50 €',
        warranty: '500,00 €',
        age: '25 anos',
        img: './assets/images/a200d-amg.jpg'
    },    
    {
        id: 'Alfa Romeo',
        model: 'GIULIA',
        class: 'Premium',            
        motor: 'Gasóleo',
        exchange: 'Automático',
        day: '145,00 €',
        warranty: '800,00 €',
        age: '25 anos',
        img: './assets/images/giulia.png'
    },
    {
        id: 'BMW',
        model: 'R-1250 GS',
        class: 'Motas',            
        motor: 'Gasolina',
        exchange: 'Manual',
        day: '100,00 €',
        warranty: '500,00 €',
        age: '25 anos',
        img: './assets/images/BMW-GS-R-1250.png'
    },
    {
        id: 'BMW',
        model: 'R-1250 GS ADVANCE',
        class: 'Motas',            
        motor: 'Gasolina',
        exchange: 'Manual',
        day: '100,00 €',
        warranty: '500,00 €',
        age: '25 anos',
        img: './assets/images/gs-advance.png'
    },
    {
        id: 'BMW',
        model: 'R-1250 GS RALLY',
        class: 'Motas',            
        motor: 'Gasolina',
        exchange: 'Manual',
        day: '100,00 €',
        warranty: '500,00 €',
        age: '25 anos',
        img: './assets/images/gs-rally.png'
    },
    {
        id: 'Ford',
        model: 'Fiesta ST Line',
        class: 'Económicos',            
        motor: 'Gasolina',
        exchange: 'Manual',
        day: '50,00 €',
        warranty: '250,00 €',
        age: '25 anos',
        img: './assets/images/fiesta-st-line.jpg'
    },
    {
        id: 'Citroen',
        model: 'C3 Puretech',
        class: 'Económicos',            
        motor: 'Gasolina',
        exchange: 'Manual',
        day: '100,00 €',
        warranty: '500,00 €',
        age: '25 anos',
        img: './assets/images/c3-puretech.jpg'
    },    
    {
        id: 'Peugeot',
        model: '2008 1.5 Allure',
        class: 'Económicos',            
        motor: 'Gasolina',
        exchange: 'Manual',
        day: '55,00 €',
        warranty: '350,00 €',
        age: '25 anos',
        img: './assets/images/2008-1-5-allure.jpg'
    },
    {
        id: 'Peugeot',
        model: '5008 2.0 GT',
        class: 'Monovolumes e SUVs',            
        motor: 'Gasóleo',
        exchange: 'Automático',
        day: '135,00 €',
        warranty: '600,00 €',
        age: '25 anos',
        img: './assets/images/5008-2-0-gt.jpg'
    },
    {
        id: 'Peugeot',
        model: '308 GT',
        class: 'Premium',            
        motor: 'Gasóleo',
        exchange: 'Automático',
        day: '115,00 €',
        warranty: '550,00 €',
        age: '25 anos',
        img: './assets/images/308-gt.png'
    },
    {
        id: 'Renault',
        model: 'Clio RS Line',
        class: 'Económicos',            
        motor: 'Gasolina',
        exchange: 'Automático',
        day: '55,00 €',
        warranty: '350,00 €',
        age: '25 anos',
        img: './assets/images/clio-rs-line.jpg'
    },
    {
        id: 'Volkswagen',
        model: 'Golf VIII 2.0 TDI',
        class: 'Económicos',            
        motor: 'Gasóleo',
        exchange: 'Automático',
        day: '107,50 €',
        warranty: '500,00 €',
        age: '25 anos',
        img: './assets/images/golf-viii.jpg'
    },
    {
        id: 'Range Rover',
        model: 'Velar 2.0',
        class: 'Monovolumes e SUVs',            
        motor: 'Gasóleo',
        exchange: 'Automático',
        day: '180,50 €',
        warranty: '950,00 €',
        age: '25 anos',
        img: './assets/images/velar-2-0.jpg'
    },
    {
        id: 'Range Rover',
        model: 'Sport 3.0 HSE',
        class: 'Monovolumes e SUVs',            
        motor: 'Gasóleo',
        exchange: 'Automático',
        day: '180,50 €',
        warranty: '950,00 €',
        age: '25 anos',
        img: './assets/images/sport-3-0.png'
    }
];