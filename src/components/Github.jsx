import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/sidharthbhasin21")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <>
      <div className="text-center m-4 bg-gray-500 text-white">
        No. of repos on Github: {data.public_repos}
      </div>
      <img src={data.avatar_url} alt="sidharth-bhasin-avatar" />
    </>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sidharthbhasin21");
  return response.json();
};
