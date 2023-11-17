class footerCustom extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <div class="container-footer">
            <p>copyright &copy; 2023 - Arkha Food</p>
        </div>
    </footer>
    `;
  }
}

customElements.define('footer-custom', footerCustom);
