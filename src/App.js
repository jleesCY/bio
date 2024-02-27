import {isMobile} from 'react-device-detect';
import DesktopMain from './components/DesktopMain';

export default function App() {
    // render mobile view
    if (isMobile) {

    }
    // render desktop view
    else {
        return (
            <DesktopMain></DesktopMain>
        )
    }
}
