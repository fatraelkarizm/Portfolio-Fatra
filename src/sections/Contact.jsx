import {
  Instagram,
  Linkedin,
  Mail,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { SectionWrapper } from "@/hoc";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // <--- State baru untuk modal
  const [formData, setFormData] = useState(
    {
      name: "",
      email: "",
      message: "",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        console.log('EmailJS Success:', result.text);
        toast({
          title: "Message sent!",
          description: "Thank you for your message.",
          variant: "default",
        });
        setFormData({ // Reset form data
          name: "",
          email: "",
          message: "",
        });
        setShowSuccessModal(true); // <--- Tampilkan modal setelah sukses
      })
      .catch((error) => {
        console.error('EmailJS Error:', error.text || error);
        toast({
          title: "Failed to send message.",
          description: "There was an error sending your message. Please try again.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const closeModal = () => { // <--- Fungsi untuk menutup modal
    setShowSuccessModal(false);
  };

  return (
    <section id="contact" className="py-18 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-purple-600"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ready to collaborate or have an exciting project in mind? Let's
          <span className="font-bold"> connect!</span> I'm eager to explore new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            className=" p-8 rounded-lg shadow-xs"
          >
            <h3 className="text-2xl font-semibold mb-6"> Send Me a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Section Value */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  value={formData.name}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="e.g. Fatra Al Khawarizmi"  
                  autoComplete="name"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* Gmail Section Value */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="example@gmail.com"
                  autoComplete="email"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Message Section Value */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about Frontend Job..."
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "btn border-2 border-purple-600 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-purple-600 transition duration-500 hover:text-white hover:font-bold",
                  "w-fit mx-auto",
                  "md:ml-auto md:w-full",
                  isSubmitting ? "cursor-not-allowed opacity-70" : "cursor-pointer"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </div>
          <div>
            <img
              src="/assets/coding-pov.webp"
              alt="coding"
              width="1328"
              height="813"
              className="w-full md:w-fit lg:w-fit"
            />
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center text-[18px]"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center ">
                <a href="https://www.linkedin.com/in/fatra-al-khawarizmi-bb6953280/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500" aria-label="LinkedIn Profile">
                  <Linkedin />
                </a>
                <a href="https://x.com/fatraelkarizm?t=JpX8mwb8c-uu4X7lfZxnrA&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500" aria-label="Twitter Profile">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/fatra.elkarizm/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500" aria-label="Instagram Profile">
                  <Instagram />
                </a>
                <a href="https://contacts.google.com/person/101781252283831226401?hl=in&authuser=0" target="_blank" rel="noopener noreferrer" className="hover:text-red-500" aria-label="Email Contact">
                  <Mail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Modal Popup --- */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-card text-foreground p-8 rounded-lg shadow-lg max-w-sm w-full text-center border border-input">
            <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
            <p className="text-muted-foreground mb-6">
              Thank you for your message. I'll respond as soon as possible.
            </p>
            <button
              onClick={closeModal}
              className="cosmic-button px-6 py-2 rounded-md text-sm font-medium bg-purple-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionWrapper(Contact, "contact");