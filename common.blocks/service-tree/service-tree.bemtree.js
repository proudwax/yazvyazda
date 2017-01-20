block('service-tree').content()(function(ctx) {
    return [
        {
            elem: 'container',
            mix: { block: 'row', mods: { 'svam': true } },
            content: [
                {
                    elem: 'title',
                    content: 'Разработка сайтов'
                },
                {
                    elem: 'list',
                    mix: { block: 'row', mods: { 'svam': true } },
                    content: [
                        {
                            elem: 'item',
                            elemMods: { simple: true },
                            mix: { block: 'row', elem: 'col', elemMods: { sw : 12, mw : 4, lw : 4 } },
                            content: [
                                {
                                    elem: 'item-title',
                                    content: 'Визитка'
                                },
                                {
                                    elem: 'item-price',
                                    content: 'от 1 р.'
                                },
                                {
                                    elem: 'item-button',
                                    content: [
                                        {
                                            block: 'request-action',
                                            mods: { view: 'simple' }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            elemMods: { corp: true },
                            mix: { block: 'row', elem: 'col', elemMods: { sw : 12, mw : 4, lw : 4 } },
                            content: [
                                {
                                    elem: 'item-title',
                                    content: 'Корпоративный'
                                },
                                {
                                    elem: 'item-price',
                                    content: 'от 2 р.'
                                },
                                {
                                    elem: 'item-button',
                                    content: [
                                        {
                                            block: 'request-action'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            elemMods: { shop: true },
                            mix: { block: 'row', elem: 'col', elemMods: { sw : 12, mw : 4, lw : 4 } },
                            content: [
                                {
                                    elem: 'item-title',
                                    content: 'Магазин'
                                },
                                {
                                    elem: 'item-price',
                                    content: 'от 3 р.'
                                },
                                {
                                    elem: 'item-button',
                                    content: [
                                        {
                                            block: 'request-action'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
});
