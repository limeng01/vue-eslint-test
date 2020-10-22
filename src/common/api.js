import { post } from "./request";
const uid = "eee681f72e7a689c9e244d360e24e48786d658fb";
export const landingPageData = data => {
  return post(
    "https://mininew.eduxdesign.com/api_category/get_navigate_scene",
    data,
  );
};

export const materialData = data => {
  return post("https://mininew.eduxdesign.com/api_material/search_material", {
    uid,
    ...data,
  });
};
