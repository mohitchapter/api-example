import { Row, Col } from "react-bootstrap";

function Blogpost() {
  return (
    <Row>
      <Col sm={6} md={4}>
        <article className="App-blog-card">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/pike-place.jpg"
            className="post-image"
          />
          <div className="article-details">
            <h4 className="post-category">Travel</h4>{" "}
            <h3 className="post-title">10 Best Things to Do in Seattle</h3>{" "}
            <p className="post-description">
              Seattle is a seaport city on the west coast of the United
              States...
            </p>
            <p className="post-author">By Katherine Kato</p>
          </div>
        </article>
      </Col>
    </Row>
  );
}

export default Blogpost;
