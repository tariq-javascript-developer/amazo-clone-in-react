import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img className="home__image" src="/images/banner1.jpg" alt="" />
      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="123123"
          title="The Lean StartUp: How to Constant Invoation Creats radicaly Successfully Business PaperBack"
          price={11.99}
          rating={5}
          image="./images/Lean_Startup.png"
        />
        <Product
          id="1234123"
          title="The Kenwood Kitchen Machine range is a high quality, co-ordinated range of kitchen accessories"
          price={23.99}
          rating={5}
          image="./images/kinwood.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123343423"
          title="Technical specifications for AMAZON Echo (3rd Gen) - Charcoal"
          price={23.99}
          rating={5}
          image="https://sc02.alicdn.com/kf/HTB1CIX6XErrK1RkSne1763rVVXaL/Free-Shipping-Popular-Smart-Bracelet-Gift-Skmei.png_350x350.png"
        />
        <Product
          id="35464"
          title="Amazon Echo Dot Black - Price, Features, Reviews in Pakistan"
          price={100.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/31/img18/AmazonDevices/Neel/png/lidar_250x170._CB483504604_.png"
        />
        <Product
          id="1222123"
          title="The Lean StartUp: How to Constant Invoation Creats radicaly Successfully Business PaperBack"
          price={11.99}
          rating={2}
          image="https://cpb-us-w2.wpmucdn.com/sites.udel.edu/dist/0/4640/files/2017/09/print-on-tshirt-1ilis5b-1ml6kwz.png"
        />
      </div>
      <div className="home__row">
        <Product
          id="12334"
          title="The curved super ultrawide 32:9 aspect ratio Samsung 49-Inch CHG90 144Hz Curved
                     Gaming Monitor"
          price={199.99}
          rating={3}
          image="https://images.samsung.com/is/image/samsung/tw-c49rg9-lc49rg90sscxzw-silver-Black-156146814?$L2-Thumbnail$"
        />
      </div>
      {/* Prodduct */}
    </div>
  );
}

export default Home;
