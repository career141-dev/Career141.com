import clsx from "clsx";
import { withBasePath } from "@/lib/assetPath";

const imgDivElementorElement = withBasePath("/figmaAssets/testimonial/032702031c80235a48f8edff72693cef0a9031ec.png");
const imgDivElementorElement1 = withBasePath("/figmaAssets/testimonial/f5fc7d0a8ab3374cd43c8bfed2b6b9ba03f8d49d.png");
const imgDivRcAnchorLogoImg = withBasePath("/figmaAssets/testimonial/4736508c795667dcea21f8d864233031223b7832.png");

function InputField({ label, placeholder, isRequired = false, type = "text", placeholderSize = "15.1px" }: { label: string; placeholder: string; isRequired?: boolean; type?: string; placeholderSize?: string }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="font-['Quicksand',sans-serif] font-normal text-white text-[16px]">
        {label} {isRequired && "*"}
      </label>
      <div className="relative w-full border-b border-white pb-2 pt-2">
        <input 
            type={type}
            placeholder={placeholder}
            className={clsx(
                "bg-transparent border-none outline-none text-white w-full placeholder:text-white/50 font-['Inter',sans-serif] font-normal",
                placeholderSize === "15.1px" ? "text-[15.1px]" : "text-[13.4px]"
            )} 
        />
      </div>
    </div>
  );
}

function ContactMethod({ country, phones }: { country: string; phones: string[] }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="font-['Inter',sans-serif] font-semibold text-white text-[12px] uppercase opacity-80">{country}</div>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
                {phones.map((phone, i) => (
                    <div key={i} className="font-['Quicksand',sans-serif] font-semibold text-white text-[17.6px]">{phone}</div>
                ))}
            </div>
        </div>
    );
}

export default function DivElementorElement() {
  return (
    <div className="relative w-full py-[120px] px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden bg-[#0d1f15]">
      {/* Restored Background Section Overlay */}
      <div className="absolute inset-0 z-0">
          <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-60" src={imgDivElementorElement} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto rounded-[18px] overflow-hidden border border-white/20 shadow-2xl bg-white/10 backdrop-blur-md">
          {/* Form Container */}
          <div className="relative w-full min-h-[700px] flex flex-col lg:flex-row">
              <img alt="" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-60" src={imgDivElementorElement1} />
              
              {/* Left Column: Info */}
              <div className="relative z-10 flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-12">
                  <h2 className="font-['Quicksand',sans-serif] font-bold text-[#cbfc06] text-[41.6px] leading-[49.92px]">
                    Schedule a talent acquisition meeting
                  </h2>
                  
                  <div className="flex flex-col gap-8">
                       <div className="font-['Inter',sans-serif] font-normal text-white text-[14.8px] opacity-100">Give us a call</div>
                       <ContactMethod country="Sri Lanka" phones={["+94 11 488 4774", "+94 11 723 2425"]} />
                       <ContactMethod country="Dubai" phones={["+971 52 232 5425"]} />
                       <ContactMethod country="Singapore" phones={["+65 824 456 500"]} />
                  </div>
              </div>

              {/* Right Column: Form */}
              <div className="relative z-10 flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <form className="flex flex-col gap-8 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <InputField label="First Name" placeholder="First name with initials" isRequired />
                          <InputField label="Last Name" placeholder="Last Name" isRequired />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <InputField label="Email" placeholder="example@email.com" isRequired type="email" />
                          <InputField label="Your Phone" placeholder="+94 1234 12345" type="tel" placeholderSize="13.4px" />
                      </div>

                      <InputField label="Subject" placeholder="I want help with recruitment" />
                      
                      <div className="flex flex-col gap-3 w-full">
                        <label className="font-['Quicksand',sans-serif] font-normal text-white text-[16px]">Message</label>
                        <div className="relative w-full border-b border-white pb-2 mt-2">
                           <textarea 
                             placeholder="Tell us how we can help you today"
                             rows={1}
                             className="bg-transparent border-none outline-none text-white w-full placeholder:text-white/50 font-['Inter',sans-serif] font-normal text-[14.8px] resize-none"
                           />
                        </div>
                      </div>

                      {/* ReCAPTCHA UI */}
                      <div className="bg-white rounded-[3px] p-4 flex items-center justify-between w-[302px] h-[75px] shadow-sm">
                          <div className="flex items-center gap-3">
                              <div className="w-[28px] h-[28px] border-[2px] border-[#d3d3d3] bg-white rounded-[2px] cursor-pointer"></div>
                              <span className="text-black text-[14px] font-['Roboto',sans-serif] font-normal">I'm not a robot</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                              <img src={imgDivRcAnchorLogoImg} className="w-[32px] h-[32px]" alt="reCAPTCHA" />
                              <span className="text-[10px] text-[#555] font-['Roboto',sans-serif] font-normal leading-[10px]">reCAPTCHA</span>
                              <div className="flex gap-1 text-[8px] text-[#555] font-['Roboto',sans-serif] font-normal">
                                  <a href="#" className="hover:underline">Privacy</a>
                                  <span>-</span>
                                  <a href="#" className="hover:underline">Terms</a>
                              </div>
                          </div>
                      </div>

                      <button className="bg-white text-black font-['Quicksand',sans-serif] font-bold py-3 rounded-full hover:bg-gray-100 transition-colors text-[16px] w-full">
                        Submit
                      </button>
                  </form>
              </div>
          </div>
      </div>
    </div>
  );
}