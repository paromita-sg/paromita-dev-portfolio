function Home() {
  return (
    <div style={styles.container}>
      {/* HERO */}
      <section id="home" style={styles.hero}>
        <h1 style={styles.title}>Paromita Sengupta</h1>
        <p style={styles.subtitle}>
          Full-Stack Engineer building data & AI-driven applications
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={styles.section}>
        <h2>Projects</h2>
        <div style={styles.grid}>
          <div style={styles.card}>Project 1</div>
          <div style={styles.card}>Project 2</div>
          <div style={styles.card}>Project 3</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={styles.section}>
        <h2>About</h2>
        <p style={styles.text}>
          Full-Stack Engineer with 5 years of experience building scalable web
          and mobile applications. Passionate about product design and currently
          expanding into Data Science and AI / ML.
        </p>
      </section>

      {/* CONTACT */}
      {/* CONTACT */}
      <section id="contact" style={styles.section}>
        <h2>Contact</h2>

        <p>
          Email:{" "}
          <a href="mailto:paromitasg.cse@gmail.com" style={styles.link}>
            paromitasg.cse@gmail.com
          </a>
        </p>

        <p>
          GitHub:{" "}
          <a
            href="https://github.com/paromita-sg"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            github.com/paromita-sg
          </a>
        </p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    maxWidth: "900px",
    margin: "0 auto",
    color: "white",
  },
  hero: {
    textAlign: "center" as const,
    marginBottom: "80px",
  },
  title: {
    fontSize: "42px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    opacity: 0.8,
  },
  section: {
    marginBottom: "60px",
  },
  text: {
    maxWidth: "600px",
  },
  grid: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    flex: 1,
    background: "#1e293b",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center" as const,
  },
};

export default Home;
