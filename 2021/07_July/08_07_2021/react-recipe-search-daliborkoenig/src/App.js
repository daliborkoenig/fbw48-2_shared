import React, {useState, useEffect} from  'react';
import Carousel from './Components/Carousel';
import Nav from './Components/Nav';
import Search from './Components/Search';
import Recipes from './Components/Recipes';

function App() {
  const [search, setSearch] = useState(null)
  const [mealType, setMealType] = useState("")
  const [meals, setMeals] = useState({
    Breakfast: false,
    Lunch: false,
    Dinner: false,
    Snack: false,
    Teatime: false
  })
  const [API, setAPI] = useState("")
 
  useEffect(() => {
    let meal = ""
    if(meals.Breakfast){
      meal += "&mealType=Breakfast" 
    }
    if(meals.Lunch){
      meal += "&mealType=Lunch" 
    }
    if(meals.Dinner){
      meal += "&mealType=Dinner" 
    }
    if(meals.Snack){
      meal += "&mealType=Snack" 
    }
    if(meals.Teatime){
      meal += "&mealType=Teatime" 
    }
    setMealType(meal)
  }, [meals])
  
  const searchCallback = (meal, bool) => {
    if(typeof bool === "boolean"){
      if(meal === "Breakfast"){
        setMeals({...meals, Breakfast: bool})
      }
      else if(meal === "Lunch"){
        setMeals({...meals, Lunch: bool})
      }
      else if(meal === "Dinner"){
        setMeals({...meals, Dinner: bool})
      }
      else if(meal === "Snack"){
        setMeals({...meals, Snack: bool})
      }
      else if(meal === "Teatime"){
        setMeals({...meals, Teatime: bool})
      }
    }
    else if(typeof bool === "string"){
      setSearch(bool)  
    }
    else{
      return
    }
  }
  useEffect(() => {
    const edemam = {
      APP_ID: "408acf9e",
      APP_KEY: "6b78a76084ad460113c36e0e6c6c27e4"
    }
    if (search) {
      setAPI(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${edemam.APP_ID}&app_key=${edemam.APP_KEY}${mealType}`)
    }
    
  }, [search])
  console.log(meals, mealType);
  return (
    <div className="App">
      <Nav/>
      <Search mealType={mealType} search={searchCallback}/>
      <Carousel/>
      <Recipes API={API}/>
    </div>
  );
}

export default App;
