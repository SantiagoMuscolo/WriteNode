import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const PostCard = ({post, toggle, setToggle}) => {
    const { id,  title, description, author} = post;

    async function handleDelete(){
        const document = doc(db, 'posts', id)
        await deleteDoc(document)
        setToggle(!toggle)
    }

    return (
        <div className="card">
            <p className="title">{title}</p>
            <p className="description">{description}</p>
            <p className="control">
                <span className="author">{author}</span>
                <span onClick={handleDelete} className="delete"><i className="bi bi-trash3"></i></span>
            </p>
        </div>
    )
}
