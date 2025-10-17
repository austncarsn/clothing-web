import imgBack from "figma:asset/4015ee354c6231ef6ecbc41554228d33626ff688.png";
import imgFront from "figma:asset/e4cdd09b6e295e609449a36d0577e1d5543eacc0.png";

export default function WarmIvory() {
  return (
    <div className="relative size-full" data-name="Warm_Ivory">
      <div className="absolute h-[2634.66px] left-[1756.44px] top-0 w-[1756.44px]" data-name="Back">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBack} />
      </div>
      <div className="absolute h-[2634.66px] left-0 top-0 w-[1756.44px]" data-name="Front">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFront} />
      </div>
    </div>
  );
}