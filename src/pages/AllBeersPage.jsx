import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(function (response) {
        setBeers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!beers) return "🌀loading🌀 ";

  return (
    <div>
      {beers.map((el) => (
        <div key={el._id}>
          <img src={el.image_url} alt={el.tagline} />
          <Link to={`/beers/${el._id}`}>
            <h1>{el.name}</h1>
          </Link>
          <p>{el.tagline}</p>
          <small>{el.contributed_by}</small>
        </div>
      ))}
    </div>
  );
}

export default AllBeersPage;
