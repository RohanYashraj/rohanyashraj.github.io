"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import SuccessMsg from "./SuccessMsg";
import emailjs from "@emailjs/browser";
import { useAnalytics } from "@/hooks/use-analytics";

const ContactForm = () => {
  const { toast } = useToast();
  const { trackFormStart, trackFormSubmit, trackFormFieldFocus, trackError } =
    useAnalytics();
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
    Message: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFieldFocus = (fieldName: string) => {
    trackFormFieldFocus("contact_form", fieldName);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Track form submission attempt
    trackFormStart("contact_form");

    try {
      setLoading(true);
      if (!formData.Name.trim() || !formData.Email.trim()) {
        const errorMsg = "Please input your name and email to continue";
        trackFormSubmit("contact_form", false, errorMsg);
        trackError(errorMsg, "form_validation");
        toast({
          title: "Error: Something is wrong",
          description: errorMsg,
          variant: "destructive",
        });
        setLoading(false);
        return;
      }
      const form = new FormData();
      const currentDataTime = new Date().toLocaleString();
      form.append("Name", formData.Name);
      form.append("Email", formData.Email);
      form.append("Phone", formData.Phone);
      form.append("Address", formData.Address);
      form.append("Message", formData.Message);
      form.append("DateTime", currentDataTime);

      // Introduce a minimum delay
      const minDelay = new Promise((resolve) => setTimeout(resolve, 500));

      // Wrap emailjs.send in a promise to handle its result
      const sendEmailPromise = new Promise((resolve, reject) => {
        emailjs
          .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
            formData,
            {
              publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
            }
          )
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              trackFormSubmit("contact_form", true);
              setSuccess(true);
              setStatus("Success! Your message has been sent.");
              setFormData({
                Name: "",
                Email: "",
                Phone: "",
                Address: "",
                Message: "",
              });
              resolve(response); // Resolve the outer promise on success
            },
            (error) => {
              console.log("FAILED...", error);
              const errorMsg = "EmailJS service error";
              trackFormSubmit("contact_form", false, errorMsg);
              trackError(error.toString(), "emailjs_service", {
                service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                response_status: error.status,
              });
              setStatus("Error! Unable to send your message.");
              toast({
                title: "Server Error! Something went wrong.",
                description: "Email directly to rohanyashraj@gmail.com",
              });
              reject(error); // Reject the outer promise on failure
            }
          );
      });

      // Wait for both the email sending and the minimum delay
      await Promise.all([sendEmailPromise, minDelay]);
    } catch (error) {
      // Error handling remains largely the same, but catch block might catch errors from sendEmailPromise rejection
      console.error("Data Submitting Error or EmailJS Failure", error);
      // Avoid setting status if emailjs already set an error status
      if (!status.startsWith("Error!")) {
        setStatus("Error! Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="space-y-4">
      <h3 className="text-2xl md:text-4xl text-lightSky">
        Let&apos;s connect!
      </h3>
      <p>
        Feel free to reach out for collaborations, inquiries, or just to say
        hello!
      </p>
      <>
        {success ? (
          <SuccessMsg status={status} />
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Input
                type="text"
                id="name"
                name="Name"
                // required
                placeholder="Your Name"
                value={formData.Name}
                onChange={handleChange}
                onFocus={() => handleFieldFocus("Name")}
                disabled={loading}
                className="disabled:bg-white/5"
              />
              <Input
                type="email"
                id="email"
                name="Email"
                // required
                placeholder="Email Address"
                value={formData.Email}
                onChange={handleChange}
                onFocus={() => handleFieldFocus("Email")}
                disabled={loading}
                className="disabled:bg-white/5"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Input
                type="text"
                id="phone"
                name="Phone"
                placeholder="Phone number"
                value={formData.Phone}
                onChange={handleChange}
                onFocus={() => handleFieldFocus("Phone")}
                disabled={loading}
                className="disabled:bg-white/5"
              />
              <Input
                type="text"
                id="address"
                name="Address"
                placeholder="Address"
                value={formData.Address}
                onChange={handleChange}
                onFocus={() => handleFieldFocus("Address")}
                disabled={loading}
                className="disabled:bg-white/5"
              />
            </div>
            <Textarea
              name="Message"
              placeholder="Text here"
              rows={5}
              value={formData.Message}
              onChange={handleChange}
              onFocus={() => handleFieldFocus("Message")}
              disabled={loading}
              className="disabled:bg-white/5"
            />
            <Button
              disabled={loading}
              type="submit"
              className="w-full py-4 bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect"
            >
              {loading ? "Submitting message..." : "Send Message"}
            </Button>
          </form>
        )}
      </>
    </div>
  );
};

export default ContactForm;
