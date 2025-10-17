import imgSageFront from "figma:asset/010c2c6356a80e7b2547de356c9c12e80e7e29fd.png";
import imgSageBack from "figma:asset/7bd5b11e05573a5539b71cfde796b072372e58b2.png";
import imgPowderFront from "figma:asset/11317b372b093b11a2dbaf75e6ca1d7bf1defd96.png";
import imgPowderBack from "figma:asset/f07d5b4f23b3015c87615f8c892a5a772255c6fd.png";
import imgIvory from "figma:asset/083a1c769f8bd49dbc4ce7de839b9fdc4c352a24.png";
import imgForestGreen from "figma:asset/241cc21a0e4ad50387a21d454bef882ea5a27884.png";
import imgVibrantGreen from "figma:asset/b3e62da76d176ef3e3f67fc23d95faea676962e5.png";
import imgCoralGradient from "figma:asset/cdb142026825c08c622d5e063317b7026009bb4c.png";
import imgTeal from "figma:asset/6e0cbe88ce12c04d1dc5e175e58f127e9a3ba832.png";
import imgPowderCardigan from "figma:asset/932e5c2abb579be5e10aa45a8032c4ce413772fd.png";
import imgCameoCardigan from "figma:asset/fd5c6aea4a5668d6c6b3775deb9e4d3ce90c18cc.png";
import imgBlackBase from "figma:asset/587a928ddff8df1246e178d87a6393bece94ec49.png";
import imgLeatherCardigan from "figma:asset/51daa793b078a797a4a9733872b5c624cdccc129.png";
import imgFootballCardigan from "figma:asset/f20f3da91fe8c2cea343af3a639e9ed185a88496.png";

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[1291.71px] ml-0 mt-0 relative w-[1184.61px]" data-name="Sage_Front">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSageFront} />
      </div>
      <div className="[grid-area:1_/_1] h-[1291.71px] ml-[1194.61px] mt-0 relative w-[1184.61px]" data-name="Sage_Back">
        <img alt="" className="block max-w-none size-full" height="1291.706" src={imgSageBack} width="1184.608" />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[1291.71px] ml-0 mt-0 relative w-[1184.61px]" data-name="Powder_Front">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[126.45%] left-[-0.01%] max-w-none top-[-13.3%] w-[100.01%]" src={imgPowderFront} />
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[1291.71px] ml-[1194.61px] mt-0 relative w-[1184.61px]" data-name="Powder_Back">
        <img alt="" className="block max-w-none size-full" height="1291.706" src={imgPowderBack} width="1184.608" />
      </div>
    </div>
  );
}

export default function Sweaters() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative size-full" data-name="Sweaters">
      <div className="h-[1291.71px] relative shrink-0 w-[1184.61px]" data-name="Ivory">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIvory} />
      </div>
      <Group2 />
      <div className="h-[1291.71px] relative shrink-0 w-[1184.61px]" data-name="Forest_Green">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[151.78%] left-[-10.25%] max-w-none top-[-28.05%] w-[122.12%]" src={imgForestGreen} />
        </div>
      </div>
      <div className="h-[1291.71px] relative shrink-0 w-[1184.61px]" data-name="Vibrant_Green">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVibrantGreen} />
      </div>
      <div className="h-[1291.71px] relative shrink-0 w-[1184.61px]" data-name="Coral_Gradient">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCoralGradient} />
      </div>
      <Group1 />
      <div className="h-[1291.71px] relative shrink-0 w-[1184.61px]" data-name="Teal">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTeal} />
      </div>
      <div className="h-[1291.71px] relative shrink-0 w-[1184.61px]" data-name="Powder_Cardigan">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPowderCardigan} />
      </div>
      <div className="h-[1291.71px] relative shrink-0 w-[1184.61px]" data-name="Cameo_Cardigan">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCameoCardigan} />
      </div>
      <div className="h-[1291.71px] relative shrink-0 w-[1184.61px]" data-name="Black_Base">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBlackBase} />
      </div>
      <div className="h-[1291.71px] relative shrink-0 w-[1184.61px]" data-name="Leather_Cardigan">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLeatherCardigan} />
      </div>
      <div className="h-[1291.71px] relative shrink-0 w-[1184.61px]" data-name="Football_Cardigan">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFootballCardigan} />
      </div>
    </div>
  );
}