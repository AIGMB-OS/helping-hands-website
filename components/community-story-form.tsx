"use client";

export function CommunityStoryForm() {
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
        Your Name
        <input
          name="name"
          type="text"
          autoComplete="name"
          required
          className="block h-11 w-full rounded-lg border border-border bg-card px-3 text-base font-normal"
        />
      </label>
      <label className="block space-y-1.5 text-sm font-semibold">
        Your Email
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          className="block h-11 w-full rounded-lg border border-border bg-card px-3 text-base font-normal"
        />
      </label>
      <label className="block space-y-1.5 text-sm font-semibold">
        Person Being Nominated
        <input
          name="nominee"
          type="text"
          required
          className="block h-11 w-full rounded-lg border border-border bg-card px-3 text-base font-normal"
        />
      </label>
      <label className="block space-y-1.5 text-sm font-semibold">
        Why They Deserve Recognition
        <textarea
          name="reason"
          rows={5}
          required
          className="block w-full rounded-lg border border-border bg-card px-3 py-2 text-base font-normal"
        />
      </label>
      <label className="block space-y-1.5 text-sm font-semibold">
        Photo <span className="font-normal text-muted-foreground">(optional)</span>
        <input
          name="photo"
          type="file"
          accept="image/*"
          className="block w-full text-base font-normal"
        />
      </label>
      <button
        type="button"
        className="btn btn-primary"
      >
        Share a Story
      </button>
    </form>
  );
}
