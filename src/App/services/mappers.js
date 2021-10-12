export const mapPosts = response =>
  response.map(post => ({
    id: post.id,
    image: post.image,
    author: {
      firstName: post.owner.firstName,
      lastName: post.owner.lastName,
      avatar: post.owner.picture,
    },
    text: post.text,
    publishDate: new Date(post.publishDate).toLocaleDateString(),
  }));
