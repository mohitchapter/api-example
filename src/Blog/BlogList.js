import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col,Form,FormControl,Button } from "react-bootstrap";

class Blogpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      searchVal:"",
    };
  }

  async componentDidMount() {
    try { await axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        let newData = res.data.slice(0, 200);
        this.setState({
          data: newData,
        });
      })
    }
    catch(error) {console.log(error)}
  }
  render() {
    const { data, searchVal } = this.state;
    return (
      <Row className="gy-4">
        <Col xs={12} className="mb-2">
          <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(v)=> this.setState({ searchVal: v.target.value })}
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Col>
        {data && data.length ? (
          data.filter(name => name.title.includes(searchVal)).map((post, i) => (
            <Col sm={6} md={4} className="d-flex flex-column" key={i}>
              <article className="App-blog-card d-flex flex-column">
                <div className="post-img-wrap position-relative">
                  <Link to={`/blog-detail/${post.id}`}>
                    <img
                      src={post.url}
                      className="post-image"
                    />
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
        ): ( <p>Loading Posts...</p> )
      }
      </Row>
    );
  }
}

export default Blogpost;
