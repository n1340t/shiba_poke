import '../scss/index.scss';
// import '../asset/images/logo.png';
// import '../asset/images/coming_soon.png';

// Close navbar menu on mobile
$('a.nav-link').on('click', function() {
  $('button.navbar-toggler').trigger('click');
});
