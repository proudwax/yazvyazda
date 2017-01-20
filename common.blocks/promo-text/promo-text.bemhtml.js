block('promo-text')(
    elem('container')(
        mix()({ block: 'row', mods: { 'svam': true } }),

        content()(function(){
            return [
                {
                    elem: 'content',
                    content: applyNext()
                }
            ];
        })
    )
)
