import * as contentful from 'contentful';

var client = contentful.createClient({
  space: 'swfnnffmifl3',
  accessToken: '6949165c19ded349879c8e6909191372b2a83a053bb552df0306cf16c8965805'
})

export const fetchData = type => {
  return client.getEntries({content_type: type})
    .then(entries => {
      let result = []
      entries.items.forEach(entry => {
        if(entry.fields) {
          result.push(entry.fields)
        }
      })
      return result
    })
}

export const fetchAssets = () => {
    return client.getAssets()
        .then(entries => {
            let result = []
            entries.items.forEach(entry => {
            if(entry.fields) {
                result.push(entry.fields)
            }
            })
            return result
        })
}