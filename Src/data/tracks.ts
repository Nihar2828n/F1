export interface Track {
  id: string;
  name: string;
  country: string;
  city: string;
  length: string;
  laps: number;
  turns: number;
  firstGP: number;
  lapRecord: string;
  lapRecordHolder: string;
  description: string;
  flagEmoji: string;
  pros: string[];
  cons: string[];
  trackColor: string;
  accentColor: string;
  svgPath: string;
}

export const tracks: Track[] = [
  {
    id: "monaco",
    name: "Circuit de Monaco",
    country: "Monaco",
    city: "Monte Carlo",
    length: "3.337 km",
    laps: 78,
    turns: 19,
    firstGP: 1950,
    lapRecord: "1:12.909",
    lapRecordHolder: "Lewis Hamilton",
    description: "The jewel in F1's crown, Monaco is the most glamorous and iconic circuit on the calendar. Racing through the narrow streets of Monte Carlo, drivers navigate tight hairpins and a famous tunnel section.",
    flagEmoji: "🇲🇨",
    pros: [
      "Most iconic and prestigious race on the calendar",
      "Incredible atmosphere with yachts in the harbor",
      "Tests driver skill to the absolute limit",
      "Rich history dating back to 1929",
      "Unique tunnel section creates dramatic moments",
      "Street circuit with zero margin for error"
    ],
    cons: [
      "Extremely difficult to overtake",
      "Narrow track limits racing action",
      "Processional races are common",
      "Safety concerns due to barriers",
      "Limited run-off areas",
      "Qualifying often decides the race"
    ],
    trackColor: "#E11D48",
    accentColor: "#FCA5A5",
    svgPath: "M 30 60 L 40 30 L 60 25 L 80 30 Q 90 35 85 50 L 75 65 Q 70 75 55 78 L 40 75 Q 25 72 30 60 Z"
  },
  {
    id: "spa",
    name: "Circuit de Spa-Francorchamps",
    country: "Belgium",
    city: "Stavelot",
    length: "7.004 km",
    laps: 44,
    turns: 20,
    firstGP: 1950,
    lapRecord: "1:46.286",
    lapRecordHolder: "Valtteri Bottas",
    description: "Set in the Ardennes forest, Spa is one of the longest and most challenging circuits. The legendary Eau Rouge/Raidillon complex and unpredictable weather make every race an adventure.",
    flagEmoji: "🇧🇪",
    pros: [
      "Legendary Eau Rouge/Raidillon corner complex",
      "One of the longest circuits at 7km",
      "Excellent overtaking opportunities on Kemmel Straight",
      "Beautiful Ardennes forest setting",
      "Unpredictable weather adds excitement",
      "Massive elevation changes test car setup"
    ],
    cons: [
      "Weather can be too unpredictable (2021 non-race)",
      "Long track makes safety car periods lengthy",
      "Remote location limits spectator access",
      "Run-off areas at Raidillon raise concerns",
      "High-speed crashes can be severe",
      "Difficult for TV coverage due to length"
    ],
    trackColor: "#F59E0B",
    accentColor: "#FDE68A",
    svgPath: "M 20 70 L 25 40 L 40 20 L 55 25 L 70 15 L 85 30 L 80 50 L 70 55 L 75 70 L 60 80 L 40 75 L 20 70 Z"
  },
  {
    id: "monza",
    name: "Autodromo Nazionale Monza",
    country: "Italy",
    city: "Monza",
    length: "5.793 km",
    laps: 53,
    turns: 11,
    firstGP: 1950,
    lapRecord: "1:21.046",
    lapRecordHolder: "Rubens Barrichello",
    description: "The Temple of Speed. Monza is the fastest circuit on the calendar, featuring long straights and the passionate Tifosi fans. It's the spiritual home of Ferrari and Italian motorsport.",
    flagEmoji: "🇮🇹",
    pros: [
      "Fastest circuit on the calendar - pure speed",
      "Incredible Tifosi atmosphere and passion",
      "Great slipstreaming and overtaking battles",
      "Historic venue - hosted first ever F1 race",
      "The iconic Parabolica (now Alboreto) curve",
      "Low downforce setup creates unique racing"
    ],
    cons: [
      "Large run-off areas reduce penalty for mistakes",
      "Track layout is relatively simple",
      "Chicanes feel artificial compared to old layout",
      "Facilities need ongoing modernization",
      "Limited technical variety for drivers",
      "Crowd control can be challenging"
    ],
    trackColor: "#16A34A",
    accentColor: "#86EFAC",
    svgPath: "M 30 80 L 25 50 L 30 25 L 50 20 L 70 25 L 80 40 L 75 55 L 80 70 L 65 80 L 45 85 L 30 80 Z"
  },
  {
    id: "silverstone",
    name: "Silverstone Circuit",
    country: "United Kingdom",
    city: "Silverstone",
    length: "5.891 km",
    laps: 52,
    turns: 18,
    firstGP: 1950,
    lapRecord: "1:27.097",
    lapRecordHolder: "Max Verstappen",
    description: "The home of British motorsport and the venue for the very first F1 World Championship race. High-speed corners like Copse, Maggots, and Becketts make it a driver favorite.",
    flagEmoji: "🇬🇧",
    pros: [
      "Legendary Maggots-Becketts-Chapel complex",
      "Home of the first ever F1 World Championship race",
      "Passionate and knowledgeable British fans",
      "High-speed corners test aerodynamic performance",
      "Multiple overtaking zones with DRS",
      "Modern facilities with great spectator viewing"
    ],
    cons: [
      "British weather can be unpredictable",
      "Flat terrain limits natural amphitheater viewing",
      "Traffic congestion on race weekends",
      "Some newer sections lack character",
      "High ticket prices",
      "Wind can significantly affect car performance"
    ],
    trackColor: "#2563EB",
    accentColor: "#93C5FD",
    svgPath: "M 25 50 L 35 25 L 55 20 L 75 25 L 85 40 L 80 60 L 70 70 L 55 80 L 35 75 L 25 60 L 25 50 Z"
  },
  {
    id: "suzuka",
    name: "Suzuka International Racing Course",
    country: "Japan",
    city: "Suzuka",
    length: "5.807 km",
    laps: 53,
    turns: 18,
    firstGP: 1987,
    lapRecord: "1:30.983",
    lapRecordHolder: "Lewis Hamilton",
    description: "The only figure-8 circuit in F1, Suzuka features a unique crossover bridge. The flowing Esses section and 130R corner are among the most thrilling sequences in motorsport.",
    flagEmoji: "🇯🇵",
    pros: [
      "Unique figure-8 layout with crossover bridge",
      "130R is one of the most thrilling corners in F1",
      "Flowing Esses section is a masterclass in design",
      "Japanese fans are incredibly respectful and passionate",
      "Tests every aspect of car and driver",
      "Often decides the World Championship"
    ],
    cons: [
      "Limited overtaking opportunities",
      "Typhoon season can disrupt the race weekend",
      "Remote location for European-based teams",
      "Run-off areas limited by circuit design",
      "Time zone makes live viewing difficult for Western fans",
      "Figure-8 creates safety considerations"
    ],
    trackColor: "#DC2626",
    accentColor: "#FCA5A5",
    svgPath: "M 20 50 Q 25 25 50 20 Q 75 15 80 40 Q 85 55 65 55 Q 45 55 40 45 Q 35 35 55 60 Q 70 80 45 85 Q 20 80 20 50 Z"
  },
  {
    id: "interlagos",
    name: "Autódromo José Carlos Pace",
    country: "Brazil",
    city: "São Paulo",
    length: "4.309 km",
    laps: 71,
    turns: 15,
    firstGP: 1973,
    lapRecord: "1:10.540",
    lapRecordHolder: "Valtteri Bottas",
    description: "Interlagos runs counter-clockwise and features dramatic elevation changes. The passionate Brazilian fans and the circuit's tendency to produce dramatic races make it a fan favorite.",
    flagEmoji: "🇧🇷",
    pros: [
      "Counter-clockwise layout is unique and exciting",
      "Dramatic elevation changes throughout the lap",
      "Passionate Brazilian fans create electric atmosphere",
      "Historically produces dramatic and unpredictable races",
      "Great overtaking at Turn 1 and Turn 4",
      "Often the season finale decider"
    ],
    cons: [
      "Facilities have been criticized as dated",
      "Security concerns in surrounding area",
      "Bumpy track surface causes reliability issues",
      "Short lap length can spread the field",
      "Rain can cause extreme conditions",
      "Altitude affects engine performance"
    ],
    trackColor: "#059669",
    accentColor: "#6EE7B7",
    svgPath: "M 30 40 L 50 20 L 75 25 L 85 45 L 80 65 L 60 75 L 40 80 L 20 65 L 25 45 L 30 40 Z"
  },
  {
    id: "singapore",
    name: "Marina Bay Street Circuit",
    country: "Singapore",
    city: "Singapore",
    length: "4.940 km",
    laps: 62,
    turns: 23,
    firstGP: 2008,
    lapRecord: "1:35.867",
    lapRecordHolder: "Lewis Hamilton",
    description: "F1's first night race, the Singapore Grand Prix is held under floodlights around Marina Bay. The stunning city skyline backdrop and demanding street circuit create a spectacular show.",
    flagEmoji: "🇸🇬",
    pros: [
      "Spectacular night race under floodlights",
      "Stunning Marina Bay skyline as backdrop",
      "23 corners make it physically demanding",
      "Safety car periods create strategic drama",
      "Incredible entertainment and atmosphere",
      "Unique twilight-to-night racing experience"
    ],
    cons: [
      "Extreme heat and humidity exhaust drivers",
      "Bumpy street surface causes car damage",
      "Very long race duration (near 2-hour limit)",
      "Overtaking is difficult on narrow streets",
      "Frequent safety car periods disrupt flow",
      "High cost of attending the event"
    ],
    trackColor: "#7C3AED",
    accentColor: "#C4B5FD",
    svgPath: "M 25 55 L 30 30 L 45 20 L 65 22 L 80 35 L 82 55 L 75 70 L 60 78 L 40 80 L 25 70 L 25 55 Z"
  },
  {
    id: "cota",
    name: "Circuit of the Americas",
    country: "United States",
    city: "Austin, Texas",
    length: "5.513 km",
    laps: 56,
    turns: 20,
    firstGP: 2012,
    lapRecord: "1:36.169",
    lapRecordHolder: "Charles Leclerc",
    description: "COTA was purpose-built for F1 and features a dramatic uphill Turn 1, sections inspired by classic circuits, and a modern amphitheater design. The Austin atmosphere adds American flair.",
    flagEmoji: "🇺🇸",
    pros: [
      "Dramatic uphill rush to Turn 1",
      "Sections inspired by Silverstone, Hockenheim & Istanbul",
      "Great overtaking opportunities on the back straight",
      "Modern facilities with excellent spectator areas",
      "Austin's vibrant music and food culture",
      "Massive elevation changes add excitement"
    ],
    cons: [
      "Track surface has suffered from subsidence issues",
      "Bumps have caused driver complaints",
      "Some sections feel derivative rather than original",
      "Long straights can spread the field",
      "Extreme Texas heat in October",
      "Relatively short F1 history and tradition"
    ],
    trackColor: "#0891B2",
    accentColor: "#67E8F9",
    svgPath: "M 20 60 L 30 30 L 50 15 L 70 20 L 85 35 L 80 55 L 70 65 L 75 80 L 55 85 L 35 75 L 20 60 Z"
  },
  {
    id: "jeddah",
    name: "Jeddah Corniche Circuit",
    country: "Saudi Arabia",
    city: "Jeddah",
    length: "6.174 km",
    laps: 50,
    turns: 27,
    firstGP: 2021,
    lapRecord: "1:30.734",
    lapRecordHolder: "Lewis Hamilton",
    description: "The fastest street circuit in F1, Jeddah features high-speed blind corners along the Red Sea coast. Its 27 turns and narrow walls create one of the most intense experiences in modern F1.",
    flagEmoji: "🇸🇦",
    pros: [
      "Fastest street circuit in F1 history",
      "27 corners create non-stop action",
      "Spectacular Red Sea coastal location",
      "Night race adds visual drama",
      "High-speed blind corners test bravery",
      "Modern facilities and infrastructure"
    ],
    cons: [
      "Safety concerns with blind high-speed corners",
      "Very narrow with concrete walls throughout",
      "Limited run-off areas for a fast circuit",
      "Human rights controversies surround the event",
      "Nearby security incidents have caused concern",
      "Artificial nature of new street circuits"
    ],
    trackColor: "#EA580C",
    accentColor: "#FDBA74",
    svgPath: "M 15 50 L 20 25 L 40 15 L 60 20 L 75 15 L 88 30 L 85 55 L 75 70 L 55 80 L 35 82 L 20 70 L 15 50 Z"
  },
  {
    id: "melbourne",
    name: "Albert Park Circuit",
    country: "Australia",
    city: "Melbourne",
    length: "5.278 km",
    laps: 58,
    turns: 14,
    firstGP: 1996,
    lapRecord: "1:19.813",
    lapRecordHolder: "Charles Leclerc",
    description: "Set around the beautiful Albert Park Lake in Melbourne, this semi-permanent street circuit traditionally opens the F1 season. Recent modifications have made it faster and more overtaking-friendly.",
    flagEmoji: "🇦🇺",
    pros: [
      "Beautiful lakeside parkland setting",
      "Season opener creates huge excitement",
      "Recent modifications improved overtaking",
      "Great atmosphere with passionate Aussie fans",
      "Melbourne is a fantastic host city",
      "Semi-permanent circuit with good run-off"
    ],
    cons: [
      "Time zone is difficult for European viewers",
      "Limited permanent facilities as a street circuit",
      "Early season means cars are still being developed",
      "Can produce processional races",
      "Long travel for most teams",
      "Weather can be hit or miss in March"
    ],
    trackColor: "#4F46E5",
    accentColor: "#A5B4FC",
    svgPath: "M 25 45 L 35 20 L 55 18 L 75 25 L 83 45 L 78 65 L 60 78 L 40 80 L 22 65 L 25 45 Z"
  },
  {
    id: "baku",
    name: "Baku City Circuit",
    country: "Azerbaijan",
    city: "Baku",
    length: "6.003 km",
    laps: 51,
    turns: 20,
    firstGP: 2016,
    lapRecord: "1:43.009",
    lapRecordHolder: "Charles Leclerc",
    description: "Baku's street circuit combines a medieval old town section with a massive 2.2km straight along the Caspian Sea. It has produced some of the most chaotic and unpredictable races in F1 history.",
    flagEmoji: "🇦🇿",
    pros: [
      "2.2km straight is the longest in F1",
      "Consistently produces dramatic, unpredictable races",
      "Medieval old town section is incredibly tight",
      "Stunning backdrop of modern and ancient architecture",
      "Multiple overtaking zones",
      "Castle section requires precision driving"
    ],
    cons: [
      "Extreme contrast between tight and fast sections",
      "Street surface can be very slippery",
      "High crash rate due to challenging layout",
      "Wind from Caspian Sea affects car handling",
      "Some feel it relies too much on chaos",
      "Accessibility concerns for international fans"
    ],
    trackColor: "#0D9488",
    accentColor: "#5EEAD4",
    svgPath: "M 30 80 L 25 55 L 20 30 L 35 18 L 55 15 L 70 20 L 80 40 L 78 60 L 70 75 L 55 82 L 30 80 Z"
  },
  {
    id: "imola",
    name: "Autodromo Enzo e Dino Ferrari",
    country: "Italy",
    city: "Imola",
    length: "4.909 km",
    laps: 63,
    turns: 19,
    firstGP: 1980,
    lapRecord: "1:15.484",
    lapRecordHolder: "Lewis Hamilton",
    description: "Named after Enzo Ferrari and his son Dino, Imola is a classic old-school circuit that runs counter-clockwise. Rich in history but also marked by tragedy, it offers a raw, traditional racing experience.",
    flagEmoji: "🇮🇹",
    pros: [
      "Classic old-school circuit design",
      "Counter-clockwise layout adds variety",
      "Named after Ferrari dynasty - rich heritage",
      "Variante Alta chicane is technically demanding",
      "Beautiful Emilia-Romagna countryside setting",
      "Compact layout with good spectator viewing"
    ],
    cons: [
      "Overtaking is very difficult",
      "Tragic history (Senna, Ratzenberger 1994)",
      "Narrow track with limited run-off in places",
      "Some feel it's too old-fashioned for modern F1",
      "Flooding has disrupted recent events",
      "Limited infrastructure compared to modern circuits"
    ],
    trackColor: "#B91C1C",
    accentColor: "#FCA5A5",
    svgPath: "M 25 55 L 30 30 L 50 20 L 70 28 L 82 45 L 78 60 L 65 72 L 45 78 L 28 68 L 25 55 Z"
  }
];
