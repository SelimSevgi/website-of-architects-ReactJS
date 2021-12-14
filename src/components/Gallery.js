import { Carousel } from "react-carousel-minimal";

function App() {
  const data = [
    {
      image: "../images/gallery-2.png",
    },
    {
      image: "../images/gallery-3.png",
    },
    {
      image: "../images/gallery-4.png",
    },
    {
      image: "../images/gallery-5.png",
    },
    {
      image: "../images/gallery-6.png",
    },
    {
      image: "../images/gallery-7.png",
    },
    {
      image: "../images/gallery-8.png",
    },
    {
      image: "../images/gallery-9.png",
    },
    {
      image: "../images/gallery-10.png",
    },
  ];

  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <>
      <div className="gallery">
        <div className="gallery-header">
          <h1>
            <span className="pro-header-gri">Photo</span>
            <br />
            Gallery
          </h1>
        </div>
        <Carousel
          className="gallery-carousel"
          data={data}
          time={2000}
          width="1600px"
          height="500px"
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          pointer="cursor"
          thumbnails={true}
          thumbnailWidth="100px"
          style={{
            textAlign: "center",
            maxWidth: "1600px",
            maxHeight: "500px",
            margin: "20px auto",
            padding: "0px 0px 100px 0px",
          }}
        />
      </div>
    </>
  );
}

export default App;
