import Header from "@components/Header"
import Home from "@components/Home"
import Movie from "@components/Movie"
import NotFound from "@components/NotFound"
import Login from "@components/Login"
import UserProvider from "src/context"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "@components/Footer"

function App() {
    return (
        <Router>
            <UserProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/:movieId" element={<Movie />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                <Footer />
            </UserProvider>
        </Router>
    )
}

export default App
