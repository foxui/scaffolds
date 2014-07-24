fox.navigator.defaultTransition = 'hslide';

/*
if (/android/i.test(navigator.userAgent)) {
    fox.navigator.disabled = true;
}
*/

window.addEventListener('HTMLImportsLoaded', function(e) {
    document.body.removeAttribute('unresolved');
});


$(function() {
    FastClick.attach(document.body);
});
