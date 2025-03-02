import React from "react";
import thinindia from "../../assets/thinkindia.png"
import ieee from "../../assets/ieee.png"

const AboutUS = () => {
  return (
    <>
    <div className="ml-8 px-32 text-white  mt-20 text-2xl font-bold font-serif md:w-1/2">
        <div className="p-4 border-white border-solid border-2 rounded-xl">
            <img src={thinindia} className="h-1/4 w-1/4 text-white"/>
        Parrots—along with ravens, crows, jays, and magpies—are among the most intelligent birds, and the ability of some species to imitate human speech enhances their popularity as pets. They form the most variably sized bird order in terms of length; many are vividly coloured and some, multi-coloured. Most parrots exhibit little or no sexual dimorphism in the visual spectrum.
        </div>
 </div>
 <br/><br/>
        <div className="ml-8 px-32 text-white  text-2xl font-bold font-serif md:w-1/2 float-right my-8">
        <div className="p-4 border-white border-solid border-2 rounded-xl">
        <img src={ieee} className="h-1/4 w-1/2 text-white mx-16"/>
        <br/>
        Parrots—along with ravens, crows, jays, and magpies—are among the most intelligent birds, and the ability of some species to imitate human speech enhances their popularity as pets. They form the most variably sized bird order in terms of length; many are vividly coloured and some, multi-coloured. Most parrots exhibit little or no sexual dimorphism in the visual spectrum.
        </div>
        </div>
    </>
  );
};

export default AboutUS;