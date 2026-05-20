/* shared.js — inject nav and footer into every page */
const currentPage = location.pathname.split('/').pop() || 'index.html';

const NAV_HTML = `
<nav>
  <a class="nav-logo" href="index.html">
    <img src="albion_logo.png" alt="ALBION" height="58" style="mix-blend-mode:multiply; display:block;"/>
  </a>
  <div style="display:flex;align-items:center;gap:1.2rem;">
    <ul class="nav-links" id="main-nav-links">
      <li><a href="index.html" data-page="index.html">Home</a></li>
      <li><a href="story.html" data-page="story.html">The ALBION study</a></li>
      <li><a href="data.html" data-page="data.html">Participants &amp; Data</a></li>
      <li><a href="team.html" data-page="team.html">Team</a></li>
      <li><a href="publications.html" data-page="publications.html">Publications</a></li>
    </ul>
    <a href="contact.html" class="nav-cta" id="nav-cta-btn">Contact us</a>
    <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu" onclick="toggleMobileNav()">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-menu" id="mobile-menu">
  <a href="index.html" data-page="index.html">Home</a>
  <a href="story.html" data-page="story.html">The ALBION study</a>
  <a href="data.html" data-page="data.html">Participants &amp; Data</a>
  <a href="team.html" data-page="team.html">Team</a>
  <a href="publications.html" data-page="publications.html">Publications</a>
  <a href="contact.html" class="mobile-menu-cta">Contact us</a>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-top">
    <div>
      <img src="albion_logo.png" alt="ALBION" height="90" style="display:block; margin-bottom:0.75rem;"/>
      <p class="footer-desc">Aiginition Longitudinal Biomarkers Investigation of Neurodegeneration.</p>
    </div>
    <nav class="footer-nav">
      <div class="footer-nav-group">
        <h4>Study</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="story.html">The ALBION study</a></li>
          <li><a href="team.html">Our team</a></li>
        </ul>
      </div>
      <div class="footer-nav-group">
        <h4>Research</h4>
        <ul>
          <li><a href="data.html">Participants &amp; Data</a></li>
          <li><a href="publications.html">Publications</a></li>
          <li><a href="data.html#biomarker-ns">Sample Biomarker Data</a></li>
        </ul>
      </div>
      <div class="footer-nav-group">
        <h4>Info</h4>
        <ul>
          <li><a href="contact.html">Contact us</a></li>
        </ul>
      </div>
    </nav>
    <div class="footer-contact-col" style="margin-right:5rem;">
      <h4 style="font-size:0.78rem;letter-spacing:0.08em;text-transform:uppercase;color:rgba(248,247,244,.3);margin-bottom:1rem;font-weight:500;">Contact</h4>
      <p style="color:rgba(248,247,244,.55);font-size:0.88rem;font-weight:300;line-height:1.8;margin:0;">Aiginiteio University Hospital<br/>Vasilissis Sofias 72-74<br/>115 28 Athens, Greece</p>
      <a href="mailto:info.albionstudy@gmail.com" style="display:inline-block;margin-top:0.8rem;color:#5a9e8f;text-decoration:none;font-size:0.88rem;font-weight:300;transition:color .2s;">info.albionstudy@gmail.com</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 ALBION Study, Aiginiteio University Hospital · National and Kapodistrian University of Athens</p>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('site-nav');
  if (navEl) navEl.outerHTML = NAV_HTML;

  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;

  document.querySelectorAll('.nav-links a[data-page], .mobile-menu a[data-page]').forEach(a => {
    if (a.dataset.page === currentPage) a.classList.add('active');
  });
});

function toggleMobileNav() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('nav-hamburger');
  const isOpen = menu.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
}
