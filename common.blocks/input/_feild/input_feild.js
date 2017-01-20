modules.define('input', ['i-bem-dom', 'functions__throttle', 'request-form'], function(provide, bemDom, throttle, RequestForm, Input) {

provide(Input.declMod({ modName: 'feild', modVal: '*' }, {
    onSetMod: {
        'js': {
            'inited': function() {
                // https://ru.bem.info/platform/i-bem/context/#Вспомогательные-свойства
                // __base — для вызова реализации одноимённого метода из базового класса, от которого наследуется данный (super call).
                this.__base.apply(this, arguments);

                // Если поле с модификатором 'feild' изменилось, в params родительского блока 'request-form' пишем value input`a
                throttle(this._domEvents().on('change', function(e){
                    RequestForm.setParams(this.getMod('feild'), this.getVal());
                }), 300);

                // Если поле с модификатором 'feild' удалилось через input -> input__clear, в params родительского блока 'request-form' пишем value ''
                this._domEvents(this._elem('clear')).on('click', function(e){
                    RequestForm.setParams(this.getMod('feild'), '');
                    this._domEvents().un('click');
                });
            }
        }
    }
}));

});
