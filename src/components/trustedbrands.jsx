import styles from "../styles/trustedbrands.module.css";
import dummylogo1 from "../assets/dummylogo1.png";
import dummylogo2 from "../assets/dummylogo2.png";
import dummylogo3 from "../assets/dummylogo3.png";
import dummylogo4 from "../assets/dummylogo4.png";
import dummylogo5 from "../assets/dummylogo5.png";
import dummylogo6 from "../assets/dummylogo6.png";
import dummylogo7 from "../assets/dummylogo7.png";
import dummylogo8 from "../assets/dummylogo8.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Trustedbrands({toggle}) {
  const logoimages = [
    {
      src: dummylogo1,
    },
    {
      src: dummylogo2,
    },
    {
      src: dummylogo3,
    },
    {
      src: dummylogo4,
    },
    {
      src: dummylogo5,
    },
    {
      src: dummylogo6,
    },
    {
      src: dummylogo7,
    },
    {
      src: dummylogo8,
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        className={`${
          !toggle ? `${styles.trustedlight}` : `${styles.trusteddark}`
        }`}
      >
        <div className={`${styles.slideshowcontainer} container px-4`}>
          <Slider {...settings}>
            {logoimages.map((images, index) => (
              <div key={index}>
                <img src={images.src} alt="" className={`${styles.logoimg}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
