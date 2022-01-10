import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

class Blogpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      body: "",
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        let newData = res.data.slice(0, 10);
        this.setState({
          data: newData,
        });
      })
      .catch((err) => console.log("Couldn't fetch data. Error: " + err));
  }

  render() {
    const { data } = this.state;
    return (
      <Row className="gy-4">
        {data.length === 0 ? (
          <p>Loading Posts...</p>
        ) : (
          data.map((post, index) => (
            <Col sm={6} md={4} className="d-flex flex-column" key={index}>
              <article className="App-blog-card d-flex flex-column">
                <div className="post-img-wrap position-relative">
                  <Link to={`/blog-detail/${post.id}`}>
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/pike-place.jpg"
                      className="post-image"
                    />
                  </Link>
                </div>
                <div className="article-details d-flex flex-column">
                  <h4 className="post-category">{post.id}</h4>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-description">
                    {post.body.substr(0, 100)}...
                  </p>
                  <p className="post-author">By Katherine Kato</p>
                </div>
              </article>
            </Col>
          ))
        )}
      </Row>
    );
  }
}

export default Blogpost;
