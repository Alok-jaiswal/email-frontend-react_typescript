import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Constant from "../Apis/constants";

const DisplayTemplate = () => {
  const [template, setTemplate] = useState<any>([]);
  
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(Constant.getUrls.getTemplate)
        .then((res) => {
          console.log(res);
          setTemplate(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  },[]);
  let navigate = useNavigate();

  return (
    <div className="row">
      {template.map(
        (temp: { id: React.Key | null | undefined; template: any }) => (
          <div
            className=""
            key={temp.id}
            style={{
              height: "500px",
              overflow: "scroll",
              border: "1px solid #000",
              borderRadius: "8px",
              margin: "10px",
              padding: "12px",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/edit/${temp.id}`)}
            dangerouslySetInnerHTML={{ __html: temp.template }}
          />
        )
      )}
    </div>
  );
};

export default DisplayTemplate;
