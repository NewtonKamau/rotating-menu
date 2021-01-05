const jokeEl = document.getElementById("jokes");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

jokeBtn.addEventListener("click",generateJoke);

//using async and wait
async function generateJoke(){
    const config = {
        headers:{
            "Accept":"application/json"
        }
    }
   const response = await fetch("https://icanhazdadjoke.com",config)
   
   const data = await response.json();
   jokeEl.innerHTML = data.joke;
};
//using .then
// function generateJoke(){
//     const config = {
//         headers:{
//             "Accept":"application/json"
//         }
//     }
//     fetch("https://icanhazdadjoke.com",config)
//     .then((res)=>res.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke;
//     });
// };
