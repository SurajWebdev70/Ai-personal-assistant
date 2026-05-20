import { useEffect, useRef, useState } from "react";

function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    function handlePointerDown(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="app-header">
      <div className="app-header__content">
        <h3 className="app-header__title">Live Meeting Assistant</h3>
      </div>

      <div className="app-header__right">
        <div className="app-header__actions">
          <button type="button" className="app-header__button app-header__button--start">
            Start recording
          </button>
          <button type="button" className="app-header__button app-header__button--stop">
            Stop recording
          </button>
        </div>

        <div
          ref={profileRef}
          className={`app-header__profile-wrap${isProfileOpen ? " app-header__profile-wrap--open" : ""}`}
        >
          <button
            type="button"
            className="app-header__profile"
            onClick={() => setIsProfileOpen((current) => !current)}
            aria-haspopup="dialog"
            aria-expanded={isProfileOpen}
            aria-label="Open profile"
          >
            <div className="app-header__avatar">JBM</div>
          </button>

          {isProfileOpen && (
            <div className="app-header__profile-menu" role="dialog" aria-label="Profile details">
              <div className="app-header__profile-menu-top">
                <div className="app-header__avatar app-header__avatar--large">JBM</div>
                <div>
                  <p className="app-header__profile-name">JBMgroup</p>
                  <p className="app-header__profile-email">JBMgroup@gmail.com</p>
                </div>
              </div>

              <div className="app-header__profile-menu-list">
                <button type="button" className="app-header__profile-menu-item">
                  Sign In  
                </button>
                <button type="button" className="app-header__profile-menu-item app-header__profile-menu-item--danger">
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
