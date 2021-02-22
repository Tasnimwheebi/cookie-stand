'use strict'
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let hour = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
const seattle = {
    min: 23,
    max: 65,
    name: 'seattle',
    customerNumber: [],
    cookieNumber: [],
    average: 6.3,
    totalCookieNumber: 0,


    // getCustomerNumber: function () {
    //     for (let i = 0; i < hour.length; i++) {
    //         let customer = Math.ceil(generateRandomNumber(this.min, this.max));
    //         this.customerNumber.push(customer);

    //     },
        getCookieNumber: function () {
            for (let i = 0; i < hour.length; i++) {
                let cookie = Math.ceil(generateRandomNumber(this.min, this.max) * this.average);
                this.cookieNumber.push(cookie);
                this.totalCookieNumber += cookie ;

            }
        },

        getCustomerNumber: function () {
            for (let i=0 ; i< hour.length; i++) {
                let customer = Math.ceil(generateRandomNumber(this.min, this.max));
                this.customerNumber.push(customer);
            }
        },



        render: function () {
            const parentElement = document.getElementById('SalmonCookieShop');

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



            for (let i = 0; i < hour.length; i++) {
                const liElement = document.createElement('li');
                ulElement.appendChild(liElement);
                liElement.textContent = `${hour[i]} : ${this.cookieNumber[i]} cookie.`;

            }
            const liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `Total: ${this.totalCookieNumber} : cookei.`;

        },


    }
// seattle.getCookieNumber();
// seattle.getCustomerNumber();
//seattle.render();
console.log(seattle);
    seattle.getCookieNumber();
    seattle.getCustomerNumber () ;
    seattle.render();

    
    const tokyo = {
        min: 3,
        max: 24,
        name: 'tokyo',
        customerNumber: [],
        cookieNumber: [],
        average: 1.2,
        totalCookieNumber: 0,
    
    
       
            getCookieNumber: function () {
                for (let i = 0; i < hour.length; i++) {
                    let cookie = Math.ceil(generateRandomNumber(this.min, this.max) * this.average);
                    this.cookieNumber.push(cookie);
                    this.totalCookieNumber += cookie ;
    
                }
            },
    
            getCustomerNumber: function () {
                for (let i=0 ; i< hour.length; i++) {
                    let customer = Math.ceil(generateRandomNumber(this.min, this.max));
                    this.customerNumber.push(customer);
                }
            },
    
    
    
            render: function () {
                const parentElement = document.getElementById('SalmonCookieShop');
    
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
    
    
    
                for (let i = 0; i < hour.length; i++) {
                    const liElement = document.createElement('li');
                    ulElement.appendChild(liElement);
                    liElement.textContent = `${hour[i]} : ${this.cookieNumber[i]} cookie.`;
    
                }
                const liElement = document.createElement('li');
                ulElement.appendChild(liElement);
                liElement.textContent = `Total: ${this.totalCookieNumber} : cookei.`;
    
            },
    
    
        }
    
    console.log(tokyo);
    tokyo.getCookieNumber();
    tokyo.getCustomerNumber () ;
    tokyo.render();

    const dubai = {
        min: 11,
        max: 38,
        name: 'dubai',
        customerNumber: [],
        cookieNumber: [],
        average: 3.7,
        totalCookieNumber: 0,
    
    
       
            getCookieNumber: function () {
                for (let i = 0; i < hour.length; i++) {
                    let cookie = Math.ceil(generateRandomNumber(this.min, this.max) * this.average);
                    this.cookieNumber.push(cookie);
                    this.totalCookieNumber += cookie ;
    
                }
            },
    
            getCustomerNumber: function () {
                for (let i=0 ; i< hour.length; i++) {
                    let customer = Math.ceil(generateRandomNumber(this.min, this.max));
                    this.customerNumber.push(customer);
                }
            },
    
    
    
            render: function () {
                const parentElement = document.getElementById('SalmonCookieShop');
    
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
    
    
    
                for (let i = 0; i < hour.length; i++) {
                    const liElement = document.createElement('li');
                    ulElement.appendChild(liElement);
                    liElement.textContent = `${hour[i]} : ${this.cookieNumber[i]} cookie.`;
    
                }
                const liElement = document.createElement('li');
                ulElement.appendChild(liElement);
                liElement.textContent = `Total: ${this.totalCookieNumber} : cookei.`;
    
            },
    
    
        }
    
    console.log(dubai);
    dubai.getCookieNumber();
    dubai.getCustomerNumber () ;
    dubai.render();

    const paris = {
        min: 20,
        max: 38,
        name: 'paris',
        customerNumber: [],
        cookieNumber: [],
        average: 2.3,
        totalCookieNumber: 0,
    
    
       
            getCookieNumber: function () {
                for (let i = 0; i < hour.length; i++) {
                    let cookie = Math.ceil(generateRandomNumber(this.min, this.max) * this.average);
                    this.cookieNumber.push(cookie);
                    this.totalCookieNumber += cookie ;
    
                }
            },
    
            getCustomerNumber: function () {
                for (let i=0 ; i< hour.length; i++) {
                    let customer = Math.ceil(generateRandomNumber(this.min, this.max));
                    this.customerNumber.push(customer);
                }
            },
    
    
    
            render: function () {
                const parentElement = document.getElementById('SalmonCookieShop');
    
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
    
    
    
                for (let i = 0; i < hour.length; i++) {
                    const liElement = document.createElement('li');
                    ulElement.appendChild(liElement);
                    liElement.textContent = `${hour[i]} : ${this.cookieNumber[i]} cookie.`;
    
                }
                const liElement = document.createElement('li');
                ulElement.appendChild(liElement);
                liElement.textContent = `Total: ${this.totalCookieNumber} : cookei.`;
    
            },
    
    
        }
    
    console.log(paris);
    paris.getCookieNumber();
    paris.getCustomerNumber () ;
    paris.render();

    const lima = {
        min: 2,
        max: 16,
        name: 'lima',
        customerNumber: [],
        cookieNumber: [],
        average: 4.6,
        totalCookieNumber: 0,
    
    
       
            getCookieNumber: function () {
                for (let i = 0; i < hour.length; i++) {
                    let cookie = Math.ceil(generateRandomNumber(this.min, this.max) * this.average);
                    this.cookieNumber.push(cookie);
                    this.totalCookieNumber += cookie ;
    
                }
            },
    
            getCustomerNumber: function () {
                for (let i=0 ; i< hour.length; i++) {
                    let customer = Math.ceil(generateRandomNumber(this.min, this.max));
                    this.customerNumber.push(customer);
                }
            },
    
    
    
            render: function () {
                const parentElement = document.getElementById('SalmonCookieShop');
    
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
    
    
    
                for (let i = 0; i < hour.length; i++) {
                    const liElement = document.createElement('li');
                    ulElement.appendChild(liElement);
                    liElement.textContent = `${hour[i]} : ${this.cookieNumber[i]} cookie.`;
    
                }
                const liElement = document.createElement('li');
                ulElement.appendChild(liElement);
                liElement.textContent = `Total: ${this.totalCookieNumber} : cookei.`;
    
            },
    
    
        }
    
    console.log(lima);
    lima.getCookieNumber();
    lima.getCustomerNumber () ;
    lima.render();