import Header from "@/components/Header";
import Hero from "@/components/hero";
import HeroSlide from "@/components/hero/HeroSlide";
import MobileMenu from "@/components/mobile-menu";

export const metadata = {
    title: "Home || Homez",
};

const Home = () => {
    return (
        <div>
            <Header />

            <MobileMenu />

            <section className="home-banner-style7 pt0 pb30 bgc-white">
                <div className="home-style7 maxw1600 bdrs24 position-relative mx-auto mx10-lg">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-6">
                                <Hero />
                            </div>
                            {/* End .col-xl-8 */}

                            <div className="col-xl-6">
                                <div className="home7-main-slider">
                                    <HeroSlide />
                                </div>
                            </div>
                            {/* End .col-xl-4 */}
                        </div>
                    </div>
                    {/* End .container */}
                </div>
            </section>
        </div>
    )
}

export default Home