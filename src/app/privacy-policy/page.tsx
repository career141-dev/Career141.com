import type { Metadata } from 'next'
import { Navbar } from '@/components/common/Navbar'
import { CompanyFooter } from '@/components/common'

// The footer has always linked here, and every marketing email points people to it; until 6 Nov 2026 it was a 404.
export const metadata: Metadata = {
  title: 'Privacy Policy | Career141',
  description: 'How Career141 collects, uses and protects personal information, and how to unsubscribe or ask for your data.',
}

const LAST_UPDATED = '6 November 2026'
const CONTACT = 'hello@career141.com'

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: 'Who we are',
    body: (
      <p>
        Career141 is a recruitment and executive search company based in Colombo, Sri Lanka. This policy explains how we
        handle personal information when you use career141.com, apply for a role, work with us as a client, or receive
        emails from us.
      </p>
    ),
  },
  {
    title: 'What we collect',
    body: (
      <ul>
        <li><strong>Contact details</strong>: your name, email address, phone number, company and job title.</li>
        <li><strong>Candidate information</strong>: your CV and the details in it, the roles you apply for, and notes from our conversations with you.</li>
        <li><strong>Enquiries</strong>: what you tell us through our contact and meeting forms.</li>
        <li><strong>Email activity</strong>: whether our emails were delivered, opened or clicked, and whether you unsubscribed.</li>
        <li><strong>Website use</strong>: basic analytics and advertising measurement from Google tags on this site.</li>
      </ul>
    ),
  },
  {
    title: 'How we use it',
    body: (
      <ul>
        <li>To match candidates with roles and share suitable profiles with hiring clients, with the candidate&apos;s knowledge.</li>
        <li>To answer enquiries and provide our recruitment services to clients.</li>
        <li>To send event invitations and business updates to professional contacts. Every such email has an unsubscribe link.</li>
        <li>To keep our records accurate, prevent misuse, and meet our legal obligations.</li>
      </ul>
    ),
  },
  {
    title: 'Emails and unsubscribing',
    body: (
      <p>
        You can stop our marketing emails at any time with the unsubscribe link at the bottom of every email, or by
        writing to {CONTACT}. Once you unsubscribe, or if an email to you bounces or is reported as spam, we stop sending
        you marketing emails.
      </p>
    ),
  },
  {
    title: 'Who we share it with',
    body: (
      <>
        <p>We do not sell personal information. We share it only where needed:</p>
        <ul>
          <li>With hiring clients, for candidates being considered for a role.</li>
          <li>
            With service providers who work for us, such as Amazon Web Services (email delivery), Cloudflare (website
            and file hosting), Microsoft 365 (email) and Google (website analytics).
          </li>
          <li>Where the law requires it.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'How long we keep it',
    body: (
      <p>
        We keep information only as long as we need it for the purposes above, or as the law requires. You can ask us to
        delete your information at any time.
      </p>
    ),
  },
  {
    title: 'Your rights',
    body: (
      <p>
        You can ask us to show you the information we hold about you, correct it, delete it, or stop using it, in line
        with Sri Lanka&apos;s Personal Data Protection Act, No. 9 of 2022. Write to {CONTACT} and we will reply.
      </p>
    ),
  },
  {
    title: 'Contact us',
    body: (
      <p>
        Questions about this policy or your information: <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
      </p>
    ),
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white m-0 p-0">
      <Navbar bgColor="#0F221B" />
      <section className="w-full bg-white pt-32 pb-20">
        <div className="max-w-[780px] mx-auto px-5 [font-family:'Quicksand',Sans-serif] text-[#3f3f46]">
          <h1 className="text-[#37A65E] text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-500">Last updated {LAST_UPDATED}</p>
          {sections.map((s) => (
            <div key={s.title} className="mt-10">
              <h2 className="text-xl font-bold text-[#161618]">{s.title}</h2>
              <div className="mt-3 space-y-3 leading-7 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-[#37A65E] [&_a]:underline">
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CompanyFooter />
    </main>
  )
}
