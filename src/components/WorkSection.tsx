import { Section } from './Section';
import { work } from '../../content/work';

function StatusPill({ status }: { status: 'live' | 'in progress' }) {
  const isLive = status === 'live';
  return (
    <span
      className={`text-[11px] font-medium tracking-wide px-2 py-0.5 rounded-full whitespace-nowrap ${
        isLive
          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
          : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
      }`}
    >
      {status}
    </span>
  );
}

// Inline SVG showing the LINK routing flow.
// Horizontal layout for ≥400px; vertical for <400px.
function RoutingDiagram() {
  const ariaLabel =
    'Diagram: a business sends NGN to the LINK API, which passes it to an Aggregator. The Aggregator evaluates three providers and selects Provider A (highlighted). Provider A routes the payment to the recipient in one of 10+ African currencies.';

  return (
    <div className="my-6 rounded-md border border-[var(--border)] p-4 bg-[var(--surface)]">
      {/* ─── Horizontal layout (≥400px) ─── */}
      <svg
        role="img"
        aria-label={ariaLabel}
        className="hidden min-[400px]:block w-full"
        viewBox="0 0 560 98"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fontFamily: 'inherit' }}
      >
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="var(--muted)" />
          </marker>
          <marker id="arr-acc" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="var(--accent)" />
          </marker>
        </defs>

        {/* Business (NGN) */}
        <rect x="1" y="35" width="92" height="28" rx="3" fill="var(--bg)" stroke="var(--border)" strokeWidth="1" />
        <text x="47" y="52" textAnchor="middle" fontSize="11" fill="var(--text)">Business</text>
        <text x="47" y="64" textAnchor="middle" fontSize="9" fill="var(--muted)">(NGN)</text>

        {/* Bus → LINK API */}
        <line x1="93" y1="49" x2="113" y2="49" stroke="var(--muted)" strokeWidth="1" markerEnd="url(#arr)" />

        {/* LINK API */}
        <rect x="114" y="35" width="78" height="28" rx="3" fill="var(--bg)" stroke="var(--border)" strokeWidth="1" />
        <text x="153" y="53" textAnchor="middle" fontSize="11" fill="var(--text)">LINK API</text>

        {/* LINK API → Aggregator */}
        <line x1="192" y1="49" x2="207" y2="49" stroke="var(--muted)" strokeWidth="1" markerEnd="url(#arr)" />

        {/* Aggregator */}
        <rect x="207" y="35" width="78" height="28" rx="3" fill="var(--bg)" stroke="var(--border)" strokeWidth="1" />
        <text x="246" y="53" textAnchor="middle" fontSize="11" fill="var(--text)">Aggregator</text>

        {/* Aggregator → Provider A (accent — chosen) */}
        <line x1="285" y1="44" x2="315" y2="21" stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#arr-acc)" />
        {/* Aggregator → Provider B (not chosen) */}
        <line x1="285" y1="49" x2="315" y2="49" stroke="var(--muted)" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arr)" />
        {/* Aggregator → Provider C (not chosen) */}
        <line x1="285" y1="54" x2="315" y2="77" stroke="var(--muted)" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arr)" />

        {/* Provider A — chosen, accent highlight */}
        <rect x="316" y="7" width="104" height="26" rx="3" fill="var(--accent)" fillOpacity="0.12" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="368" y="24" textAnchor="middle" fontSize="11" fill="var(--accent)" fontWeight="600">Provider A ✓</text>

        {/* Provider B — muted */}
        <rect x="316" y="36" width="104" height="26" rx="3" fill="var(--bg)" stroke="var(--border)" strokeWidth="1" />
        <text x="368" y="53" textAnchor="middle" fontSize="11" fill="var(--muted)">Provider B</text>

        {/* Provider C — muted */}
        <rect x="316" y="64" width="104" height="26" rx="3" fill="var(--bg)" stroke="var(--border)" strokeWidth="1" />
        <text x="368" y="81" textAnchor="middle" fontSize="11" fill="var(--muted)">Provider C</text>

        {/* Provider A → Payout */}
        <line x1="420" y1="20" x2="444" y2="43" stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#arr-acc)" />

        {/* Payout label */}
        <text x="447" y="50" fontSize="11" fill="var(--text)" fontWeight="600">Payout</text>
        <text x="447" y="63" fontSize="9" fill="var(--muted)">10+ currencies</text>
      </svg>

      {/* ─── Vertical layout (<400px) ─── */}
      <svg
        role="img"
        aria-label={ariaLabel}
        className="min-[400px]:hidden w-full"
        viewBox="0 0 180 268"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fontFamily: 'inherit' }}
      >
        <defs>
          <marker id="v-arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="var(--muted)" />
          </marker>
          <marker id="v-arr-acc" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="var(--accent)" />
          </marker>
        </defs>

        {/* Business (NGN) */}
        <rect x="40" y="0" width="100" height="28" rx="3" fill="var(--bg)" stroke="var(--border)" strokeWidth="1" />
        <text x="90" y="17" textAnchor="middle" fontSize="11" fill="var(--text)">Business (NGN)</text>

        {/* ↓ */}
        <line x1="90" y1="28" x2="90" y2="50" stroke="var(--muted)" strokeWidth="1" markerEnd="url(#v-arr)" />

        {/* LINK API */}
        <rect x="45" y="52" width="90" height="28" rx="3" fill="var(--bg)" stroke="var(--border)" strokeWidth="1" />
        <text x="90" y="70" textAnchor="middle" fontSize="11" fill="var(--text)">LINK API</text>

        {/* ↓ */}
        <line x1="90" y1="80" x2="90" y2="102" stroke="var(--muted)" strokeWidth="1" markerEnd="url(#v-arr)" />

        {/* Aggregator */}
        <rect x="50" y="104" width="80" height="28" rx="3" fill="var(--bg)" stroke="var(--border)" strokeWidth="1" />
        <text x="90" y="122" textAnchor="middle" fontSize="11" fill="var(--text)">Aggregator</text>

        {/* ↓ chosen path (accent) */}
        <line x1="90" y1="132" x2="90" y2="154" stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#v-arr-acc)" />
        {/* side note: other providers */}
        <text x="2" y="144" fontSize="8" fill="var(--muted)">vs 2 other</text>
        <text x="2" y="153" fontSize="8" fill="var(--muted)">providers</text>

        {/* Provider A (chosen, accent) */}
        <rect x="25" y="156" width="130" height="28" rx="3" fill="var(--accent)" fillOpacity="0.12" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="90" y="174" textAnchor="middle" fontSize="11" fill="var(--accent)" fontWeight="600">Provider A ✓</text>

        {/* ↓ */}
        <line x1="90" y1="184" x2="90" y2="206" stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#v-arr-acc)" />

        {/* Payout */}
        <rect x="25" y="208" width="130" height="28" rx="3" fill="var(--bg)" stroke="var(--border)" strokeWidth="1" />
        <text x="90" y="225" textAnchor="middle" fontSize="11" fill="var(--text)" fontWeight="600">Payout</text>
        <text x="90" y="238" textAnchor="middle" fontSize="9" fill="var(--muted)">10+ currencies</text>
      </svg>
    </div>
  );
}

