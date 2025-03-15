import styles from "../styles/reviews.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user1 from "../assets/review01.png";
import user2 from "../assets/review02.png";
import user3 from "../assets/review03.png";

export default function Reviews({ toggle }) {
  const reviews = [
    {
      name: "User 1",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque neque voluptas minus non facilis facere.",
      image: user1,
    },
    {
      name: "User 2",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque neque voluptas minus non facilis facere.",
      image: user2,
    },
    {
      name: "User 3",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque neque voluptas minus non facilis facere.",
      image: user3,
    },
    {
      name: "User 4",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque neque voluptas minus non facilis facere.",
      image: user1,
    },
    {
      name: "User 5",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque neque voluptas minus non facilis facere.",
      image: user2,
    },
    {
      name: "User 6",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque neque voluptas minus non facilis facere.",
      image: user3,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    swipeToSlide: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        className={`${
          !toggle ? `${styles.reviewslight}` : `${styles.reviewsdark}`
        }`}
      >
        <div className={`${styles.slideshowcontainer} container px-4`}>
          <div className={`row ${styles.reviewheader}`}>
            <div className="title col-sm-12 col-md-6">
              <h4 className={`${styles.revheadertag}`}>Reviews</h4>
              <h1 className={`${styles.revheadertitle}`}>Awesome Customers</h1>
            </div>
            <div className="productcount col-sm-12 col-md-6">
              <h4 className={`${styles.reviewcounttext}`}>
                <span className={`${styles.reviewcount}`}>100+</span> Reviews
              </h4>
              <p className={`${styles.reviewdescription}`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, rem?
              </p>
            </div>
          </div>
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div className={`${styles.review}`} key={index}>
                <div className="image">
                  <img
                    src={review.image}
                    alt=""
                    className={`${styles.userimg}`}
                  />
                </div>
                <div className="text">
                  <h4 className={`${styles.reviewtitle}`}>{review.name}</h4>
                  <p className={`${styles.reviewdesc}`}>{review.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
