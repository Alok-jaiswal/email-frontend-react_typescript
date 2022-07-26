import React, { useState } from "react";
import axios from "axios";
// import { Editor } from "./Editor";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import Constant from "./Apis/constants";

export const Form = (createdTemplate:any) => {
  console.log(createdTemplate);
  
  const [form_Data, Setform_Data] = useState({
    name: "",
    subject: "",
    email: "",
  });
  // const [template, setTemplate] = useState("");
  const [msg, setMsg] = useState("");
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  

  const handleChange = (e: any) => {
    Setform_Data({ ...form_Data, [e.target.name]: e.target.value });
  };

  const sendMail = (e: any) => {
    e.preventDefault();
    postDate();
  };

  const postDate = async () => {
    const payload = {
      email: form_Data.email,
      name: form_Data.name,
      subject: form_Data.subject,
      template:createdTemplate.createdTemplate,
    };
    // console.log(payload);

    axios
      .post(Constant.postUrls.sendEmail, payload)
      .then((resp: any) => {
        console.log(resp);
        if (resp.status === 201) {
          setOpen(true);
          setMsg("successfully send !");
        } else {
          setOpen(true);
          setMsg("Mail not send !");
        }
      })
      .catch((err: any) => {
        // console.log(err);
        if (err) {
          setError(true);
          setOpen(true);
          setMsg(err.response?.data?.message[0]);
        }
      });
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        X
      </IconButton>
    </React.Fragment>
  );

  return (
    <div style={{ margin: "0.3rem", marginBottom: "0.2rem" }} className="border border-info rounded m-4 p-4 ">
      {/* <div dangerouslySetInnerHTML={{ __html:}} /> */}
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={6000}
        onClose={handleClose}
        // message={msg}
        action={action}
      >
        <Alert
          onClose={handleClose}
          severity={!error ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {msg}
        </Alert>
      </Snackbar>

      <form>
        <div className="mb-2 row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            To :
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              autoComplete="off"
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-2 row">
          <label htmlFor="subject" className="col-sm-2 col-form-label">
            Subject :
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              id="subject"
              name="subject"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4 row">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name :
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              autoComplete="off"
              className="form-control"
              id="name"
              name="name"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* <Editor setTemplate={setTemplate} /> */}
        <button
          type="submit"
          className="btn btn-primary form-control mt-2"
          onClick={sendMail}
        >
          Send Mail
        </button>
      </form>
    </div>
  );
};
