const toDosStore = ["Shopping", "Home work", "Go to the gym"];

// Write your code here
function insertTodo(item){
  toDosStore.push(item)
}
function removeTodo(num){
  toDosStore.splice(num-1,1)
}
function editTodo(num, item){
  toDosStore[num-1] = item
}
function createTodos(arr){
  toDosStore.push(...arr)
}
function updateTodos(arr1,arr2){
  for (i=0; i < arr1.length ; i++){
    toDosStore[arr1[i]-1] = arr2[i]
  }
}
function RenderToDosListTemplate(){
  let list = ""
  if (toDosStore.length == 0){
    return `To do list is empty`
  }
  for (i = 0 ; i < toDosStore.length ; i++){
    list += `${i+1}- ${toDosStore[i]}\n`;
  }
  return list
}

insertTodo("test1");
insertTodo("test2");
insertTodo("test4");
insertTodo("test5");
removeTodo(3);
removeTodo(5);
insertTodo("Call Alex");
editTodo(3, "Pay bills");
editTodo(5, "Visiting Tommy");
createTodos(["Go to supermarket", "Meet with Ghassan", "New test"])
updateTodos([2, 4, 6],["Meet with PR department", "By milk", "Check the internet connection"])

console.log(RenderToDosListTemplate())