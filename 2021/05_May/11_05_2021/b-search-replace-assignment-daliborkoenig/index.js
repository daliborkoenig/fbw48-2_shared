//Select the paragraph, inputs and alerts from the html document


//Assign the style display = none to prevent the alert to show from beggining.


//create function for searc
function search() {
    // reset the alert element on every usage
  document.getElementById('alert').innerHTML = ""
    // reset the <mark> tag on every usage
  document.getElementById('paragraph').innerHTML = document.getElementById('paragraph').innerHTML.replaceAll("<mark>", "");
  // obtain the innerHTML from the paragraph
  let paragraph = document.getElementsByTagName('p')[0].innerHTML
  // obtain the value from the inputSearch
  let search = document.getElementById('inputSearch').value
  // use the search method to search

  // found the fastest way to search the number of accurances by spliting the string in to an array using the word as the split operator 
  let searchNumber = paragraph.split(search).length-1

   // change the display style from the alert for it to appear
  document.getElementById("alert").style.display = "block";

  // use an if statement to check if the word was found in the text or 
  // not and assign the respective alert
  if(search.length == 0){
    document.getElementById("alert").className = "alert alert-danger";
    document.getElementById('alert').innerHTML += `The search field is empty`
  }
  else if (searchNumber == 0){
    document.getElementById("alert").className = "alert alert-danger";
    document.getElementById('alert').innerHTML += `The word was not found`
  }
  else{
    document.getElementById("alert").className = "alert alert-success";
    document.getElementById('paragraph').innerHTML = document.getElementById('paragraph').innerHTML.replaceAll(search, "<mark>"+search+"</mark>")
    document.getElementById('alert').innerHTML += `We have found ${searchNumber} instances of the word ${search}`
  }

  // reset the page after 10 sec
  window.setTimeout(function () {
    window.location.reload();
  }, 20000);
}

function replace() {
  document.getElementById('alert').innerHTML = ""
  // obtain the innerHTML from the paragraph
  let paragraph = document.getElementsByTagName('p')[0].innerHTML

  // obtain the value from the inputSearch and the inputReplace
  let search = document.getElementById('inputSearch').value
  let replace = document.getElementById('inputReplace').value
  let searchNumber = paragraph.split(search).length-1
  console.log(searchNumber);

  // change the display style from the alert for it to appear
  document.getElementById("alert").style.display = "block";

  // Check if the searchWord is empty with an if-Statement. Then check if
  // the word was replaced or not and assign the respective alert
  if (search.length == 0){
    document.getElementById("alert").className = "alert alert-danger";
    document.getElementById('alert').innerHTML += `The search field is empty`
  }
  else if(searchNumber == 0){
    document.getElementById("alert").className = "alert alert-danger";
    document.getElementById('alert').innerHTML += `The word was not found`
  }

  // alert(`We have found ${searchNumber} instances of the word ${search}`)
  else{
    document.getElementById("alert").className = "alert alert-success";
    document.getElementById('paragraph').innerHTML = document.getElementById('paragraph').innerHTML.replaceAll(search, "<mark>"+search+"</mark>")
    document.getElementById('paragraph').innerHTML = document.getElementById('paragraph').innerHTML.replaceAll(search, replace);
    document.getElementById('alert').innerHTML += `We have found and replaced ${searchNumber} instances of the word ${search} with the word ${replace}`
  }

    // reset the page after 10 sec
  window.setTimeout(function () {
    window.location.reload();
  }, 20000);
}

