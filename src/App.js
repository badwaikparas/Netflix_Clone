import './Css/highLightButtons.css'
import './Css/nmhp-reskin.css'
import './Css/nmhp.css'
import Footer from './Header/Footer';
import HeaderOut from './Header/HeaderOut';
import Screens from './Screen/Screens';

function App() {
  return (
    <div id="appMountPoint">
      <div class="basicLayout">
        <div class="">
          <div data-uia="loc" lang="en" dir="ltr">
            <HeaderOut />
            <Screens />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
