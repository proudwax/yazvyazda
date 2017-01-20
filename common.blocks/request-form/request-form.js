modules.define('request-form', ['i-bem-dom', 'modal'], function(provide, bemDom, Modal) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            inited: function() {
                // реализуем такой себе синглтон — если модал уже есть, то больше ничего не делаем
                if (this.__self.getModal()) return;

                this.__self._modal = this.findChildBlock(Modal);
            }
        }
    }
},
{
    show: function() {
        this.getModal()
            .setMod('visible');

        return this;
    },
    hide: function() {
        this.getModal().delMod('visible');

        return this;
    },
    toggle: function() {
        this.getModal().toggleMod('visible');

        return this;
    },
    setContent: function(content){
        this.getModal().setContent(content);

        return this;
    },
    getModal: function() {
        return this._modal;
    },

    getAllParams: function() {
        return this.getModal().params;
    },
    getParams: function(key) {
        return this.getModal().params[key];
    },
    setParams: function(key, value) {
        this.getModal().params[key] = value;

        return this.getModal().params;
    }
}));

});
