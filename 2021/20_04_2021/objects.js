// object example

let fakeDatabase ={
  users:[
    {
      _id: 1234,
      name: "user-1",
      email: "user-1@email.com",
      password: "sOm@pa$$Word",
      isAdmin: false,
      date: new Date
    }
  ],
}

// createUser({name:"somename", password: "somepassword", isAdmin: true})

function generate_id(){
  let id = Math.floor(Math.random()*10000)
  return id
}

// CRUD create - read - update - delete
function createUser(user){
  if(typeof user != `object`){
    return `not an object`
  }
  let newUser = {
    _id: generate_id(),
    name: user.name,
    email: `${user.name}@gmail.com`,
    password: user.password,
    isAdmin: user.isAdmin,
    date: new Date
  }
  fakeDatabase.users.push(newUser)
  console.log(`user created`);
}

createUser({name:"somename", password: "somepassword", isAdmin: true})
createUser({name:"somename2", password: "so2mepa2ssword", isAdmin: false})

console.log(fakeDatabase);


