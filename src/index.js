import 'bootstrap/js/dist/collapse';
import '../scss/index.scss';
import '../asset/images/logo.png';
import '../asset/images/menu.gif';
// Close navbar menu on mobile
$('a.nav-link').on('click', function() {
  $('button.navbar-toggler').trigger('click');
});

// copyright
const date = new Date();
$('footer p').html(function(index, oldStr) {
  return oldStr.replace(/\d{4}/, date.getFullYear());
});
