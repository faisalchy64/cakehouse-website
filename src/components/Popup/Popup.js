import "./Popup.css";

function Popup({ handleClose }) {
    return (
        <div className="popup">
            <span
                onClick={handleClose}
                className="material-icons-outlined close"
            >
                highlight_off
            </span>
            <h1>You Can't Add More Than Four!</h1>
        </div>
    );
}

export default Popup;
