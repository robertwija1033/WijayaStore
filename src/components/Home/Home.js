import { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import data from "../../Product.json";
import { Link } from "react-router-dom";

const CardBox = ({ image, name, price, remainder }) => {
  return (
    <div className="card">
      <div className="image-box">
        <img src={`${process.env.PUBLIC_URL} ${image}`} />
      </div>
      <div className="content-card">
        <h2>{name}</h2>
        <div className="content">
          <h3>Harga :</h3>
          <span>{price}</span>
        </div>
        <div className="content">
          <h3>Sisa produk :</h3>
          <span>{remainder}</span>
        </div>
        <div
          className="information"
        >
          <Link to={`/detail/${name}`}>More</Link>
        </div>
        <Link to={"/cart"} className="buy">
          Buy Now
        </Link>
      </div>
    </div>
  );
};

const Home = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchCategory, setSearchCategory] = useState({ category: "" });
  const [newSearchCategory, setNewSearchCategory] = useState("");
  const [resultSearch, setResultSearch] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      const newData = data.filter(
        (item) => Object.keys(item)[0] === selectedCategory
      );
      setFilteredData(newData);
    }
    // cleanup function
    return () => setFilteredData(data);
  }, [selectedCategory]);

  useEffect(() => {
    if (newSearchCategory) {
      const search = data.map((item) =>
        item[Object.keys(item)[0]].filter(
          (items) => items.name == newSearchCategory.category
        )
      );

      setResultSearch(search);
      setSelectedCategory("");
    }

    setNewSearchCategory("");
  }, [newSearchCategory, resultSearch]);

  return (
    <>
      <Navbar
        setSelectedCategory={setSelectedCategory}
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
        newSearchCategory={newSearchCategory}
        setNewSearchCategory={setNewSearchCategory}
      />

      <div className="card-box">
        {!selectedCategory && resultSearch.length > 0 ? (
          <>
            {resultSearch.map((items, idx) => (
              <>
                {items[0]?.name && (
                  <CardBox
                    key={idx}
                    image={items[0]?.image}
                    name={items[0]?.name}
                    price={items[0]?.price}
                    remainder={items[0]?.remainder}
                  />
                )}
              </>
            ))}
          </>
        ) : (
          <>
            {filteredData.map((item) => (
              <>
                {item[Object.keys(item)[0]].map((items, idx2) => (
                  <CardBox
                    key={idx2}
                    image={items.image}
                    name={items.name}
                    price={items.price}
                    remainder={items.remainder}
                  />
                ))}
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
