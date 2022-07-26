import axios from "axios";

const Templates = () => {
  const template = `

    `;
  const post_data = async () => {
    const payload = {
      template: template,
    };
    await axios
      .post("http://localhost:8080/emailtemplate/add", payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button onClick={post_data}>post</button>
    </div>
  );
};

export default Templates;
