import AOS from 'aos';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DentalCare from './component/Dental_Care/DentalCare';
import AboutUs from './component/Home_about/AboutUs';
import MainContact from './component/Home_Contact/MainContact';
import Mainfooter from './component/Home_Footer/Mainfooter';
import HomeHeader from './component/Home_Header/HomeHeader';
import Review from './component/Home_Review/Review';
import Services from './component/Home_Services/Services';

function App() {
    AOS.init();
    return (
        <div>
            <HomeHeader />
            <Services />
            <DentalCare />
            <AboutUs />
            <Review />
            <MainContact />
            <Mainfooter />
        </div>
    );
}

export default App;
