import './App.css'
import {Route, Routes} from "react-router-dom";
import PostList from "./Pages/PostList/PostList";
import DeletePostConfirmation from "./Pages/DeletePostConfirmation/DeletePostConfirmation.js";
import EditPostForm from "./Pages/EditPostForm/EditPostForm";
import CreatePostForm from "./Pages/CreatePostForm/CreatePostForm.js";
import Header from "./components/Header.js";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<PostList />} />
                <Route path='delete' element={<DeletePostConfirmation />} />
                <Route path='edit' element={<EditPostForm />} />
                <Route path='create' element={<CreatePostForm/>} />


            </Routes>
        </>
    )
}

export default App