import React from 'react'

const Card = ({pix, title}) => {
  return (
<>
<div>
    <div className="card" style={{width: "18rem"}}>
    <img src={pix} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="google" class="btn btn-primary">Add to Cart</a>
  </div>
</div>

</div>
</>
  )
}

export default Card