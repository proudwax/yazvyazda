block('form-request').content()(function(ctx) {
    return [
        {
            elem: 'container',
            content: [
                {
                    elem: 'field',
                    content: [
                        {
                            block: 'input',
                            mods: { theme: 'ya', size: 'l', width: 'available', 'has-clear': true, feild: 'name' },
                            name: 'name',
                            placeholder: 'Введите имя'
                        }
                    ]
                },
                {
                    elem: 'field',
                    content: [
                        {
                            block: 'input',
                            mods: { theme: 'ya', size: 'l', width: 'available', 'has-clear': true, feild: 'email' },
                            name: 'email',
                            placeholder: 'Введите email'
                        }
                    ]
                },
                {
                    elem: 'field',
                    content: [
                        {
                            block : 'checkbox',
                            mods : { theme : 'islands', size : 'l' },
                            name: 'islands',
                            val: 'greate',
                            text : 'Разработка сайта'
                        }
                    ]
                },
                {
                    elem: 'field',
                    content: [
                        {
                            block : 'checkbox',
                            mods : { theme : 'islands', size : 'l' },
                            name: 'islands',
                            val: 'support',
                            text : 'Поддержка сайта'
                        }
                    ]
                },
                {
                    elem: 'field',
                    content: [
                        {
                            block : 'button',
                            mods : { theme : 'ya', size : 'l', type : 'submit' },
                            text : 'Отправить'
                        }
                    ]
                }
            ]
        }
    ]
});
