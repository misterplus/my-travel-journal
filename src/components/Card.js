import loc from "../images/location.png";

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <img className="card-img" src={props.imageUrl} alt="" />
        <div className="card-text">
          <div className="card-location">
            <img className="card-location-icon" src={loc} alt="" />
            <span className="card-location-text">{props.location}</span>
            <a className="card-location-link" href={props.googleMapsUrl}>
              View on Google Maps
            </a>
          </div>
          <h2 className="card-title">{props.title}</h2>
          <div className="card-date">
            <span>{props.startDate}</span>
            <span> - </span>
            <span>{props.endDate}</span>
          </div>
          <p className="card-desc">{props.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
