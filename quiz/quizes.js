qns = {
    1: {
        question: "A popular banking software developed by Nepal",
        1: "flexclub",
        2: "banknpl",
        correct: "financle"
    },
    2: {
        question: "What is the biggest risk on digital?",
        1: "data security task",
        2: "cyber security task",
        correct: "both"
    },
    3: {
        question: "When was digital banking established",
        1: "2010",
        2: "2009",
        correct: "2002"
    },
    4: {
        question: "What is the full form of OTP",
        1: "Old time password",
        correct: "One time password",
        2: "One type password",
        
    },
    5: {
        question: "Which bank introduced mobile banking in nepal?",
        1: "Nepal Bank limited",
        2: "Siddhartha Bank",
        correct: "Laxmi Bank"
    }
}

const form = document.getElementById("grid-item-form");

qnNo = 1

function loadQuestion(number) {
    qnNo = number
    qn = qns[number];
    question = qn.question;
    html = `
    <label for="formitem" id="formitem">${question}</label> <br>
    <br> `
    form.innerHTML = html;
    for (var key in qn) {
        if (key !== "question") {
            val = qn[key]
            html = `
                <input type="radio" class="formbuttons" data-correct = "${key}" onclick="checkAnswer()"><span> ${val} </span> <br>
            `
            form.innerHTML += html;
        }
    }
    form.innerHTML += '<br><br><br><br><br><center><button type="button" class="nxt" onclick="incQnNo()">Next Question</button></center>'
}

loadQuestion(qnNo);

function incQnNo() {
    loadQuestion(qnNo + 1)
}

function checkAnswer() {
    that = document.activeElement;
    if (that.getAttribute("data-correct") == "correct") {
        console.log("test");
        that.classList.add("correct-answer");
    }
}