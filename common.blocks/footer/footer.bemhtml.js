block('footer')(
    elem('container')(
        mix()({ block: 'row', mods: { 'svam': true } })
    ),

    content()(function(){
      return applyNext();
    })
)
