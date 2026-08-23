"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact({ email, location }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Envoi en cours..." });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: form.subject || "Nouveau message depuis le portfolio",
          from_name: form.name,
          email: form.email,
          ...form,
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message || "Impossible d'envoyer le message.");
      setForm(initialForm);
      setStatus({ type: "success", message: "Message envoyé. Merci, je reviendrai vers vous rapidement." });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Une erreur est survenue. Réessayez dans un instant." });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-intro">
        <p className="eyebrow">Travaillons ensemble</p>
        <div className="contact-title-row"><h2>Un projet data<br /><span>en tête ?</span></h2><div className="section-rule" aria-hidden="true"><span /></div></div>
        <p>Parlons de vos besoins en analyse, reporting, développement logiciel ou application web.</p>
        <div className="contact-details">
          <a href={`mailto:${email}`}><FaEnvelope /> {email}</a>
          <p><FaMapMarkerAlt /> {location}</p>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>Nom<input required name="name" value={form.name} onChange={handleChange} placeholder="Votre nom" /></label>
          <label>Email<input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="vous@exemple.com" /></label>
        </div>
        <label>Sujet<input name="subject" value={form.subject} onChange={handleChange} placeholder="Parlons de votre projet" /></label>
        <label>Message<textarea required name="message" value={form.message} onChange={handleChange} placeholder="Décrivez votre besoin..." rows="5" /></label>
        <motion.button className="submit-button" type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} disabled={status.type === "loading"}>
          {status.type === "loading" ? "Envoi..." : "Envoyer le message"} <FaArrowRight />
        </motion.button>
        <motion.p className={`form-status ${status.type}`} initial={{ opacity: 0, y: 6 }} animate={{ opacity: status.type === "idle" ? 0 : 1, y: 0 }} role="status">{status.message}</motion.p>
      </form>
    </section>
  );
}
