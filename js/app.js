'use strict'
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let hour = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
function City(min, max, name, average,) {
    this.min = min;
    this.max = max;
    this.name = name;
    this.customerNumber = [];
    this.cookieNumber = [];
    this.average = average;
    this.totalCookieNumber = 0;
};

City.prototype.getCookieNumber = function () {
    for (let i = 0; i < hour.length; i++) {
        let cookie = Math.ceil(generateRandomNumber(this.min, this.max) * this.average);
        this.cookieNumber.push(cookie);
        this.totalCookieNumber += cookie;
    };
};
City.prototype.render = function () {
    const parentElement = document.getElementById('SalmonCookieShop');
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);


    const tableElement = document.createElement('table');
    articleElement.appendChild(tableElement);

    const tr1Element = document.createElement('tr');
    tableElement.appendChild(tr1Element);

    const th1Element = document.createElement('th');
    tr1Element.appendChild(th1Element);
    th1Element.textContent = `Name of city `;


    for (let i = 0; i < hour.length; i++) {
        const th1Element = document.createElement('th');
        tr1Element.appendChild(th1Element);
        th1Element.textContent = `${hour[i]}`;
    };

    const th3Element = document.createElement('th');
    tr1Element.appendChild(th3Element);
    th3Element.textContent = `Daily of hour Location`;


    const tr2Element = document.createElement('tr');
    tableElement.appendChild(tr2Element);


    const td1Element = document.createElement('td');
    tr2Element.appendChild(td1Element);
    td1Element.textContent = `Seatle `;



    const tr3Element = document.createElement('tr');
    tableElement.appendChild(tr3Element);

    const td2Element = document.createElement('td');
    tr3Element.appendChild(td2Element);
    td2Element.textContent = `Dubai`;

    const tr4Element = document.createElement('tr');
    tableElement.appendChild(tr4Element);

    const td3Element = document.createElement('td');
    tr4Element.appendChild(td3Element);
    td3Element.textContent = `Paris`;

    const tr5Element = document.createElement('tr');
    tableElement.appendChild(tr5Element);

    const td4Element = document.createElement('td');
    tr5Element.appendChild(td4Element);
    td4Element.textContent = `Lima`;

    const tr6Element = document.createElement('tr');
    tableElement.appendChild(tr6Element);

    const th2Element = document.createElement('th');
    tr6Element.appendChild(th2Element);
    th2Element.textContent = `Total`;


};

const seatlt = new City(23, 65, 'seatle', 6.3);
seatlt.getCookieNumber();
seatlt.render();
console.log(seatlt);

const tokyo = new City(3, 24, 'tokoy', 1.2);
tokyo.getCookieNumber();
tokyo.render();
console.log(tokyo);

const dubai = new City(11, 38, 'dubai', 3.7);
dubai.getCookieNumber();
dubai.render();
console.log(dubai);
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const paris = new City(20, 38, 'paris', 2.3);
paris.getCookieNumber();
paris.render();
console.log(paris);

const lima = new City(3, 1, 'lima', 1.2);
lima.getCookieNumber();
lima.render();
console.log(lima);














