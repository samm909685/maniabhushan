import { useEffect, useRef, useState } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";

function DesignRequest() {
  const sectionRef = useRef(null);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    requirement: "",
    jewelleryType: "",
    requestType: "",
    name: "",
    whatsapp: "",
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const revealElements = section.querySelectorAll(
      ".design-request-heading, .design-request-layout, .design-upload-card, .design-form-card, .design-upload-empty, .design-field, .design-submit-button"
    );

    const observers = [];

    revealElements.forEach((element) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.add("design-request-revealed");
            observer.unobserve(element);
          }
        },
        {
          threshold: 0.2,
          rootMargin: "0px 0px -8% 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG, JPEG, PNG and WEBP images are allowed.");
      event.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("Maximum image size is 10 MB.");
      event.target.value = "";
      return;
    }

    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    const preview = URL.createObjectURL(file);

    setImage(file);
    setImagePreview(preview);
  };

  const removeImage = () => {
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    setImage(null);
    setImagePreview("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!image) {
      alert("Please upload your design.");
      return;
    }

    console.log("Design Request:", {
      ...formData,
      referenceImage: image,
    });

    alert("Design request prepared successfully.");

    setFormData({
      requirement: "",
      jewelleryType: "",
      requestType: "",
      name: "",
      whatsapp: "",
    });

    removeImage();
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="design-request-section"
      >
        <div className="design-request-container">

          {/* =========================================
              HEADING
          ========================================== */}

          <div className="design-request-heading">

            <p className="design-request-eyebrow">
              MANIABHUSHAN
            </p>

            <h2>
              Request Your Design
            </h2>

            <div className="design-request-heading-line">
              <span></span>
              <i></i>
              <span></span>
            </div>

            <p className="design-request-intro">
              Share your jewellery design with us and tell us what you need.
              <br />
              Our team will understand your idea and get back to you on WhatsApp.
            </p>

          </div>


          {/* =========================================
              MAIN CONTENT
          ========================================== */}

          <div className="design-request-layout">

            {/* =======================================
                LEFT — IMAGE UPLOAD
            ======================================== */}

            <div className="design-upload-card">

              <div
                className="design-upload-box"
                onClick={() => {
                  if (!imagePreview) {
                    fileInputRef.current?.click();
                  }
                }}
              >

                {!imagePreview ? (
                  <div className="design-upload-empty">

                    <div className="design-upload-icon">
                      <Upload
                        size={32}
                        strokeWidth={1.7}
                      />
                    </div>

                    <h3>
                      Upload Your Design
                    </h3>

                    <p className="design-upload-click">
                      Click to choose an image
                    </p>

                    <p className="design-upload-note">
                      JPG, JPEG, PNG or WEBP · Max 10 MB
                    </p>

                  </div>
                ) : (
                  <>

                    <img
                      src={imagePreview}
                      alt="Selected jewellery design"
                      className="design-preview-image"
                    />

                    <button
                      type="button"
                      className="design-remove-image"
                      onClick={(event) => {
                        event.stopPropagation();
                        removeImage();
                      }}
                    >
                      <X size={18} />
                    </button>

                    <div className="design-selected-file">

                      <ImageIcon
                        size={17}
                      />

                      <span>
                        {image?.name}
                      </span>

                    </div>

                  </>
                )}

              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp"
                onChange={handleImageChange}
                className="design-file-input"
              />

            </div>


            {/* =======================================
                RIGHT — FORM
            ======================================== */}

            <div className="design-form-card">

              <form
                onSubmit={handleSubmit}
                className="design-form"
              >

                {/* REQUIREMENT */}

                <div className="design-field">

                  <label htmlFor="requirement">
                    Your Requirement
                  </label>

                  <textarea
                    id="requirement"
                    name="requirement"
                    required
                    rows="4"
                    value={formData.requirement}
                    onChange={handleChange}
                    placeholder="For example: I want this type of design but with a different pendant."
                  />

                </div>


                {/* JEWELLERY TYPE */}

                <div className="design-field">

                  <label htmlFor="jewelleryType">
                    Jewellery Type
                  </label>

                  <select
                    id="jewelleryType"
                    name="jewelleryType"
                    required
                    value={formData.jewelleryType}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select jewellery type
                    </option>

                    <option value="Necklace">
                      Necklace
                    </option>

                    <option value="Mala">
                      Mala
                    </option>

                    <option value="Earrings">
                      Earrings
                    </option>

                    <option value="Bangles">
                      Bangles
                    </option>

                    <option value="Bracelet">
                      Bracelet
                    </option>

                    <option value="Ring">
                      Ring
                    </option>

                    <option value="Pendant">
                      Pendant
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>


                {/* REQUEST TYPE */}

                <div className="design-field">

                  <label htmlFor="requestType">
                    What Would You Like?
                  </label>

                  <select
                    id="requestType"
                    name="requestType"
                    required
                    value={formData.requestType}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select an option
                    </option>

                    <option value="Custom Design">
                      Custom Design
                    </option>

                    <option value="Similar Design">
                      Similar Design
                    </option>

                    <option value="Modification">
                      Modification
                    </option>

                    <option value="Bulk Requirement">
                      Bulk Requirement
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>


                {/* NAME */}

                <div className="design-field">

                  <label htmlFor="designName">
                    Your Name
                  </label>

                  <input
                    id="designName"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />

                </div>


                {/* WHATSAPP */}

                <div className="design-field">

                  <label htmlFor="designWhatsapp">
                    WhatsApp Number
                  </label>

                  <input
                    id="designWhatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="Enter your WhatsApp number"
                  />

                </div>


                {/* BUTTON */}

                <button
                  type="submit"
                  className="design-submit-button"
                >
                  Send Design Request

                  <span>
                    →
                  </span>

                </button>

              </form>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================
          DESIGN REQUEST CSS
      ========================================== */}

      <style>{`

/* =====================================================
   MANIABHUSHAN DESIGN REQUEST
===================================================== */

.design-request-section {
  width: 100%;
  background: #F4EAD8;
  padding: 95px 0 115px;
  overflow: hidden;
}


/* =====================================================
   MAIN CONTAINER
===================================================== */

.design-request-container {
  width: min(1280px, calc(100% - 80px));
  margin: 0 auto;
}


/* =====================================================
   HEADING
===================================================== */

.design-request-heading {
  width: 100%;
  max-width: 760px;
  margin: 0 auto 58px;
  text-align: center;

  opacity: 0;
  translate: 0 35px;
  scale: 0.985;
}

.design-request-heading.design-request-revealed {
  animation:
    designHeadingReveal
    0.9s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes designHeadingReveal {
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

.design-request-eyebrow {
  margin: 0 0 12px;

  color: #BA8C5B;

  font-size: 10px;
  font-weight: 600;

  letter-spacing: 0.35em;
  text-transform: uppercase;
}

.design-request-heading h2 {
  margin: 0;

  color: #062D3E;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: clamp(42px, 4vw, 56px);

  font-weight: 400;
  line-height: 1.08;

  letter-spacing: -0.025em;
}

.design-request-heading-line {
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 12px;

  margin-top: 17px;
}

.design-request-heading-line span {
  display: block;

  width: 38px;
  height: 1px;

  background: #BA8C5B;
}

.design-request-heading-line i {
  display: block;

  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #BA8C5B;
}

.design-request-intro {
  margin: 14px auto 0;

  color: #526D78;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 15px;

  line-height: 1.7;
}


/* =====================================================
   TWO CARDS
===================================================== */

.design-request-layout {
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    minmax(0, 1fr);

  gap: 44px;

  width: 100%;

  align-items: stretch;
}


/* =====================================================
   LEFT CARD
===================================================== */

.design-upload-card {
  width: 100%;
  padding: 38px;

  background: #FFFFFF;

  border-radius: 24px;

  box-shadow:
    0 12px 35px rgba(0, 0, 0, 0.12);

  opacity: 0;
  translate: -55px 20px;
  scale: 0.985;
}

.design-upload-card.design-request-revealed {
  animation:
    designUploadReveal
    1s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes designUploadReveal {
  from {
    opacity: 0;
    translate: -55px 20px;
    scale: 0.985;
  }

  to {
    opacity: 1;
    translate: 0 0;
    scale: 1;
  }
}


/* =====================================================
   UPLOAD BOX
===================================================== */

.design-upload-box {
  position: relative;

  display: flex;

  width: 100%;
  min-height: 500px;

  align-items: center;
  justify-content: center;

  border:
    2px
    dashed
    #D9A441;

  border-radius: 18px;

  background: #FFFFFF;

  cursor: pointer;

  overflow: hidden;
}


/* =====================================================
   UPLOAD EMPTY
===================================================== */

.design-upload-empty {
  display: flex;

  width: 100%;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: 50px 25px;

  text-align: center;

  opacity: 0;
  translate: 0 25px;
}

.design-upload-empty.design-request-revealed {
  animation:
    designUploadInnerReveal
    0.75s
    0.15s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes designUploadInnerReveal {
  from {
    opacity: 0;
    translate: 0 25px;
  }

  to {
    opacity: 1;
    translate: 0 0;
  }
}

.design-upload-icon {
  display: flex;

  width: 92px;
  height: 92px;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #F8F0E3;

  color: #BA8C5B;
}

.design-upload-empty h3 {
  margin: 24px 0 0;

  color: #062D3E;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 30px;

  font-weight: 400;

  line-height: 1.2;
}

.design-upload-click {
  margin: 8px 0 0;

  color: #526D78;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 17px;

  line-height: 1.5;
}

.design-upload-note {
  margin: 7px 0 0;

  color: #9A9A91;

  font-size: 14px;

  line-height: 1.5;
}


/* =====================================================
   FILE INPUT
===================================================== */

.design-file-input {
  display: none;
}


/* =====================================================
   IMAGE PREVIEW
===================================================== */

.design-preview-image {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: contain;

  background: #F8F5EE;
}

.design-remove-image {
  position: absolute;

  z-index: 5;

  top: 15px;
  right: 15px;

  display: flex;

  width: 38px;
  height: 38px;

  align-items: center;
  justify-content: center;

  border: none;

  border-radius: 50%;

  background: #062D3E;

  color: #FFFFFF;

  cursor: pointer;
}

.design-selected-file {
  position: absolute;

  z-index: 4;

  right: 0;
  bottom: 0;
  left: 0;

  display: flex;

  align-items: center;

  gap: 8px;

  padding: 12px 15px;

  background: rgba(255, 255, 255, 0.96);

  color: #526D78;

  font-size: 13px;
}

.design-selected-file svg {
  flex-shrink: 0;

  color: #BA8C5B;
}

.design-selected-file span {
  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;
}


/* =====================================================
   RIGHT FORM CARD
===================================================== */

.design-form-card {
  width: 100%;
  padding: 38px;

  background: #FFFFFF;

  border-radius: 24px;

  box-shadow:
    0 12px 35px rgba(0, 0, 0, 0.12);

  opacity: 0;
  translate: 55px 20px;
  scale: 0.985;
}

.design-form-card.design-request-revealed {
  animation:
    designFormReveal
    1s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes designFormReveal {
  from {
    opacity: 0;
    translate: 55px 20px;
    scale: 0.985;
  }

  to {
    opacity: 1;
    translate: 0 0;
    scale: 1;
  }
}


/* =====================================================
   FORM
===================================================== */

.design-form {
  display: flex;

  width: 100%;

  flex-direction: column;

  gap: 17px;
}


/* =====================================================
   FIELD
===================================================== */

.design-field {
  width: 100%;

  opacity: 0;
  translate: 0 25px;
}

.design-field.design-request-revealed {
  animation:
    designFieldReveal
    0.65s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes designFieldReveal {
  from {
    opacity: 0;
    translate: 0 25px;
  }

  to {
    opacity: 1;
    translate: 0 0;
  }
}

.design-field label {
  display: block;

  margin: 0 0 7px;

  color: #062D3E;

  font-size: 16px;

  font-weight: 600;

  line-height: 1.3;
}


/* =====================================================
   TEXTAREA
===================================================== */

.design-field textarea {
  display: block;

  width: 100%;

  min-height: 140px;

  padding: 13px 15px;

  border:
    1px
    solid
    #E1D4BD;

  border-radius: 17px;

  background: #FFFFFF;

  color: #062D3E;

  font-family: inherit;

  font-size: 15px;

  line-height: 1.55;

  outline: none;

  resize: none;

  transition:
    border-color 0.2s ease;
}


/* =====================================================
   INPUTS + SELECTS
===================================================== */

.design-field input,
.design-field select {
  display: block;

  width: 100%;

  height: 58px;

  padding: 0 15px;

  border:
    1px
    solid
    #E1D4BD;

  border-radius: 17px;

  background: #FFFFFF;

  color: #526D78;

  font-family: inherit;

  font-size: 15px;

  outline: none;

  transition:
    border-color 0.2s ease;
}

.design-field input::placeholder,
.design-field textarea::placeholder {
  color: #A7B0B5;
}

.design-field input:focus,
.design-field textarea:focus,
.design-field select:focus {
  border-color: #BA8C5B;
}


/* =====================================================
   SUBMIT BUTTON
===================================================== */

.design-submit-button {
  display: flex;

  width: 100%;
  height: 58px;

  align-items: center;
  justify-content: center;

  gap: 10px;

  margin-top: 3px;

  border: none;

  border-radius: 999px;

  background: #062D3E;

  color: #FFFFFF;

  font-family: inherit;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  opacity: 0;
  translate: 0 25px;

  transition:
    background 0.25s ease,
    transform 0.25s ease;
}

.design-submit-button.design-request-revealed {
  animation:
    designButtonReveal
    0.7s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes designButtonReveal {
  from {
    opacity: 0;
    translate: 0 25px;
  }

  to {
    opacity: 1;
    translate: 0 0;
  }
}

.design-submit-button span {
  color: #D8B15C;

  font-size: 18px;

  line-height: 1;

  transition:
    transform 0.25s ease;
}

.design-submit-button:hover {
  background: #0A4055;
}

.design-submit-button:hover span {
  transform: translateX(4px);
}


/* =====================================================
   LAPTOP
===================================================== */

@media (max-width: 1100px) {

  .design-request-section {
    padding: 80px 0 95px;
  }

  .design-request-container {
    width:
      min(
        1000px,
        calc(100% - 56px)
      );
  }

  .design-request-layout {
    gap: 32px;
  }

  .design-upload-card,
  .design-form-card {
    padding: 30px;
  }

  .design-upload-box {
    min-height: 470px;
  }

}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 850px) {

  .design-request-section {
    padding: 68px 0 80px;
  }

  .design-request-container {
    width:
      min(
        720px,
        calc(100% - 40px)
      );
  }

  .design-request-heading {
    margin-bottom: 42px;
  }

  .design-request-layout {
    grid-template-columns: 1fr;

    gap: 28px;
  }

  .design-upload-card,
  .design-form-card {
    padding: 28px;
  }

  .design-upload-box {
    min-height: 430px;
  }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 600px) {

  .design-request-section {
    padding: 55px 0 65px;
  }

  .design-request-container {
    width:
      calc(100% - 28px);
  }

  .design-request-heading {
    margin-bottom: 32px;
  }

  .design-request-heading h2 {
    font-size: 37px;
  }

  .design-request-intro {
    font-size: 13px;
  }

  .design-request-layout {
    gap: 20px;
  }

  .design-upload-card,
  .design-form-card {
    padding: 18px;
  }

  .design-upload-box {
    min-height: 360px;

    border-radius: 15px;
  }

  .design-upload-icon {
    width: 76px;
    height: 76px;
  }

  .design-upload-empty h3 {
    margin-top: 19px;

    font-size: 25px;
  }

  .design-upload-click {
    font-size: 15px;
  }

  .design-upload-note {
    font-size: 12px;
  }

  .design-field label {
    font-size: 14px;
  }

  .design-field textarea {
    min-height: 125px;

    border-radius: 15px;

    font-size: 14px;
  }

  .design-field input,
  .design-field select {
    height: 54px;

    border-radius: 15px;

    font-size: 14px;
  }

  .design-submit-button {
    height: 54px;

    font-size: 14px;
  }

}


/* =====================================================
   SMALL MOBILE
===================================================== */

@media (max-width: 380px) {

  .design-request-container {
    width:
      calc(100% - 20px);
  }

  .design-request-heading h2 {
    font-size: 33px;
  }

  .design-upload-card,
  .design-form-card {
    padding: 14px;
  }

  .design-upload-box {
    min-height: 330px;
  }

}


/* =====================================================
   MOBILE SCROLL REVEAL
===================================================== */

@media (max-width: 850px) {

  .design-upload-card.design-request-revealed,
  .design-form-card.design-request-revealed {
    animation:
      designMobileCardReveal
      0.9s
      cubic-bezier(0.22, 1, 0.36, 1)
      both;
  }

  @keyframes designMobileCardReveal {
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

}


/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {

  .design-request-heading,
  .design-upload-card,
  .design-form-card,
  .design-upload-empty,
  .design-field,
  .design-submit-button {
    animation: none !important;

    opacity: 1 !important;

    translate: none !important;

    scale: 1 !important;
  }

  .design-submit-button,
  .design-submit-button span {
    transition: none !important;
  }

}

      `}</style>
    </>
  );
}

export default DesignRequest;