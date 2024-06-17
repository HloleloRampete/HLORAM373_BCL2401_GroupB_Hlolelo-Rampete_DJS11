import { useSelector } from "react-redux"
import Header from "../components/CommonComponents/Header"

export default function Profile() {
    const user = useSelector((state) => state.user.user)
    console.log("My User", user)
    return (
        <div>
            <Header />
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.uid}</h1>
        </div>
    )
}