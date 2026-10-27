'use client';

import { useState } from 'react';

// Verified existing backend pages, not invented authentication API endpoints.
const officialSignIn = 'https://www.acrepgh.org/Authenticate/Login.aspx';
const officialCreateAccount = 'https://www.acrepgh.org/MyAccount/MyAccount.aspx';

function UserIcon() {
  return <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="7.5" r="3.25" stroke="currentColor" strokeWidth="1.6" /><path d="M5.5 20v-2.5a6.5 6.5 0 0 1 13 0V20h-13Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>;
}

function EyeIcon({ visible }) {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2.75" stroke="currentColor" strokeWidth="1.6" />
      {visible && <path d="M4 3.5 20 20.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />}
    </svg>
  );
}

function ArrowIcon() {
  return <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function LoginPanel() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <div className="access-panel">
      <div className="access-panel-heading"><span className="access-user-icon"><UserIcon /></span><p className="eyebrow">MEMBER ACCESS</p></div>
      <h2 id="member-access-heading">Good to have you back.</h2>
      <p className="access-description">Sign in to access member content and resources.</p>

      <div className="access-fields" role="group" aria-label="Sign-in form design preview" aria-describedby="access-preview-note">
        <label htmlFor="access-email">Email address</label>
        <input
          id="access-email"
          type="email"
          value="member@example.com"
          readOnly
          autoComplete="off"
          spellCheck={false}
          aria-describedby="access-preview-note"
        />

        <label htmlFor="access-password" className="access-password-label">Password</label>
        <div className="access-password-wrap">
          <input
            id="access-password"
            type={showPassword ? 'text' : 'password'}
            value="PreviewOnly!"
            readOnly
            autoComplete="off"
            aria-describedby="access-preview-note"
          />
          <button
            className="access-eye"
            type="button"
            aria-label={showPassword ? 'Hide sample password' : 'Show sample password'}
            aria-pressed={showPassword}
            aria-controls="access-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            <EyeIcon visible={showPassword} />
          </button>
        </div>

        <div className="access-options">
          <label className="access-remember"><input type="checkbox" checked={remember} onChange={event => setRemember(event.target.checked)} /><span>Remember me</span></label>
          <a href={officialSignIn} target="_blank" rel="noopener noreferrer">Forgot password?</a>
        </div>

        <a className="access-submit" href={officialSignIn} target="_blank" rel="noopener noreferrer" aria-label="Sign in on the official ACRE website, opens a new tab">
          Sign in <ArrowIcon />
        </a>
      </div>

      <div className="access-create"><span>New to ACRE?</span><a href={officialCreateAccount} target="_blank" rel="noopener noreferrer">Create an account <ArrowIcon /></a></div>
      <div className="access-notice" id="access-preview-note">
        <span className="access-notice-icon" aria-hidden="true">i</span>
        <p>Design preview with sample details. Continue on ACRE’s official website to sign in.</p>
      </div>
    </div>
  );
}
