import { Clock3, MapPin, Phone } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="bg-[#090909] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#e50914]">
              FIND US
            </p>

            <h2 className="mt-4 font-display text-6xl font-black uppercase leading-none sm:text-7xl">
              Start
              <span className="block text-gray-500">Today.</span>
            </h2>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <MapPin className="shrink-0 text-[#e50914]" />

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Address
                  </p>

                  <p className="mt-1 text-sm leading-6">
                    Main Market, Jhansi,
                    <br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="shrink-0 text-[#e50914]" />

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm">+91 99999 99999</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock3 className="shrink-0 text-[#e50914]" />

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Opening Hours
                  </p>

                  <p className="mt-1 text-sm leading-6">
                    Monday – Sunday
                    <br />
                    5:00 AM – 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+919999999999"
                className="flex items-center justify-center gap-2 bg-[#e50914] px-6 py-4 text-xs font-black tracking-widest transition hover:bg-red-700"
              >
                <Phone size={15} />
                CALL NOW
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 border border-white/20 px-6 py-4 text-xs font-black tracking-widest transition hover:border-[#e50914]"
              >
                WHATSAPP
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="min-h-[450px] overflow-hidden border border-white/10 bg-black">
            <iframe
              title="Gym Location"
              src="https://www.google.com/maps?q=Jhansi,Uttar%20Pradesh&output=embed"
              className="h-full min-h-[450px] w-full border-0 grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;