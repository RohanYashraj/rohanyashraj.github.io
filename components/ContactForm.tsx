"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import SuccessMsg from "./SuccessMsg";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const { toast } = useToast();
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
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      if (!formData.Name.trim() || !formData.Email.trim()) {
        toast({
          title: "Error: Something is wrong",
          description: "Please input your name and email to continue",
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
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          // "service_dpajk79",
          // "template_mro3ef3",
          formData,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setSuccess(true);
            setStatus("Success! Your message has been sent.");
            setFormData({
              Name: "",
              Email: "",
              Phone: "",
              Address: "",
              Message: "",
            });
          },
          (error) => {
            console.log("FAILED...", error);
            setStatus("Error! Unable to send your message.");
            toast({
              title: "Server Error! Something went wrong.",
              description: "Email directly to rohanyashraj@gmail.com",
              // variant: "destructive",
            });
          }
        );
    } catch (error) {
      console.error("Data Submitting Error", error);
      setStatus("Error! Something went wrong.");
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
