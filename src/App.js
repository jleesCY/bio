import {isMobile} from 'react-device-detect';
import Main from './components/Main';

export default function App() {
    // render mobile view
    if (isMobile) {
        return (
            <Main></Main>
        )
    }
    // render desktop view
    else {
        return (
            <Main></Main>
        )
    }
}
