import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({
  setSelectedCategory,
  searchCategory,
  setSearchCategory,
  newSearchCategory,
  setNewSearchCategory,
}) => {
  const [openNavbarClick, setOpenNavbarClick] = useState(false);

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

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"#"}>
          <img src={`${process.env.PUBLIC_URL}/logoWijaya.png`} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            setOpenNavbarClick(!openNavbarClick);
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={
            openNavbarClick
              ? "collapse navbar-collapse active"
              : "collapse navbar-collapse"
          }
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Landing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Checkout"}>
                Checkout
              </Link>
            </li>
          </ul>
          <div className="navbar-search">
            <div className="search-category">
              <p>Semua kategori</p>
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMi4xNTQxIDE2LjAwMDFDMTEuNTE4MSAxNi4wMDAxIDEwLjkzNTEgMTUuNzA4MSAxMC41NTQxIDE1LjIwMDFMNy4xOTIwNSAxMC41ODkxQzYuODY3MDUgMTAuMTQzMSA2Ljk2NDA1IDkuNTE3MTQgNy40MTEwNSA5LjE5MjE0QzcuODU3MDUgOC44NjcxNCA4LjQ4MzA1IDguOTY1MTQgOC44MDgwNSA5LjQxMTE0TDEyLjE2MjEgMTQuMDExMUwxNS4xNjYgOS40NDgxNEMxNS40NzExIDguOTg4MTQgMTYuMDkxMSA4Ljg2MTE0IDE2LjU1MjEgOS4xNjYxNEMxNy4wMTIxIDkuNDcxMTQgMTcuMTM4MSAxMC4wOTIxIDE2LjgzNDEgMTAuNTUyMUwxMy43ODgxIDE1LjE1MjFDMTMuMzcyMSAxNS43MDkxIDEyLjc4OTEgMTYuMDAwMSAxMi4xNTQxIDE2LjAwMDFaIiBmaWxsPSIjODU4NTg1Ii8+CiAgICA8bWFzayBpZD0ibWFzazAiIG1hc2stdHlwZT0iYWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjciIHk9IjkiIHdpZHRoPSIxMCIgaGVpZ2h0PSI4Ij4KICAgICAgICA8cGF0aCBkPSJNMTIuMTU0MSAxNi4wMDAxQzExLjUxODEgMTYuMDAwMSAxMC45MzUxIDE1LjcwODEgMTAuNTU0MSAxNS4yMDAxTDcuMTkyMDUgMTAuNTg5MUM2Ljg2NzA1IDEwLjE0MzEgNi45NjQwNSA5LjUxNzE0IDcuNDExMDUgOS4xOTIxNEM3Ljg1NzA1IDguODY3MTQgOC40ODMwNSA4Ljk2NTE0IDguODA4MDUgOS40MTExNEwxMi4xNjIxIDE0LjAxMTFMMTUuMTY2IDkuNDQ4MTRDMTUuNDcxMSA4Ljk4ODE0IDE2LjA5MTEgOC44NjExNCAxNi41NTIxIDkuMTY2MTRDMTcuMDEyMSA5LjQ3MTE0IDE3LjEzODEgMTAuMDkyMSAxNi44MzQxIDEwLjU1MjFMMTMuNzg4MSAxNS4xNTIxQzEzLjM3MjEgMTUuNzA5MSAxMi43ODkxIDE2LjAwMDEgMTIuMTU0MSAxNi4wMDAxWiIgZmlsbD0id2hpdGUiLz4KICAgIDwvbWFzaz4KICAgIDxnIG1hc2s9InVybCgjbWFzazApIj4KICAgICAgICA8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiMwMDk1REEiLz4KICAgIDwvZz4KPC9zdmc+Cg==" />
              <ul>
                <li>
                  <a
                    href="javascript:void(0)"
                    onClick={() => setSelectedCategory("Television")}
                  >
                    Television
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    onClick={() => setSelectedCategory("Smartphone")}
                  >
                    Smartphone
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    onClick={() => setSelectedCategory("Speaker")}
                  >
                    Speaker
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    onClick={() => setSelectedCategory("Refrigerator")}
                  >
                    Refrigerator
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    onClick={() => setSelectedCategory("Printer")}
                  >
                    Printer
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    onClick={() => setSelectedCategory("WashingM")}
                  >
                    Washing Machine
                  </a>
                </li>
              </ul>
            </div>
            <div className="searching">
              <form>
                <input
                  type="text"
                  placeholder="Search"
                  name="category"
                  value={searchCategory.category}
                  onChange={handleChange}
                />
              </form>
            </div>
            <div className="search">
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleSubmit}
              >
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNDMzNSA5LjkwNjVDMTIuODg4NSAxMS4xNDQgMTQuMjA3IDEyLjUzNiAxNS4zMjQ1IDE0LjA5QzE1LjU4MTggMTQuNDQ3OCAxNS41NDY1IDE0LjkzNTIgMTUuMjQxMyAxNS4yNDA1QzE0LjkzNTMgMTUuNTQ2NSAxNC40NDg1IDE1LjU4MTggMTQuMDkgMTUuMzI0NUMxMi41MzUzIDE0LjIwNyAxMS4xNDQgMTIuODg4NSA5LjkwNjUgMTEuNDMzNUM4LjkzNzUgMTIuMTA0NyA3Ljc2NDUgMTIuNSA2LjUgMTIuNUMzLjE5MTc1IDEyLjUgMC41IDkuODA4MjUgMC41IDYuNUMwLjUgMy4xOTE3NSAzLjE5MTc1IDAuNSA2LjUgMC41QzkuODA4MjUgMC41IDEyLjUgMy4xOTE3NSAxMi41IDYuNUMxMi41IDcuNzY1MjUgMTIuMTA0IDguOTM4MjUgMTEuNDMzNSA5LjkwNjVaTTYuNDk5MjUgMkM0LjAxNzUgMiAxLjk5OTI1IDQuMDE4MjUgMS45OTkyNSA2LjVDMS45OTkyNSA4Ljk4MTc1IDQuMDE3NSAxMSA2LjQ5OTI1IDExQzguOTgxIDExIDEwLjk5OTMgOC45ODE3NSAxMC45OTkzIDYuNUMxMC45OTkzIDQuMDE4MjUgOC45ODEgMiA2LjQ5OTI1IDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" />
              </button>
            </div>
          </div>
          <Link className="list-shop" to={"/Cart"}>
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTguNjc0OCAzLjAxMjIzQzIwLjA3NDggMi44NjkyMyAyMS4yMjk4IDQuMDAyMjMgMjAuOTc3OCA1LjI3MjIzTDIwLjY0MzggNi45NDkyM0MxOS44MDc4IDExLjE1ODIgMTkuODk5OCAxNS40NzgyIDIwLjkxMjggMTkuNjU0MkMyMS4yMDQ4IDIwLjg1NzIgMjAuMjA0OCAyMS45OTkyIDE4Ljg1ODggMjEuOTk5Mkg1LjE2NDgzQzMuODE4ODMgMjEuOTk5MiAyLjgxODgzIDIwLjg1ODIgMy4xMTA4MyAxOS42NTQyQzQuMTIxODMgMTUuNDg3MiA0LjEyMTgzIDExLjE2NzIgMy4xMTA4MyA2Ljk5OTIzTDMuMDUwODMgNi43NTAyM0MyLjc3ODgzIDUuNjMwMjMgMy42Mjg4MyA0LjU0MzIzIDQuODcyODMgNC40MTYyM0wxOC42NzQ4IDMuMDEyMjNaTTE2LjUxMTggOC45OTkyM0MxNi41MTE4IDguNDQ3MjMgMTYuMDYzOCA3Ljk5OTIzIDE1LjUxMTggNy45OTkyM0MxNC45NTk4IDcuOTk5MjMgMTQuNTExOCA4LjQ0NzIzIDE0LjUxMTggOC45OTkyM0MxNC41MTE4IDkuNTUxMjMgMTQuOTU5OCA5Ljk5OTIzIDE1LjUxMTggOS45OTkyM0MxNi4wNjM4IDkuOTk5MjMgMTYuNTExOCA5LjU1MTIzIDE2LjUxMTggOC45OTkyM1pNOC41MTE4MyA3Ljk5OTIzQzkuMDYzODMgNy45OTkyMyA5LjUxMTgzIDguNDQ3MjMgOS41MTE4MyA4Ljk5OTIzQzkuNTExODMgOS41NTEyMyA5LjA2MzgzIDkuOTk5MjMgOC41MTE4MyA5Ljk5OTIzQzcuOTU5ODMgOS45OTkyMyA3LjUxMTgzIDkuNTUxMjMgNy41MTE4MyA4Ljk5OTIzQzcuNTExODMgOC40NDcyMyA3Ljk1OTgzIDcuOTk5MjMgOC41MTE4MyA3Ljk5OTIzWk03LjI2MTgzIDExLjk5OTJDNy4yNjE4MyAxNC42MTgyIDkuMzkyODMgMTYuNzQ5MiAxMi4wMTE4IDE2Ljc0OTJDMTQuNjMwOCAxNi43NDkyIDE2Ljc2MTggMTQuNjE5MiAxNi43NjE4IDExLjk5OTJDMTYuNzYxOCAxMS41ODUyIDE2LjQyNTggMTEuMjQ5MiAxNi4wMTE4IDExLjI0OTJDMTUuNTk3OCAxMS4yNDkyIDE1LjI2MTggMTEuNTg1MiAxNS4yNjE4IDExLjk5OTJDMTUuMjYxOCAxMy43OTEyIDEzLjgwMzggMTUuMjQ5MiAxMi4wMTE4IDE1LjI0OTJDMTAuMjE5OCAxNS4yNDkyIDguNzYxODMgMTMuNzkxMiA4Ljc2MTgzIDExLjk5OTJDOC43NjE4MyAxMS41ODUyIDguNDI1ODMgMTEuMjQ5MiA4LjAxMTgzIDExLjI0OTJDNy41OTc4MyAxMS4yNDkyIDcuMjYxODMgMTEuNTg1MiA3LjI2MTgzIDExLjk5OTJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" />
          </Link>
          <div className="register">
            <Link className="btn btn-outline-light" to={"/Register"}>
              Register
            </Link>
            <Link className="btn btn-light" to={"/Login"}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
