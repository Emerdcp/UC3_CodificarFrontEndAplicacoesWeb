import { Outlet, Link } from "react-router-dom";
import Logo from "../components/Logo/Logo";
import Musica from "../components/Musica/Musica";
import Card from "../components/Card/Card";
import Video from "../components/Video/Video"; 


function Layout() {
    return (
        <>
            <div className="container">
                <Logo />
            </div>
                <Musica />
            <div className='lista'>
               <Card />
            </div>
            <div>
                <Video />
            </div>
        </>
    )
}

export default Layout;

