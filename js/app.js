'use strict'
let hour = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

function City(min, max, name, [], [], average) {
    this.min = min;
    this.max = max;
    this.name = name;
    this.customerNumber = [];
    this.cookieNumber = [];
    this.average = average;
    this.totalCookieNumber = 0;
};

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

City.prototype.getCookieNumber = function () {
    for (let i = 0; i < hour.length; i++) {
        let cookie = Math.ceil(generateRandomNumber(this.min, this.max) * this.average);
        this.cookieNumber.push(cookie);
        this.totalCookieNumber += cookie;
    }
};

// const header = function(){

//     const table = document.createElement('table');
//     parentElement.appendChild(table);
//     table.setAttribute('Id','')
// }

const tablHeader = function () {
    const parentElement = document.getElementById('SalmonCookieShop');
    const table = document.createElement('table');
    parentElement.appendChild(table);
    table.setAttribute('id', 'myTable');
    const tr1 = document.createElement('tr');
    table.appendChild(tr1);
    const th1 = document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent = 'Name of City';
    for (let i = 0; i < hour.length; i++) {
        const th2 = document.createElement('th');
        tr1.appendChild(th2);
        th2.textContent = hour[i];
    }
    const th3 = document.createElement('th');
    tr1.appendChild(th3);
    th3.textContent = 'Daily of location';

};



tablHeader();

City.prototype.render = function () {

    const tableElement = document.getElementById('myTable');

    const tr = document.createElement('tr');
    tableElement.appendChild(tr);

    const td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.textContent = this.name;



    for (let i = 0; i < hour.length; i++) {
        const td2 = document.createElement('td');
        tr.appendChild(td2);
        td2.textContent = this.cookieNumber[i];
    }
    const td3 = document.createElement('td');
    tr.appendChild(td3);
    td3.textContent = this.totalCookieNumber;


};


const seattle = new City(23, 65, 'Seattle', [], [], 6.3);
seattle.getCookieNumber();
seattle.render();
console.log(seattle);


const tokoy = new City(3, 24, 'tokyo', [], [], 1.2);
tokoy.getCookieNumber();
tokoy.render();
console.log(tokoy);

const dubai = new City(11, 38, 'dubai', [], [], 3.7);
dubai.getCookieNumber();
dubai.render();
console.log(dubai);

const paris = new City(20, 38, 'paris', [], [], 2.3);
paris.getCookieNumber();
paris.render();
console.log(paris);

const lima = new City(2, 16, 'lima', [], [], 4.6);
lima.getCookieNumber();
lima.render();
console.log(lima);

const tableFooter = function () {
    const tableElement = document.getElementById('myTable');
    const tr = document.createElement('tr');
    tableElement.appendChild(tr);
    const th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent = 'total';
    for (let i = 0; i < hour.length; i++) {
        const th2 = document.createElement('th');
        tr.appendChild(th2);
        th2.textContent = seattle.cookieNumber[i] + paris.cookieNumber[i] + dubai.cookieNumber[i] + tokoy.cookieNumber[i] + lima.cookieNumber[i];
    }

    const th3 = document.createElement('th');
    tr.appendChild(th3);
    th3.textContent = seattle.totalCookieNumber + dubai.totalCookieNumber + tokoy.totalCookieNumber + lima.totalCookieNumber + paris.totalCookieNumber;

};
tableFooter();
    // const th3Element = document.createElement('th');
    // tr1Element.appendChild(th3Element);
    // th3Element.textContent = `Daily of hour Location`;


    // const tr2Element = document.createElement('tr');
    // tableElement.appendChild(tr2Element);




    // for  (let i = 0; i < hour.length; i++) { 
    //     const tr3Element = document.createElement('tr');
    //  tableElement.appendChild(tr3Element);
    // const td1Element = document.createElement('td');
    // tr3Element.appendChild(td1Element);
    // td1Element.textContent = cityArr[i].name;


    // for (let g = 0; g < hour.length; g++) {

    //     const td2Element = document.createElement('td');
    //      tr3Element.appendChild(td2Element);
    // td2Element.textContent = cityArr[i].cookieNumber[g];



    // }


    //   const td2Element = document.createElement('td');
    //   tr2Element.appendChild(td2Element);
    //   td2Element.textContent = totalCookieNumber;


    //   const tr4Element = document.createElement('tr');
    //   tableElement.appendChild(tr4Element);

    //   const th4Element = document.createElement('th');
    //   tr4Element.appendChild(th4Element);
    //   th4Element.textContent = `Total hours`;

    // for (let i= 0; i < hour.length; i++){
    //     const th5Element = document.createElement('th');
    //     tr3Element.appendChild(th5Element);
    //     th5Element.textContent = cityArr[i].totalPerHour[i];

    // }

    // const tr2Element = document.createElement('tr');
    // tableElement.appendChild(tr2Element);


    // const td1Element = document.createElement('td');
    // tr2Element.appendChild(td1Element);
    // td1Element.textContent = `Seatle `;



    // const tr3Element = document.createElement('tr');
    // tableElement.appendChild(tr3Element);

    // const td2Element = document.createElement('td');
    // tr3Element.appendChild(td2Element);
    // td2Element.textContent = `Dubai`;

    // const tr4Element = document.createElement('tr');
    // tableElement.appendChild(tr4Element);

    // const td3Element = document.createElement('td');
    // tr4Element.appendChild(td3Element);
    // td3Element.textContent = `Paris`;

    // const tr5Element = document.createElement('tr');
    // tableElement.appendChild(tr5Element);

    // const td4Element = document.createElement('td');
    // tr5Element.appendChild(td4Element);
    // td4Element.textContent = `Lima`;

    // const tr6Element = document.createElement('tr');
    // tableElement.appendChild(tr6Element);

    // const th2Element = document.createElement('th');
    // tr6Element.appendChild(th2Element);
    // th2Element.textContent = `Total`;





// const seatlt = new City(23, 65, 'seatle', 6.3);
// const tokyo = new City(3, 24, 'tokoy', 1.2);
// const dubai = new City(11, 38, 'dubai', 3.7);
// const paris = new City(20, 38, 'paris', 2.3);
// const lima = new City(3, 1, 'lima', 1.2);


// // seatlt.getCookieNumber();

// City.prototype.render();
// console.log(seatlt);

// const tokyo = new City(3, 24, 'tokoy', 1.2);
// tokyo.getCookieNumber();
// tokyo.render();
// console.log(tokyo);

// const dubai = new City(11, 38, 'dubai', 3.7);
// dubai.getCookieNumber();
// dubai.render();
// console.log(dubai);
// function generateRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };
// const paris = new City(20, 38, 'paris', 2.3);
// paris.getCookieNumber();
// paris.render();
// console.log(paris);

// const lima = new City(3, 1, 'lima', 1.2);
// lima.getCookieNumber();
// lima.render();
// console.log(lima);














