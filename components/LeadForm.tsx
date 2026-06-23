"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

type LeadFormProps = {
  formType: "enterprise" | "contact";
};

export function LeadForm({ formType }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, formType })
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="border border-navy-950/10 bg-mist p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field name="name" label="Name" required />
        <Field name="email" label="Email" type="email" required />
        <Field name="phone" label="Phone" />
        <Field name="organization" label="Organization" />
        {formType === "enterprise" ? (
          <>
            <Field name="position" label="Position" />
            <Field name="interested_program" label="Interested program" />
          </>
        ) : (
          <Field name="partnership_type" label="Partnership type" className="md:col-span-2" />
        )}
        <label className="md:col-span-2">
          <span className="text-sm font-medium text-navy-950">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            className="focus-ring mt-2 w-full border border-navy-950/15 bg-white px-4 py-3 text-sm text-navy-950"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring mt-6 inline-flex items-center justify-center gap-2 bg-navy-950 px-5 py-3 text-sm font-semibold text-white disabled:opacity-60"
      >
        {status === "loading" ? "Sending" : "Submit inquiry"} <Send size={16} />
      </button>
      {status === "success" && <p className="mt-4 text-sm text-navy-950">Thank you. The ARITHAYA team will review your inquiry.</p>}
      {status === "error" && <p className="mt-4 text-sm text-red-700">Please check the required fields and try again.</p>}
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  className = ""
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="text-sm font-medium text-navy-950">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="focus-ring mt-2 w-full border border-navy-950/15 bg-white px-4 py-3 text-sm text-navy-950"
      />
    </label>
  );
}
