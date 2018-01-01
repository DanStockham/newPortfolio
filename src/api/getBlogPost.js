var contentful = require('contentful');


const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

export default function getBlogPost(slug) {
  return client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug
  }).then(function(entry) {
      console.log(entry.items[0])
    return {
        title: entry.items[0].fields.title,
        content: entry.items[0].fields.content,
        publishDate: entry.items[0].fields.publishDate
      };
  })
  .catch((err) => {
    console.log(err);
    return err;
  });

};


