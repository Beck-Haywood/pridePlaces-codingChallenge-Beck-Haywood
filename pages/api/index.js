// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getPosts() {
  /** This fetches all posts from jsonplaceholder, and then maps over the result,
   *  for each post it calls getUserData with id to fetch the authors name and catchPhrase */
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await res.json()
  const posts = await data.map(async (post)=> {
    return {'title': post.title, 'body': post.body, 'user': await getUserData(post.userId).then((user)=>user)}
  })

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { posts }
  }
}

export async function getUserData(id) {
  /** This function takes a user ID and returns a user object with name and catchPhrase */
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()
  const user = {'name': data.name, 'catchPhrase': data.company.catchPhrase}

  if (!data) {
    return {
      notFound: true,
    }
  }
  return user // will be passed to each post object in the posts list.
}