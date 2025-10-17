import imgIvoryWideLeg from "figma:asset/c1e55831161d93c3a6965b77a6f8a6b1ae6a591b.png";
import imgPantsModel from "figma:asset/29a1ea0607124b0e3f26274aec4c400659d786fc.png";
import imgPantsModel2 from "figma:asset/235bec3da5dd3938fafae1f755db59789fd571fd.png";
import imgBlackWideLeg from "figma:asset/d954e07f23b9ce4c44f70e72512dbf3b36b540c8.png";
import imgPowderStraightLeg from "figma:asset/9ceb49e596ce5b81a00b5ad2ef96c115503ccf60.png";

function WideLeg() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Wide Leg">
      <div className="[grid-area:1_/_1] h-[1536px] ml-[3400px] mt-0 relative w-[1024px]" data-name="Ivory_Wide_Leg">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIvoryWideLeg} />
      </div>
      <div className="[grid-area:1_/_1] h-[1536px] ml-[6800px] mt-0 relative w-[1024px]" data-name="Pants_Model">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPantsModel} />
      </div>
      <div className="[grid-area:1_/_1] h-[1536px] ml-[10200px] mt-0 relative w-[1024px]" data-name="Pants_Model2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPantsModel2} />
      </div>
      <div className="[grid-area:1_/_1] h-[1536px] ml-0 mt-0 relative w-[1024px]" data-name="Black_Wide_Leg">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBlackWideLeg} />
      </div>
    </div>
  );
}

function SttraightLeg() {
  return (
    <div className="[grid-area:2_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Sttraight Leg">
      <div className="[grid-area:1_/_1] h-[2435.57px] ml-0 mt-[1546px] relative w-[1024px]" data-name="Powder_Straight_Leg">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[119.86%] left-[-43.78%] max-w-none top-[-9.41%] w-[190.06%]" src={imgPowderStraightLeg} />
        </div>
      </div>
    </div>
  );
}

export default function Pants() {
  return (
    <div className="gap-[10px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] leading-[0] relative size-full" data-name="Pants">
      <WideLeg />
      <SttraightLeg />
    </div>
  );
}