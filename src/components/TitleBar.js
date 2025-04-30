
import MinusIcon from '../images/minusIcon.svg'
import CloseIcon from '../images/closeIcon.svg'

/* 
    suivre ATTENTIVEMENT cette video:
    https://www.youtube.com/watch?v=jzmen0gYQrM
 */

export default function TitleBar() {
    const { remote } = require('electron')

    function minusWindow() {
        remote.minimize();
    }
    function closeWindow() {
        window.close()
    }

    return(
        <div id="titleBar">
            <div> Mots Random </div>
            <div className='titlebar-icons'>
                <img id="minus" src={MinusIcon} alt="minus icon" onClick={minusWindow} />
                <img id="close" src={CloseIcon} alt="close icon" onClick={closeWindow} />
            </div>
        </div>
    )
}