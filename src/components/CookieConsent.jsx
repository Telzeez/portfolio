import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "portfolio_cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => async () => {
    if (typeof window === "undefined") return;

    const saved = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (saved !== "true") {
      await setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner__panel">
        <p className="cookie-banner__text">
          We use cookies to improve your experience, personalize content, and
          analyze traffic. By continuing to browse, you agree to our use of
          cookies.
        </p>
        <div className="cookie-banner__actions">
          <button className="btn-primary btn-cookie" onClick={acceptCookies}>
            Accept cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
