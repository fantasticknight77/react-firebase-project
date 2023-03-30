import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../conifg/firebase";
import { Post, IPost } from "./post";

export const Main = () => {

    const [postsList, setPostsList] = useState<IPost[] | null>(null);

    const postsRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsRef);
            setPostsList(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as IPost[]
            );
        };
        getPosts();
    }, []);

    return (
        <div>
            {postsList?.map((post) => (
                <Post post={post} />
            ))}
        </div>
    );
};