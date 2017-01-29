block('form-request')(
    js()(true),
    tag()('form'),

    content()(function(ctx){
        return [
            {
                elem: 'close',
            },
            applyNext(),
            {
                elem: 'recaptcha',
                content: {
                    block: 'recaptcha',
                    content: ''
                }
            }
        ]
    }),

    elem('close')(
        tag()('a'),
        attrs()({
            href: '#',
            title: 'Закрыть'
        })
    )
)
