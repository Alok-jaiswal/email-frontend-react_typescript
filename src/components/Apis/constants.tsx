const mainUrl = "http://localhost:4000/";
// const mainUrl = "http://localhost:8080/";
const Constant = {
  getUrls: {
    getTemplate: mainUrl + "emailtemplate/getalltemplate",
    getTemplateById: mainUrl + "emailtemplate/gettemplatebyid/",
  },
  postUrls: {
    sendEmail: mainUrl + "mail/send",
  },
};
export default Constant;
