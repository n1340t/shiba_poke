import '../scss/index.scss';
// Close navbar menu on mobile
$('a.nav-link').on('click', function() {
  $('button.navbar-toggler').trigger('click');
});
