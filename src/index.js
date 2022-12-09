document.addEventListener("DOMContentLoaded", () => {
  
});
let form = document.querySelector('form');

  form.addEventListener("submit", (event)=>{
     event.preventDefault();
     let input = document.getElementById('new-task-description').value;
      append(input);
      form.reset();
  })

const append = (input) => {
  let description= document.getElementById("tasks");
  let p = document.createElement("p");
  p.className += " " + "mt-3";
  p.textContent = input
  let row = description.appendChild(p)


  let btn = document.createElement("button");
  btn.className += " " + "btn btn-xm btn-danger ml-5";
  btn.textContent = "X";
  row.appendChild(btn)

  btn.onclick = () => (delete_(p)) ;

}

const delete_ = (p) => {
  p.remove();
} 