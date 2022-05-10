import { useState, useEffect } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import data from "../../Product.json";

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
      </div>
    </div>
  );
};

const Landing = () => {
  const [openNavbarClick, setOpenNavbarClick] = useState(true);
  const [searchCategory, setSearchCategory] = useState({ category: "" });
  const [newSearchCategory, setNewSearchCategory] = useState("");
  const [resultSearch, setResultSearch] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSearchCategory({ ...searchCategory, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      ...searchCategory,
      id: new Date().getTime().toString(),
    };

    setNewSearchCategory(...newSearchCategory, newCategory);
    setSearchCategory({ category: "" });
  };

  useEffect(() => {
    if (newSearchCategory) {
      const search = data.map((item) =>
        item[Object.keys(item)[0]].filter(
          (items) => items.name == newSearchCategory.category
        )
      );

      setResultSearch(search);
    }

    setNewSearchCategory("");
  }, [newSearchCategory, resultSearch]);

  return (
    <>
      <div className="container-landing-navbar">
        <div className="navbar">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} />
          <div className="hamburger">
            <i
              className="bi bi-list"
              onClick={() => setOpenNavbarClick(!openNavbarClick)}
            ></i>
          </div>
        </div>
        <div
          className={
            openNavbarClick ? "responsive-landing" : "responsive-landing active"
          }
        >
          <ul>
            <li>
              <a href="#service">Servis Kami</a>
            </li>
            <li>
              <a href="#about">Tentang Kami</a>
            </li>
            <li>
              <a href="#daftar">Daftar</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-landing space">
        <div className="container-title">
          <h1>Wijaya Store</h1>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} />
        </div>
        <div className="link">
          <div className="link-list">
            <ul>
              <li>
                <a href="#service">Kategori Produk</a>
              </li>
              <li>
                <a href="#about">Tentang Kami</a>
              </li>
              <li>
                <a href="#daftar">Daftar</a>
              </li>
            </ul>
          </div>
          <div className="btn-landing">
            <Link to={"/home"}>get Started</Link>
          </div>
        </div>
      </div>
      <div className="container-service" id="service">
        <h2>Kategori Produk</h2>
        <div className="all-image-list">
          <div className="image-list">
            <img
              src={`${process.env.PUBLIC_URL}/download__10_-removebg-preview.png`}
            />
            <h5>Smartphone</h5>
          </div>
          <div className="image-list">
            <img
              src={`${process.env.PUBLIC_URL}/89c9feae8f2962468aff0c096826dc76-removebg-preview.png`}
            />
            <h5>Television</h5>
          </div>
          <div className="image-list">
            <img
              src={`${process.env.PUBLIC_URL}/download__15_-removebg-preview.png`}
            />
            <h5>Refrigerator</h5>
          </div>
          <div className="image-list">
            <img
              src={`${process.env.PUBLIC_URL}/download__22_-removebg-preview.png`}
            />
            <h5>Speaker</h5>
          </div>
          <div className="image-list">
            <img
              src={`${process.env.PUBLIC_URL}/download__28_-removebg-preview.png`}
            />
            <h5>Printer</h5>
          </div>
          <div className="image-list">
            <img
              src={`${process.env.PUBLIC_URL}/download__24_-removebg-preview.png`}
            />
            <h5>Washing Machine</h5>
          </div>
        </div>
        <div className="landing-search">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              name="category"
              value={searchCategory.category}
              onChange={handleChange}
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={handleSubmit}
            >
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNDMzNSA5LjkwNjVDMTIuODg4NSAxMS4xNDQgMTQuMjA3IDEyLjUzNiAxNS4zMjQ1IDE0LjA5QzE1LjU4MTggMTQuNDQ3OCAxNS41NDY1IDE0LjkzNTIgMTUuMjQxMyAxNS4yNDA1QzE0LjkzNTMgMTUuNTQ2NSAxNC40NDg1IDE1LjU4MTggMTQuMDkgMTUuMzI0NUMxMi41MzUzIDE0LjIwNyAxMS4xNDQgMTIuODg4NSA5LjkwNjUgMTEuNDMzNUM4LjkzNzUgMTIuMTA0NyA3Ljc2NDUgMTIuNSA2LjUgMTIuNUMzLjE5MTc1IDEyLjUgMC41IDkuODA4MjUgMC41IDYuNUMwLjUgMy4xOTE3NSAzLjE5MTc1IDAuNSA2LjUgMC41QzkuODA4MjUgMC41IDEyLjUgMy4xOTE3NSAxMi41IDYuNUMxMi41IDcuNzY1MjUgMTIuMTA0IDguOTM4MjUgMTEuNDMzNSA5LjkwNjVaTTYuNDk5MjUgMkM0LjAxNzUgMiAxLjk5OTI1IDQuMDE4MjUgMS45OTkyNSA2LjVDMS45OTkyNSA4Ljk4MTc1IDQuMDE3NSAxMSA2LjQ5OTI1IDExQzguOTgxIDExIDEwLjk5OTMgOC45ODE3NSAxMC45OTkzIDYuNUMxMC45OTkzIDQuMDE4MjUgOC45ODEgMiA2LjQ5OTI1IDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" />
            </button>
          </div>
        </div>
        <div className="card-box">
          {resultSearch.length > 0 ? (
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
            ""
          )}
        </div>
      </div>
      <div className="container-about-us" id="about">
        <h2>Tentang kami</h2>
        <div className="about-us">
          <div className="about-image">
            <img src={`${process.env.PUBLIC_URL}/about-us.png`} />
          </div>
          <div className="text">
            <h3>Kenapa harus memilih produk kami?</h3>
            <p>
              Misi kami adalah untuk memuaskan pelanggan karena pelanggan adalah
              raja
            </p>
            <ul>
              <li>
                desain produk (kami) mengeluarkan desain tersendiri.kami sangat
                di respon baik oleh pasar,desain yang khusus ini juga membuat
                banyak pengguna lebih nyaman menggunakan website ini dibanding
                website yang lain, pada bagian desain website ini selalu
                mengutamakan ciri produk yang kualitas tertinggi dan tidak lepas
                dari teknologi yang yang kita jual.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="slider" id="daftar">
        <div className="slide">
          <div className="slider1">
            <h2>Register</h2>
            <Link to={"/register"}>Click Here</Link>
          </div>
        </div>
        <div className="slide">
          <div className="slider2">
            <h2>Login</h2>
            <Link to={"/login"}>Click Here</Link>
          </div>
        </div>
      </div>
      <div className="footer space">
        <div className="social-icon">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-envelope"></i>
        </div>
        <p>© Copyright 2022 All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Landing;
