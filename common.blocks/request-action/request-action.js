modules.define('request-action', ['i-bem-dom', 'BEMTREE', 'BEMHTML', 'request-form', 'button'], function(provide, bemDom, BEMTREE, BEMHTML, RequestForm, Button) {

    var oldFlag = '';

provide(bemDom.declBlock(this.name, {
    _setContent: function(flag) {
        // проверка, что бы лишний раз форма не перезаписывалась
        if(oldFlag == flag) return;

        RequestForm.setContent(BEMHTML.apply(BEMTREE.apply({ block: 'form-request', mods: { view: flag ? flag : false } })));
        oldFlag = flag;
    }
}, {
    lazyInit : true,

    onInit : function() {
        this._domEvents(Button).on('click', function(e){
            this._setContent(this.getMod('view'));
            RequestForm.show();
        });
        // this.liveInitOnBlockInsideEvent('click', 'button', function(e){
        // BEMDOM.blocks.button.liveBindTo('click', function() {
        // Button.liveBindTo('click', function() {
        //     RequestForm.show();
        // });
    }
}
));

});
