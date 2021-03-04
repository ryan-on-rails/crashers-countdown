const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date(2021, 6, 23);
const secondDate = new Date();

const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

var elem = document.querySelector('#countdown');

// Get HTML content
var html = elem.innerHTML;

// Set HTML content
elem.innerHTML = diffDays;
