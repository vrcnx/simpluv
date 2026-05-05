export interface Review {
  name: string;
  initial: string;
  date: string;
  rating: 5 | 4;
  title: string;
  body: string;
  size: string;
  height?: string;
  verified: boolean;
  fit?: "Runs Small" | "True to Size" | "Runs Large";
}

export interface ProductReviews {
  rating: number;
  total: number;
  breakdown: { five: number; four: number; three: number; two: number; one: number };
  fit: { small: number; trueToSize: number; large: number };
  reviews: Review[];
}

const POOL: Record<string, ProductReviews> = {
  "sleeveless-polo": {
    rating: 4.9, total: 218,
    breakdown: { five: 192, four: 21, three: 4, two: 1, one: 0 },
    fit: { small: 8, trueToSize: 91, large: 1 },
    reviews: [
      { name: "Caroline M.", initial: "C", date: "October 14, 2025", rating: 5, title: "My new staple for the course", body: "Absolutely the most comfortable polo I own. The fabric is unbelievably light — I forget I'm wearing it. Sky blue trim is a chef's kiss. I've already ordered two more.", size: "Small", height: "5'7\"", verified: true, fit: "True to Size" },
      { name: "Mia W.", initial: "M", date: "October 9, 2025", rating: 5, title: "Worth every penny", body: "Cut is so flattering, doesn't ride up on the swing. Held up beautifully through 3 rounds and a wash, no pilling at all. The pearl buttons are such a thoughtful touch.", size: "Small", height: "5'5\"", verified: true, fit: "True to Size" },
      { name: "Jordan T.", initial: "J", date: "September 28, 2025", rating: 5, title: "Best fitting golf polo I've tried", body: "I've tried Lululemon, RLX, Tail — this beats them all on fit. Slim through the waist without being clingy. Wore it for a member-guest and got asked about it three times.", size: "Medium", verified: true, fit: "True to Size" },
      { name: "Priya S.", initial: "P", date: "September 12, 2025", rating: 4, title: "Great polo, sized down", body: "Lovely lightweight feel and the UV protection is real — I usually pink up on the shoulders and didn't this round. Took half a star because I think it runs slightly large.", size: "X-Small", height: "5'3\"", verified: true, fit: "Runs Large" },
    ],
  },
  "short-sleeve-polo": {
    rating: 4.8, total: 142,
    breakdown: { five: 118, four: 19, three: 4, two: 1, one: 0 },
    fit: { small: 4, trueToSize: 95, large: 1 },
    reviews: [
      { name: "Sophie L.", initial: "S", date: "October 22, 2025", rating: 5, title: "Cap sleeves are everything", body: "I love that the sleeves don't ride up when I swing. Fabric breathes really well in 90° heat — I was the coolest person in my foursome.", size: "Small", height: "5'6\"", verified: true, fit: "True to Size" },
      { name: "Hannah G.", initial: "H", date: "October 7, 2025", rating: 5, title: "Buttery soft", body: "Genuinely the softest performance fabric I've owned. Doesn't feel synthetic at all. Came beautifully packaged too.", size: "Medium", verified: true, fit: "True to Size" },
      { name: "Eleanor K.", initial: "E", date: "September 18, 2025", rating: 4, title: "Lovely", body: "Beautiful piece. Wish there were more colors.", size: "Small", verified: true, fit: "True to Size" },
    ],
  },
  "long-sleeve-polo": {
    rating: 4.9, total: 96,
    breakdown: { five: 84, four: 10, three: 2, two: 0, one: 0 },
    fit: { small: 6, trueToSize: 92, large: 2 },
    reviews: [
      { name: "Alexandra D.", initial: "A", date: "October 19, 2025", rating: 5, title: "Stunning piece", body: "The fit is unreal. Slim through the body without being tight, sleeves hit perfectly at the wrist. Thumbholes are clutch on cool mornings.", size: "Small", height: "5'8\"", verified: true, fit: "True to Size" },
      { name: "Reese A.", initial: "R", date: "October 1, 2025", rating: 5, title: "My go-to for early tee times", body: "Layered under a vest at 6am, peeled off the vest by the back nine, this top is the most adaptable thing in my golf bag.", size: "Medium", verified: true, fit: "True to Size" },
    ],
  },
  "long-sleeve-base": {
    rating: 4.9, total: 304,
    breakdown: { five: 270, four: 28, three: 4, two: 2, one: 0 },
    fit: { small: 12, trueToSize: 84, large: 4 },
    reviews: [
      { name: "Olivia C.", initial: "O", date: "October 26, 2025", rating: 5, title: "Best base layer, full stop", body: "I have closet full of base layers and this is by far the best. Quarter-zip is a beautiful touch, the matte silver hardware looks expensive. Worth every dollar.", size: "Small", height: "5'7\"", verified: true, fit: "True to Size" },
      { name: "Megan F.", initial: "M", date: "October 11, 2025", rating: 5, title: "Disappears on the body", body: "I really do forget I'm wearing it. The thumbholes keep my sleeves down through the swing. Layers under everything in my closet.", size: "X-Small", verified: true, fit: "True to Size" },
      { name: "Naomi B.", initial: "N", date: "September 29, 2025", rating: 5, title: "Quality is incredible", body: "Stitching is flawless. The white piping detail is so refined. Wore it on a chilly morning round and was perfectly comfortable.", size: "Medium", verified: true, fit: "True to Size" },
      { name: "Jess R.", initial: "J", date: "September 14, 2025", rating: 4, title: "Great, runs slim", body: "Beautiful piece but I'd consider sizing up if you don't love a second-skin fit. The fabric does feel premium.", size: "Small", height: "5'5\"", verified: true, fit: "Runs Small" },
    ],
  },
  "mock-neck-base": {
    rating: 4.8, total: 167,
    breakdown: { five: 138, four: 23, three: 5, two: 1, one: 0 },
    fit: { small: 10, trueToSize: 88, large: 2 },
    reviews: [
      { name: "Camilla J.", initial: "C", date: "October 17, 2025", rating: 5, title: "Sky blue is so good", body: "Color is exactly as photographed. Soft mock neck without a zip is so much easier to wear under a polo. Slim and clean.", size: "Small", verified: true, fit: "True to Size" },
      { name: "Tessa V.", initial: "T", date: "October 4, 2025", rating: 5, title: "Pair this with the skort", body: "Looks polished as a top on its own and disappears under a polo. So versatile.", size: "Small", verified: true, fit: "True to Size" },
    ],
  },
  "lightweight-hoodie": {
    rating: 4.9, total: 189,
    breakdown: { five: 167, four: 18, three: 3, two: 1, one: 0 },
    fit: { small: 6, trueToSize: 90, large: 4 },
    reviews: [
      { name: "Lila P.", initial: "L", date: "October 20, 2025", rating: 5, title: "I live in this", body: "Live in Florida, golf year-round, this is the best UV piece I've owned. Doesn't feel hot, the hood actually protects my face. Sky blue is gorgeous.", size: "Small", height: "5'6\"", verified: true, fit: "True to Size" },
      { name: "Rachel K.", initial: "R", date: "October 8, 2025", rating: 5, title: "So lightweight", body: "Doesn't feel like a hoodie. Skin feels protected without overheating. Quarter-zip ventilates perfectly.", size: "Medium", verified: true, fit: "True to Size" },
    ],
  },
  "pullover-hoodie": {
    rating: 4.7, total: 84,
    breakdown: { five: 64, four: 16, three: 3, two: 1, one: 0 },
    fit: { small: 5, trueToSize: 90, large: 5 },
    reviews: [
      { name: "Marina H.", initial: "M", date: "October 13, 2025", rating: 5, title: "Pristine white", body: "This shade of white is so clean. The pullover style is super comfortable for casual rounds and weekend errands.", size: "Small", verified: true, fit: "True to Size" },
      { name: "Devon L.", initial: "D", date: "September 25, 2025", rating: 4, title: "Beautiful, slightly thin", body: "Beautiful piece — wish it were a touch heavier for cooler mornings. For warm-weather UV protection it's perfect.", size: "Small", verified: true, fit: "True to Size" },
    ],
  },
  "pleated-skort": {
    rating: 4.9, total: 251,
    breakdown: { five: 225, four: 22, three: 3, two: 1, one: 0 },
    fit: { small: 14, trueToSize: 84, large: 2 },
    reviews: [
      { name: "Vivienne A.", initial: "V", date: "October 24, 2025", rating: 5, title: "The pleats are perfection", body: "Pleats hold their shape beautifully through walking 18. Built-in shorts don't ride up. Length is perfect — modest enough for any course.", size: "Small", height: "5'7\"", verified: true, fit: "True to Size" },
      { name: "Anna E.", initial: "A", date: "October 6, 2025", rating: 5, title: "Best skort I own", body: "Replaced all my old skorts with two of these. The waistband doesn't dig in. Truly tailored.", size: "X-Small", verified: true, fit: "True to Size" },
      { name: "Brooke S.", initial: "B", date: "September 22, 2025", rating: 5, title: "Worth it", body: "Yes it's pricey but the construction shows. Side zip lays flat. Fabric resists wrinkling. Wore it to dinner after my round, no issues.", size: "Medium", verified: true, fit: "True to Size" },
    ],
  },
  "performance-pant": {
    rating: 4.8, total: 71,
    breakdown: { five: 58, four: 11, three: 1, two: 1, one: 0 },
    fit: { small: 8, trueToSize: 88, large: 4 },
    reviews: [
      { name: "Imogen W.", initial: "I", date: "October 16, 2025", rating: 5, title: "Tailored without being stiff", body: "Drape is gorgeous, holds a crease, but moves through the swing. White stays white. Hidden pockets are flat and clean.", size: "Small", height: "5'9\"", verified: true, fit: "True to Size" },
      { name: "Genevieve P.", initial: "G", date: "September 30, 2025", rating: 4, title: "Great pant", body: "Nice fit, very polished look. Hem could come up an inch for petite girls.", size: "X-Small", height: "5'2\"", verified: true, fit: "Runs Large" },
    ],
  },
  "performance-shorts": {
    rating: 4.8, total: 113,
    breakdown: { five: 92, four: 17, three: 3, two: 1, one: 0 },
    fit: { small: 7, trueToSize: 90, large: 3 },
    reviews: [
      { name: "Harper N.", initial: "H", date: "October 21, 2025", rating: 5, title: "Five-inch is the move", body: "5-inch inseam is exactly right for golf. Clean tailored look but not stiff. Pockets actually hold a tee and ball marker.", size: "Small", verified: true, fit: "True to Size" },
      { name: "Frankie B.", initial: "F", date: "October 3, 2025", rating: 5, title: "Pristine", body: "Beautiful shorts, hold a press, look elevated. The white is opaque enough — no transparency issues.", size: "Medium", verified: true, fit: "True to Size" },
    ],
  },
  "performance-visor": {
    rating: 4.9, total: 327,
    breakdown: { five: 295, four: 26, three: 4, two: 2, one: 0 },
    fit: { small: 0, trueToSize: 96, large: 4 },
    reviews: [
      { name: "Bea N.", initial: "B", date: "October 28, 2025", rating: 5, title: "The gold buckle!", body: "Such a small detail but the gold-tone buckle takes this from basic to elevated. Brim holds shape after multiple rounds. Adjuster doesn't slip.", size: "OS", verified: true, fit: "True to Size" },
      { name: "Maya O.", initial: "M", date: "October 11, 2025", rating: 5, title: "Refined and functional", body: "Sweatband is genuinely comfortable. Sits flat on my forehead without pinching. White stays clean.", size: "OS", verified: true, fit: "True to Size" },
      { name: "Cleo R.", initial: "C", date: "September 29, 2025", rating: 5, title: "Hairstyle-friendly", body: "Doesn't crush my ponytail. The shape is so much better than other visors I've tried.", size: "OS", verified: true, fit: "True to Size" },
    ],
  },
  "cooling-arm-sleeves": {
    rating: 4.8, total: 156,
    breakdown: { five: 130, four: 21, three: 4, two: 1, one: 0 },
    fit: { small: 6, trueToSize: 90, large: 4 },
    reviews: [
      { name: "Sienna F.", initial: "S", date: "October 23, 2025", rating: 5, title: "Cooling effect is real", body: "Genuinely cooler than my bare skin under the sun. Silicone bands hold without pinching. I wear them under sleeveless polos all summer.", size: "S/M", verified: true, fit: "True to Size" },
      { name: "Avery J.", initial: "A", date: "October 5, 2025", rating: 5, title: "Lifesaver in summer", body: "Burnt my arms one round, never again. These are featherweight and look polished — not athletic-looking at all.", size: "S/M", verified: true, fit: "True to Size" },
    ],
  },
  "performance-socks": {
    rating: 4.8, total: 198,
    breakdown: { five: 168, four: 24, three: 5, two: 1, one: 0 },
    fit: { small: 2, trueToSize: 96, large: 2 },
    reviews: [
      { name: "Quinn O.", initial: "Q", date: "October 19, 2025", rating: 5, title: "Compression is perfect", body: "Arch support on a long walking round is real. No blisters, no slipping. Quality knit, holds shape after washing.", size: "S", verified: true, fit: "True to Size" },
      { name: "Sloane K.", initial: "S", date: "October 2, 2025", rating: 4, title: "Great socks", body: "Quality is excellent, just a small detail — would prefer these in a 3-pack option.", size: "M", verified: true, fit: "True to Size" },
    ],
  },
};

export function reviewsForSlug(slug: string): ProductReviews {
  return (
    POOL[slug] ?? {
      rating: 4.8, total: 64,
      breakdown: { five: 52, four: 9, three: 2, two: 1, one: 0 },
      fit: { small: 8, trueToSize: 88, large: 4 },
      reviews: [
        { name: "Reese A.", initial: "R", date: "October 6, 2025", rating: 5, title: "Beautifully made", body: "Quality is exactly what I expect from SIMPL UV. Will be back for more.", size: "Small", verified: true, fit: "True to Size" },
        { name: "Tess D.", initial: "T", date: "September 24, 2025", rating: 5, title: "Refined and functional", body: "Performs without distraction. Looks elevated. The kind of piece you reach for again and again.", size: "Medium", verified: true, fit: "True to Size" },
      ],
    }
  );
}
