const users = [
  { name: "Lara" , email : "lara@gmail.com"},
  { name: "Mike" , email : "mike@gmail.com"}
]

function createUser(user, callback){
  setTimeout(() => {
    users.push(user)
    callback()
  }, 2000);
}

createUser({ name: "John" , email : "john@gmail.com"}, getUsers)

// console.log(users);

function getUsers(){
  setTimeout(() => {
    let output = ""
    users.forEach(element => {
      output += `<li>${element.name} --> ${element.email}</li>`
    });
    document.body.innerHTML = `<ul>${output}</ul>`
  }, 1000);
}

getUsers()