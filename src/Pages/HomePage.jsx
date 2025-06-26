import About from "../components/About";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import LogInPage from "./LogInPage";

export default function HomePage(){
    return(
        <>
        <Banner />
        <About />
        <Gallery />
        <Location />
        </>
    )
}