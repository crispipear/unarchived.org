import * as contentful from 'contentful';
import contentfulConfig from './contentfulKey';

var client = contentful.createClient(contentfulConfig)

export const fetchData = type => {
  return client.getEntries({content_type: type})
    .then(entries => {
      let result = []
      entries.items.forEach(entry => {
        if(entry.fields) {
          result.push({
            ...entry.fields,
            createdAt: entry.sys.createdAt
          })
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