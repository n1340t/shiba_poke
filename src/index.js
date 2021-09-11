import '../scss/index.scss';
import '../asset/images/logo.png';
import img1 from '../asset/images/coming_soon.png';
console.log(img1);
// Close navbar menu on mobile
$('a.nav-link').on('click', function() {
  $('button.navbar-toggler').trigger('click');
});
