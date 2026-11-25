
export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "60px auto", padding: 20 }}>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>DevisPro</h2>
        <a href="/login">Se connecter</a>
      </nav>

      <section style={{ marginTop: 70 }}>
        <p>L'outil simple pour les indépendants</p>
        <h1>Vos devis, simplement.</h1>
        <p>
          Créez vos devis, gérez vos clients et calculez vos totaux
          au même endroit.
        </p>
        <a href="/login">Commencer gratuitement</a>
      </section>

      <section style={{ display: "flex", gap: 20, marginTop: 50 }}>
        <div>
          <h3>Clients</h3>
          <p>Retrouvez les informations de vos clients.</p>
        </div>
        <div>
          <h3>Devis</h3>
          <p>Préparez vos devis avec les totaux HT, TVA et TTC.</p>
        </div>
        <div>
          <h3>PDF</h3>
          <p>Exportez vos devis en PDF.</p>
        </div>
      </section>
    </main>
  );
}
