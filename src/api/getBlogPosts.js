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
        postId: elem.sys.id,
        title: elem.fields.title,
        content: elem.fields.content.replace(/\u21b5+/g, '\n').substring(0, 320).concat('...'),
        slug: elem.fields.slug,
        publishDate: elem.fields.publishDate,
        unixTime: Date.parse(elem.fields.publishDate)
      };
    });
    return posts;
  })
  .catch((err) => {
    return err;
  });

})();

export default call
