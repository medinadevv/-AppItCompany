import React, { useEffect, useState } from "react";
import "./block.scss";
import axios from "axios";
import { TOKEN } from "../../API/API";

const Block = () => {
  const [users, setUsers] = useState([]);

  let API = `http://3.91.193.191/api/user`;

  async function getUserApi() {
    let { data } = await axios(API, {
      headers: {
        Authorization: TOKEN,
      },
    });
    setUsers(data);
  }

  useEffect(() => {
    getUserApi();
  }, []);

  return (
    <div className="users">
      {users.length !== 0 ? (
        users.map((el, idx) => (
          <div className="users__card" key={idx}>
            <h4>
              <span>Email: </span>
              {el.image}
            </h4>
            <h4>
              <span>Name: </span>
              {el.fullName}
            </h4>
            <h4>
              <span>Message: </span>
              {el.message}
            </h4>
          </div>
        ))
      ) : (
        <div className="users__loader">
          <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Block;
