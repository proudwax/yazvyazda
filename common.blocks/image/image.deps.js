([
    {
        mustDeps: [
			{ block: 'i-bem-dom' }
		],
		shouldDeps: [
			{ block: 'spin', mods: { theme: 'islands', size: 'xl', visible: true } },
			{ block: 'functions', elems: ['throttle'] }
		]
    },
    {
        tech: 'js',
        mustDeps: [
			{ block: 'spin', tech: 'bemhtml' }
        ]
    }
])
