modules.define('sticky', ['i-bem-dom', 'jquery', 'BEMHTML', 'functions__throttle'],
function(provide, bemDom, $, BEMHTML, throttle) {


provide(bemDom.declBlock(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
				var _this = this;

				this._initPropertes();

				this.setMod('fixed', bemDom.win.scrollTop() >= this._offsetTop);

				throttle(this._scrollWin(), 300);
				throttle(this._resizeWin(), 300);
            }
        },

		'fixed': {
			true: function() {
				this._elem('container').setMod('shadow', true);
			},

			'':  function() {
				this._elem('container').setMod('shadow', false);
			}
		}
	},

	_initPropertes: function(){
		this._height = this.domElem.height();
		this._offsetTop = this.domElem.offset().top;
		this._top = bemDom.win.scrollTop();

		this._elem('backing').domElem.css('height', this._height);
	},

	_scrollWin: function() {
		this._domEvents(bemDom.win).on('scroll', function(e) {
			this.setMod('fixed', bemDom.win.scrollTop() > this._offsetTop && bemDom.win.scrollTop() <= this._top);
			this.setMod('has-animation', bemDom.win.scrollTop() > this._offsetTop);
			this._top = bemDom.win.scrollTop();
		});
	},

	_resizeWin: function() {
		this._domEvents(bemDom.win).on('resize', function(e) {
			this._initPropertes()
		});
	}
}
));

});
