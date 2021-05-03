// reduce returns a single value

// accumulator starts with 0 and is used to store the result
// item is each item in an array being looped through by reduce

let nums = [1,2,3,4]

let result = nums.reduce(function(accumulator , currentItem ){
  return accumulator+currentItem
})

console.log("using reduce",result);

let sum = 0
for(let i = 0 ; i < nums.length ; i++){
  sum += nums[i]
}

console.log("using for loop",sum);

function getSum(acc, item){
  return acc + item
}

let result2 = nums.reduce(getSum)

console.log("using reduce inside a function",result2);

// create a function to return an average of array elements

let sum2 = 0
for(let i = 0 ; i < nums.length ; i++){
  sum2 += nums[i]
}
console.log("average using for loop",sum/nums.length);

let avg = nums.reduce(function(acc, item,){
  return acc + item
})/nums.length

console.log("average using for loop",avg);

let users = [
  {
   "_id": "d439dc40-a1ac-11eb-ac18-c98a17456615",
   "firstName": "Lena",
   "lastName": "Evans",
   "email": "lena.evans@altavista.com",
   "password": "GaNr8EJUvV",
   "isAdmin": false,
   "date": "2021-04-27T07:58:39.093Z"
  },
  {
   "_id": "d4396588-a1ac-11eb-ac18-c98a17456615",
   "firstName": "Dwight",
   "lastName": "Galindo",
   "email": "dwight.galindo@outlook.com",
   "password": "LXAMubAmgE",
   "isAdmin": true,
   "date": "2021-04-27T07:58:39.093Z"
  },
  {
   "_id": "d439670d-a1ac-11eb-ac18-c98a17456615",
   "firstName": "Marisol",
   "lastName": "Reid",
   "email": "marisol.reid@tmobile.com",
   "password": "qPwFBU5hRV",
   "isAdmin": false,
   "date": "2021-04-27T07:58:39.093Z"
  },
  {
   "_id": "d4398d2d-a1ac-11eb-ac18-c98a17456615",
   "firstName": "Zachary",
   "lastName": "Bush",
   "email": "zachary.bush@altavista.com",
   "password": "oXyVfvmLDb",
   "isAdmin": false,
   "date": "2021-04-27T07:58:39.093Z"
  },
  {
   "_id": "d439d9cc-a1ac-11eb-ac18-c98a17456615",
   "firstName": "India",
   "lastName": "Dunn",
   "email": "india.dunn@yahoo.com",
   "password": "2X98pM7kLI",
   "isAdmin": false,
   "date": "2021-04-27T07:58:39.093Z"
  },
  {
   "_id": "d4391792-a1ac-11eb-ac18-c98a17456615",
   "firstName": "Jodie",
   "lastName": "Galvan",
   "email": "jodie.galvan@yahoo.com",
   "password": "fRb4UfvSbt",
   "isAdmin": true,
   "date": "2021-04-27T07:58:39.093Z"
  },
  {
   "_id": "d439d9d3-a1ac-11eb-ac18-c98a17456615",
   "firstName": "Denise",
   "lastName": "Reeves",
   "email": "denise.reeves@aol.com",
   "password": "FG70sgE1mX",
   "isAdmin": false,
   "date": "2021-04-27T07:58:39.093Z"
  },
  {
   "_id": "d4398c7b-a1ac-11eb-ac18-c98a17456615",
   "firstName": "Sabrina",
   "lastName": "Ferguson",
   "email": "sabrina.ferguson@altavista.com",
   "password": "e08WqroEM1",
   "isAdmin": false,
   "date": "2021-04-27T07:58:39.093Z"
  },
  {
   "_id": "d43967a6-a1ac-11eb-ac18-c98a17456615",
   "firstName": "Noelle",
   "lastName": "Lucero",
   "email": "noelle.lucero@aol.com",
   "password": "iuBicduoGk",
   "isAdmin": false,
   "date": "2021-04-27T07:58:39.094Z"
  },
  {
   "_id": "d439b421-a1ac-11eb-ac18-c98a17456615",
   "firstName": "Marc",
   "lastName": "Marks",
   "email": "marc.marks@yahoo.com",
   "password": "rvN9gb8oyR",
   "isAdmin": false,
   "date": "2021-04-27T07:58:39.094Z"
  }
 ]

 let userResult = users.reduce(function(acc,item,index){
   acc[index+" index position"] = item.firstName + " " + item.lastName
   return acc
 },{})

//  console.log(userResult);

 let isAdmin = users.filter(function(item){
   if (item.isAdmin){
    return item
   }
 })

//  console.log(isAdmin);

let prices = [40,55,20,10]

let amountPrice = prices.reduce(function(amount,item){
  return amount + item
})

console.log(amountPrice);

let str = ["java","go","visualbasic","php"]

let newStr = str.reduce(function(total,item){
  if(item.length > 2){
    total.push(item)
  }
  return total
},[])

console.log(newStr);