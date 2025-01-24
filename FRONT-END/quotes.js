function quotesGen(){
    const quotes = [
        "There is no smoke without fire",
        "One with God is majority",
        "Honesty is the best policy",
        "The more you learn, the more you earn",
        "Like father like son",
        "More money, more respect",
        "There is knowledge that is not power",
        "Boys will be boys",
        "blood is thicker than water",
        "knowledge is life", 
        "Knowledge is Power",
        "Man propose but Allah dispose",
        "Everything is connected",
        "Experience is the best teacher",
        "No pain, no gain",
        "Without struggle there is no progress"
    ];

    let randNum = Math.floor(Math.random()*quotes.length)
    document.querySelector('h2').innerHTML = "<q>"+quotes[randNum]+"</q>";
    // console.log(quotes[randNum]);
}

document.querySelector('button').addEventListener('click', quotesGen)