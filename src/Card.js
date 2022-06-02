import './Card.css'

const Card = (props)=>{
    return(
        <div className="card-form">
      <div className="card-text">
        <div className="card-index">{props.number}.</div>
        <div className="card-desc">{props.card.body}</div>
      </div>
      <div>
        <button onClick={()=> props.remove(props.card)} className="gg-trash"></button>
      </div>
    </div>
    )
}

export default Card