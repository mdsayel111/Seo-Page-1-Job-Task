import Card from "../card/Card";

const ParentDiv = ({ singleGroup, title }) => {
  let style = {};
  switch (singleGroup._id) {
    case "incomplete":
      style = { width: "16px", backgroundColor: "#D21010", height: "16px" };
      break;
    case "todo":
      style = { width: "16px", backgroundColor: "#00B5FF", height: "16px" };
      break;
    case "doing":
      style = { width: "16px", backgroundColor: "#FFE700", height: "16px" };
      break;
    default:
      style = {};
  }
  return (
    <div className="lg:w-[30%] w-full px-3 py-6 bg-[#F2F4F7]">
      <div className="mb-8 flex justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-l-full" style={style}></div>
          <h6 className="font-semibold">{title}</h6>
        </div>
        <span className="bg-[#E8EDE9] py-1 px-2 rounded-md">0</span>
      </div>
      <div className="h-full overflow-y-scroll space-y-6">
        {singleGroup?.data?.map((singleData) => (
          <Card key={singleData._id} singleData={singleData} />
        ))}
      </div>
    </div>
  );
};

export default ParentDiv;
