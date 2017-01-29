// modules.define('recaptcha', ['loader_type_js'], function(provide, loader) {
//
//     loader(
//         'https://www.google.com/recaptcha/api.js',
//         // 'https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.min.js',
//         function() { provide(reCAPTCHA) });
//
// });

modules.define('recaptcha', ['i-bem-dom', 'loader_type_js'], function(provide, bemDom, loader, reCAPTCHA) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                loader(
                        'https://www.google.com/recaptcha/api.js',
                        function() { return reCAPTCHA; });
            }
        }
    }
}));

});
