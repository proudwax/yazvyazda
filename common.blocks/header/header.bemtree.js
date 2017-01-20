block('header').content()(function(ctx) {
    return [
        {
            elem: 'container',
            mix: { block: 'row', mods: { 'svam': true } },
            content: [
                {
                    block: 'sticky',
                    mods: { 'scroll-up': true },
                    panelMix: { block: 'row', mods: { 'svam': true } },
                    content: [
                        {
                            block: 'row',
                            elem: 'col',
                            content: [
                                {
                                    block: ctx.block,
                                    elem: 'logo',
                                    content: [
                                        {
                                            block: 'logo'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'row',
                            elem: 'col',
                            elemMods: { s: true }
                        },
                        {
                            block: 'row',
                            elem: 'col',
                            content: [
                                {
                                    block: ctx.block,
                                    elem: 'request',
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
