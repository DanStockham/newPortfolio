var contentful = require('contentful');


const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

const call = (function() {
  return client.getEntries().then(function(entries) {
    const projects = entries.items.map(function(elem) {
      return {
        title: elem.fields.title,
        description: elem.fields.description,
        link: elem.fields.link,
        imageUrl: elem.fields.image.fields.file.url
      };
    });
    return projects;
  })
  .catch(console.error);

})();

export default call
