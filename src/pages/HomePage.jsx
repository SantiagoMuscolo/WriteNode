import { useEffect, useState, useRef } from "react"
import { getDocs, collection } from "firebase/firestore"
import { db } from "../firebase/config"
import { PostCard, SkeletonCard } from "../components"
import { useTitle } from '../hooks/useTitle'

export const HomePage = () => {
    const [posts, setPosts] = useState(new Array(2).fill(false))
    const [toggle, setToggle] = useState(false)
    const postRef = useRef(collection(db, 'posts'))
    useTitle('Home')

    useEffect(() => {
        async function getPosts() {
            const data = await getDocs(postRef.current);
            setPosts(data.docs.map((document) => ({ ...document.data(), id: document.id })));
        }
        getPosts();
    }, [postRef, toggle]);

    return (
        <section>
            {posts && posts.map((post, index) => (
                post ? (
                    <PostCard post={post} key={post.id} toggle={toggle} setToggle={setToggle} />
                ) : (
                    <SkeletonCard key={index} />
                )

            ))}

        </section>
    )
}
