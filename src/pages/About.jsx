
import Company from "../components/about/Company";
import Header from "../components/about/Header";
import History from "../components/about/History";
import Review from "../components/about/Review";
import Services from "../components/about/Services";
import Team from "../components/about/Team";
import Value from "../components/about/Value";



const About = () => {
    return (
        <div>
            <Header/>
            <History />
            <Value />
            <Company />
            <Services/>
            <Team />
            <Review />

        </div>
    );
};

export default About;