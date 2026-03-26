const mainLinks = [
  { label: 'Home', href: null },
  { label: 'Executive Search', href: null },
  { label: 'Premium Jobs', href: null },
  { label: 'Our Culture', href: 'https://career141.com/our-culture/' },
  { label: 'Our Journey', href: null },
  { label: 'Contact Us', href: null },
]

const serviceLinks = [
  { label: 'Jobs & Vacancies', href: null },
  { label: 'Join us', href: 'https://career141.com/our-culture/' },
]

const contactInfo = [
  { label: 'hello@career141.com', href: 'mailto:hello@career141.com', isLink: true },
  { label: '+94 75 359 5495', href: null, isLink: false },
  { label: '+94 75 577 8899', href: null, isLink: false },
  { label: '+94 11 723 2425', href: null, isLink: false },
  { label: '+94 11 488 4774', href: null, isLink: false },
]

const directions = [
  { label: 'Sri Lanka', href: 'https://maps.app.goo.gl/NCAnkkjgxJmumri38' },
  { label: 'Dubai', href: 'https://maps.app.goo.gl/A8LfqWjLtNY9bexn9' },
  { label: 'Singapore', href: 'https://maps.app.goo.gl/uNRNzjFZMRTbNDUYA' },
]

const socialLinks = [
  { href: 'https://web.facebook.com/career141/', icon: '' },
  { href: 'https://www.instagram.com/life_at_career141/', icon: '' },
  { href: 'https://lk.linkedin.com/company/career-consultants-pvt-ltd', icon: '' },
  { href: 'https://x.com/career141', icon: '' },
  { href: 'https://www.youtube.com/@career141_', icon: '' },
]

