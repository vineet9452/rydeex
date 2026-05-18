export interface ModelSpec {
  label: string;
  value: string;
  unit?: string;
}

export interface ModelColor {
  name: string;
  hex: string;
}

export interface EVModel {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tag: string | null;
  tagColor: string;
  highlight: string;
  image: string;
  heroAccent: string;         // CSS gradient string for hero bg
  accentColor: string;        // Tailwind color token

  price: string;
  priceNote: string;

  quickSpecs: { label: string; value: string; icon: string }[];

  specs: {
    category: string;
    items: ModelSpec[];
  }[];

  features: {
    title: string;
    desc: string;
    icon: string;
  }[];

  colors: ModelColor[];

  whyThis: string[];
}

export const models: EVModel[] = [
  {
    slug: "x1-pro",
    name: "RYDEEX X1 Pro",
    tagline: "The Everyday Champion.",
    description:
      "The X1 Pro is engineered for the daily warrior. With a 120 km certified range, advanced CBS braking, and a full-color smart dashboard — it's the scooter that keeps pace with your life without costing the earth.",
    tag: "New Arrival",
    tagColor: "bg-accent-yellow text-black",
    highlight: "Best Seller",
    image: "/evies/ev1.png",
    heroAccent: "from-red-950/40 via-gray-950 to-gray-950",
    accentColor: "#dd2b1c",

    price: "₹95,000",
    priceNote: "Ex-showroom · Greater Noida",

    quickSpecs: [
      { label: "Top Speed", value: "80 km/h",  icon: "⚡" },
      { label: "Range",     value: "120 km",   icon: "🔋" },
      { label: "Battery",   value: "4 kWh",    icon: "🔌" },
      { label: "Charge",    value: "4 hrs",    icon: "⏱" }
    ],

    specs: [
      {
        category: "Performance",
        items: [
          { label: "Motor Type",    value: "BLDC Hub Motor" },
          { label: "Peak Power",    value: "3000", unit: "W" },
          { label: "Top Speed",     value: "80",   unit: "km/h" },
          { label: "Acceleration",  value: "0–40 in 4.2", unit: "sec" }
        ]
      },
      {
        category: "Battery & Range",
        items: [
          { label: "Battery Capacity", value: "4",   unit: "kWh" },
          { label: "Certified Range",  value: "120", unit: "km" },
          { label: "Charge Time",      value: "4",   unit: "hrs" },
          { label: "Charging",         value: "Standard 5A Home Plug" }
        ]
      },
      {
        category: "Build & Dimensions",
        items: [
          { label: "Kerb Weight", value: "110",  unit: "kg" },
          { label: "Seat Height", value: "770",  unit: "mm" },
          { label: "Boot Space",  value: "24",   unit: "L" },
          { label: "Brakes",      value: "CBS Disc/Drum" }
        ]
      },
      {
        category: "Technology",
        items: [
          { label: "Display",     value: "7\" Full-Color TFT" },
          { label: "Navigation",  value: "Turn-by-Turn GPS" },
          { label: "Connectivity", value: "Bluetooth 5.0" },
          { label: "Modes",       value: "Eco · City · Sport" }
        ]
      }
    ],

    features: [
      {
        title: "120 KM Real Range",
        desc: "Tested in Indian urban conditions. No range anxiety on your daily commute — ever.",
        icon: "🔋"
      },
      {
        title: "7\" TFT Smart Display",
        desc: "Full-color dashboard with GPS, ride stats, battery state, and Bluetooth media controls.",
        icon: "📱"
      },
      {
        title: "CBS Braking System",
        desc: "Combined Braking System ensures optimum stopping power and stability in all conditions.",
        icon: "🛑"
      },
      {
        title: "3 Ride Modes",
        desc: "Switch between Eco, City, and Sport to match your mood and traffic conditions.",
        icon: "⚡"
      },
      {
        title: "24L Under-Seat Boot",
        desc: "Industry-leading storage space. Fits a full-face helmet with room to spare.",
        icon: "🎒"
      },
      {
        title: "Plug & Charge Anywhere",
        desc: "Standard 5A socket charging — use any home or office plug. No special equipment needed.",
        icon: "🔌"
      }
    ],

    colors: [
      { name: "Matte Blaze Red",  hex: "#c0392b" },
      { name: "Matte Obsidian",   hex: "#1a1a1a" },
      { name: "Pearl White",      hex: "#f5f5f0" }
    ],

    whyThis: [
      "Best range-to-price ratio in its class",
      "Lowest running cost in Greater Noida",
      "Most popular model — 1,200+ units sold",
      "3-year comprehensive warranty included"
    ]
  },

  {
    slug: "city-lite",
    name: "RYDEEX City Lite",
    tagline: "Light. Smart. Unstoppable.",
    description:
      "Built for the city's chaos. The City Lite is nimble, lightweight, and perfectly tuned for stop-go traffic, tight lanes, and short commutes. Park it anywhere. Charge it anywhere. Love it everywhere.",
    tag: null,
    tagColor: "",
    highlight: "City Favourite",
    image: "/evies/ev2.png",
    heroAccent: "from-slate-900/60 via-gray-950 to-gray-950",
    accentColor: "#3c2b99",

    price: "₹72,000",
    priceNote: "Ex-showroom · Greater Noida",

    quickSpecs: [
      { label: "Top Speed", value: "60 km/h",  icon: "⚡" },
      { label: "Range",     value: "90 km",    icon: "🔋" },
      { label: "Battery",   value: "3 kWh",    icon: "🔌" },
      { label: "Charge",    value: "3.5 hrs",  icon: "⏱" }
    ],

    specs: [
      {
        category: "Performance",
        items: [
          { label: "Motor Type",   value: "BLDC Hub Motor" },
          { label: "Peak Power",   value: "2000", unit: "W" },
          { label: "Top Speed",    value: "60",   unit: "km/h" },
          { label: "Acceleration", value: "0–40 in 6.1", unit: "sec" }
        ]
      },
      {
        category: "Battery & Range",
        items: [
          { label: "Battery Capacity", value: "3",   unit: "kWh" },
          { label: "Certified Range",  value: "90",  unit: "km" },
          { label: "Charge Time",      value: "3.5", unit: "hrs" },
          { label: "Charging",         value: "Standard 5A Home Plug" }
        ]
      },
      {
        category: "Build & Dimensions",
        items: [
          { label: "Kerb Weight", value: "95",   unit: "kg" },
          { label: "Seat Height", value: "755",  unit: "mm" },
          { label: "Boot Space",  value: "20",   unit: "L" },
          { label: "Brakes",      value: "Front Disc / Rear Drum" }
        ]
      },
      {
        category: "Technology",
        items: [
          { label: "Display",      value: "5\" Digital LCD" },
          { label: "Navigation",   value: "Companion App" },
          { label: "Connectivity", value: "Bluetooth 4.2" },
          { label: "Modes",        value: "Eco · City" }
        ]
      }
    ],

    features: [
      {
        title: "95 KG Kerb Weight",
        desc: "Feather-light for a scooter. Manoeuvre effortlessly in bumper-to-bumper traffic and tight parking.",
        icon: "🪶"
      },
      {
        title: "90 KM City Range",
        desc: "Covers your full daily commute and back — with battery to spare for evening errands.",
        icon: "🔋"
      },
      {
        title: "App-Connected Ride",
        desc: "Live trip stats, charging history, and remote diagnostics via the RYDEEX companion app.",
        icon: "📱"
      },
      {
        title: "3.5-Hour Full Charge",
        desc: "Fastest in its segment. Plug in after dinner and wake up to a full battery every morning.",
        icon: "⚡"
      },
      {
        title: "20L Boot Space",
        desc: "Compact outside, spacious inside. Fits daily groceries, a laptop bag, or your gym gear.",
        icon: "🎒"
      },
      {
        title: "₹72,000 Starting Price",
        desc: "The most affordable RYDEEX — with zero compromises on quality or safety.",
        icon: "💰"
      }
    ],

    colors: [
      { name: "Matte Midnight Black", hex: "#111111" },
      { name: "Midnight Blue",        hex: "#1a237e" },
      { name: "Slate Grey",           hex: "#607d8b" }
    ],

    whyThis: [
      "Lightest scooter in the RYDEEX lineup",
      "Ideal for 15–30 km daily commutes",
      "Lowest purchase price — best entry EV",
      "2-year battery + motor warranty"
    ]
  },

  {
    slug: "rs-max",
    name: "RYDEEX RS MAX",
    tagline: "For Those Who Refuse to Slow Down.",
    description:
      "The RS MAX is not a scooter. It's a statement. 5000W motor. 105 km/h top speed. 160 km certified range. If you want the best electric two-wheeler money can buy in Greater Noida — this is it.",
    tag: "Performance",
    tagColor: "bg-accent-red text-white",
    highlight: "Flagship",
    image: "/evies/ev3.png",
    heroAccent: "from-blue-950/50 via-gray-950 to-gray-950",
    accentColor: "#1565c0",

    price: "₹1,45,000",
    priceNote: "Ex-showroom · Greater Noida",

    quickSpecs: [
      { label: "Top Speed", value: "105 km/h", icon: "⚡" },
      { label: "Range",     value: "160 km",   icon: "🔋" },
      { label: "Battery",   value: "6 kWh",    icon: "🔌" },
      { label: "Charge",    value: "5 hrs",    icon: "⏱" }
    ],

    specs: [
      {
        category: "Performance",
        items: [
          { label: "Motor Type",   value: "High-Torque BLDC Hub Motor" },
          { label: "Peak Power",   value: "5000", unit: "W" },
          { label: "Top Speed",    value: "105",  unit: "km/h" },
          { label: "Acceleration", value: "0–60 in 4.8", unit: "sec" }
        ]
      },
      {
        category: "Battery & Range",
        items: [
          { label: "Battery Capacity", value: "6",   unit: "kWh" },
          { label: "Certified Range",  value: "160", unit: "km" },
          { label: "Charge Time",      value: "5",   unit: "hrs" },
          { label: "Charging",         value: "Fast Charge 15A Compatible" }
        ]
      },
      {
        category: "Build & Dimensions",
        items: [
          { label: "Kerb Weight", value: "135",  unit: "kg" },
          { label: "Seat Height", value: "790",  unit: "mm" },
          { label: "Boot Space",  value: "28",   unit: "L" },
          { label: "Brakes",      value: "Dual CBS Hydraulic Disc" }
        ]
      },
      {
        category: "Technology",
        items: [
          { label: "Display",      value: "10.2\" Full-Color TFT" },
          { label: "Navigation",   value: "Built-in GPS + Live Traffic" },
          { label: "Connectivity", value: "Bluetooth 5.2 + WiFi OTA" },
          { label: "Modes",        value: "Eco · City · Sport · Ludicrous" }
        ]
      }
    ],

    features: [
      {
        title: "160 KM Flagship Range",
        desc: "Intercity capable. Delhi to Greater Noida and back — twice — on a single charge.",
        icon: "🔋"
      },
      {
        title: "105 KM/H Top Speed",
        desc: "Outruns traffic. Keeps pace on highways. The RS MAX doesn't just commute — it dominates.",
        icon: "🏁"
      },
      {
        title: "Ludicrous Mode",
        desc: "Unleash the full 5000W with zero restrictions. For track days and open roads only.",
        icon: "⚡"
      },
      {
        title: "10.2\" TFT Cockpit Display",
        desc: "Largest display in its class. OTA updates, live navigation, and full ride telemetry.",
        icon: "📱"
      },
      {
        title: "Dual Hydraulic Disc Brakes",
        desc: "Massive stopping power for a scooter that actually goes fast. Your safety is the priority.",
        icon: "🛑"
      },
      {
        title: "Fast Charge Ready",
        desc: "15A fast charging slashes charge time. Stop for 90 minutes, get 80% back.",
        icon: "🔌"
      }
    ],

    colors: [
      { name: "Racing Blue",   hex: "#1565c0" },
      { name: "Phantom Black", hex: "#0d0d0d" },
      { name: "Slate Gunmetal", hex: "#37474f" }
    ],

    whyThis: [
      "Fastest EV scooter available in Greater Noida",
      "160 km range — best in segment by 25%",
      "OTA software updates — gets better over time",
      "5-year flagship warranty package"
    ]
  },

  {
    slug: "eco-plus",
    name: "RYDEEX Eco Plus",
    tagline: "Sustainable & Stylish.",
    description: "The Eco Plus combines eco-friendly commuting with smooth curves and an elegant look. Perfect for daily commutes with a focus on sustainability.",
    tag: "Eco Friendly",
    tagColor: "bg-emerald-500 text-white",
    highlight: "Green Ride",
    image: "/evies/ev4.png",
    heroAccent: "from-emerald-950/40 via-gray-950 to-gray-950",
    accentColor: "#10b981",

    price: "₹65,000",
    priceNote: "Ex-showroom · Greater Noida",

    quickSpecs: [
      { label: "Top Speed", value: "55 km/h", icon: "⚡" },
      { label: "Range",     value: "100 km",  icon: "🔋" },
      { label: "Battery",   value: "3.2 kWh", icon: "🔌" },
      { label: "Charge",    value: "4.5 hrs", icon: "⏱" }
    ],

    specs: [
      {
        category: "Performance",
        items: [
          { label: "Motor Type",   value: "BLDC Hub Motor" },
          { label: "Peak Power",   value: "1500", unit: "W" },
          { label: "Top Speed",    value: "55",  unit: "km/h" },
          { label: "Acceleration", value: "0–40 in 7.0", unit: "sec" }
        ]
      },
      {
        category: "Battery & Range",
        items: [
          { label: "Battery Capacity", value: "3.2",   unit: "kWh" },
          { label: "Certified Range",  value: "100", unit: "km" },
          { label: "Charge Time",      value: "4.5",   unit: "hrs" },
          { label: "Charging",         value: "Standard 5A" }
        ]
      },
      {
        category: "Build & Dimensions",
        items: [
          { label: "Kerb Weight", value: "90",  unit: "kg" },
          { label: "Seat Height", value: "760",  unit: "mm" },
          { label: "Boot Space",  value: "22",   unit: "L" },
          { label: "Brakes",      value: "Dual Drum" }
        ]
      },
      {
        category: "Technology",
        items: [
          { label: "Display",      value: "LCD Dashboard" },
          { label: "Navigation",   value: "N/A" },
          { label: "Connectivity", value: "Basic App" },
          { label: "Modes",        value: "Eco · Normal" }
        ]
      }
    ],

    features: [
      { title: "Eco-Friendly", desc: "Designed with sustainable materials.", icon: "🌱" },
      { title: "High Efficiency", desc: "Optimized battery for maximum range.", icon: "🔋" }
    ],

    colors: [
      { name: "Mint Green", hex: "#a7f3d0" },
      { name: "Matte White", hex: "#ffffff" }
    ],

    whyThis: [
      "Environmentally conscious design",
      "Very affordable pricing",
      "Reliable and lightweight"
    ]
  },

  {
    slug: "turbo-s",
    name: "RYDEEX Turbo S",
    tagline: "Track-ready Performance.",
    description: "Racing-inspired design with an aggressive stance and premium sport look. Unleash maximum speed with the Turbo S.",
    tag: "Top Speed",
    tagColor: "bg-orange-500 text-white",
    highlight: "Race Edition",
    image: "/evies/ev5.png",
    heroAccent: "from-orange-950/40 via-gray-950 to-gray-950",
    accentColor: "#f97316",

    price: "₹1,65,000",
    priceNote: "Ex-showroom · Greater Noida",

    quickSpecs: [
      { label: "Top Speed", value: "120 km/h", icon: "⚡" },
      { label: "Range",     value: "180 km",   icon: "🔋" },
      { label: "Battery",   value: "7.2 kWh",  icon: "🔌" },
      { label: "Charge",    value: "6 hrs",    icon: "⏱" }
    ],

    specs: [
      {
        category: "Performance",
        items: [
          { label: "Motor Type",   value: "PMSM Mid-Drive Motor" },
          { label: "Peak Power",   value: "8000", unit: "W" },
          { label: "Top Speed",    value: "120",  unit: "km/h" },
          { label: "Acceleration", value: "0–60 in 3.9", unit: "sec" }
        ]
      },
      {
        category: "Battery & Range",
        items: [
          { label: "Battery Capacity", value: "7.2",   unit: "kWh" },
          { label: "Certified Range",  value: "180", unit: "km" },
          { label: "Charge Time",      value: "6",   unit: "hrs" },
          { label: "Charging",         value: "Fast Charge 20A Compatible" }
        ]
      },
      {
        category: "Build & Dimensions",
        items: [
          { label: "Kerb Weight", value: "145",  unit: "kg" },
          { label: "Seat Height", value: "795",  unit: "mm" },
          { label: "Boot Space",  value: "25",   unit: "L" },
          { label: "Brakes",      value: "Dual Hydraulic Disc" }
        ]
      },
      {
        category: "Technology",
        items: [
          { label: "Display",      value: "12\" Full-Color TFT" },
          { label: "Navigation",   value: "Built-in GPS + Live Traffic" },
          { label: "Connectivity", value: "Bluetooth 5.2 + WiFi OTA" },
          { label: "Modes",        value: "City · Sport · Track" }
        ]
      }
    ],

    features: [
      { title: "Mid-Drive Motor", desc: "For optimal weight distribution and performance.", icon: "⚙️" },
      { title: "Track Mode", desc: "Unlock maximum torque for unparalleled acceleration.", icon: "🏁" }
    ],

    colors: [
      { name: "Neon Orange", hex: "#fb923c" },
      { name: "Matte Black", hex: "#000000" }
    ],

    whyThis: [
      "Extreme performance and top speed",
      "Mid-drive motor architecture",
      "Premium race-inspired components"
    ]
  },

  {
    slug: "cruiser-v",
    name: "RYDEEX Cruiser V",
    tagline: "Classic Meets Electric.",
    description: "Retro-modern design in matte burgundy maroon and chrome. The Cruiser V blends timeless elegance with modern electric efficiency.",
    tag: "Classic",
    tagColor: "bg-amber-700 text-white",
    highlight: "Retro Style",
    image: "/evies/ev6.png",
    heroAccent: "from-amber-950/40 via-gray-950 to-gray-950",
    accentColor: "#b45309",

    price: "₹1,15,000",
    priceNote: "Ex-showroom · Greater Noida",

    quickSpecs: [
      { label: "Top Speed", value: "70 km/h", icon: "⚡" },
      { label: "Range",     value: "140 km",   icon: "🔋" },
      { label: "Battery",   value: "5 kWh",    icon: "🔌" },
      { label: "Charge",    value: "4.5 hrs",  icon: "⏱" }
    ],

    specs: [
      {
        category: "Performance",
        items: [
          { label: "Motor Type",   value: "BLDC Hub Motor" },
          { label: "Peak Power",   value: "4000", unit: "W" },
          { label: "Top Speed",    value: "70",  unit: "km/h" },
          { label: "Acceleration", value: "0–40 in 5.2", unit: "sec" }
        ]
      },
      {
        category: "Battery & Range",
        items: [
          { label: "Battery Capacity", value: "5",   unit: "kWh" },
          { label: "Certified Range",  value: "140", unit: "km" },
          { label: "Charge Time",      value: "4.5",   unit: "hrs" },
          { label: "Charging",         value: "Standard 5A/15A Compatible" }
        ]
      },
      {
        category: "Build & Dimensions",
        items: [
          { label: "Kerb Weight", value: "125",  unit: "kg" },
          { label: "Seat Height", value: "750",  unit: "mm" },
          { label: "Boot Space",  value: "30",   unit: "L" },
          { label: "Brakes",      value: "Front Disc / Rear Drum" }
        ]
      },
      {
        category: "Technology",
        items: [
          { label: "Display",      value: "Round Digital-Analog LCD" },
          { label: "Navigation",   value: "Turn-by-Turn GPS" },
          { label: "Connectivity", value: "Bluetooth 5.0" },
          { label: "Modes",        value: "Eco · Cruise" }
        ]
      }
    ],

    features: [
      { title: "Retro Styling", desc: "Classic lines with modern chrome finishes.", icon: "🛵" },
      { title: "Comfort Seat", desc: "Plush leather-finish seating for long rides.", icon: "💺" }
    ],

    colors: [
      { name: "Burgundy Maroon", hex: "#7a1a2e" },
      { name: "Chrome Silver", hex: "#e2e8f0" }
    ],

    whyThis: [
      "Timeless aesthetic appeal",
      "Very comfortable for relaxed riding",
      "Massive 30L under-seat storage"
    ]
  }
];

export function getModelBySlug(slug: string): EVModel | undefined {
  return models.find((m) => m.slug === slug);
}
