import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

import logo from "../assets/images/maniabhushan-logo.png";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${API_URL}/api/auth/login`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: email.trim(),
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Invalid email or password."
        );
      }

      if (!data.token) {
        throw new Error(
          "Login failed. Authentication token was not received."
        );
      }

      /*
        Save authentication token
      */

      localStorage.setItem(
        "maniabhushan_admin_token",
        data.token
      );

      /*
        Save admin information
      */

      if (data.admin) {
        localStorage.setItem(
          "maniabhushan_admin",
          JSON.stringify(data.admin)
        );
      }

      /*
        Redirect to admin dashboard
      */

      navigate("/admin/dashboard", {
        replace: true,
      });

    } catch (error) {
      console.error("Admin Login Error:", error);

      setError(
        error.message ||
          "Unable to login. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="admin-login-page">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="admin-login-glow admin-login-glow-one"></div>

      <div className="admin-login-glow admin-login-glow-two"></div>


      {/* =====================================================
          BACK TO WEBSITE
      ====================================================== */}

      <button
        type="button"
        className="admin-back-button"
        onClick={() => navigate("/")}
      >
        <ArrowLeft size={16} />
        <span>Back to website</span>
      </button>


      {/* =====================================================
          LOGIN CONTAINER
      ====================================================== */}

      <div className="admin-login-container">


        {/* ===================================================
            LEFT BRAND PANEL
        ==================================================== */}

        <section className="admin-brand-panel">

          <div className="admin-brand-pattern"></div>


          <div className="admin-brand-content">

            <div className="admin-brand-logo-wrap">

              <img
                src={logo}
                alt="Maniabhushan Jewellers"
                className="admin-brand-logo"
              />

            </div>


            <div className="admin-brand-line"></div>


            <p className="admin-brand-eyebrow">
              MANIABHUSHAN JEWELLERS
            </p>

            <h1>
              The Art of
              <br />
              <span>Timeless Jewellery</span>
            </h1>

            <p className="admin-brand-description">
              Manage your collections, designs and
              jewellery catalogue from one place.
            </p>


            <div className="admin-brand-est">

              <span>
                ESTABLISHED
              </span>

              <strong>
                1994
              </strong>

            </div>

          </div>


          <div className="admin-brand-footer">
            ADMINISTRATOR ACCESS
          </div>

        </section>


        {/* ===================================================
            RIGHT LOGIN PANEL
        ==================================================== */}

        <section className="admin-form-panel">

          <div className="admin-form-inner">


            {/* HEADER */}

            <div className="admin-form-header">

              <div className="admin-shield">

                <ShieldCheck
                  size={21}
                  strokeWidth={1.5}
                />

              </div>

              <p className="admin-form-eyebrow">
                PRIVATE ACCESS
              </p>

              <h2>
                Welcome Back
              </h2>

              <p className="admin-form-subtitle">
                Sign in to continue to your
                Maniabhushan administration panel.
              </p>

            </div>


            {/* ERROR */}

            {error && (
              <div className="admin-error">

                <span className="admin-error-icon">
                  !
                </span>

                <p>
                  {error}
                </p>

              </div>
            )}


            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="admin-login-form"
            >


              {/* EMAIL */}

              <div className="admin-field">

                <label htmlFor="admin-email">
                  Email Address
                </label>

                <input
                  id="admin-email"
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="Enter your email"
                  autoComplete="email"
                  disabled={loading}
                />

              </div>


              {/* PASSWORD */}

              <div className="admin-field">

                <div className="admin-password-heading">

                  <label htmlFor="admin-password">
                    Password
                  </label>

                </div>


                <div className="admin-password-wrapper">

                  <input
                    id="admin-password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    disabled={loading}
                  />

                  <button
                    type="button"
                    className="admin-password-toggle"
                    onClick={() =>
                      setShowPassword(
                        (previous) => !previous
                      )
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>


              {/* LOGIN BUTTON */}

              <button
                type="submit"
                className="admin-login-submit"
                disabled={loading}
              >

                {loading ? (
                  <>
                    <span className="admin-spinner"></span>

                    Logging in...
                  </>
                ) : (
                  <>
                    Sign In

                    <span className="admin-submit-arrow">
                      →
                    </span>
                  </>
                )}

              </button>

            </form>


            {/* BOTTOM */}

            <div className="admin-form-bottom">

              <span className="admin-bottom-line"></span>

              <p>
                Authorized personnel only
              </p>

              <span className="admin-bottom-line"></span>

            </div>


          </div>

        </section>

      </div>


      {/* =====================================================
          CSS
      ====================================================== */}

      <style>{`

