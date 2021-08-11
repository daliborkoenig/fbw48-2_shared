import React, {useEffect, useState} from 'react'
import './Recipes.scss'
function Recipes(props) {
  const [API, setAPI] = useState(null)
  const [recipes, setRecipes] = useState([])
  const [domMade, setDomMade] = useState(false)

  useEffect(() => {
    if(props.API){
    getRecipes(props.API)
    setDomMade(true)
    }
    else{
      return
    }
  }, [props])
  const getRecipes = async (API) => {
    const res = await fetch(API)
    const result = await res.json()
    setAPI(result._links.next.href);
    setRecipes(recipes => [...recipes, ...result.hits])
    console.log(API);
  }

  const makeDom = (arr) => {
    return arr.map((item, i)=>
      <article key={Math.random()}className={i%2 === 0 ? "postcard light blue w-75" : "postcard light red w-75"} style={i%2 === 0 ? {float: "left"} : {float: "right"}}>
        <img className="postcard__img" src={item.recipe.image} alt="" />
        <div className="postcard__text t-dark">
          <h1 className="postcard__title blue">{item.recipe.label}</h1>
          <div className="postcard__bar"></div>
          <div className="postcard__preview-txt">{item.recipe.ingredients.map(item=><p>{item.text}</p>)}</div>
          <ul className="postcard__tagbox">
            <li className="tag__item"><i className="fas fa-tag mr-2"></i>{item.recipe.dishType}</li>
            <li className="tag__item"><i className="fas fa-clock mr-2"></i>{item.recipe.totalTime ? item.recipe.totalTime+" mins" : "unknown"}</li>
            <li className="tag__item play blue">{item.recipe.cuisineType}</li>
          </ul>
        </div>
      </article>
    )
  }
  return (
    <React.Fragment>
      <section className={domMade ? "cardWrapper px-5 pt-5" : "cardWrapper px-5"}>
        {makeDom(recipes)}
        <button className="btn" onClick={()=>getRecipes(API)}>...load more</button>
      </section>
    </React.Fragment>
  )
}

export default Recipes
