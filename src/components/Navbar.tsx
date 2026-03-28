function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={styles.nav}>
      {/* <span style={styles.logo} onClick={() => scrollTo("home")}>
        Paromita Sengupta
      </span> */}

      <div style={styles.links}>
        <span onClick={() => scrollTo("projects")}>Projects</span>
        <span onClick={() => scrollTo("about")}>About</span>
        <span onClick={() => scrollTo("contact")}>Contact</span>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    background: "#020617",
    color: "white",
    position: "sticky" as const,
    top: 0,
  },
  logo: {
    cursor: "pointer",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
    cursor: "pointer",
  },
};

export default Navbar;
