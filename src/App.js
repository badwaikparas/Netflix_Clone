import './App.css';
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
