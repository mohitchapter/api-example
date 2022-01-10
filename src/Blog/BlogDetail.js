import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetail() {
  const [blogData, setBlogData] = useState("");
  const [loader, setLoader] = useState(true);

  let { id } = useParams();
  const dataFetch = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setBlogData(res.data);
        setLoader(false);
      })
      .catch((err) => console.log("Couldn't fetch data. Error: " + err));
  };

  useEffect(() => {
    if (id) {
      dataFetch(id);
    }
    console.log(id);
    console.log(blogData);
  }, []);
  return (
    <>
      {loader ? (
        <p className="center">Loading..........</p>
      ) : (
        <div>
          <h1>{blogData.title}</h1>
          <p>{blogData.body}</p>
        </div>
      )}
    </>
  );
}

export default BlogDetail;
