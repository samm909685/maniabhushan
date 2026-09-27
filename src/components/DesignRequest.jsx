import { useRef, useState } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";

function DesignRequest() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG, JPEG, PNG and WEBP images are allowed.");
      e.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("Maximum image size is 10 MB.");
      e.target.value = "";
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload your design.");
      return;
    }

    console.log({
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
    <section
      id="design-request"
      className="w-full bg-[#FFF8EA]"
    >
      {/* ================================
          TITLE
      ================================= */}

      <div className="w-full px-5 pt-14 pb-8 sm:px-8 md:pt-16 md:pb-10 lg:px-10">
        <div className="mx-auto w-full max-w-[1180px] text-center">
          <h2
            className="text-4xl leading-tight text-[#062D3E] sm:text-5xl md:text-[52px]"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
            }}
          >
            Request Your Design
          </h2>

          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#BA8C5B]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#BA8C5B]" />
            <span className="h-px w-10 bg-[#BA8C5B]" />
          </div>

          <p className="mt-4 text-sm text-[#526D78] sm:text-base">
            Share your jewellery design and tell us what you need.
          </p>
        </div>
      </div>

      {/* ================================
          MAIN CONTENT
      ================================= */}

      <div className="w-full px-5 pb-16 sm:px-8 md:pb-20 lg:px-10">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1180px]
            grid-cols-1
            gap-8
            lg:grid-cols-[1fr_1fr]
            lg:gap-10
          "
        >

          {/* ================================
              LEFT - UPLOAD
          ================================= */}

          <div className="w-full bg-white p-5 sm:p-7">
            <div
              onClick={() => {
                if (!imagePreview) {
                  fileInputRef.current?.click();
                }
              }}
              className="
                relative
                flex
                min-h-[420px]
                w-full
                cursor-pointer
                flex-col
                items-center
                justify-center
                rounded-[18px]
                border-2
                border-dashed
                border-[#D9A441]
                bg-white
                px-5
                text-center
                sm:min-h-[470px]
                lg:min-h-[500px]
              "
            >
              {!imagePreview ? (
                <>
                  <div
                    className="
                      flex
                      h-[92px]
                      w-[92px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F8F0E3]
                      text-[#BA8C5B]
                    "
                  >
                    <Upload
                      size={34}
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3
                    className="
                      mt-7
                      text-2xl
                      font-medium
                      text-[#062D3E]
                      sm:text-[30px]
                    "
                  >
                    Upload Your Design
                  </h3>

                  <p className="mt-2 text-base text-[#526D78] sm:text-lg">
                    Click to choose an image
                  </p>

                  <p className="mt-2 text-sm text-[#9A9A91] sm:text-base">
                    JPG, JPEG, PNG or WEBP · Max 10 MB
                  </p>
                </>
              ) : (
                <>
                  <img
                    src={imagePreview}
                    alt="Selected jewellery design"
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      rounded-[16px]
                      bg-[#F8F5EE]
                      object-contain
                    "
                  />

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage();
                    }}
                    className="
                      absolute
                      right-4
                      top-4
                      z-20
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#062D3E]
                      text-white
                    "
                  >
                    <X size={18} />
                  </button>

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      z-10
                      flex
                      items-center
                      gap-2
                      bg-white/95
                      px-4
                      py-3
                    "
                  >
                    <ImageIcon
                      size={17}
                      className="shrink-0 text-[#BA8C5B]"
                    />

                    <span className="truncate text-sm text-[#526D78]">
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
              className="hidden"
            />
          </div>

          {/* ================================
              RIGHT - FORM
          ================================= */}

          <div className="w-full bg-white p-5 sm:p-7">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >

              {/* Requirement */}

              <div>
                <label
                  htmlFor="requirement"
                  className="mb-1.5 block text-base font-medium text-[#062D3E]"
                >
                  Your Requirement
                </label>

                <textarea
                  id="requirement"
                  name="requirement"
                  required
                  rows={4}
                  value={formData.requirement}
                  onChange={handleChange}
                  placeholder="For example: I want this type of design but with a different pendant."
                  className="
                    block
                    w-full
                    resize-none
                    rounded-[18px]
                    border
                    border-[#E1D4BD]
                    bg-white
                    px-4
                    py-3
                    text-base
                    leading-6
                    text-[#062D3E]
                    outline-none
                    placeholder:text-[#A7B0B5]
                    focus:border-[#BA8C5B]
                  "
                />
              </div>

              {/* Jewellery Type */}

              <div>
                <label
                  htmlFor="jewelleryType"
                  className="mb-1.5 block text-base font-medium text-[#062D3E]"
                >
                  Jewellery Type
                </label>

                <select
                  id="jewelleryType"
                  name="jewelleryType"
                  required
                  value={formData.jewelleryType}
                  onChange={handleChange}
                  className="
                    block
                    h-14
                    w-full
                    rounded-[18px]
                    border
                    border-[#E1D4BD]
                    bg-white
                    px-4
                    text-base
                    text-[#526D78]
                    outline-none
                    focus:border-[#BA8C5B]
                  "
                >
                  <option value="">
                    Select jewellery type
                  </option>

                  <option value="Necklace">Necklace</option>
                  <option value="Mala">Mala</option>
                  <option value="Earrings">Earrings</option>
                  <option value="Bangles">Bangles</option>
                  <option value="Bracelet">Bracelet</option>
                  <option value="Ring">Ring</option>
                  <option value="Pendant">Pendant</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Request Type */}

              <div>
                <label
                  htmlFor="requestType"
                  className="mb-1.5 block text-base font-medium text-[#062D3E]"
                >
                  What Would You Like?
                </label>

                <select
                  id="requestType"
                  name="requestType"
                  required
                  value={formData.requestType}
                  onChange={handleChange}
                  className="
                    block
                    h-14
                    w-full
                    rounded-[18px]
                    border
                    border-[#E1D4BD]
                    bg-white
                    px-4
                    text-base
                    text-[#526D78]
                    outline-none
                    focus:border-[#BA8C5B]
                  "
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

              {/* Name */}

              <div>
                <label
                  htmlFor="designName"
                  className="mb-1.5 block text-base font-medium text-[#062D3E]"
                >
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
                  className="
                    block
                    h-14
                    w-full
                    rounded-[18px]
                    border
                    border-[#E1D4BD]
                    bg-white
                    px-4
                    text-base
                    text-[#062D3E]
                    outline-none
                    placeholder:text-[#A7B0B5]
                    focus:border-[#BA8C5B]
                  "
                />
              </div>

              {/* WhatsApp */}

              <div>
                <label
                  htmlFor="designWhatsapp"
                  className="mb-1.5 block text-base font-medium text-[#062D3E]"
                >
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
                  className="
                    block
                    h-14
                    w-full
                    rounded-[18px]
                    border
                    border-[#E1D4BD]
                    bg-white
                    px-4
                    text-base
                    text-[#062D3E]
                    outline-none
                    placeholder:text-[#A7B0B5]
                    focus:border-[#BA8C5B]
                  "
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="
                  mt-0
                  flex
                  h-14
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#062D3E]
                  px-6
                  text-base
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#0A4055]
                "
              >
                Send Design Request

                <span className="text-[#D8B15C]">
                  →
                </span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DesignRequest;