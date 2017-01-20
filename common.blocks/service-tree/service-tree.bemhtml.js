block('service-tree')(
    elem('item')(
        content()(function(){
            return [
                applyNext(),
                // {
                //     elem: 'item-button',
                //     content: [
                //         {
                //             block: 'request-action'
                //         }
                //     ]
                // }
            ]
        })
    )
    // elem('container')(
    //     content()(function(){
    //         return {
    //             elem: 'list',
    //             content: applyNext()
    //         };
    //     })
    // ),
    //
    // elem('list')(
    //     tag()('ul')
    // ),
    //
    // elem('item')(
    //     tag()('li')
    // )
)
