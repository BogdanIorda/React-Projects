import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Pizza Diavola",
    ingredients: "Tomato, mozarella, spicy salami, and chili flakes",
    price: 17,
    photoName: "pizzas/diavola.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Frutti di Mare",
    ingredients: "Tomato, seafood mix, garlic, and parsley",
    price: 20,
    photoName: "pizzas/frutti-di-mare.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 13,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Hawaii",
    ingredients: "Tomato, mozarella, ham, and pineapple",
    price: 14,
    photoName: "pizzas/hawaii.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Capricciosa",
    ingredients: "Tomato, mozarella, ham, mushrooms, artichokes, and olives",
    price: 19,
    photoName: "pizzas/capricciosa.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Carbonara",
    ingredients: "Mozarella, pancetta, egg, and parmesan",
    price: 16,
    photoName: "pizzas/carbonara.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Boscaiola",
    ingredients: "Mozarella, mushrooms, sausage, and cream",
    price: 18,
    photoName: "pizzas/boscaiola.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 11,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Quattro Formaggi",
    ingredients: "Mozarella, gorgonzola, parmesan, and fontina cheese",
    price: 17,
    photoName: "pizzas/quattro-formaggi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Verdure",
    ingredients: "Tomato, grilled vegetables, and vegan cheese",
    price: 13,
    photoName: "pizzas/verdure.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Tonno",
    ingredients: "Tomato, mozarella, tuna, red onion, and capers",
    price: 15,
    photoName: "pizzas/tonno.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 16,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 19,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 7,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Napoletano’s</h1>;
    </header>
  );
}

function Menu() {
  const numPizzas = pizzaData.length;
  return (
    <div className="menu">
      <h2>Crafted with Fire</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Experience the true taste of Italy with our handcrafted, wood-fired
            pizzas made from the freshest ingredients. Tradition, flavor, and
            passion—served hot and fresh, just like in the heart of Naples.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span className={`price ${pizzaObj.soldOut ? "sold-out-text" : ""}`}>
          {pizzaObj.soldOut ? "sold out" : `$${pizzaObj.price}`}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>We open at {openHour}:00.</p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
