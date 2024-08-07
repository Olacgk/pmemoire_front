import Slider from 'react-slick';
import trPng from '../../assets/tr.png';
import etudiantPng from '../../assets/etudiant.png';

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <div className="slider-container overflow-x-hidden">
      <Slider {...settings}>
        <div className="h-[300px] bg-[#041f4e]">
          <div className="w-full h-full flex items-center bg-[#00000033]">
            <div className=" container">
              <div className="flex justify-between items-center">
                <div className="ml-8 w-4/12 text-center md:text-left">
                  <h4 className="text-white uppercase animated zoomIn">Vos Thèses & Mémoires</h4>
                  <h1 className="font-bold my-4 text-6xl text-white animated zoomIn">A portée de main</h1>
                </div>
                <div className="w-5/12 lg:w-6/12 right-0 text-right">
                  <img className="img-fluid animated zoomIn" src={trPng} alt="Library Image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[300px] bg-[#041f4e]">
          <div className="w-full h-full flex items-center bg-[#00000033]">
            <div className="container">
              <div className="flex justify-between items-center ">
                <div className="ml-8 w-5/12 text-center md:text-left">
                  <h4 className="text-white uppercase mb-4 animated zoomIn">Étudiants & Chercheurs</h4>
                  <h1 className="font-bold my-4 text-6xl text-white mb-4 animated zoomIn">Partagez vos travaux</h1>
                </div>
                <div className="w-5/12 lg:w-6/12 md:text-left">
                  <img className="img-fluid animated zoomIn" src={etudiantPng} alt="Students Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
