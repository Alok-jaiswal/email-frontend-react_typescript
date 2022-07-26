import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Constant from "../Apis/constants";
import JodieEditor from "jodit-react";
import { Box, Modal } from "@mui/material";
import { Form } from "../Form";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  borderRadius: "12px",
  p: 4,
};

const LandingTemplate = () => {
  let { id } = useParams();
  // console.log(id);

  const [template, setTemplate] = useState<any>([]);
  const [editTemplate, setEditTemplate] = useState<any>([]);
  const [isOpen, setIsOpen] = useState<any>(false);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(Constant.getUrls.getTemplateById + id)
        .then((res) => {
          console.log(res);
          setTemplate(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [id]);

  const sendTemplate = () => {
    console.log(template);
    console.log(editTemplate);
    setIsOpen(true);
  };
  const editor = useRef(template.template);
  const handleClose = () => setIsOpen(false);
  return (
    <div>
      <h2
        className="align-items-center p-4 text-success"
        style={{ textAlign: "center" }}
      >
        Edit Template
      </h2>
      <div className="m-4">
        <JodieEditor
          ref={editor}
          onChange={(content: any) => setEditTemplate(content)}
          value={template.template}
        />
      </div>
      <button
        onClick={sendTemplate}
        className="btn btn-info mb-4  btn-lg btn-block"
      >
        Process to send ...
      </button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{textAlign:"right",color:"red",fontWeight:900,cursor:"pointer"}} onClick={handleClose}>X</div> 
          <Form createdTemplate={editTemplate} />
        </Box>
      </Modal>
    </div>
  );
};

export default LandingTemplate;