/* =====================================================
   PAGE
===================================================== */

.admin-login-page {
  position: relative;

  display: flex;

  width: 100%;

  min-height: 100vh;

  align-items: center;
  justify-content: center;

  padding: 55px 30px;

  overflow: hidden;

  background: #F4EAD8;
}


/* =====================================================
   DECORATIVE GLOW
===================================================== */

.admin-login-glow {
  position: absolute;

  width: 500px;
  height: 500px;

  border-radius: 50%;

  pointer-events: none;

  filter: blur(70px);

  opacity: 0.35;
}

.admin-login-glow-one {
  top: -300px;
  left: -220px;

  background:
    rgba(212, 175, 55, 0.12);
}

.admin-login-glow-two {
  right: -250px;
  bottom: -300px;

  background:
    rgba(186, 140, 91, 0.12);
}


/* =====================================================
   BACK BUTTON
===================================================== */

.admin-back-button {
  position: absolute;

  top: 27px;
  left: 30px;

  z-index: 20;

  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding: 0;

  color: #526D78;

  background: transparent;

  border: none;

  font-size: 11px;

  cursor: pointer;

  transition:
    color 0.25s ease,
    transform 0.25s ease;
}

.admin-back-button:hover {
  color: #062D3E;

  transform: translateX(-3px);
}


/* =====================================================
   MAIN CONTAINER
===================================================== */

