import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //     fetch('https://api.github.com/users/itsAhtesham')
  //     .then(response => response.json())
  //     .then((data) =>{
  //         console.log(data);
  //         setData(data)
  //     })
  // }, [])

  const data = useLoaderData();
  return (
    <>
      <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl">
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="No Image Found" width={300} />
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const data = await fetch("https://api.github.com/users/itsAhtesham");
  return data.json();
};
