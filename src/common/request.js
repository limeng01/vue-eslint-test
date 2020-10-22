const axios = require("axios");

export const post = function(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      ({ status, data }) => {
        if (status === 200) {
          resolve(data);
        }
      },
      (res) => reject(res)
    );
  });
};

// "https://mininew.eduxdesign.com/api_category/get_navigate_scene"
// uid: "eee681f72e7a689c9e244d360e24e48786d658fb"
