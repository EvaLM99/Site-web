// Charger le header
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    const headerDiv = document.getElementById('header');
    headerDiv.innerHTML = data;

    // Définir la page active
    const links = headerDiv.querySelectorAll('a');
    let currentPage = window.location.pathname.split("/").pop(); // ex: 'index.html'

    // Si la page est vide (ex: localhost ou dossier), considérer index.html
    if (!currentPage) currentPage = 'index.html';

    links.forEach(link => {
      let linkPage = link.getAttribute('href');
      // Retirer './' si présent
      if (linkPage.startsWith('./')) linkPage = linkPage.slice(2);

      if (linkPage === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  });


  // Charger le footer
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    const footerDiv = document.getElementById('footer');
    if (!footerDiv) return; // si pas de div footer sur la page, on arrête
    footerDiv.innerHTML = data;
  })
  .catch(err => console.error('Erreur chargement footer:', err));
