
import MinusIcon from '../images/minusIcon.svg'
import CloseIcon from '../images/closeIcon.svg'

/* 
    suivre ATTENTIVEMENT cette video:
    https://www.youtube.com/watch?v=jzmen0gYQrM
 */

export default function TitleBar() {

    function minusWindow() {
        app.window.close();
    }

    function closeWindow() {
        app.window.minimize();
    }

    return(
        <div id="titleBar">
            <div> Mots Random </div>
            <div className='titlebar-icons'>
                <img id="minimize" src={MinusIcon} alt="minus icon" onClick={minusWindow} />
                <img id="close-app" src={CloseIcon} alt="close icon" onClick={closeWindow} />
            </div>
        </div>
    )
}