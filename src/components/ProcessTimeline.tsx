import type { ProcessStep } from "@/lib/about";
import Icon from "@/components/Icon";

export default function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="mt-10 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.step} className="relative pl-16 lg:pl-0 lg:pt-20">
          {/* connector: vertical rail on mobile, horizontal rail on desktop */}
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute left-[22px] top-12 h-[calc(100%+2.5rem-3rem)] w-px bg-border lg:left-6 lg:right-0 lg:top-[22px] lg:h-px lg:w-auto"
            />
          )}

          {/* marker */}
          <span className="absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-full bg-teal text-white ring-4 ring-paper">
            <Icon name={step.icon} className="h-5 w-5" />
          </span>

          <p className="text-xs font-bold uppercase tracking-widest text-teal">
            {step.step}
          </p>
          <p className="mt-1 text-lg font-extrabold text-heading">{step.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-text-muted">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
