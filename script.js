let arr = [["National Animal of India?", "Lion", "Tiger", "Horse", "Deer", "Tiger"],
["National fruit of India", "Banana", "Lichi", "Apple", "Mango", "Mango"],
["Prime Minister of india.", "Modi", "Rahul", "Kejriwal", "Lalu", "Modi"]]
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
}

function checkans() {
    options.forEach((opt) => {
        opt.onclick = function () {
            if (this.innerText === arr[index][5]) {
                this.classList.add('right')
                blockoptions();

                score = score + 1;
                scr.innerText = score

                // if(index == arr.length-1){
                //     console.log(index);
                //     finalscore();
            
                // }
            }


            else if (this.innerText !== arr[index][5]) {
                this.classList.add('wrong');
                options.forEach((op) => {
                    if (op.innerText === arr[index][5]) {
                        op.classList.add('right')

                    }
                })
                blockoptions();

                // if(index == arr.length-1){
                //     console.log(index);
                //     dela
                //     finalscore();
            
                // }
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
    console.log(Question);
    console.log([index][0]);

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


})