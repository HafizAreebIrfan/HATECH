import styles from "../styles/products.module.css";
import product1img from "../assets/product1.jpg";
import product2img from "../assets/product2.jpg";
import product3img from "../assets/product3.jpg";
import product4img from "../assets/product4.jpg";
import { CiLocationArrow1 } from "react-icons/ci";

export default function Products({toggle}) {
  const productlist = [
    {
      id: 1,
      name: "Product 1",
      image: product1img,
      price: 100,
      pricecurr: "$",
      class: "item1",
    },
    {
      id: 2,
      name: "Product 2",
      image: product2img,
      price: 200,
      pricecurr: "$",
      class: "item2",
    },
    {
      id: 3,
      name: "Product 3",
      image: product3img,
      price: 300,
      pricecurr: "$",
      class: "item3",
    },
    {
      id: 4,
      name: "Product 4",
      image: product4img,
      price: 400,
      pricecurr: "$",
      class: "item4",
    },
  ];
  return (
    <>
      <div
        className={`${
          !toggle ? `${styles.productlight}` : `${styles.productdark}`
        }`}
      >
        <div className="container px-4">
          <div className={`row ${styles.productheader}`}>
            <div className="title col-sm-12 col-md-6">
              <h4 className={`${styles.proheadertag}`}>
                Best products for you
              </h4>
              <h1 className={`${styles.proheadertitle}`}>POPULAR PRODUCTS</h1>
            </div>
            <div className="productcount col-sm-12 col-md-6">
              <h4 className={`${styles.productcounttext}`}>
                <span className={`${styles.productcount}`}>10+</span> Products
              </h4>
              <p className={`${styles.productdescription}`}>
                Our Todo app board makes your work management easier, so you
                never loses focus on most priority task.
              </p>
            </div>
          </div>
          <div className={`${styles.productcards} mt-4`}>
            {productlist.map((product) => (
              <div
                key={product.id}
                className={`mb-4 ${styles[product.class]} ${
                  styles.productcard
                }`}
              >
                <div className={`${styles.productcardimage}`}>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className={`${styles.productcardcontent} pt-3`}>
                  <div className="text">
                    <p className={`${styles.productcardprice}`}>
                      {product.pricecurr}
                      {product.price}
                    </p>
                    <h4 className={`${styles.productcardtitle}`}>
                      {product.name}
                    </h4>
                  </div>
                  <div className="button">
                    <button className={`${styles.productcardbutton}`}>
                      <CiLocationArrow1
                        className={`${styles.productcardicon}`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
