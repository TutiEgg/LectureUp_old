export async function getPosts() {
    console.log("get Post in post");
    return await api.posts
      .browse({
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });
  }

// Lese nur ein Post mit posts.read()
export async function getSinglePost(postSlug) {
  console.log("get singlepost in post");
    return await api.posts
      .read({
        slug: postSlug
      })
      .catch(err => {
        console.error(err);
      });
}