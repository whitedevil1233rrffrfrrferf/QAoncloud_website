"use client";
import styles from "./ContactSection.module.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    requirements: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `
            Phone: ${formData.phone}
            Company: ${formData.company}
            Role: ${formData.role}
            Requirements: ${formData.requirements}
          `,
        }),
      });

      const data = await res.json();
      if (res.ok) setStatus("✅ Email sent successfully!");
      else setStatus("❌ " + data.error);
    } catch (err) {
      console.error(err);
      setStatus("❌ Something went wrong.");
    }
  };
  return (
    <div className={styles.form} data-aos="fade-left">
      <h2 className={styles.heading}>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={formData.name}
          className={styles.input}
        />
        <input
          type="email"
          placeholder="E-mail"
          onChange={handleChange}
          value={formData.email}
          name="email"
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Phone"
          onChange={handleChange}
          value={formData.phone}
          name="phone"
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Company Name"
          onChange={handleChange}
          value={formData.company}
          name="company"
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Role"
          onChange={handleChange}
          value={formData.role}
          name="role"
          className={styles.input}
        />
        <textarea
          placeholder="Requirements"
          onChange={handleChange}
          name="requirements"
          value={formData.requirements}
          className={styles.textarea}
        ></textarea>

        {/* Replace with real reCAPTCHA component later */}
        <div className={styles.captchaBox}>
          <p
            style={{
              marginTop: "10px",
              color: status.includes("❌") ? "red" : "green",
            }}
          >
            {status}
          </p>
          <div className={styles.fakeCaptcha}>reCAPTCHA box</div>
        </div>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}
