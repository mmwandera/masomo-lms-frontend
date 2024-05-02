import './card.css';

export default function Card({ title, thumbnail, price }) {
  return (
    <div className="card">
      <div className="card-thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">{price}</p>
      </div>
      <div className="card-buttons">
        <button className="edit-button">Edit</button>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
}
