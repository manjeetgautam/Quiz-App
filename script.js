let arr = [["National Animal of India?", "Lion", "Tiger", "Horse", "Deer", "Tiger"],["National fruit of India", "Banana", "Lichi", "Apple", "Mango", "Mango"]]
let index = 0;
let score = 0;
let lastindex = arr.length;
const Question = document.querySelector(".question")
const options = document.querySelectorAll("li")

const next = document.querySelector("button")


function blockoptions(){
    options.forEach((op) =>{
        op.onclick = null;
    })
}


options.forEach((opt) =>{
    opt.onclick = function (){
        if(this.innerText === arr[index][5]){
            this.classList.add('right')
            blockoptions();
        }
        

        else if(this.innerText !== arr[index][5]){
            this.classList.add('wrong');
            options.forEach((op)=>{
                if(op.innerText===arr[index][5]){
                    op.classList.add('right')

                }
            })
            blockoptions();
        }

    }
    
})

//display content

function displayquestions(arr){

    Question.innerText = arr[index][0];
    let i=1;
    options.forEach((opt) =>{
        opt.innerText=arr[index][i]
        i++;
    })
    index++;
    console.log(Question);
    console.log(arr[0][0]);

}

// displayquestions(arr)

next.onclick = displayquestions(arr)