import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import './style/Contact.css'
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [notName, setNotName] = useState(false)
  const [notEmail, setNotEmail] = useState(false)
  const [notMessage, setNotMessage] = useState(false)

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    form.name ? setNotName(false) : setNotName(true)
    form.email.includes("@") ? setNotEmail(false) : setNotEmail(true)
    form.message ? setNotMessage(false) : setNotMessage(true)

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name === "" || form.email === "" || !form.email.includes("@") || form.message === "") {

      form.name === "" && setNotName(true)
      form.email === "" && setNotEmail(true)
      form.message === "" && setNotMessage(true)

    } else {


      setLoading(true);

      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Ulysses Cortes",
            from_email: form.email,
            to_email: "ulyssescortes13@gmail.com",
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
            alert("Ahh, something went wrong. Please try again.");
          }
        );
    }

  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] -100 p-8 rounded-2xl transparentBack'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {form.name === "" && notName && <p className="formError">Name is required.</p>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />

            {!form.email.includes("@") && notEmail && <p className="formError">Please enter valid email adress.</p>}

          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {form.message === "" && notMessage && <p className="formError">Message is required.</p>}

          </label>

          <button
            type='submit'
            className='py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md  transparentBack sendBtn'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");