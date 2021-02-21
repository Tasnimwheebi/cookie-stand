'use strict'
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
hour = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
const seattle = {
    minCutom: 23,
    maxCustom: 65,
    name: 'seattle',
    customerNumber: 0,
    cookieNumber: 0,
    average: 6.3,
    total: 0,



    customerNumber: function (min, max) {
        for (let i = 0; i < hour.length; i++) {
            this.customerNumber = generateRandomNumber(min, max);
            console.log(this.customerRandomNumber);
        }
        

        cookieNumber = function (min, max) {
            for (let i = 0; i < hour.length; i++) {
                this.cookieNumber = generateRandomNumber((min, max) * this.average);
                console.log(this.cookieRandomNumber);
            }
       
            total = function () {
                for (let i = 0; i < this.cookieNumber.length; i++) {
                    this.total = this.cookieNumber;
                    return [this.total];
                }

            }

            render = function () {
                const parentElement = document.getElementById('Salmon Cookei');

                // Create Element
                // append element to parent element
                // set text content to the element 

                const articleElement = document.createElement('article');
                parentElement.appendChild(articleElement);

                const h2Element = document.createElement('h2');
                articleElement.appendChild(h2Element);
                h2Element.textContent = this.name;

                const ulElement = document.createElement('ul');
                articleElement.appendChild(ulElement);

                for (let i = 0; i < this.hour.length; i++) {
                    const liElement = document.createElement('li');
                    ulElement.appendChild(liElement);
                    liElement.textContent = `${this.hour[i]} : ${cookieNumber}`


                }
                const liElement = document.createElement('li');
                ulElement.appendChild(liElement);
                liElement.textContent = `${this.total} : total.`;

            }
        }
