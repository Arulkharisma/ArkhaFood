class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
   <header id="header">
        <div class="hero-section">
            <h1>Temukan Kelezatan yang Luar Biasa dari Berbagai <br>Masakan dan Lokasi</h1>
            <p>Satu Website Sejuta Restoran</p>
            <a href="#mainContent">Jelajahi Sekarang <i class="bi bi-arrow-down"></i></a>
        </div>
        <div class="container">
            <nav id="navbar">
                <div class="nav-brand">
                    <a href="/"><img src="./navbar-logo.png" alt=""><span>Arkha</span><span>Food</span></a>
                </div>
                <button class="burger-menu" aria-label="dropdown menu" type="button">
                    <i class="bi bi-list" style="font-size: 45px; color: white;"></i>
                </button>
                <ul class="nav-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="#/favorite">Favorite</a></li>
                    <li><a href="https://www.linkedin.com/in/arulkharisma/">About Us</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `;
  }
}

customElements.define('header-custom', Header);
