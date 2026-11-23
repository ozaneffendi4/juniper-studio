const pieces = [
  { name: "Tide bowl", glaze: "Celadon", price: "$48" },
  { name: "Ridge mug", glaze: "Iron speckle", price: "$34" },
  { name: "Moss vase", glaze: "Ash green", price: "$72" },
];

export default function App() {
  return (
    <main>
      <header className="nav">
        <span className="mark">Juniper Studio</span>
        <span className="note">Fictional demo site · deployed by Deployora</span>
      </header>
      <section className="hero">
        <p className="eyebrow">Autumn kiln opening</p>
        <h1>Hand-thrown ceramics for slow mornings.</h1>
        <p className="lede">Small batches, wood-fired glazes, and pieces made to be used every day.</p>
        <a className="cta" href="#pieces">See this week's pieces</a>
      </section>
      <section id="pieces" className="grid">
        {pieces.map((piece) => (
          <article key={piece.name} className="card">
            <div className="swatch" aria-hidden="true" />
            <h2>{piece.name}</h2>
            <p>{piece.glaze}</p>
            <strong>{piece.price}</strong>
          </article>
        ))}
      </section>
      <footer data-build="juniper-ok">Built with Vite · served from the repaired Deployora deployment</footer>
    </main>
  );
}
