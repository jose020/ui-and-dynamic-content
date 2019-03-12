const to_do = document.querySelector("#just-do-it");
const to_do_list = document.querySelector(".to-do-list");
const add_btn = document.querySelector("#button");
const msgBox = document.querySelector("#msg-content");


function add () {
  if (to_do.value.trim() != "") {
    let no = document.createElement("li");
    no.textContent = to_do.value;
    no.className = "item"
    to_do_list.appendChild(no);
    to_do.value = ""
    setTimeout(function(){ msgBox.innerHTML="";msgBox.classList.remove("done") }, 2000);

  }else {
    msgBox.innerHTML = "Add your world domination list"
    msgBox.classList.add("error")
    setTimeout(function(){ msgBox.innerHTML=""; msgBox.classList.remove("error")}, 2000);
  }

  }
  to_do.addEventListener("keyup", function () {
    if (event.keyCode === 13) {
      add()
    }
})
  
add_btn.addEventListener("click",add)
