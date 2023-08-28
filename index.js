/* function fetchJokes() {
 
}

async function displayJokes() {
 
} */




let jokesRandom = "https://official-joke-api.appspot.com/random_joke";
fetch(jokesRandom)
  .then((res) => {
    return res.json(); 
  })
  .then((data) => {
    console.log(data);
    let helder = document.getElementById("joke-container");
    helder.innerHTML = data.setup + "<br>" + data.punchline;
  });


let fun = () => {
  return new Promise((resolve, reject) => { 
    resolve("pass");
  });
};

fun().then((result) => console.log(result)); 



