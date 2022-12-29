import React, { useEffect, useState } from 'react';
import cookie from 'cookie-though';
import { Config, CookiePreferences } from 'cookie-though/dist/types/types';
import config from '../../ux/consent.json';
import styles from './consent.module.scss';
import Cookie from './Cookie';

const cookieIsAccepted = (preferences: CookiePreferences, id: string): boolean => {
  const cookieOption = preferences.cookieOptions.find((opt) => opt.id === id);
  if (!cookieOption) {
    return false;
  }
  return cookieOption.isEnabled;
};

const Consent = () => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  useEffect(() => {
    if (client) {
      const { init, onPreferencesChanged } = cookie;
      init(config as Config);

      onPreferencesChanged((preferences: CookiePreferences) => {
        const trackStats = cookieIsAccepted(preferences, 'statistics');
        if (trackStats) {
          // TODO: remove hide and use the inputs for clarity
          setClient(true);
        }
      });
    }
  }, [client]);

  const viewConsent = () => {
    const { show } = cookie;
    show();
  };

  return (
    <div className={styles.consent_container}>
      <Cookie viewConsent={viewConsent} />
    </div>
  );
};

export default Consent;
