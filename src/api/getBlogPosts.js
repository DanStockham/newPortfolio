var contentful = require('contentful');


const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

const call = (function() {
  return client.getEntries({
    content_type: 'blogPost'
  }).then(function(entries) {
    const posts = entries.items.map(function(elem) {
      return {
        postId: elem.fields.postId,
        title: elem.fields.title,
        content: elem.fields.content.replace(/\u21b5+/g, '\n'),
        publishDate: elem.fields.publishDate,
        tags: elem.fields.tags
      };
    });
    return posts;
  })
  .catch((err) => {
    console.log(err);
  });

})();

export default call
