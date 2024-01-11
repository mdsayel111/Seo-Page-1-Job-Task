import axios from "axios";
import ParentDiv from "../components/parendDiv/ParentDiv";

import { AiFillFile } from "react-icons/ai";
import { useState, useContext, useRef } from "react";
import { GlobalContext } from "../cotexts/GlobalContextProvider";
import Swal from "sweetalert2";
import { useQuery, useQueryClient } from "react-query";

const Home = () => {
  const [data, setData] = useState([]);
  const { currentCard } = useContext(GlobalContext);
  const [files, setFiles] = useState([]);
  const ref = useRef();
  const queryClient = useQueryClient();

  const getData = async () => {
    const res = await axios.get("http://localhost:3000/data");
    const data = res.data;
    setData(data);
  };

  const query = useQuery("data", getData);

  const handleFileSubmit = async (id) => {
    const formData = new FormData();
    files.map((file, index) => {
      formData.append("files", files[index]);
    });
    await axios.post(`http://localhost:3000/file/upload/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    Swal.fire({
      icon: "Success",
      title: "Attach add successful",
      text: "Your attach added successful",
    });
    ref.current.value = "";
    setFiles([]);
    queryClient.invalidateQueries("data");
  };

  const handleInput = (e) => {
    const inputField = e.target;
    const inputFile = Array.from(inputField.files);
    setFiles([...files, ...inputFile]);
  };

  return (
    <>
      <div className="flex w-fit w max-h-screen overflow-y-hidden">
        {data?.map((singleGroup, index) => (
          <ParentDiv
            key={index}
            title={singleGroup._id}
            singleGroup={singleGroup}
          />
        ))}
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="w-fit mx-auto">
            <h1 className="text-2xl">Files:</h1>
            <div className="max-h-20 overflow-y-scroll mb-4">
              {files.length > 0 ? (
                files?.map((file, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <AiFillFile className="text-lg" />
                    <p>{file.name}</p>
                  </div>
                ))
              ) : (
                <p>No file choosen</p>
              )}
            </div>
            <div className="w-fit mx-auto">
              <input
                ref={ref}
                onChange={handleInput}
                type="file"
                className="file-input w-full max-w-xs"
                multiple
              />
            </div>
            <div className="modal-action">
              <form method="dialog" className="w-fit mx-auto">
                <button
                  onClick={() => handleFileSubmit(currentCard)}
                  className="btn mr-4"
                >
                  Submit
                </button>
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Home;
