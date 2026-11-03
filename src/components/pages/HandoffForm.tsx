"use client";

import { useState, type FormEvent } from "react";
import { WhatsappLogo, EnvelopeSimple, CheckCircle } from "@phosphor-icons/react";
import { ButtonEl } from "@/components/ui/Button";
import { SITE } from "@/data/site";

type Field = { name: string; label: string; type?: string; required?: boolean; autoComplete?: string; textarea?: boolean; help?: string };
type Errors = Record<string, string>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * There is no server in this project, so forms do not pretend to submit.
 * After validation they open the visitor's email app or WhatsApp with the
 * message prefilled, and say so clearly.
 */
export function HandoffForm({ fields, subject, intro, cta }: { fields: Field[]; subject: string; intro?: string; cta: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<"mail" | "wa" | null>(null);

  const read = (form: HTMLFormElement) => Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
  const validate = (v: Record<string, string>) => {
    const e: Errors = {};
    fields.forEach((f) => {
      const val = (v[f.name] ?? "").trim();
      if (f.required && !val) e[f.name] = `${f.label} is required.`;
      else if (f.type === "email" && val && !emailRe.test(val)) e[f.name] = "Enter a valid email address, like name@example.com.";
      else if (f.type === "tel" && val && val.replace(/\D/g, "").length < 10) e[f.name] = "Enter a phone number with at least 10 digits.";
    });
    return e;
  };
  const body = (v: Record<string, string>) => fields.map((f) => `${f.label}: ${(v[f.name] ?? "").trim() || "-"}`).join("\n");

  const submit = (mode: "mail" | "wa") => (ev: FormEvent<HTMLButtonElement>) => {
    const form = ev.currentTarget.form!;
    const v = read(form);
    const e = validate(v);
    setErrors(e);
    if (Object.keys(e).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(e)[0]}"]`)?.focus();
      return;
    }
    const text = `${subject}\n\n${body(v)}`;
    if (mode === "mail") window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body(v))}`;
    else window.open(`https://wa.me/${SITE.phoneTel.replace("+", "")}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(mode);
  };

  return (
    <form noValidate onSubmit={(e) => e.preventDefault()} className="grid gap-5">
      {intro && <p className="text-[0.95rem] text-ink-2">{intro}</p>}
      {fields.map((f) => {
        const id = `f-${f.name}`;
        const err = errors[f.name];
        const common = {
          id,
          name: f.name,
          required: f.required,
          autoComplete: f.autoComplete,
          "aria-invalid": err ? true : undefined,
          "aria-describedby": [err ? `${id}-e` : "", f.help ? `${id}-h` : ""].filter(Boolean).join(" ") || undefined,
          className: "input",
        } as const;
        return (
          <div className="field" key={f.name}>
            <label htmlFor={id}>
              {f.label}
              {f.required ? <span className="text-green-deep"> *</span> : <span className="font-normal text-mute"> (optional)</span>}
            </label>
            {f.textarea ? <textarea rows={5} {...common} /> : <input type={f.type ?? "text"} inputMode={f.type === "tel" ? "tel" : undefined} {...common} />}
            {f.help && !err && <p id={`${id}-h`} className="text-[0.82rem] text-mute">{f.help}</p>}
            {err && <p id={`${id}-e`} role="alert" className="field-error">{err}</p>}
          </div>
        );
      })}

      <div className="mt-2 flex flex-wrap gap-3">
        <ButtonEl type="button" onClick={submit("mail")}>
          <EnvelopeSimple size={18} weight="bold" className="mr-2 inline -mt-0.5" aria-hidden="true" />
          {cta} by email
        </ButtonEl>
        <ButtonEl type="button" variant="ghost" icon={false} onClick={submit("wa")}>
          <WhatsappLogo size={18} weight="fill" className="mr-2 inline -mt-0.5 text-green-deep" aria-hidden="true" />
          Send on WhatsApp
        </ButtonEl>
      </div>

      <p className="text-[0.82rem] text-mute">This opens your email app or WhatsApp with your message ready to send. Nothing is stored on this website.</p>
      {sent && (
        <p role="status" className="flex items-start gap-2 rounded-2xl bg-mint px-4 py-3 text-[0.92rem] font-medium text-green-ink">
          <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0" aria-hidden="true" />
          {sent === "mail" ? "Your email app should now be open. Press send there to finish." : "WhatsApp should now be open with your message. Press send there to finish."}
        </p>
      )}
    </form>
  );
}
