const quotes = [
  {
    quote:
      "Life is a tragedy when seen in close-up, but a comedy in long-shot.",
    author: "Charlie Chaplin",
  },
  {
    quote: "Why be a man when you can be a success?",
    author: "Bertolt Brecht",
  },
  {
    quote:
      "A preoccupation with the future not only prevents us from seeing the present as it is but often prompts us to rearrange the past.",
    author: "Eric Hoffer",
  },
  {
    quote: "I never think of the future - it comes soon enough.",
    author: "Albert Einstein",
  },
  {
    quote: "Regret for wasted time is more wasted time.",
    author: "Mason Cooley",
  },
  {
    quote: "Rather be dead than cool.",
    author: "Kurt Cobain",
  },
  {
    quote: "Never leave that 'till tomorrow which you can do today.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: "Mark Twain",
  },
  {
    quote: "A goal without a plan is just a wish.",
    author: "Antoine de Saint-Exupery",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
