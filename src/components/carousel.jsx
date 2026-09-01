import {useState} from "react"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Carousel({images}){
    const [activeIndex, setActiveIndex] = useState(0) 
    const prevImg = () => {setActiveIndex ((ind) => (ind === 0 ? images.length - 1 : ind - 1))}
    const nextImg = () => {setActiveIndex ((ind) => (ind === images.length - 1 ? 0 : ind + 1))}

    return(
        <div className="flex flex-col gap-5">
            <div className="relative w-full max-w-auto lg:max-w-lg">
                <img
                    className="rounded-md "
                    src={images[activeIndex]}
                />
                <button className="bg-white opacity-60 lg:flex justify-center items-center p-1 rounded-2xl absolute hidden lg:top-25 left-2" onClick={prevImg}><ArrowBackIosNewIcon style={{ marginRight: "4px",  color: 'black' }}></ArrowBackIosNewIcon></button>
                <button className="bg-white opacity-60 lg:flex justify-center items-center p-1 rounded-2xl absolute hidden lg:top-25 right-2" onClick={nextImg}><ArrowForwardIosIcon style={{ marginLeft: "4px", color: 'black' }}></ArrowForwardIosIcon></button>
            </div>
            <div className="flex flex-row gap-3">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`${activeIndex === index ? "border rounded-md " : "border-transparent"}`}
                    >
                        <img
                            className="rounded-md "
                            src={image}
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}