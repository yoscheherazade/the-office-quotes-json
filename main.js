let btn = document.getElementById('btn').addEventListener('click', () => {
  getQuote();
});

function getQuote() {
  const xhr = new XMLHttpRequest();
  const url = 'quotes.json';

  xhr.open('GET', url, true);

  xhr.onload = function() {
    if (this.status === 200) {
      let quotes = JSON.parse(this.responseText);

      for (i in quotes) {
        outputQuote = quotes[i].quote;
        outputCharacter = quotes[i].character;

        queryNum = 20;
        randomNum = Math.floor(Math.random() * queryNum + 1);

        document.getElementById('output').innerHTML = `
        "${quotes[randomNum].quote}" - ${quotes[randomNum].character} <br>
        ${quotes[randomNum].pic}
        `;
      }
    }
  };
  xhr.send();
}
