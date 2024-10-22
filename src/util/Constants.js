import parseJSON from "./parseJSON";
export const json = new parseJSON();

const baseWeapons = [
  "amber",
  "arrows",
  "chorus",
  "collapsing-sky",
  "cornucopia",
  "darting-arrow",
  "data-bank",
  "fine-fruit",
  "loop",
  "meshing-cogs",
  "multiplication",
  "passkey",
  "shattered-home",
  "void",
  "sagacity",
  "hidden-shadow",
  "adversarial",
  "mediation",
  "defense",
  "pioneering",
  "mutual-demise",
];

const allChars = [
  "arlan",
  "asta",
  "bailu",
  "blade",
  "bronya",
  "clara",
  "dan-heng",
  "gepard",
  "herta",
  "himeko",
  "hook",
  "imbibitor-lunae",
  "jing-yuan",
  "kafka",
  "luka",
  "luocha",
  "march-7th",
  "natasha",
  "pela",
  "qingque",
  "sampo",
  "serval",
  "seele",
  "silver-wolf",
  "sushang",
  "tingyun",
  "welt",
  "yanqing",
  "yukong",
  "fu-xuan",
  "lynx",
  "jingliu",
  "topaz-and-numby",
  "guinaifen",
  "argenti",
  "huohuo",
  "hanya",
  "ruan-mei",
  "xueyi",
  "dr-ratio",
  "black-swan",
  "misha",
  "sparkle",
  "aventurine",
  "acheron",
  "gallagher",
  "robin",
  "boothill",
  "firefly",
  "jade",
  "yunli",
  "jiaoqiu",
  "feixiao",
  "lingsha",
  "moze",
  "rappa",
];

const allWeapons = [
  "ninjutsu-inscription-dazzling-evilbreaker",
  "dreams-montage",
  "shadowed-by-night",
  "i-venture-forth-to-hunt",
  "scent-alone-stays-true",
  "those-many-springs",
  "poised-to-bloom",
  "dance-at-sunset",
  "yet-hope-is-priceless",
  "after-the-charmony-fall",
  "boundless-choreo",
  "whereabouts-should-dreams-rest",
  "sailing-towards-a-second-life",
  "flowing-nightglow",
  "inherently-unjust-destiny",
  "along-the-passing-shore",
  "concert-for-two",
  "its-showtime",
  "what-is-real",
  "the-day-the-cosmos-fell",
  "destinys-threads-forewoven",
  "flames-afar",
  "final-victor",
  "dreamville-adventure",
  "indelible-promise",
  "earthly-escapade",
  "reforged-remembrance",
  "baptism-of-pure-thought",
  "past-self-in-mirror",
  "an-instance-before-a-gaze",
  "night-of-fright",
  "worrisome-blissful",
  "i-shall-be-my-own-sword",
  "a-secret-vow",
  "carve-the-moon-weave-the-clouds",
  "dance-dance-dance",
  "day-one-of-my-new-life",
  "eyes-of-the-prey",
  "fermata",
  "geniuses-repose",
  "good-night-and-sleep-well",
  "landaus-choice",
  "make-the-world-clamor",
  "memories-of-the-past",
  "nowhere-to-run",
  "only-silence-remains",
  "past-and-future",
  "perfect-timing",
  "planetary-rendezvous",
  "post-op-conversation",
  "quid-pro-quo",
  "resolution-shines-as-pearls-of-sweat",
  "return-to-darkness",
  "river-flows-in-spring",
  "she-already-shut-her-eyes",
  "shared-feeling",
  "subscribe-for-more",
  "swordplay",
  "the-birth-of-the-self",
  "the-moles-welcome-you",
  "the-seriousness-of-breakfast",
  "this-is-me",
  "today-is-another-peaceful-day",
  "trend-of-the-universal-market",
  "under-the-blue-sky",
  "warmth-shortens-cold-nights",
  "we-are-wildfire",
  "we-will-meet-again",
  "woof-walk-time",
  "before-dawn",
  "but-the-battle-isnt-over",
  "cruising-in-the-stellar-sea",
  "echoes-of-the-coffin",
  "incessant-rain",
  "in-the-name-of-the-world",
  "in-the-night",
  "moment-of-victory",
  "night-on-the-milky-way",
  "on-the-fall-of-an-aeon",
  "patience-is-all-you-need",
  "sleep-like-the-dead",
  "something-irreplaceable",
  "texture-of-memories",
  "the-unreachable-side",
  "time-waits-for-no-one",
  "amber",
  "arrows",
  "chorus",
  "collapsing-sky",
  "cornucopia",
  "darting-arrow",
  "data-bank",
  "fine-fruit",
  "loop",
  "meshing-cogs",
  "multiplication",
  "passkey",
  "shattered-home",
  "void",
  "sagacity",
  "hidden-shadow",
  "adversarial",
  "mediation",
  "defense",
  "pioneering",
  "mutual-demise",
];

const BGM = {
  ooc: ["space-walk", "science-fiction", "timeline"],
  osae: ["faded-sun", "embers", "streets-abuzz"],
  ss: ["lustrous-moonlight", "cumulus-formations", "exquisite-ingenuity"],
};

const allVers = [
  "2.6.2",
  "2.6.1",
  "2.5.2",
  "2.5.1",
  "2.4.2",
  "2.4.1",
  "2.3.2",
  "2.3.1",
  "2.2.2",
  "2.2.1",
  "2.1.2",
  "2.1.1",
  "2.0.2",
  "2.0.1",
  "1.6.2",
  "1.6.1",
  "1.5.2",
  "1.5.1",
  "1.4.2",
  "1.4.1",
  "1.3.2",
  "1.3.1",
  "1.2.2",
  "1.2.1",
  "1.1.2",
  "1.1.1",
  "1.0.2",
  "1.0.1",
];

const LATESTVERS = allVers[1];

const asianLang = ["zh", "ko", "ja"];

const colourMap = {
  // blue: seele, silver wolf
  1: "#387ac6",
  // jing yuan, luocha
  2: "#4b7982",
  // purple: kafka
  3: "#80466f",
  // muted red: topaz, argenti
  4: "#a64e64",
  // slate: blade
  5: "#4a718e",
  // unknown
  6: "#6748c7",
  // bright red
  7: "#bb323e",
  // brownish red: lingsha 2.5.2
  8: "#a44d4d",
};

export {
  allChars,
  allWeapons,
  baseWeapons,
  BGM,
  allVers,
  asianLang,
  LATESTVERS,
  colourMap,
};
