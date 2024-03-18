import React, { useState } from "react";
import "./Admin.scss";
import axios from "axios";
import { TOKEN } from "./../../API/API";

const Admin = () => {
  const [img, setImg] = useState(null);
  //   const [back, setBack] = useState();

  //   const fileReader = new FileReader();

  //   async function imageReader(e) {
  //     setImg(e.target.files[0]);
  //     fileReader.readAsBinaryString(img);

  //     //appitc.s3.amazonaws.com/1710679272707_photo_2023-10-08_17-47-04.jpg
  //     //appitc.s3.amazonaws.com/1710679310242_images.jpeg
  //     //appitc.s3.amazonaws.com/1710679419595_наклейка.PNG

  //     let data = await axios.post("http://3.91.193.191/api/v1/files", binary, {
  //       Authorization: TOKEN,
  //       "Content-Type": img.type,
  //     });
  //     // setBack(data);
  //     console.log("data", data);
  //   }

  //   console.log(img);

  const [values, setValues] = useState({
    image: img,
    name: "",
    profession: "",
  });

  console.log(values);

  function handleInputValue(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  let API = `http://3.91.193.191/api/user?fullName=${values.name}&image=${values.image}&occupation=${values.profession}`;

  async function addToPerson() {
    try {
      await axios.post(API, values, {
        headers: {
          Authorization: TOKEN,
        },
      });
      setValues({
        image: img,
        name: "",
        profession: "",
      });
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="admin--title">
            <input
              //   onChange={imageReader}
              value={values.image}
              name="image"
              type="file"
              placeholder="Cүрөтү"
            />
            <input
              onChange={handleInputValue}
              value={values.name}
              name="name"
              type="text"
              placeholder="Аты-жөнү"
            />
            <input
              onChange={handleInputValue}
              value={values.profession}
              name="profession"
              type="text"
              placeholder="Кесиби"
            />
            <button onClick={addToPerson}>Жүктөө</button>
          </div>

          {/*<div style={{background:img === null ? '': `url(${img}) no-repeat center/cover `}} className="admin--nav"></div>*/}
        </div>
      </div>
    </div>
  );
};

export default Admin;