export function JobCategoriesSection() {
  return (
    <footer className="flex flex-col w-full items-start gap-5 pt-10 md:pt-[91.24px] pb-8 md:pb-[45.61px] px-4 md:px-[121.66px] bg-career-14-1comwhite">
      <div className="flex flex-col md:flex-row items-start justify-between w-full gap-8 md:gap-0">
        <div className="hidden md:flex flex-col w-[280px] items-start justify-center pr-8 py-0 self-stretch">
          <p className="[font-family:'Quicksand',Helvetica] font-normal text-career141comcape-cod text-[12.8px] tracking-[0] leading-[20.5px]">
            Executive Search remains our primary focus. In a world
            <br />
            where cvs and resumes are available everywhere on the
            <br />
            web, we add value and insight to the identification of
            <br />
            singularly viable candidates that meet your requirements.
            <br />
            At Career141, we develop close and effective working
            <br />
            partnerships with you to ensure we understand your
            <br />
            strategic recruitment plans and search requirements.
          </p>
        </div>

        <div className="flex md:hidden flex-col w-full items-start">
          <p className="[font-family:'Quicksand',Helvetica] font-normal text-career141comcape-cod text-[12.8px] tracking-[0] leading-[20.5px]">
            Executive Search remains our primary focus. In a world where cvs and resumes are available everywhere on the web, we add value and insight to the identification of singularly viable candidates that meet your requirements. At Career141, we develop close and effective working partnerships with you to ensure we understand your strategic recruitment plans and search requirements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:flex md:flex-row md:flex-1 items-start gap-6 md:gap-10 w-full md:w-auto">
          <div className="flex flex-col items-start gap-4 md:gap-5">
            <h3 className="[font-family:'Quicksand',Helvetica] font-bold text-career-14-1comwoodsmoke text-[18px] md:text-[20.8px] tracking-[0] leading-[1.2]">
              Main
            </h3>
            <nav className="flex flex-col items-start gap-3 md:gap-5 w-full">
              {mainLinks.map((link, index) =>
                link.href ? (
                  <a
                    key={index}
                    className="py-[4.8px] [text-shadow:0px_0px_10px_#0000004c] [font-family:'Inter',Helvetica] font-normal text-career-14-1comwoodsmoke text-[13px] md:text-[14px] tracking-[0] leading-[14.4px] whitespace-nowrap"
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span
                    key={index}
                    className="py-[4.8px] [text-shadow:0px_0px_10px_#0000004c] [font-family:'Inter',Helvetica] font-normal text-career-14-1comwoodsmoke text-[13px] md:text-[14px] tracking-[0] leading-[14.4px] whitespace-nowrap"
                  >
                    {link.label}
                  </span>
                ),
              )}
            </nav>
          </div>

          <div className="flex flex-col items-start gap-4 md:gap-5">
            <h3 className="[font-family:'Quicksand',Helvetica] font-bold text-career-14-1comwoodsmoke text-[18px] md:text-[20.8px] tracking-[0] leading-[1.2]">
              Services
            </h3>
            <nav className="flex flex-col items-start gap-3 md:gap-5 w-full">
              {serviceLinks.map((link, index) =>
                link.href ? (
                  <a
                    key={index}
                    className="py-[4.8px] [text-shadow:0px_0px_10px_#0000004c] [font-family:'Inter',Helvetica] font-normal text-career-14-1comwoodsmoke text-[13px] md:text-[13.8px] tracking-[0] leading-[14.4px] whitespace-nowrap"
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span
                    key={index}
                    className="py-[4.8px] [text-shadow:0px_0px_10px_#0000004c] [font-family:'Inter',Helvetica] font-normal text-career-14-1comwoodsmoke text-[13px] md:text-[13.8px] tracking-[0] leading-[14.4px] whitespace-nowrap"
                  >
                    {link.label}
                  </span>
                ),
              )}
            </nav>
          </div>

          <div className="flex flex-col items-start gap-4 md:gap-5">
            <h3 className="[font-family:'Quicksand',Helvetica] font-bold text-career-14-1comwoodsmoke text-[18px] md:text-[20.8px] tracking-[0] leading-[1.2]">
              Get In touch
            </h3>
            <div className="flex flex-col items-start gap-5 md:gap-[32.8px] pt-[9.52px] md:pt-[11.26px] w-full">
              {contactInfo.map((item, index) =>
                item.isLink ? (
                  <a
                    key={index}
                    className="[font-family:'Inter',Helvetica] font-medium text-career-14-1comwoodsmoke text-[11.6px] md:text-[13.2px] tracking-[0] leading-[12.8px] md:leading-[14.4px]"
                    href={item.href || '#'}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    key={index}
                    className="[font-family:'Inter',Helvetica] font-medium text-career-14-1comwoodsmoke text-[11px] md:text-[12.3px] tracking-[0] leading-[12.8px] md:leading-[14.4px]"
                  >
                    {item.label}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 md:gap-5">
            <h3 className="[font-family:'Quicksand',Helvetica] font-bold text-career-14-1comwoodsmoke text-[18px] md:text-[20.8px] tracking-[0] leading-[1.2]">
              Get Directions
            </h3>
            <div className="flex flex-col items-start gap-6 md:gap-9 pt-[12.86px] w-full">
              {directions.map((dir, index) => (
                <a
                  key={index}
                  className="pl-6 md:pl-10 [font-family:'Inter',Helvetica] font-medium text-career-14-1comeden text-[12px] md:text-[13.5px] leading-[14.4px] underline whitespace-nowrap tracking-[0]"
                  href={dir.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {dir.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-5 md:gap-[30px] w-full">
        <div className="bg-[#ececec] h-[1.6px] w-full" />

        <div className="flex flex-col md:flex-row items-center md:justify-between w-full gap-4 md:gap-0">
          <div className="flex-shrink-0 text-center md:text-left">
            <span className="font-career141-com-quicksand-bold font-[number:var(--career141-com-quicksand-bold-font-weight)] text-career-14-1comwoodsmoke text-[length:var(--career141-com-quicksand-bold-font-size)] tracking-[var(--career141-com-quicksand-bold-letter-spacing)] leading-[var(--career141-com-quicksand-bold-line-height)] [font-style:var(--career141-com-quicksand-bold-font-style)]">
              © 2024 Career141 - A Positive Impact
            </span>
          </div>

          <div className="flex items-center justify-center gap-4 md:gap-[30px]">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                className="flex w-[22px] md:w-[25px] h-[22px] md:h-[25px] items-center justify-center bg-career-14-1comwhite rounded-[2.5px] [font-family:'Font_Awesome_5_Brands-Regular',Helvetica] text-career141combottle-green text-[22px] md:text-[25px] leading-[25px] font-normal text-center tracking-[0] whitespace-nowrap"
                href={social.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 md:gap-5">
            <span className="font-career141-com-quicksand-bold font-[number:var(--career141-com-quicksand-bold-font-weight)] text-career-14-1comwoodsmoke text-[length:var(--career141-com-quicksand-bold-font-size)] tracking-[var(--career141-com-quicksand-bold-letter-spacing)] leading-[var(--career141-com-quicksand-bold-line-height)] whitespace-nowrap [font-style:var(--career141-com-quicksand-bold-font-style)]">
              Terms &amp; Conditions
            </span>
            <a
              className="font-career141-com-quicksand-bold font-[number:var(--career141-com-quicksand-bold-font-weight)] text-career-14-1comwoodsmoke text-[length:var(--career141-com-quicksand-bold-font-size)] tracking-[var(--career141-com-quicksand-bold-letter-spacing)] leading-[var(--career141-com-quicksand-bold-line-height)] whitespace-nowrap [font-style:var(--career141-com-quicksand-bold-font-style)]"
              href="https://career141.com/privacy-policy/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
