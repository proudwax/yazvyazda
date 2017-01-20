block('request-form')(
    js()(true),

    content()(function() {
        return [
            {
                block: 'modal',
                mods: { autoclosable: true, theme: 'islands' },
                content: applyNext()
            }
        ];
    })

)