const featured = work.filter((w) => w.featured);
const compact  = work.filter((w) => !w.featured);

const sectionLabelCls = 'text-[11px] tracking-[0.08em] font-medium uppercase text-[var(--muted)] mb-1 block';

export function WorkSection() {
  return (
    <Section
      id="work"
      kicker="02 · WORK"
      title="Systems I have built that money actually moves through"
      className="mb-16"
    >
      {/* Featured entries */}
      <div className="flex flex-col divide-y divide-[var(--border)]">
        {featured.map((item) => (
          <div key={item.slug} className="py-10 first:pt-0">
            {/* Name + role line */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[17px] font-semibold text-[#343D4D] dark:text-[#F5F0E8] hover:text-[var(--accent)] transition-colors no-underline"
                >
                  {item.name} &rarr;
                </a>
              ) : (
                <h3 className="text-[17px] font-semibold text-[#343D4D] dark:text-[#F5F0E8]">
                  {item.name}
                </h3>
              )}
              <StatusPill status={item.status} />
            </div>
            <p className="text-[13px] text-[var(--muted)] mb-5">
              {item.role}
              {item.years ? ` · ${item.years}` : ''}
            </p>

            {/* Problem */}
            {item.problem && (
              <div className="mb-4">
                <span className={sectionLabelCls}>Problem</span>
                <p className="text-[15px] text-[#343D4D] dark:text-[#F5F0E8] leading-[1.75]">
                  {item.problem}
                </p>
              </div>
            )}

            {/* Built */}
            <div className="mb-4">
              <span className={sectionLabelCls}>Built</span>
              <ul className="flex flex-col gap-2">
                {item.built.map((b) => (
                  <li key={b} className="flex gap-2 text-[15px] text-[#343D4D] dark:text-[#F5F0E8] leading-[1.75]">
                    <span className="text-[var(--muted)] shrink-0 select-none mt-0.5">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagram */}
            {item.diagram && <RoutingDiagram />}

            {/* Result — accent, the line people remember */}
            {item.result && (
              <p className="text-[15px] font-medium text-[var(--accent)] leading-[1.75] mb-4">
                {item.result}
              </p>
            )}

          </div>
        ))}
      </div>

      {/* Also built — compact rows */}
      {compact.length > 0 && (
        <div className="mt-8 pt-8 border-t border-[var(--border)]">
          <p className="text-[13px] tracking-[0.1em] font-medium uppercase text-[var(--muted)] mb-4">
            Also built
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y divide-[var(--border)] lg:divide-y-0">
            {compact.map((item) => (
              <div
                key={item.slug}
                className="flex items-start justify-between gap-4 py-4 min-h-[44px]"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
                    <span className="text-[15px] font-semibold text-[#343D4D] dark:text-[#F5F0E8]">
                      {item.name}
                    </span>
                    <StatusPill status={item.status} />
                  </div>
                  <p className="text-[13px] text-[var(--muted)] leading-snug">{item.built[0]}</p>
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${item.name}`}
                    className="shrink-0 text-[var(--muted)] hover:text-[var(--accent)] transition-colors text-[16px]"
                  >
                    &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
