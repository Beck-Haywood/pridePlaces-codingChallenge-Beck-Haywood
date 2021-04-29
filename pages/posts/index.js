import getPosts from '../api'
import PostModal from '../modal/index'
import {useEffect, useState} from 'react'
export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(async () => {
        /** Runs on page load calls api function getPosts,
         * then resolves all Promises and sets posts state to posts. */
        const data = await getPosts()
        const posts = await Promise.all(data.props.posts)
        setPosts(posts)
    }, []);

  return (
    <div className="posts">
        {/* If posts exist map over them diplaying a PostModal for each, pass data as props. */}
        {posts ? posts.map((post) => {
            console.log(post.user)
            return (
                <PostModal 
                    title={post.title}
                    body={post.body}
                    name={post.user.name}
                    catchPhrase={post.user.catchPhrase}
                />
            )
        }) : null}
    </div>
  )
}
