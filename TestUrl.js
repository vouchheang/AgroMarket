console.log("Window Location:", window.location);

const myFruitsValues = window.location.search;
console.log("Fruits && Values:", myFruitsValues) ;

const urlParam = new URLSearchParams(myFruitsValues);

URLSearchParams.get()