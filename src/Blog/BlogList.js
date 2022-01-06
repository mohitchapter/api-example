import axios from "axios";
import React, { Component } from "react";
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
          id: newData[newData.length - 1].id + 1,
          data: newData,
        });
      })
      .catch((err) => console.log("Couldn't fetch data. Error: " + err));
  }

  render() {
    return (
      <Row className="gy-4">
        {this.state.data.length === 0 ? (
          <p>Loading Posts...</p>
        ) : (
          this.state.data.map((post, index) => (
            <Col sm={6} md={4} className="d-flex flex-column">
              <article className="App-blog-card d-flex flex-column">
                <div className="post-img-wrap position-relative">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/pike-place.jpg"
                  className="post-image"
                />
                </div>
                <div className="article-details d-flex flex-column">
                  <h4 className="post-category">{post.userId}</h4>
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
