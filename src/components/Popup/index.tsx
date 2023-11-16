import "./Popup.css";
interface Props {
  setShowPopup: () => void;
  onFinish: () => void;
}
const Popup: React.FC<Props> = ({ setShowPopup, onFinish }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="flex pb-3 items-center">
          <div className="-ml-1 text-gray-600 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-trash"
              width={32}
              height={32}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={4} y1={7} x2={20} y2={7} />
              <line x1={10} y1={11} x2={10} y2={17} />
              <line x1={14} y1={11} x2={14} y2={17} />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </div>
          <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold pl-2">
            Are you sure?
          </p>
        </div>
        <div className="">
          <button
            className="button-confirm"
            onClick={() => {
              onFinish();
              setShowPopup();
            }}
          >
            Có
          </button>
          <button className="button-cancel" onClick={() => setShowPopup()}>
            Dell
          </button>
        </div>
      </div>
    </div>
  );
};
export default Popup;
