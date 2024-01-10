import { FaLayerGroup } from "react-icons/fa";
import { PiCalendarBlankFill } from "react-icons/pi";
import { BiSolidCalendar } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa6";
import { ImAttachment } from "react-icons/im";

const Card = () => {
  return (
    <div id="card" className="space-y-3 bg-white px-2 py-3 rounded-lg">
      <div className="flex justify-between">
        <div className="flex justify-center items-center">
          <div className="avatar mr-4">
            <div className="w-6 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="text-base font-bold">client name</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="avatar mr-4">
            <div className="w-6 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="text-base font-bold">client name</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <FaLayerGroup className="mr-2" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="flex justify-between items-center bg-[#F2F4F7] px-2 py-1 rounded-md">
          <PiCalendarBlankFill className="mr-2" />
          <p>1/2</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="avatar">
          <div className="w-6 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-6 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="avatar placeholder">
          <div className="bg-[#F2F4F7] rounded-full w-8">
            <span className="text-[12px] font-semibold">12 +</span>
          </div>
        </div>
        <div className="flex gap-1 justify-center items-center">
          <FaRegComments className="text-xl" />
          15
        </div>
        <div className="flex items-center gap-1">
          <ImAttachment />
          {25}
        </div>
        <div className="flex items-center gap-1">
          <BiSolidCalendar />
          30-12-2022
        </div>
      </div>
    </div>
  );
};

export default Card;
