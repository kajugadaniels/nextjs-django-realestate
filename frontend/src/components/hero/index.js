import Funfact from "../Funfact";
import AdvanceFilterModal from "../advance-filter";
import HeroContent from "./HeroContent";

const Hero = () => {
    return (
        <>
            <div className="inner-banner-style7 mb30-lg">
                <h2 className="hero-title mb30 animate-up-1">
                    Discover a place you&apos;ll <br className="d-none d-lg-block" /> love
                    to live
                </h2>
                <HeroContent />
                <div className="d-flex animate-up-3">
                    <Funfact />
                </div>
            </div>

            <div className="advance-feature-modal">
                <div
                    className="modal fade"
                    id="advanceSeachModal"
                    tabIndex={-1}
                    aria-labelledby="advanceSeachModalLabel"
                    aria-hidden="true"
                >
                    <AdvanceFilterModal />
                </div>
            </div>
        </>
    );
};

export default Hero;
