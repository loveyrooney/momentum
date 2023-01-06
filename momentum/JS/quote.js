const quotes = [
    { 
        quote : "In the beginning God created the heavens and the earth.",
        book : "Genesis 1:1" 
    }
,
    { 
        quote : "The LORD is my shepherd, I shall not want.",
        book : "Psalms 23:1"
    }
,
    { 
        quote : "The people whom I formed for Myself Will declare My praise.",
        book : "Isaiah 43:21"
    }
,
    { 
        quote : "The LORD will fight for you while you keep silent.",
        book : "Exodus 14:14"
    }
,
    { 
        quote : "The Lord GOD is my strength, And He has made my feet like hinds' feet, And makes me walk on my high places.",
        book : "Habakkuk 3:19"
    }
,
    { 
        quote : "There was the true Light which, coming into the world, enlightens every man.",
        book : "John 1:9"
    }
,
    { 
        quote : "Let your light shine before men in such a way that they may see your good works, and glorify your Father who is in heaven.",
        book : "Matthew 5:16"
    }
,
    { 
        quote : "And we know that God causes all things to work together for good to those who love God, to those who are called according to His purpose.",
        book : "Romans 8:28"
    }
,
    { 
        quote : "Now faith is the assurance of things hoped for, the conviction of things not seen.",
        book : "Hebrews 11:1"
    }
,
    { 
        quote : "For I am confident of this very thing, that He who began a good work in you will perfect it until the day of Christ Jesus.",
        book : "Philippians 1:6"
    }
];

const quote = document.querySelector("#quotes span:first-child");
const book = document.querySelector("#quotes span:last-child");

const randomquote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = randomquote.quote;
book.innerText = randomquote.book;