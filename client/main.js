
const fortuneBtn = document.getElementById('fortune-button')
const makeBtn = document.getElementById('make-button')

fortuneBtn.onclick = function () {
axios.get("http://localhost:4000/api/fortune/")
.then(function(response){
    const data = response.data
    alert(data)
})

}

makeBtn.onclick = function () {
    axios.post("http://localhost:4000/api/make")
    .then(CreateButton)
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