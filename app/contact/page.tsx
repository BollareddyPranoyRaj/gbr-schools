// app/contact/page.tsx

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          We are here to answer any questions you may have about GBR Schools. Reach out to us and we&apos;ll respond as soon as we can.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="bg-[var(--color-surface)] border border-gray-200 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-6 border-b border-gray-200 pb-2">Get in Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Campus Address</h3>
                <p className="text-text-muted text-sm mt-1">GBR Group of Schools<br />Anaparthi, East Godavari<br />Andhra Pradesh, India</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Email Us</h3>
                <p className="text-text-muted text-sm mt-1">info@gbrschools.edu.in<br />admissions@gbrschools.edu.in</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Call Us</h3>
                <p className="text-text-muted text-sm mt-1">+91 XXXXX XXXXX<br />+91 XXXXX XXXXX</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[var(--color-surface)] border border-gray-200 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-6 border-b border-gray-200 pb-2">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-main mb-1">Full Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary bg-white text-text-main" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-main mb-1">Email Address</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary bg-white text-text-main" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-main mb-1">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary bg-white text-text-main" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors font-medium">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
