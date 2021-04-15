import Request from "./axios";

export const test = data => Request.get("/mock/mock.json", data);

export const getListData = data =>
  Request.get(
    "https://back.ku-61.com/maxwell/v1.0/course/category/root?uid=eee681f72e7a689c9e244d360e24e48786d658fb",
    data,
  );

export const getImgList = data =>
  Request.post(
    "http://clitest.eduxdesign.com/api_special/search_special_material",
    data,
  );
  export const getOSStoken = (data, headers) =>
  Request.get("http://clitest.eduxdesign.com/maxwell/v1.0/oss/token?uid=7aca9fbdef60efe0d2286044363168642d27dbda", data, headers);
