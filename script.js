const chatInput = document.querySelector(".chat-input textarea");

const sendBtn = document.querySelector(".chat-input span");  

const chatbox = document.querySelector(".chat-box");

let userMessage ;
let ss = "Thanks for your response someone will reply soon please wait till then";

const createChatli = (message , classname) =>{

  let chatli = document.createElement("li");
  chatli.classList.add("chat" , classname);
  
  let  liContent = classname ==="outgoing" ? `<p>${message}</p>`:  `<span class="material-symbols-outlined"><i class="fa-solid fa-robot"></i></span> <p>${message}</p>`;
   /* 
  if ( classname === "outgoing"){
    
    liContent = `<p>${message}</p>`;

  }
  else if(chatInput.value === 'price'){
    liContent =  `<p>fak u</p>`;
   }
  else {

    liContent =  `<span class="material-symbols-outlined"><i class="fa-solid fa-robot"></i></span> <p> </p>` ;
  }
*/
 chatli.innerHTML =  liContent ;
 return chatli;
}


function handleChat (){

userMessage = chatInput.value;
 
 
 chatbox.appendChild(createChatli(userMessage,"outgoing") )  ;

 setTimeout(()=>{

  chatbox.appendChild(createChatli(ss,"incoming") )  ;


 },600);


}
 
sendBtn.addEventListener("click",handleChat);