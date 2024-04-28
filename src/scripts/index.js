
    const smoothScrollLinks = document.querySelectorAll('.navigation__list-item'); 
     
    for (let link of smoothScrollLinks) { 
      link.addEventListener('click', event => { 
         event.preventDefault(); 
         
        const target = event.target; 
        const elementToScroll = document.querySelector(target.getAttribute('href')); 
        elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'start'}); 
      }); 
    };


// const buttonForm = document.getElementById("button__form");

// function buttonSubmit(){

// };

// buttonForm.addEventListener("click", buttonSubmit)
// console.log(buttonForm)

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
event.preventDefault();

let data = Array.from(event.target.elements).map((element) =>{
  return{
    name: element.name,
    value:element.value,
  };
} );

data = data.filter((d) => {
  if (d.name) {
    return true;
  } else {
    return false;
  }
});

const formData = new FormData(); 


data.forEach((d) =>{
  formData.append(d.name, d.value);
}); 

console.log(formData);
});