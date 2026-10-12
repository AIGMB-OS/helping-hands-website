"use client";

import { assistanceCategories } from "@/lib/assistance";

export function RequestAssistanceForm() {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      className="space-y-5"
      action="javascript:void(0)"
      method="post"
      onSubmit={onSubmit}
      noValidate
    >
      <p className="text-sm font-semibold text-pine">This form does not submit.</p>
      <label className="block space-y-1.5 text-sm font-semibold">
        Name
        <input
          name="name"
          type="text"
          autoComplete="name"
          required
          className="block h-11 w-full rounded-lg border border-border bg-card px-3 text-base font-normal"
        />
      </label>
      <label className="block space-y-1.5 text-sm font-semibold">
        Email or phone
        <input
          name="reach"
          type="text"
          autoComplete="email"
          required
          className="block h-11 w-full rounded-lg border border-border bg-card px-3 text-base font-normal"
        />
      </label>
      <label className="block space-y-1.5 text-sm font-semibold">
        Type of assistance
        <select
          name="assistance"
          required
          defaultValue=""
          className="block h-11 w-full rounded-lg border border-border bg-card px-3 text-base font-normal"
        >
          <option value="" disabled>
            Choose one
          </option>
          {assistanceCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <label className="block space-y-1.5 text-sm font-semibold">
        Message
        <textarea
          name="message"
          rows={5}
          required
          className="block w-full rounded-lg border border-border bg-card px-3 py-2 text-base font-normal"
        />
      </label>
      <button
        type="button"
        className="btn btn-primary"
      >
        Request Help
      </button>
    </form>
  );
}
