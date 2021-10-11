export const mapPosts = response =>
  response.map(post => ({
    id: post.id,
    image: post.image,
    owner: {
      firstName: post.owner.firstName,
      lastName: post.owner.lastName,
      avatar: post.owner.picture,
    },
    text: post.text,
  }));
