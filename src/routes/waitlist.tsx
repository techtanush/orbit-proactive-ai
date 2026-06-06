import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/waitlist")({
  head: () => ({
    meta: [
      { title: "Join the waitlist — Orbit AI" },
      { name: "description", content: "Be the first to wear the future. Join the Orbit AI waitlist." },
      { property: "og:title", content: "Join the waitlist — Orbit AI" },
      { property: "og:description", content: "Be the first to wear the future." },
    ],
  }),
  component: Waitlist,
});

function Waitlist() {
  useReveal();
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center reveal">
          <div className="text-xs font-medium text-lime tracking-[0.2em] uppercase">Waitlist</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
            Be the first to <span className="text-lime text-glow">wear the future.</span>
          </h1>
          <p className="mt-4 text-muted-foreground">Join the Orbit AI waitlist.</p>
        </div>

        <form
          className="reveal mt-12 card-surface rounded-2xl p-8 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            (e.currentTarget as HTMLFormElement).reset();
            alert("Thanks! You're on the Orbit AI waitlist.");
          }}
        >
          <Field label="Full Name" name="fullName" placeholder="Ada Lovelace" required />
          <Field label="Email Address" name="email" type="email" placeholder="you@domain.com" required />
          <div>
            <label className="text-sm font-medium">What best describes you?</label>
            <select name="role" required defaultValue=""
              className="mt-2 w-full rounded-xl bg-input border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-lime/50 focus:ring-2 focus:ring-lime/20 transition">
              <option value="" disabled>Select one…</option>
              <option>Student</option>
              <option>Founder</option>
              <option>Builder</option>
              <option>Professional</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">
              What's the one task you wish just happened automatically?{" "}
              <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <input name="dreamTask" placeholder="e.g. replying to emails"
              className="mt-2 w-full rounded-xl bg-input border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-lime/50 focus:ring-2 focus:ring-lime/20 transition" />
          </div>
          <button type="submit"
            className="w-full mt-2 rounded-xl bg-lime px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-5px_#ffffff] hover:shadow-[0_0_70px_-5px_#ffffff] transition-all">
            Join waitlist
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name} type={type} placeholder={placeholder} required={required}
        className="mt-2 w-full rounded-xl bg-input border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-lime/50 focus:ring-2 focus:ring-lime/20 transition"
      />
    </div>
  );
}
