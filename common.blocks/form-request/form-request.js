modules.define('form-request', ['i-bem-dom', 'functions__throttle', 'request-form', 'input'], function(provide, bemDom, throttle, RequestForm, Input) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                this._domEvents(this._elem('close')).on('click', function(e){
                    e.preventDefault();
                    RequestForm.hide();
                });

                // Так как 'form-request' перезаписывается, value input`ов хранятся в params родительского блока 'request-form'
                this.findChildBlocks(Input).map(function(inputItem) {
                    inputValue = RequestForm.getParams(inputItem.getMod('feild'));
                    inputItem.hasMod('feild') ? inputItem.setVal(inputValue != undefined ? inputValue : '') : null;
                });

                // Если поле с модификатором 'feild' изменилось, в params родительского блока 'request-form' пишем value input`a
                // throttle(this._domEvents(Input).on('change', function(e){
                //     var bemInput = $(e.currentTarget).bem(Input);
                //
                //     bemInput.hasMod('feild') ? RequestForm.setParams(bemInput.getMod('feild'), bemInput.getVal()) : null;
                //     console.log(RequestForm.getAllParams());
                //     // e.target.hasMod('feild') ? RequestForm.setParams(e.target.getMod('feild'), e.target.getVal()) : null;
                // }), 300);

                // Если поле с модификатором 'feild' удалилось через input -> input__clear, в params родительского блока 'request-form' пишем value ''
                // this._domEvents(Input).on('click', function(e){
                //     console.log(e);
                // }, Input);

            }
        }
    }
}
));

});
