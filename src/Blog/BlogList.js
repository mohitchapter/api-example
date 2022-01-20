import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link,useHistory, useParams , useLocation  } from "react-router-dom";
import { Row, Col, Form, FormControl, Button } from "react-bootstrap";

function Blogpost() {
  const [post, setPost] = useState();
  const [searchVal, setSearchVal] = useState();
  
  async function getPost() {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      let newData = res.data.slice(0, 20);
      setPost(newData);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getPost();
  }, []);
  
  const handleChange = (e) => {
    setSearchVal(e.target.value);
  }
  const handleOnClick = (e) => {
    const filtered = post.filter((name) => name.title.includes(searchVal));
    setPost(filtered);
  }
  return (
    <Row className="gy-4">
      <Col xs={12} className="mb-2">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>handleChange(e)}
            />
          <Button variant="outline-info" onClick={(e)=>handleOnClick(e)}>Search</Button>
        </Form>
      </Col>
      {post && post.length ? (
        post.map((post, i) => (
            <Col sm={6} md={4} className="d-flex flex-column" key={i}>
              <article className="App-blog-card d-flex flex-column">
                <div className="post-img-wrap position-relative">
                  <Link to={`/blog-detail/${post.id}`}>
                    <img src={post.url} className="post-image" />
                  </Link>
                </div>
                <div className="article-details d-flex flex-column">
                  <h4 className="post-category">{post.id}</h4>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-description">
                    {/* {post.body.substr(0, 100)}... */}
                  </p>
                  <p className="post-author">By Katherine Kato</p>
                </div>
              </article>
            </Col>
          ))
      ) : (
        <p>Loading Posts...</p>
      )}
    </Row>
  );
}

export default Blogpost;
