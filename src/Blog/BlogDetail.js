import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container,Breadcrumb } from "react-bootstrap";


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
    <Container className="mt-3">
      <Breadcrumb>
      <Breadcrumb.Item as={Link} to="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item as={Link} to="/blog">Blog</Breadcrumb.Item>
      <Breadcrumb.Item active>{blogData.title}</Breadcrumb.Item>
    </Breadcrumb>
      {loader ? (
        <p className="center">Loading..........</p>
      ) : (
        <div>
          <h1>{blogData.title}</h1>
          <p>{blogData.body}</p>
        </div>
      )}
    </Container>
  );
}

export default BlogDetail;
