import Header from "@/components/Header";
import MobileMenu from "@/components/mobile-menu";

export const metadata = {
    title: "Home || Homez",
};

const Home = () => {
    return (
        <div>
            <Header />

            <MobileMenu />

            Home
        </div>
    )
}

export default Home