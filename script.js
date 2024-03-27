let arr = [
    ["What is the capital of India?", "New Delhi", "Kolkata", "Chennai", "Mumbai", "New Delhi"],
    ["Who is known as the Iron Man of India?", "Mahatma Gandhi", "B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Sardar Vallabhbhai Patel"],
    ["Which is the national bird of India?", "Indian Crow", "Indian Peafowl", "Indian Sparrow", "Indian Parrot", "Indian Peafowl"],
    ["Who composed the Indian National Anthem?", "Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Maulana Abul Kalam Azad", "Sarojini Naidu", "Rabindranath Tagore"],
    ["When did India become independent?","1955", "1950", "1947",  "1945", "1947"],
    ["Who was the first Prime Minister of India?", "Jawaharlal Nehru", "Indira Gandhi", "Lal Bahadur Shastri", "Rajiv Gandhi", "Jawaharlal Nehru"],
    ["Which is the national animal of India?", "Lion", "Elephant", "Leopard", "Tiger", "Tiger"],
    ["Who is known as the Father of the Indian Constitution?", "Mahatma Gandhi", "B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel", "B.R. Ambedkar"],
    ["Which Indian state is known as the Land of Five Rivers?", "Uttar Pradesh", "Rajasthan", "Punjab", "Haryana", "Punjab"],
    ["Who is known as the Nightingale of India?", "Sarojini Naidu", "Indira Gandhi", "Mother Teresa", "Kalpana Chawla", "Sarojini Naidu"],
  ]
  
  
  

const Question = document.querySelector(".question")
const options = document.querySelectorAll("li")
const next = document.querySelector("button")
const scr = document.querySelector(".Scr")
const cont = document.querySelector(".qna-box")

let index = 0;
let score = 0;

console.log(arr.length);

function blockoptions() {
    options.forEach((op) => {
        op.onclick = null;
    })
}


function finalscore(){
    cont.textContent=''
    var finalbox = document.createElement("div")
    var scoretital = document.createElement("h1")
    var scoreboard = document.createElement("div")
    var totalscore = document.createElement("h1")


    finalbox.classList.add("finalbox")
    scoreboard.classList.add("finalscoreboard")

    scoretital.innerText = "Total Score";
    totalscore.innerText = score + " / " + arr.length


    cont.appendChild(finalbox)
    finalbox.appendChild(scoretital)
    finalbox.appendChild(scoreboard)
    scoreboard.appendChild(totalscore)

}

function checkans() {
    options.forEach((opt) => {
        opt.onclick = function () {
            if (this.innerText === arr[index][5]) {
                this.classList.add('right')
                blockoptions();

                score = score + 1;
                scr.innerText = score
            }


            else if (this.innerText !== arr[index][5]) {
                this.classList.add('wrong');
                options.forEach((op) => {
                    if (op.innerText === arr[index][5]) {
                        op.classList.add('right')

                    }
                })
                blockoptions();
            }

        }
    })
}
//display content

checkans();

function displayquestions() {

    Question.innerText = index + 1 + ". " + arr[index][0];
    let i = 1;
    options.forEach((opt) => {
        opt.innerText = arr[index][i]
        i++;
    })
    // console.log(Question);
    // console.log([index][0]);

}

displayquestions();


next.addEventListener("click", function () {
    if (index < arr.length-1) {
        index++;
        displayquestions();

        options.forEach((op) => {
            op.classList.remove('right', 'wrong')
        })

        checkans();
    }

    else if(index == arr.length-1){
        finalscore();
        index=0
    }

})