import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cart, setCart] = useState(0);
  const details = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKU83_VW_34FR+watch-41-alum-midnight-nc-8s_VW_34FR_WF_CO_GEO_IN?wid=750&hei=712&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171038000,1661971867159",
      productname: "Watch",
      price: "$10",
    },
    {
      image:
        "https://www.sbsmobile.com/che/224729-home_default/fast-charge-powerbank-10000-mah-2-usbs.jpg",
      productname: "Power Bank",
      price: "$10",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgzt69gbzHPA6eBOSYSer06h_SH1df3X1CbQ&usqp=CAU",
      productname: "Television",
      price: "$500",
    },
    {
      image:
        "https://www.marshallheadphones.com/on/demandware.static/-/Sites-zs-master-catalog/default/dw7087b641/images/marshall/speakers/stanmore-ii-bt/black/high-res/pos-marshall-stanmore-ii-bt-black-01.png",
      productname: "Speaker",
      price: "$40",
    },
    {
      image:
        "https://media.wired.com/photos/631bb97dd884b4dcc94164e3/2:1/w_2399,h_1199,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg",
      productname: "Laptop",
      price: "$1000",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLP8fQ0vYntEi_d6tUziqjY6yBJ0WhXLnWA&usqp=CAU",
      productname: "Mobile Phone",
      price: "$100",
    },
    {
      image:
        "https://www.lg.com/in/images/washing-machines/md07514753/gallery/FHM1065ZDL-Washing-Machines-Front-View-D-01.jpg",
      productname: "Washing machine",
      price: "$400",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScb6vodhmpibvDy_GEz0Oe6XEwHe8N1roeSA&usqp=CAU",
      productname: "Microwave Oven",
      price: "$200",
    },
  ];
  const cartValueAdd = () => {
    setCart(cart + 1);
  };
  const cartValueRemove = () => {
    setCart(cart - 1);
  };
  return (
    <div className="App">
      <div className="header">
        <h1>
          Slip<label>Kart</label>
        </h1>
        <input placeholder="search Items" type="text" />
        <button className="btn btn-dark">Cart ({cart})</button>
      </div>

      <div className="main-container">
        <div className="row">
          {details.map((product) => (
            <Items
              cartValueAdd={cartValueAdd}
              cartValueRemove={cartValueRemove}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

const Items = ({ cartValueAdd, cartValueRemove, product }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  {
    isDisabled ? "enable" : "disable";
  }
  return (
    <div className=" col-lg-3 col-md-6 col-sm-12">
      <div className="card">
        <div className="card-header">
          <img
            className=" img  card-img-top"
            src={product.image}
            alt={product.productname}
          />
        </div>
        <div className="card-body">
          <div className="namePrice">
            <h2>{product.productname}</h2>
            <p>{product.price}</p>
          </div>

          <div className="buttoncontainer">
            <button
              className=" btn btn-primary"
              id={isDisabled ? "enabled" : "disabled"}
              onClick={() => {
                cartValueAdd();
                setIsDisabled(!isDisabled);
              }}
            >
              Add to cart
            </button>
            <button
              className="btn btn-primary"
              id={isDisabled ? "disabled" : "enabled"}
              onClick={() => {
                cartValueRemove();
                setIsDisabled(!isDisabled);
              }}
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
