import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/footer"
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function App() {

    const currentPath = window.location.pathname;
    const navigate = useNavigate();

    useEffect(() => {
        if (currentPath === '/') {
            navigate("/home");
        }
    }, [currentPath]);

    return (
        <Container>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    )
}