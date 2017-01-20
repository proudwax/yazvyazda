block('banner').content()(function(ctx) {
    return [
        {
            elem: 'container',
            content: [
                {
                    block: 'row',
                    elem: 'col',
                    elemMods: { sw : 12, mw : 6, lw : 6 },
                    content: [
                        {
                            block: ctx.block,
                            elem: 'title',
                            content: [
                                'Даже сложный сайт должен быть простым и понятным в использовании',
                                // {
                                //     block: 'request-action'
                                // }
                            ]
                        }
                    ]
                },
                {
                    block: 'row',
                    elem: 'col',
                    elemMods: { sw : 12, mw : 6, lw : 6 },
                    content: [
                        {
                            block: ctx.block,
                            elem: 'image',
                            content: [
                                {
                                    block: 'image',
                                    mods: { lazy: true },
                                    url: '/static/images/net.jpg'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
