import axios from "axios";
import ParentDiv from "../components/parendDiv/ParentDiv";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/data");
      const data = res.data;
      setData(data);
    };
    getData();
  }, []);
  return (
    <div className="flex w-fit w max-h-screen overflow-y-hidden">
      {data?.map((singleGroup, index) => (
        <ParentDiv key={index} title={singleGroup._id} singleGroup={singleGroup} />
      ))}
    </div>
  );
};

export default Home;
