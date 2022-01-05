

function Banner({text}) {
  return (
    <section className="App-banner d-flex align-items-center justify-content-center bg-light">
      <h1 className="App-banner-title">{text || "Home"}</h1>
    </section>
  );
}

export default Banner;