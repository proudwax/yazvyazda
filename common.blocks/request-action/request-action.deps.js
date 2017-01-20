([
    {
        mustDeps: { block: 'i-bem-dom' },
        shouldDeps: [
            { block: 'button', mods : { theme: 'ya', size: 'm', view: 'action', type: 'link' } },
            { block: 'request-form' }
        ]
    },
    {
        tech: 'js',
        mustDeps: [
			{ block: 'form-request', mods: { view: 'simple' }, tech: 'bemhtml' },
			{ block: 'form-request', mods: { view: 'simple' }, tech: 'bemtree' }
        ]
    }
])
