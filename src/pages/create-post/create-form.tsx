import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../conifg/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
    title: string;
    description: string;
}

export const CreateForm = () => {

    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("You must add a title."),
        description: yup.string().required("You must add a description."),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateFormData>({
        resolver: yupResolver(schema),
    });

    const postsRef = collection(db, "posts");

    const onCreatePost = async (data: CreateFormData) => {
        await addDoc(postsRef, {
            ...data,
            username: user?.displayName,
            userId: user?.uid,
        });

        navigate("/");
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onCreatePost)}>
                <input placeholder="Title..." {...register("title")} />
                <p style={{ color: "red" }}> {errors.title?.message}</p>
                <textarea placeholder="Description..." {...register("description")} />
                <p style={{ color: "red" }}> {errors.description?.message}</p>
                <input type="submit" className="submitForm" />
            </form>
        </div>
    )
}