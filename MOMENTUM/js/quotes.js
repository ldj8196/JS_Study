const quotes = [
    {
        quote: "The way ~",
        author: "Walt Disney",
    },
    {
        quote: "Life is ~",
        author: "John Lenon",
    },
    {
        quote: "The world ~",
        author: "Saint",
    },
    {
        quote: "The world ~2",
        author: "Saint2",
    },
    {
        quote: "The world ~3",
        author: "Saint3",
    },
    {
        quote: "The world ~4",
        author: "Saint4",
    },
    {
        quote: "The world ~4",
        author: "Saint4",
    },
    {
        quote: "The world ~5",
        author: "Saint5",
    },
    {
        quote: "The world ~6",
        author: "Saint6",
    },
    {
        quote: "The world ~7",
        author: "Saint7",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;