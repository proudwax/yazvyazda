modules.define('image', ['i-bem-dom', 'jquery', 'BEMHTML', 'functions__throttle'], function(provide, bemDom, $, BEMHTML, throttle) {

provide(bemDom.declBlock(this.name, {
	onSetMod : {
		'js': {
            'inited': function(){
				// https://ru.bem.info/platform/i-bem/context/#Вспомогательные-свойства
                // __base — для вызова реализации одноимённого метода из базового класса, от которого наследуется данный (super call).
                this.__base.apply(this, arguments);

				this._offsetShow = this.domElem.offset().top - bemDom.win.height();

				this
					._onLoad();

				if(bemDom.win.scrollTop() < this._offsetShow){
					throttle(this._domEvents(bemDom.win).on('scroll resize', function(e){
						this._offsetShow = this.domElem.offset().top - bemDom.win.height();
						this._onLoad();
						console.log(this._offsetShow);
					}), 300);
				}
            }
        },

		'lazy': {
			// не работает, пока не разобрался почему
			true : function(){
				throttle(this._domEvents(bemDom.win).on('', function(e){
					this._offsetShow = this.domElem.offset().top - bemDom.win.height();
					console.log(this._offsetShow);
				}), 300);
			},

			'': function () {
				this._domEvents(bemDom.win).un('scroll resize');
			}
		},

		'loading': {
			true: function(){
				this._spin = bemDom.append(this.domElem.parent(), BEMHTML.apply(
					{
						block: 'spin',
						mix: { block: 'image', mods: { 'spin': true } },
						mods: { theme: 'islands', size: 'xl', visible: true }
					}
				));

				this
					.setMod('loaded')
					.domElem.attr('src', this.params.src);
			}
		},

		'loaded': {
			true: function(){
				var _this = this;

				this._domEvents().on('load', function() {
					setTimeout(function(){
						_this
							.delMod('loading')
							.delMod('loaded')
							._spin.remove();
					}, 300);
				});
			}
		}
	},

	_onLoad: function(){
		if(bemDom.win.scrollTop() >= this._offsetShow){
			this.setMod('loading')
				.delMod('lazy')
				// ._domEvents(bemDom.win).un('scroll resize');
		}
	},

	getDefaultParams: function() {

	}
}
));

});
