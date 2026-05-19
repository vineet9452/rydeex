import { Check, Minus } from "lucide-react";
import type { EVModel } from "@/lib/models";

interface Props {
  model: EVModel;
}

export default function ComparisonTable({ model }: Props) {
  const rangeKm =
    parseInt(model.quickSpecs.find((s) => s.label === "Range")?.value ?? "100");
  const batteryKwh =
    parseFloat(model.quickSpecs.find((s) => s.label === "Battery")?.value ?? "4");
  const evCostPerKm = (batteryKwh / rangeKm) * 8;

  const PETROL_PER_KM = 3.5;
  const DAILY_KM = 40;
  const WORKING_DAYS = 26;

  const evMonthly = Math.round(DAILY_KM * WORKING_DAYS * evCostPerKm + 150);
  const petrolMonthly = Math.round(DAILY_KM * WORKING_DAYS * PETROL_PER_KM + 500);
  const annualSavings = (petrolMonthly - evMonthly) * 12;

  const fmt = (n: number) => n.toLocaleString("en-IN", { maximumFractionDigits: 0 });
  const warranty = model.warranty ?? "2 Years";

  const rows: {
    label: string;
    ev: string;
    petrol: string;
    evWins: boolean;
  }[] = [
    {
      label: "Purchase Price",
      ev: model.price,
      petrol: "~₹85,000",
      evWins: false,
    },
    {
      label: "Running Cost / km",
      ev: `₹${evCostPerKm.toFixed(2)}`,
      petrol: "₹3.50",
      evWins: true,
    },
    {
      label: "Monthly Running (40km/day)",
      ev: `₹${fmt(evMonthly)}`,
      petrol: `₹${fmt(petrolMonthly)}`,
      evWins: true,
    },
    {
      label: "Annual Running Savings",
      ev: `₹${fmt(annualSavings)}+`,
      petrol: "—",
      evWins: true,
    },
    {
      label: "Maintenance / Year",
      ev: "~₹2,000",
      petrol: "~₹8,000",
      evWins: true,
    },
    {
      label: "CO₂ Emissions",
      ev: "Zero",
      petrol: "~1.2 T / year",
      evWins: true,
    },
    {
      label: "Govt. Subsidy",
      ev: "FAME-II Eligible",
      petrol: "None",
      evWins: true,
    },
    {
      label: "Warranty",
      ev: warranty,
      petrol: "1–2 Years",
      evWins: true,
    },
  ];

  return (
    <section className="py-24 bg-[#f5f5f7]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-14">
          <p className="eyebrow text-accent-red mb-3">The Smart Switch</p>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-gray-900">
            EV vs Petrol.{" "}
            <span className="text-gradient-red">No Contest.</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm max-w-md mx-auto">
            Numbers don&apos;t lie. See why switching to the {model.name.replace("RYDEEX ", "")} makes
            financial sense from day one.
          </p>
        </div>

        {/* Table — horizontal scroll on small screens */}
        <div
          className="max-w-3xl mx-auto rounded-3xl overflow-hidden border border-gray-200 shadow-sm"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          <div className="overflow-x-auto">
            <div style={{ minWidth: "480px" }}>
              {/* Column headers */}
              <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-gray-900">
                <div className="px-4 py-3 sm:px-5 sm:py-4 border-r border-white/10">
                  <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                    Category
                  </span>
                </div>
                <div className="px-4 py-3 sm:px-5 sm:py-4 border-r border-white/10 text-center">
                  <span
                    className="text-xs font-black uppercase tracking-wider font-montserrat"
                    style={{ color: model.accentColor }}
                  >
                    {model.name.replace("RYDEEX ", "")}
                  </span>
                </div>
                <div className="px-4 py-3 sm:px-5 sm:py-4 text-center">
                  <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                    Petrol 100cc
                  </span>
                </div>
              </div>

              {/* Rows */}
              {rows.map((row, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-[1.2fr_1fr_1fr] border-t border-gray-100 ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                  }`}
                >
                  {/* Label */}
                  <div className="px-4 py-3 sm:px-5 sm:py-4 border-r border-gray-100">
                    <span className="text-gray-600 text-xs sm:text-sm font-medium">{row.label}</span>
                  </div>

                  {/* EV value */}
                  <div className="px-3 py-3 sm:px-5 sm:py-4 border-r border-gray-100 flex items-center justify-center gap-1.5">
                    {row.evWins && (
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${model.accentColor}20` }}
                      >
                        <Check size={10} style={{ color: model.accentColor }} strokeWidth={3} />
                      </span>
                    )}
                    <span
                      className="font-bold text-xs sm:text-sm text-center"
                      style={row.evWins ? { color: model.accentColor } : { color: "#111827" }}
                    >
                      {row.ev}
                    </span>
                  </div>

                  {/* Petrol value */}
                  <div className="px-3 py-3 sm:px-5 sm:py-4 flex items-center justify-center gap-1.5">
                    {row.evWins && (
                      <span className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <Minus size={10} className="text-gray-400" strokeWidth={3} />
                      </span>
                    )}
                    <span className="text-gray-500 text-xs sm:text-sm text-center">{row.petrol}</span>
                  </div>
                </div>
              ))}

              {/* Footer note */}
              <div className="bg-gray-900 px-5 py-3 text-center">
                <p className="text-gray-500 text-[10px]">
                  * Running cost estimates based on 40km/day, 26 days/month. Petrol @ ₹140/L, 40 kmpl.
                  Electricity @ ₹8/unit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
