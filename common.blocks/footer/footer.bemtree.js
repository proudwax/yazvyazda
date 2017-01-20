block('footer').content()(function(ctx) {

    var year = new Date();

    return [
        {
            elem: 'container',
            content: [
                {
                    block: 'row',
                    elem: 'col',
                    content: [
                        {
                            block: ctx.block,
                            elem: 'copyright',
                            content: '© ' + year.getFullYear() + ' Все права защищены.'
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
                            elem: 'logo',
                            content: [
                                {
                                    block: 'logo',
                                    mods: { light: true }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
});
