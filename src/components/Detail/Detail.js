import "./Detail.css";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../Product.json";

const Detail = () => {
  const [findData, setFindData] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const item = data.map((item) =>
      item[Object.keys(item)[0]].find((items) => items.name === name)
    );
    if (item) {
      const items = item.find((item) => item !== undefined);
      setFindData(items);
    }
  }, [findData]);

  const handleAddToCart = (image, name, price, remainder) => {
    const cart = localStorage.getItem("wijayastore_cart")
      ? JSON.parse(localStorage.getItem("wijayastore_cart"))
      : [];

    const findItem = cart.find((item) => item.name === name);

    if (!findItem) {
      cart.push({ name, price, image, stock: remainder, qty: 1 });
      localStorage.setItem("wijayastore_cart", JSON.stringify(cart));
      alert(`${name} added to cart.`);
    } else {
      alert(`${name} already added to cart before.`);
    }
  };

  return (
    <>
      <Navbar
        setSelectedCategory={""}
        searchCategory={""}
        setSearchCategory={""}
        newSearchCategory={""}
        setNewSearchCategory={""}
      />
      <div className="container-detail">
        <div className="container-information">
          <div className="information">
            <div className="information-image">
              <img src={`${process.env.PUBLIC_URL}/${findData.image}`} />
            </div>
            <div className="information-item">
              <div className="back">
                <Link to={"/home"}>Back/Information</Link>
                <div className="information-name">{findData.name}</div>
                <div className="price">
                  <h1>{findData.price}</h1>
                </div>
                <div className="information-remainder">
                  <div className="remainder">
                    <p>Remainder : {findData.remainder}</p>
                  </div>
                  <div className="item">
                    <button
                      onClick={() =>
                        handleAddToCart(
                          findData.image,
                          findData.name,
                          findData.price,
                          findData.remainder
                        )
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="more-information">
                    <h2>Rate this product</h2>
                    <div className="rate">
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-specification">
          <div className="description">
            <h3>Deskripsi Produk</h3>
            <div className="specification">
              <p>• Wireless Charging</p>
              <p>
                • Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (typ),
                1200 nits (peak)
              </p>
              <p>• 5G Available</p>
              <p>• ROM 128GB</p>
            </div>
            <h3>Penilaian Produk</h3>
            <div className="container-comment-list">
              <div className="product-rating">
                <div className="rating">
                  <h5>4,9 Persen</h5>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <div className="rating-overview">
                  <button>Semua</button>
                  <button>5 Bintang</button>
                  <button>4 Bintang</button>
                  <button>3 Bintang</button>
                  <button>2 Bintang</button>
                  <button>1 Bintang</button>
                </div>
              </div>
              <div className="comment-list">
                <div className="comment-avatar">
                  <img src="https://cf.shopee.co.id/file/231e45923c7a932710c57351f3c00ba7_tn" />
                </div>
                <div className="comment-user">
                  <h5>Robert</h5>
                  <div className="rating-user">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p>Pengiriman nya sangat cepat</p>
                  <p>
                    Pengemasan+pengiriman cepettt bgt padalah jarak lumayan jauh
                    Sellernya jg fastrespon Baru pertama kali gambar pake pentab
                    Masi adaptasi soalnya tangan Masi kaku Thx seller!! (ㆁωㆁ)
                  </p>
                </div>
              </div>
              <div className="comment-list">
                <div className="comment-avatar">
                  <img src="https://cf.shopee.co.id/file/231e45923c7a932710c57351f3c00ba7_tn" />
                </div>
                <div className="comment-user">
                  <h5>Robert</h5>
                  <div className="rating-user">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p>Pengiriman nya sangat cepat</p>
                  <p>
                    Pengemasan+pengiriman cepettt bgt padalah jarak lumayan jauh
                    Sellernya jg fastrespon Baru pertama kali gambar pake pentab
                    Masi adaptasi soalnya tangan Masi kaku Thx seller!! (ㆁωㆁ)
                  </p>
                </div>
              </div>
              <div className="reply">
                <input type={"text"} placeholder="Enter a Message"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
