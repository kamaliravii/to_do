let inputBox=document.querySelector("#input-box")
let list=document.querySelector(".task-container")

function Addtask(){

    if(inputBox.value == ''){
        alert("You should write something..!")
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        list.appendChild(li)

        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputBox.value='';
    saveData();
}


list.addEventListener("click",(e)=>{

    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false)

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function show(){
    list.innerHTML=localStorage.getItem("data");
}

show();