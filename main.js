const orders = [
    {
        question : 'What country\'s flag is this?',
        options: ['France', 'Spain', 'Italy', 'Germany'],
        flag: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
        answer: 'Italy'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['France', 'Spain', 'Italy', 'Germany'],
        flag: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
        answer: 'Germany'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['France', 'Spain', 'Italy', 'Germany'],
        flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
        answer: 'France'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['France', 'Spain', 'Italy', 'Germany'],
        flag: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
        answer: 'Spain'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['France', 'United States', 'United Kingdom', 'Germany'],
        flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
        answer: 'United States'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['France', 'United States', 'United Kingdom', 'Germany'],
        flag: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
        answer: 'United Kingdom'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['Canada', 'Australia', 'New Zealand', 'South Africa'],
        flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg',
        answer: 'Canada'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['Canada', 'Australia', 'New Zealand', 'South Africa'],
        flag: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg',
        answer: 'Australia'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['Canada', 'Australia', 'New Zealand', 'South Africa'],
        flag: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg',
        answer: 'New Zealand'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['Canada', 'Australia', 'New Zealand', 'South Africa'],
        flag: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg',
        answer: 'South Africa'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['Mexico', 'Brazil', 'Argentina', 'Chile'],
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
        answer: 'Mexico'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['Mexico', 'Brazil', 'Argentina', 'Chile'],
        flag: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
        answer: 'Brazil'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['Mexico', 'Brazil', 'Argentina', 'Chile'],
        flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
        answer: 'Argentina'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['Mexico', 'Brazil', 'Argentina', 'Chile'],
        flag: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg',
        answer: 'Chile'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['China', 'Japan', 'South Korea', 'India'],
        flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAAC3CAMAAADpTyH4AAAAbFBMVEXuHCX//wDsACf83gzuACbuFCX//QD+9Qb0gB36zxD71w/zdx73rRb97gjwSSL96wn5vxPvKST1lBr0iRz2pBjyax/2nhnwVSH++QTwQSLyZSD4uxT6yxHycx/uMyTxXiH4sxb85Av6xRL0jhuN2tbRAAAE2ElEQVR4nO3ca3eiMBAG4CTMCCKoiIoWxdv//4+bAF5qrQbWHiW+z5eebbc9ZMyEZBIQAgAAAAA+EhO/+hLeDBeDDDEpMdVfJiG6SSULlNKhoECu1Kuv5T1Q5i1SUmom5R4hqZAORi8KfNnLEZIKJ1NZ8qcISY02cRmSxZYUvfpi/pb17YMGspYv3Q7K0LJ1zBN5Mgr+9qJeiYtxZhUTpvQiIuN06ezkhJdybjVcntImjjKllMPTNZ7JnU1I6MuMrKEeYfvC4XAIc2sdy7h43ET68vK1nqkFJiROR0QPJfqzt8kcKnOFhivnJ69s8sGzbyStXV/icJKbATOxTgVOotDxkBQ9M0WfNOgm2cTpWZrgTXlfbZA5x7pJ/Q/nRloW22qq0bZpSeJal+HCrxa3h3bjA6V7OhbbHOkvnFUT0l6/ZUgGi72JhU6mmRsFWRbRcc3S7kOmTShzIsVzV2Yrx7zRmZO2apGZucktzRcytFs7vj0eHle2vXbzLy629R+IHOkkYnpe7bfKHFZ1waBvW3R5c1zEp5D4QfOPmVUS9arftqsvvBv1U3KuCenM+enuJ68Dcswau4Xj+/Fi79q5k+iYhNc/3e2COzFhM7Kef7uLVXtWfdmM/3W3mcxZmu9OMelkP1HrRhFZPSrCM+ncKvY6HOWA0sV+IhTHj+Jwsjgom1tQeRceKyXW0Srt4k2HVfQ4GKVRYfeZs5jLkY6F6TFdjIimMquI5Nbto1SOO77iI+U9DIi/tkqa6u+lo3v3pU5gdXgQEY8aDJQURF2PiKaKuxGZ2ncRYWqxFjse74/U/vekyRreSx0pNfKvU5SHkxF3Kd7d6iJpo6RxjDlm9YPV5rCrOAlvhCTefGzamJDcGkkWjtTGWuHg5uj6wZnD4nalYORIUbmF23mjM6fFCp/ciOL5bOJ/Zw5laxdiwuKiSNib7y4yp3GlndKVCwf5LvMmThSdqyjNS+108DtZO7rC5/n8WM/gWW1aZw4vc+nAmXoWx2Vfb1a1hsRx5tY0c2i2c2Hz85Q3u1NlhGnSNHPKanR5xNGfVLs+yV9d8N/jen1zWRlhNVyU37Q9kMTLSb4d7/ujsreVOdjdw58sxmXjh98bT1x+e7S0zAL6trclR4MOr6JZmCb0f1RGWJnZiv1RPlKDxSki4bLLY2x5ZO9mZUQVOg0anOGkoh6ne9tOz2GZc7ng2+0mPUXZNSimUr1T7s26HBFzvxn/Wk5kNbN88KJEX/XMd9vltBGc3T2ERUmDpV/5iI7vS7myHZTf04O0/yWnbv5X8wRkpJZ9GR86HZLnoSw0FWxSqc7FV1/Me6DUq7Z9VBY5USJ4gqKoA9Hpe/BTObLV998YPeIKbeaISaXOEVruHTku/784KcrXl5iTWJ+8AXaJAjnVUdFf8GaKGouJlLvB2hTeMJZUKKtPucUtH/Fy0PH8xSJnl9840ESZOhVvoDpcVnyib9um/SFiUr2bos6d8VpgjNXD66geXqeJ068vsaZnraaCFuuBpPube09hHqnYD8icDkVIKlwMTbaY0mLowuGJZ6hLI7QZhU4cEX8iCjz7t518Bl4G6CVXUFQDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADopH/kEiwy7f/RqQAAAABJRU5ErkJggg==',
        answer: 'China'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['China', 'Japan', 'South Korea', 'India'],
        flag: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
        answer: 'Japan'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['China', 'Japan', 'South Korea', 'India'],
        flag: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
        answer: 'South Korea'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['China', 'Japan', 'South Korea', 'India'],
        flag: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
        answer: 'India'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['Russia', 'Ukraine', 'Poland', 'Czech Republic'],
        flag: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
        answer: 'Russia'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['Russia', 'Ukraine', 'Poland', 'Czech Republic'],
        flag: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg',
        answer: 'Ukraine'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['Russia', 'Ukraine', 'Poland', 'Czech Republic'],
        flag: 'https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg',
        answer: 'Poland'
    },
    {
        question : 'What country\'s flag is this?',
        options: ['Russia', 'Ukraine', 'Poland', 'Czech Republic'],
        flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg',
        answer: 'Czech Republic'
    }
];

