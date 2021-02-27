'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//MAKE COLUMN HEADER AS GLOBAL
let columnHeader = ['Sales/h', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];

// //MAIN FUNCTION
function generateRandomNumber( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

//MAIN CONSTRUCTORS
function City( name, min, max, avarage ) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avarage = avarage;
  this.numOfCookiesArr = [];
  this.total = 0;
  this.totalPerHour = 0;
  City.allCity.push( this );
}

City.allCity = [];

//PROTOTYPE FOR GET NUM OF COOKIES
City.prototype.getNumOfCookies = function () {
  for ( let i = 0; i < hours.length; i++ ) {
    let cookiesNum = Math.floor( generateRandomNumber( this.min, this.max ) * this.avarage );
    this.numOfCookiesArr.push( cookiesNum );

    //3rd step calculate total number of cookies :
    this.total += cookiesNum;


  }
};

//HEADER FUNCTION
const header = function () {
  const parentElement = document.getElementById( 'SALAMON' );
  const table = document.createElement( 'table' );
  parentElement.appendChild( table );
  table.setAttribute( 'id', 'myTable' );
  const tr1 = document.createElement( 'tr' );
  table.appendChild( tr1 );
  for ( let i = 0; i < columnHeader.length; i++ ) {
    const th1 = document.createElement( 'th' );
    tr1.appendChild( th1 );
    th1.textContent = columnHeader[i];
  }
};
//CALLING HEADER FUNCTION
header();

//PROTOTYPE FOR RENDER
City.prototype.render = function () {
  const tableElement = document.getElementById( 'myTable' );
  const tr = document.createElement( 'tr' );
  tableElement.appendChild( tr );
  const td1 = document.createElement( 'td' );
  tr.appendChild( td1 );
  td1.textContent = this.name;

  for ( let i = 0; i < hours.length; i++ ) {
    const td2 = document.createElement( 'td' );
    tr.appendChild( td2 );
    td2.textContent = this.numOfCookiesArr[i];
  }
  const td3 = document.createElement( 'td' );
  tr.appendChild( td3 );
  td3.textContent = this.total;
};





//SEATTLE CITY
const seattle = new City( 'Seattle', 23, 65, 6.3, [] );
seattle.getNumOfCookies();
seattle.render();
//TOKYO CITY
const tokyo = new City( 'Tokyo', 3, 24, 1.2, [] );
tokyo.getNumOfCookies();
tokyo.render();
//DUBAI CITY
const dubai = new City( 'Dubai', 11, 38, 3.7, [] );
dubai.getNumOfCookies();
dubai.render();
//PARIS CITY
const paris = new City( 'Paris', 20, 38, 2.3, [] );
paris.getNumOfCookies();
paris.render();
//LIMA CITY
const lima = new City( 'Lima', 2, 16, 4.6, [] );
lima.getNumOfCookies();
lima.render();

console.log( City.allCity );



// Lab: 09 - Add a form to the cookie stand project

// //NEW CITY RAW FUNCTION
// const cityRaw = function () {
//   const tableElement = document.getElementById('myTable');
//   const tr = document.createElement('tr');
//   tableElement.appendChild(tr);
//   const th1 = document.createElement('th');
//   tr.appendChild(th1);
//   th1.textContent = 'Total of total';
//   for (let i = 0; i < hours.length; i++) {
//     const th2 = document.createElement('th');
//     tr.appendChild(th2);
//     th2.textContent = seattle.numOfCookiesArr[i] + tokyo.numOfCookiesArr[i] + dubai.numOfCookiesArr[i] + paris.numOfCookiesArr[i] + lima.numOfCookiesArr[i];
//   }
//   const th3 = document.createElement('th');
//   tr.appendChild(th3);
//   th3.textContent = seattle.total + tokyo.total + dubai.total + paris.total + lima.total;
// };

// //FOOTER FUNCTION
const footer = function () {
  const tableElement = document.getElementById( 'myTable' );
  const tr = document.createElement( 'tr' );
  tableElement.appendChild( tr );
  const th1 = document.createElement( 'th' );
  tr.appendChild( th1 );
  th1.textContent = 'Total of total';
  for ( let i = 0; i < hours.length; i++ ) {
    const th2 = document.createElement( 'th' );
    tr.appendChild( th2 );

    // FOR LAB 09 1ST STEP TO MAKE THE TOTAL SUM OTHER NEW CITIES
    let totalCookies = 0;
    for ( let j = 0; j < City.allCity.length; j++ ) {
      totalCookies += parseInt( City.allCity[j].numOfCookiesArr[i] );
    }
    th2.textContent = totalCookies;

    //   th2.textContent = seattle.numOfCookiesArr[i] + tokyo.numOfCookiesArr[i] + dubai.numOfCookiesArr[i] + paris.numOfCookiesArr[i] + lima.numOfCookiesArr[i];
  }

  const th3 = document.createElement( 'th' );
  tr.appendChild( th3 );
  th3.textContent = seattle.total + tokyo.total + dubai.total + paris.total + lima.total;
};

//CALLING FOOTER FUNCTION
footer();

// STEP 2 FOR LAB 09
const formElement = document.getElementById( 'ADD-NEW-LOCATION' );
formElement.addEventListener( 'submit', function ( event ) {
  event.preventDefault();

  const cityName = event.target.name.value;
  const minNumOfCustomers = event.target.min.value;
  const maxNumOfCustomers = event.target.max.value;
  const avarage = event.target.avarage.value;

  document.getElementById( 'myTable' ).removeChild( document.getElementById( 'myTable' ).lastChild );
  const city = new City( cityName, minNumOfCustomers, maxNumOfCustomers, avarage );

  formElement.reset();

  city.getNumOfCookies();
  city.render();
  console.log( City.allCity );

  // tableElement.removeLastChild
  footer();

} );
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














