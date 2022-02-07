
const fortuneBtn = document.getElementById('fortune-button')
const makeBtn = document.getElementById('make-button')
const adviceSubmit = document.getElementById('advice')
const submit = document.getElementById('submit')
const postDiv = document.getElementById('post')
const getAdvice = document.getElementById('get-advice')
fortuneBtn.onclick = function () {
axios.get("http://localhost:4000/api/fortune/")
.then(function(response){
    const data = response.data
    alert(data)
})

}


// create Button function

const buttons = []

function CreateButton(){
    const madeButton = document.createElement('button').textContent = 'button'
    console.log('made button')
    buttons.push(madeButton)
}


document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

const advice = document.getElementById('advice')




function deleteAdvice(id){
    axios.delete('http://localhost:4000/api/str/' + id)
  }



  function createDisplay(){
    let data = {}
    axios.get('http://localhost:4000/api/advice')
      .then(res => {
        data = res.data
      })
    const madeAdvice = document.createElement('div')
    
    const text = document.createElement('p').textContent = data.advice
    const deleteBtn = document.createElement('button').textContent = 'Delete'
    deleteBtn.onclick = function () {
       deleteAdvice(data.id)
    }
      
    madeAdvice.appendChild(text)
    madeAdvice.appendChild(deleteBtn)
    postDiv.appendChild(madeAdvice)
  }
  


function addAdvice(){
    let body = {
        str:adviceSubmit.value
    }
    axios.post('http://localhost:4000/api/update',body)
    .then(
        console.log('submitted')
    )
}

submit.addEventListener('click',addAdvice)
getAdvice.addEventListener('click',createDisplay)