// init..
const questionElm = document.getElementById('question');
const optionsElm = document.getElementById('options');
const submitElm = document.getElementById('Submit');
const flag = document.getElementById("flags");
const timerElm = document.getElementById('timer');
const resultJs = document.getElementById('result');

// current situation...
let currentQuestion = 0;
let score = 0;
let startTime = 0;
let intervalId;

// functionality
function showQuestion() {
    if (currentQuestion === 0) {
        startTime = new Date();
        intervalId = setInterval(updateTimer, 1000);
    }

    const questionOb = orders[currentQuestion];
    questionElm.innerText = questionOb.question;

    flag.innerHTML = `<img id="flagImg" src="" alt="Flag" />`;
    const flagImg = document.getElementById('flagImg');
    flagImg.src = questionOb.flag;

    optionsElm.innerHTML = "";
    questionOb.options.forEach((option) => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElm.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const acAnswer = orders[currentQuestion].answer;

    if (selectedBtn.innerText === acAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < orders.length) {
        showQuestion();
    } else {
        clearInterval(intervalId);
        showResult();
    }
}

function updateTimer() {
    const now = new Date();
    const timeTaken = Math.floor((now - startTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    timerElm.innerText = `Time: ${minutes} min ${seconds} sec`;
}

function showResult() {
    const endTime = new Date();
    const timeTaken = Math.floor((endTime - startTime) / 1000); // Time in seconds
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    resultJs.innerHTML = `
        <h1 id="result-text">Quiz Completed!</h1>
        <h2 id="result-text">Your score is ${score}/${orders.length}</h2>
        <h2 id="result-text">Time taken: ${minutes} min ${seconds} sec</h2>`;
}

submitElm.addEventListener("click", () => {
    currentQuestion = orders.length; // Ensure the game stops
    clearInterval(intervalId);
    showResult();
    resultJs.style.border = "#2c364c solid 1px"
});

showQuestion();
