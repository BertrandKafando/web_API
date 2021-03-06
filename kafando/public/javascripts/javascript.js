//const users = require("../../repositories/users")
const URL = 'http://localhost:4000/users';

async function getusers(cb){
  let xhr=new XMLHttpRequest()
  xhr.open('GET','/users')
  xhr.setRequestHeader('content-type','application/json')


  xhr.onload=()=>{
  if(xhr.status==200){
      console.log(xhr.response)
      cb(JSON.parse(xhr.responseText))
  }
  }
  xhr.send()
  }



  async function createUser() {
    var data = {}
    data.username = document.querySelector("#username").value
    data.email = document.querySelector("#email").value
    data.password = document.querySelector("#password").value
    data.role = document.querySelector("#role").value

    fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err));
    document.getElementById('validate').innerHTML="<div class='alert alert-success'>User added successfully</div>"
}

function delete_user(id){

  if( !confirm("Voulez vous vraiment supprimer cet utilisateur ?") ) return;
  
  $.ajax({
  url: 'http://localhost:4000/users/'+id,
  type: 'DELETE',
  success: function( reponse){
  console.log(reponse)
  fetch_users();
  },
  error : function (err){
  console.log(err);
  }
  })
  }
  fetch_users();