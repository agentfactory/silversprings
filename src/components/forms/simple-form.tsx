"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle } from "lucide-react";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  placeholder?: string;
};

export function SimpleForm({
  endpoint,
  fields,
  submitLabel = "Send",
  successMessage = "Thanks — we'll be in touch within a few days.",
}: {
  endpoint: string;
  fields: Field[];
  submitLabel?: string;
  successMessage?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("ok");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-[1.25rem] bg-sage-100 p-6 flex items-start gap-3">
        <CheckCircle2 className="h-5 w-5 text-sage-700 mt-0.5 shrink-0" />
        <p className="text-ink leading-relaxed">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {fields.map((f) => (
        <div key={f.name}>
          <label htmlFor={f.name} className="block text-sm font-medium text-ink mb-1.5">
            {f.label}
            {f.required && <span className="text-terracotta-600" aria-hidden> *</span>}
          </label>
          {f.type === "textarea" ? (
            <textarea
              id={f.name}
              name={f.name}
              required={f.required}
              placeholder={f.placeholder}
              rows={5}
              className="w-full rounded-xl bg-cream px-4 py-3 border border-line focus:border-sage-700 focus:ring-2 focus:ring-sage-700/20 outline-none transition-colors"
            />
          ) : (
            <input
              id={f.name}
              name={f.name}
              type={f.type || "text"}
              required={f.required}
              placeholder={f.placeholder}
              className="w-full rounded-xl bg-cream px-4 py-3 border border-line focus:border-sage-700 focus:ring-2 focus:ring-sage-700/20 outline-none transition-colors"
            />
          )}
        </div>
      ))}

      {status === "error" && (
        <div className="rounded-xl bg-terracotta-100 p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-terracotta-700 mt-0.5 shrink-0" />
          <p className="text-sm text-terracotta-700">{error}</p>
        </div>
      )}

      <Button type="submit" size="lg" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : submitLabel}
      </Button>
    </form>
  );
}