.admin-login-container {
  position: relative;

  z-index: 5;

  display: grid;

  width: 100%;

  max-width: 1120px;

  min-height: 650px;

  grid-template-columns: 46% 54%;

  overflow: hidden;

  background: #FFFFFF;

  border:
    1px solid
    rgba(186, 140, 91, 0.25);

  box-shadow:
    0 35px 100px
    rgba(6, 45, 62, 0.18);

  animation:
    adminContainerReveal
    0.9s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes adminContainerReveal {

  from {
    opacity: 0;

    translate: 0 35px;

    scale: 0.985;
  }

  to {
    opacity: 1;

    translate: 0 0;

    scale: 1;
  }

}


/* =====================================================
   LEFT BRAND PANEL
===================================================== */

.admin-brand-panel {
  position: relative;

  display: flex;

  min-height: 650px;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: 65px 55px;

  overflow: hidden;

  color: #F8F0E3;

  background: #062D3E;
}


/* =====================================================
   BRAND PATTERN
===================================================== */

.admin-brand-pattern {
  position: absolute;

  inset: 25px;

  pointer-events: none;

  border:
    1px solid
    rgba(212, 175, 55, 0.14);
}

.admin-brand-pattern::before {
  content: "";

  position: absolute;

  inset: 12px;

  border:
    1px solid
    rgba(212, 175, 55, 0.07);
}


/* =====================================================
   BRAND DECORATION
===================================================== */

.admin-brand-panel::before {
  content: "1994";

  position: absolute;

  right: -40px;
  bottom: -45px;

  color:
    rgba(212, 175, 55, 0.045);

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 190px;

  line-height: 1;

  pointer-events: none;
}


/* =====================================================
   BRAND CONTENT
===================================================== */

.admin-brand-content {
  position: relative;

  z-index: 2;

  display: flex;

  width: 100%;

  flex-direction: column;

  align-items: center;

  text-align: center;

  animation:
    adminBrandReveal
    0.9s
    0.15s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes adminBrandReveal {

  from {
    opacity: 0;

    translate: -25px 0;
  }

  to {
    opacity: 1;

    translate: 0 0;
  }

}


/* =====================================================
   LOGO
===================================================== */

.admin-brand-logo-wrap {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 170px;
  height: 80px;

  margin-bottom: 22px;
}

.admin-brand-logo {
  display: block;

  width: auto;

  max-width: 170px;

  max-height: 80px;

  object-fit: contain;
}


/* =====================================================
   GOLD LINE
===================================================== */

.admin-brand-line {
  width: 55px;

  height: 1px;

  margin-bottom: 21px;

  background: #D4AF37;
}


/* =====================================================
   EYEBROW
===================================================== */

.admin-brand-eyebrow {
  margin: 0;

  color: #BA8C5B;

  font-size: 8px;

  font-weight: 600;

  letter-spacing: 0.35em;
}


/* =====================================================
   BRAND TITLE
===================================================== */

.admin-brand-content h1 {
  margin: 16px 0 0;

  color: #F8F0E3;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 43px;

  font-weight: 400;

  line-height: 1.15;
}

.admin-brand-content h1 span {
  color: #D4AF37;

  font-style: italic;
}


/* =====================================================
   DESCRIPTION
===================================================== */

.admin-brand-description {
  max-width: 350px;

  margin: 23px auto 0;

  color:
    rgba(248, 240, 227, 0.65);

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 13px;

  line-height: 1.8;
}


/* =====================================================
   ESTABLISHED
===================================================== */

.admin-brand-est {
  display: flex;

  flex-direction: column;

  align-items: center;

  margin-top: 30px;
}

.admin-brand-est span {
  color: #BA8C5B;

  font-size: 7px;

  font-weight: 600;

  letter-spacing: 0.3em;
}

.admin-brand-est strong {
  margin-top: 5px;

  color: #F8F0E3;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 31px;

  font-weight: 400;
}


/* =====================================================
   BRAND FOOTER
===================================================== */

.admin-brand-footer {
  position: absolute;

  bottom: 27px;

  z-index: 3;

  color:
    rgba(248, 240, 227, 0.35);

  font-size: 7px;

  font-weight: 600;

  letter-spacing: 0.25em;
}


/* =====================================================
   RIGHT FORM PANEL
===================================================== */

.admin-form-panel {
  display: flex;

  align-items: center;

  justify-content: center;

  padding: 60px 75px;

  background:
    linear-gradient(
      145deg,
      #FFFDF8,
      #F8F0E3
    );
}


/* =====================================================
   FORM INNER
===================================================== */

.admin-form-inner {
  width: 100%;

  max-width: 410px;
}


/* =====================================================
   FORM HEADER
===================================================== */

.admin-form-header {
  text-align: left;
}

.admin-shield {
  display: flex;

  width: 43px;
  height: 43px;

  align-items: center;
  justify-content: center;

  margin-bottom: 17px;

  color: #BA8C5B;

  background: rgba(186, 140, 91, 0.08);

  border:
    1px solid
    rgba(186, 140, 91, 0.3);

  border-radius: 50%;
}

.admin-form-eyebrow {
  margin: 0 0 8px;

  color: #BA8C5B;

  font-size: 8px;

  font-weight: 600;

  letter-spacing: 0.3em;
}

.admin-form-header h2 {
  margin: 0;

  color: #062D3E;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 42px;

  font-weight: 400;

  line-height: 1.1;
}

.admin-form-subtitle {
  max-width: 350px;

  margin: 12px 0 0;

  color: #718087;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 14px;

  line-height: 1.65;
}


/* =====================================================
   ERROR
===================================================== */

.admin-error {
  display: flex;

  align-items: center;

  gap: 10px;

  margin-top: 24px;

  padding: 11px 13px;

  color: #8B3030;

  background: #FFF2F2;

  border:
    1px solid
    #F0CACA;

  border-radius: 9px;

  font-size: 12px;
}

.admin-error-icon {
  display: flex;

  flex: 0 0 auto;

  width: 19px;
  height: 19px;

  align-items: center;
  justify-content: center;

  color: #FFFFFF;

  background: #B64A4A;

  border-radius: 50%;

  font-size: 11px;

  font-weight: 700;
}

.admin-error p {
  margin: 0;
}


/* =====================================================
   FORM
===================================================== */

.admin-login-form {
  display: flex;

  flex-direction: column;

  gap: 21px;

  margin-top: 31px;
}


/* =====================================================
   FIELD
===================================================== */

.admin-field {
  width: 100%;
}

.admin-field label {
  display: block;

  margin-bottom: 8px;

  color: #062D3E;

  font-size: 11px;

  font-weight: 600;

  letter-spacing: 0.02em;
}

.admin-field input {
  display: block;

  width: 100%;

  height: 54px;

  padding: 0 16px;

  color: #062D3E;

  background: #FFFFFF;

  border:
    1px solid
    #DCCDB3;

  border-radius: 10px;

  outline: none;

  font-family: inherit;

  font-size: 13px;

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}

.admin-field input::placeholder {
  color: #A6AFB2;
}

.admin-field input:hover {
  border-color: #C5AE8D;
}

.admin-field input:focus {
  border-color: #BA8C5B;

  background: #FFFDF9;

  box-shadow:
    0 0 0 3px
    rgba(186, 140, 91, 0.09);
}

.admin-field input:disabled {
  opacity: 0.65;

  background: #F2F0EA;

  cursor: not-allowed;
}


/* =====================================================
   PASSWORD
===================================================== */

.admin-password-heading {
  display: flex;

  align-items: center;

  justify-content: space-between;
}

.admin-password-wrapper {
  position: relative;
}

.admin-password-wrapper input {
  padding-right: 50px;
}

.admin-password-toggle {
  position: absolute;

  top: 50%;
  right: 14px;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 0;

  color: #829095;

  background: transparent;

  border: none;

  cursor: pointer;

  transform: translateY(-50%);

  transition:
    color 0.2s ease;
}

.admin-password-toggle:hover {
  color: #BA8C5B;
}


/* =====================================================
   SUBMIT
===================================================== */

.admin-login-submit {
  display: flex;

  width: 100%;

  height: 55px;

  align-items: center;
  justify-content: center;

  gap: 10px;

  margin-top: 4px;

  color: #FFFFFF;

  background: #062D3E;

  border: 1px solid #062D3E;

  border-radius: 999px;

  font-size: 12px;

  font-weight: 600;

  letter-spacing: 0.03em;

  cursor: pointer;

  transition:
    background 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.admin-login-submit:hover:not(:disabled) {
  background: #0A4055;

  box-shadow:
    0 9px 25px
    rgba(6, 45, 62, 0.18);

  transform: translateY(-2px);
}

.admin-login-submit:disabled {
  opacity: 0.7;

  cursor: not-allowed;
}


/* =====================================================
   ARROW
===================================================== */

.admin-submit-arrow {
  color: #D4AF37;

  font-size: 18px;

  transition:
    transform 0.25s ease;
}

.admin-login-submit:hover:not(:disabled)
.admin-submit-arrow {
  transform: translateX(4px);
}


/* =====================================================
   SPINNER
===================================================== */

.admin-spinner {
  width: 15px;
  height: 15px;

  border:
    2px solid
    rgba(255, 255, 255, 0.3);

  border-top-color: #D4AF37;

  border-radius: 50%;

  animation:
    adminSpinner
    0.7s
    linear
    infinite;
}

@keyframes adminSpinner {

  to {
    transform: rotate(360deg);
  }

}


/* =====================================================
   BOTTOM
===================================================== */

.admin-form-bottom {
  display: flex;

  align-items: center;

  gap: 10px;

  margin-top: 30px;
}

.admin-bottom-line {
  flex: 1;

  height: 1px;

  background:
    rgba(186, 140, 91, 0.2);
}

.admin-form-bottom p {
  flex-shrink: 0;

  margin: 0;

  color: #9A9D98;

  font-size: 8px;

  letter-spacing: 0.1em;

  text-transform: uppercase;
}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 950px) {

  .admin-login-page {
    padding: 70px 25px 35px;
  }

  .admin-login-container {
    max-width: 760px;

    min-height: 590px;

    grid-template-columns: 42% 58%;
  }

  .admin-brand-panel {
    min-height: 590px;

    padding: 45px 30px;
  }

  .admin-brand-content h1 {
    font-size: 35px;
  }

  .admin-brand-description {
    max-width: 270px;

    font-size: 12px;
  }

  .admin-brand-logo-wrap {
    width: 145px;
    height: 65px;
  }

  .admin-brand-logo {
    max-width: 145px;

    max-height: 65px;
  }

  .admin-form-panel {
    padding: 50px 45px;
  }

  .admin-form-header h2 {
    font-size: 37px;
  }

}


/* =====================================================
   TABLET / SMALL LAPTOP
===================================================== */

@media (max-width: 720px) {

  .admin-login-page {
    align-items: flex-start;

    padding:
      85px
      20px
      30px;
  }

  .admin-login-container {
    display: block;

    max-width: 500px;

    min-height: auto;
  }

  .admin-brand-panel {
    display: block;

    min-height: auto;

    padding: 38px 30px 34px;

    text-align: center;
  }

  .admin-brand-pattern {
    inset: 15px;
  }

  .admin-brand-panel::before {
    right: -30px;
    bottom: -35px;

    font-size: 130px;
  }

  .admin-brand-content {
    align-items: center;
  }

  .admin-brand-logo-wrap {
    width: 130px;
    height: 55px;

    margin-bottom: 15px;
  }

  .admin-brand-logo {
    max-width: 130px;

    max-height: 55px;
  }

  .admin-brand-line {
    margin-bottom: 15px;
  }

  .admin-brand-content h1 {
    margin-top: 11px;

    font-size: 31px;
  }

  .admin-brand-description {
    max-width: 400px;

    margin-top: 13px;
  }

  .admin-brand-est {
    margin-top: 18px;
  }

  .admin-brand-est strong {
    font-size: 26px;
  }

  .admin-brand-footer {
    position: relative;

    bottom: auto;

    margin-top: 25px;
  }

  .admin-form-panel {
    padding: 42px 30px 38px;
  }

  .admin-form-inner {
    max-width: 100%;
  }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 500px) {

  .admin-login-page {
    min-height: 100svh;

    padding:
      70px
      14px
      22px;
  }

  .admin-back-button {
    top: 23px;

    left: 17px;

    font-size: 10px;
  }

  .admin-login-container {
    width: 100%;

    box-shadow:
      0 20px 55px
      rgba(6, 45, 62, 0.15);
  }

  .admin-brand-panel {
    padding:
      32px
      20px
      28px;
  }

  .admin-brand-pattern {
    inset: 10px;
  }

  .admin-brand-logo-wrap {
    width: 115px;
    height: 48px;
  }

  .admin-brand-logo {
    max-width: 115px;

    max-height: 48px;
  }

  .admin-brand-eyebrow {
    font-size: 7px;

    letter-spacing: 0.25em;
  }

  .admin-brand-content h1 {
    font-size: 28px;
  }

  .admin-brand-description {
    margin-top: 12px;

    font-size: 11px;

    line-height: 1.6;
  }

  .admin-brand-est {
    margin-top: 17px;
  }

  .admin-brand-est strong {
    font-size: 23px;
  }

  .admin-form-panel {
    padding:
      35px
      20px
      28px;
  }

  .admin-shield {
    width: 39px;
    height: 39px;

    margin-bottom: 14px;
  }

  .admin-form-eyebrow {
    font-size: 7px;
  }

  .admin-form-header h2 {
    font-size: 32px;
  }

  .admin-form-subtitle {
    margin-top: 9px;

    font-size: 12px;

    line-height: 1.55;
  }

  .admin-login-form {
    gap: 18px;

    margin-top: 25px;
  }

  .admin-field input {
    height: 51px;

    font-size: 12px;
  }

  .admin-login-submit {
    height: 52px;
  }

  .admin-form-bottom {
    margin-top: 24px;
  }

  .admin-form-bottom p {
    font-size: 7px;
  }

}


/* =====================================================
   SMALL MOBILE
===================================================== */

@media (max-width: 360px) {

  .admin-login-page {
    padding:
      68px
      10px
      18px;
  }

  .admin-back-button {
    left: 12px;
  }

  .admin-brand-content h1 {
    font-size: 25px;
  }

  .admin-brand-description {
    max-width: 260px;
  }

  .admin-form-panel {
    padding:
      30px
      17px
      25px;
  }

  .admin-form-header h2 {
    font-size: 29px;
  }

}


/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {

  .admin-login-container,
  .admin-brand-content {
    animation: none !important;
  }

  .admin-spinner {
    animation: none !important;
  }

  .admin-back-button,
  .admin-field input,
  .admin-password-toggle,
  .admin-login-submit,
  .admin-submit-arrow {
    transition: none !important;
  }

}

      `}</style>

    </main>
  );
}

export default AdminLogin;