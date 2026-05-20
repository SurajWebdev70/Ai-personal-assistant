import actionImage from "../assets/image5.png";

const microphoneIcon = "/studio-microphone-cut-file-retro-260nw-2465553867.webp";
const pastMeetingImage = "/image3.png";
const settingsImage = "/img4.png";
const DashboardImage = "/image6.png";

function Sidebar({ isOpen, onToggle }) {
  return (
    <aside className={`sidebar${isOpen ? "" : " sidebar--collapsed"}`}>
      <div className="sidebar__top">
        <div className="sidebar__brand">
          <img
            src={microphoneIcon}
            alt="Microphone"
            className="sidebar__brand-image"
          />
          <h1 className="sidebar__title">AI Meeting Assistant</h1>
        </div>
        <button
          type="button"
          className="sidebar__toggle"
          onClick={onToggle}
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          aria-expanded={isOpen}
        >
          &#9776;
        </button>
      </div>

      <ul className="sidebar__list">
        <li className="sidebar__item sidebar__item--with-icon">
          <button type="button" className="sidebar__item-button" aria-label="Past meeting">
            <img
              src={pastMeetingImage}
              alt=""
              aria-hidden="true"
              className="sidebar__item-icon"
            />
            <span className="sidebar__label">Past Meeting</span>
          </button>
        </li>
        <li className="sidebar__item sidebar__item--with-icon">
          <button
            type="button"
            className="sidebar__item-button"
            aria-label="Action Items"
          >
            <img
              src={actionImage}
              alt=""
              aria-hidden="true"
              className="sidebar__item-icon"
            />
            <span className="sidebar__label">Action Items</span>
          </button>
        </li>
        <li className="sidebar__item sidebar__item--with-icon">
          <button type="button" className="sidebar__item-button" aria-label="Sitting">
            <img
              src={settingsImage}
              alt=""
              aria-hidden="true"
              className="sidebar__item-icon"
            />
            <span className="sidebar__label">Settings</span>
          </button>
        </li>
        <li className="sidebar__item sidebar__item--with-icon sidebar__item--active">
          <button
            type="button"
            className="sidebar__item-button"
            aria-label="Dashboard"
          >
            <img
              src={DashboardImage}
              alt=""
              aria-hidden="true"
              className="sidebar__item-icon"
            />
            <span className="sidebar__label">Dashboard</span>
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
