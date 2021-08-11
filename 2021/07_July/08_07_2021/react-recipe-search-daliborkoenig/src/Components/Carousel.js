import React, {useState, useEffect} from 'react'

function Carousel(props) {
  const [photos, setPhotos] = useState([]);


  useEffect(() => {
    const unsplash = {
      APP_KEY: "x_9xhPqpgOki9jNAiqjQrSmbnAVjiLnMfGnUJQMIjJA"}
    const unsplash_API = `https://api.unsplash.com/search/photos?client_id=${unsplash.APP_KEY}&query=fancy+dinner&orientation=landscape`
    const getPhotos = async () => {
      const res = await fetch(unsplash_API)
      const result = await res.json()
      setPhotos(result.results)
      // console.log(result.results);
    }
    getPhotos()
  }, [])

  const makeDom = () => {
    return photos.map((item, i)=><div key={item.id} className={i===0 ? "carousel-item active":"carousel-item"}><img className="c-image d-block" src={item.urls.regular} alt=""></img></div>)
  }
  return (
    <div className="Carousel">
      <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          {makeDom()}
        </div>
      </div>   
    </div>
  )
}

export default Carousel

