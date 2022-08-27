import { useEffect, useState } from 'react';
import SliderList from './SliderList';
import {FaChevronRight} from 'react-icons/fa';
import {FaChevronLeft} from 'react-icons/fa';



const Slider = () => {
  
    const [sliders, setSliders] = useState(SliderList);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        const lastIndex= sliders.length - 1;
        if (index < 0){
            setIndex(lastIndex);
        } 
        if (index > lastIndex){
            setIndex(0);
        }  
    },[index,sliders]);

    return (
        <>
           
                {
                    sliders.map((slider, slideIndex) => {
                        const { id,name,image } = slider;
                        let position="nextSlide";
                        if (slideIndex===index){
                            position="activeSlide"
                        }
                        if (slideIndex===index-1 || (index===0 && slideIndex===sliders.length-1)){
                            position = "lastSlide"
                        }

                        return (
                            <>
                            <article className={position} key={id}>
                                <img src={image} alt={name} />

                            </article>
                            
                             </>
                    )
                })
            }
            <FaChevronLeft className="arrow leftArrow"  onClick={()=>setIndex(index-1)} />
            <FaChevronRight className="arrow rightArrow" onClick={()=>setIndex(index+1)} />
        
        
            
        </>
    )
}
export default Slider;