block('request-action')(
    js()(true),

    content()(function(ctx) {
        return [
            {
                block: 'button',
                mods: { theme: 'ya', size: 'm', view: 'action', type: 'link' },
                text: 'Заполнить заявку'
            }
        ];
    })
)
