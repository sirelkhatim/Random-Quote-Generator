/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 create `quotes` list with quote objects
***/
const quotes = [{'quote' : "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
'source' : 'Oprah Winfrey'},
{'quote' : "A journey of a thousand leagues begins beneath one’s feet.",
'source' : "Lao Tzu"},
{'quote' : "Dreams are the touchstones of our characters.",
'source' : "Henry David Thoreau"},
{'quote' : "When writing a novel a writer should create living people; people not characters. A character is a caricature.",
'source':  "Ernest Hemingway", 'citation':"Death in the afternoon", 'year': '1932','tag':'Fiction'}]


// Test that the quotes has the right content
console.log(quotes)


/***
 * create a `getRandomQuote` function that takes the quotes list and accesses a random object in the list
***/

function getRandomQuote(){
  // get random index
  const randIndex = Math.floor(Math.random()*quotes.length);
  // return random quote object
  return quotes[randIndex]
}

// test that the getRandomQuote gets a random object from the quotes object
console.log(getRandomQuote())

/***
 * create a `printExtraAttributes` function to help print the extra attributes in an object
***/

function printExtraAttributes(qObject, hString){

  // loop through all the quote objects
  for(let j = 0; j<Object.keys(qObject).length;j++){
    property = Object.keys(qObject)[j]
    // make sure it's an `extra` attribute and not an essential one
    if(property != 'quote' &&  property!='source'){

      console.log(property)
        hString += '<span class="citation">';
        hString += qObject[property] + '</span>';
      }
  }

  return hString
}

// test that the printExtraAttribute works
console.log(printExtraAttributes(quotes[3],'hello'));

/***
 * create a `printQuote` function to print the quote object in the web page
***/
function printQuote(){
  // get a random object from the quotes list
  const quoteObject = getRandomQuote();
  // build the html string
  let htmlString = '';
  htmlString += '<p class="quote">';
  htmlString += quoteObject.quote;
  htmlString +=  '</p> <p class="source">';
  htmlString += quoteObject.source;
  htmlString =   printExtraAttributes(quoteObject, htmlString);
  htmlString += '</p>';
  document.getElementById('quote-box').innerHTML = htmlString;
  // get random color
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  // change background color with randomColor
  document.body.style.backgroundColor = '#'+randomColor;
}

// create a function that prints a new quote every 15s
function timedPrintQuote(){
  setInterval(printQuote, 15000)
}

// call the print Quote
timedPrintQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);