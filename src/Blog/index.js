import { Container, Row } from "react-bootstrap";
import Blogpost from './BlogList';

function Blog() {
  return (
    <section className="App-blog-page py-5">
      <Container>
          <Blogpost />
      </Container>
    </section>
  );
}

export default Blog;
