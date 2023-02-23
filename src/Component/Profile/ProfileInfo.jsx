import axios, { Axios } from "axios";
import { useEffect, useState } from "react";

function ProfileInfo(props) {
  const [users, setUsers] = useState([]);
  const user = localStorage.getItem("user");
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const id = JSON.parse(user).user["_id"];
  console.log(users);
  const matchingUser = users.find((user) => user._id === id);
  console.log(matchingUser, id);
  return (
    <section className="flex justify-center flex-col items-center">
      <h3 className="font-title text-2xl p-4">{props.title}</h3>
      {matchingUser && (
        <div className="rounded bg-black text-white m-2 p-4 w-[250px] sm:w-[300px] md:w-[400px] lg:w-[400px]">
          <p>
            {props.nameproperty}: {matchingUser[props.property]}
          </p>
          <p>
            {props.nameproperty1}: {matchingUser[props.property1]}
          </p>
          <p>
            {props.nameproperty2}: {matchingUser[props.property2]}
          </p>
          <p>
            {props.nameproperty3}: {matchingUser[props.property3]}
          </p>
        </div>
      )}
    </section>
  );
}
export default ProfileInfo;
