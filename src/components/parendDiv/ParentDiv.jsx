import Card from "../card/Card";

const ParentDiv = ({}) => {
  return (
    <div className="lg:w-[25%] w-full px-3 py-6 bg-[#F2F4F7]">
      <div className="mb-8 flex justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-l-full bg-red-600"></div>
          <h6 className="font-semibold">Incomplete</h6>
        </div>
        <span className="bg-[#E8EDE9] py-1 px-2 rounded-md">0</span>
      </div>
      <div className="h-10 overflow-y-scroll">
        <Card />
      </div>
    </div>
  );
};

export default ParentDiv;
