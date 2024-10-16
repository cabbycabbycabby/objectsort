dataSetVersion = "2024-10-16"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Show",
    key: "show",
    tooltip: "Check this to restrict to certain shows.",
    checked: false,
    sub: [
      { name: "Battle For Dream Island", key: "BFDI" },
      { name: "Inanimate Insanity", key: "II" },
      { name: "ONE", key: "ONE" },
      { name: "Animatic Battle", key: "AB" },
      { name: "Obsolete Battle Show", key: "OBS" },
      { name: "Animated Inanimate Battle", key: "AIB" },
      { name: "Battle For Rice", key: "BFR" },
      { name: "Protagonist Object Show", key: "ProtOS" },
      { name: "Take Two Sides", key: "TTS" },
      { name: "Race To The Mansion of Tomorrow", key: "RTTMOT" },
      { name: "Beautiful Ultimate Really Never Ending Realm", key: "BURNER" },
      { name: "titletext", key: "titletext" },
      { name: "Love Of The S*N", tooltip: "10 - Fuujinroku", key: "LOTS" },
      { name: "The Nightly Manor", key: "TNM" },
      { name: "Modern Objects", key: "MO" },
      { name: "Showvember", key: "shvmbr" },
      { name: "I Want In", key: "iwi" },
      { name: "Double Spoiler", tooltip: "12.5 - Bunkachou", key: "DS" },
      { name: "Great Fairy Wars", tooltip: "12.8 - Daisensou", key: "GFW" },
      { name: "Ten Desires", tooltip: "13 - Shinreibyou", key: "TD" },
      { name: "Hopeless Masquerade", tooltip: "13.5 - Shinkirou", key: "HM" },
      { name: "Double Dealing Character", tooltip: "14 - Kishinjou", key: "DDC" },
      { name: "Impossible Spell Card", tooltip: "14.3 - Amanojaku", key: "ISC" },
      { name: "Urban Legend in Limbo", tooltip: "14.5 - Shinpiroku", key: "ULiL" },
      { name: "Legacy of Lunatic Kingdom", tooltip: "15 - Kanjuden", key: "LoLK" },
      { name: "Antinomy of Common Flowers", tooltip: "15.5 - Hyouibana", key: "AoCF" },
      { name: "Hidden Star in Four Seasons", tooltip: "16 - Tenkuushou", key: "HSiFS" },
      { name: "Violet Detector", tooltip: "16.5 - Hifuu Nightmare Diary", key: "VD" },
      { name: "Wily Beast and Weakest Creature", tooltip: "17 - Kikeijuu", key: "WBaWC" },
      { name: "Unconnected Marketeers", tooltip: "18 - Kouryuudou", key: "UM" },
    ]
  },
  {
    name: "Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [ { name: "Stage 1", key: "st1" }, { name: "Stage 2", key: "st2" }, { name: "Stage 3", key: "st3" }, { name: "Stage 4", key: "st4" }, { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" }, { name: "Stage 6/Final", key: "st6" }, { name: "Stage EX/Phantasm", key: "ex" }
    ]
  },
  {
    name: "Remove PC-98 Duplicates",
    key: "pc98",
    tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  },
  {
    name: "Remove Nameless Characters",
    key: "nameless",
    tooltip: "Check this to remove all characters without canonical names.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "8-Ball",
    img: "bfdi-8ball.png",
    opts: {
      series: [ "BFDI" ]
    }
  },
  {
    name: "Balloony",
    img: "bfdi-balloony.png",
    opts: {
      series: [ "BFDI" ]
    }
  },
  {
    name: "Barf Bag",
    img: "bfdi-barfbag.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Basketball",
    img: "bfdi-basketball.png",
    opts: {
      series: ["BFDI"]
    },
  },
  {
    name: "Bell",
    img: "bfdi-bell.png",
    opts: {
      series: [ "BFDI" ]
    }
  },
  {
    name: "Black Hole",
    img: "bfdi-blackhole.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Blocky",
    img: "bfdi-blocky.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Bomby",
    img: "bfdi-bomby.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Book",
    img: "bfdi-book.png",
    opts: {
      series: [ "BFDI" ]
    }
  },
  {
    name: "Bottle",
    img: "bfdi-bottle.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Bracelety",
    img: "bfdi-bracelety.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Bubble",
    img: "bfdi-bubble.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Cake",
    img: "bfdi-cake.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Clock",
    img: "bfdi-clock.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Cloudy",
    img: "bfdi-cloudy.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Coiny",
    img: "bfdi-coiny.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "David",
    img: "bfdi-david.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Donut",
    img: "bfdi-donut.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Dora",
    img: "bfdi-dora.png",
    opts: {
      series: [ "BFDI" ]
    }
  },
  {
    name: "Eggy",
    img: "bfdi-eggy.png",
    opts: {
      series: [ "BFDI" ]
    }
  },
  {
    name: "Eraser",
    img: "bfdi-eraser.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Fanny",
    img: "bfdi-fanny.png",
    opts: {
      series: [ "BFDI" ]
    }
  },
  {
    name: "Firey",
    img: "bfdi-firey.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Firey Jr.",
    img: "bfdi-fireyjr.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Flower",
    img: "bfdi-flower.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Foldy",
    img: "bfdi-foldy.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Fries",
    img: "bfdi-fries.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Gaty",
    img: "bfdi-gaty.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Gelatin",
    img: "bfdi-gelatin.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Golf Ball",
    img: "bfdi-golfball.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Grassy",
    img: "bfdi-grassy.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Ice Cube",
    img: "bfdi-icecube.png",
    opts: {
      series: [ "BFDI" ]
    }
  },
  {
    name: "Leafy",
    img: "bfdi-leafy.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Lightning",
    img: "bfdi-lightning.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Liy",
    img: "bfdi-liy.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Lollipop",
    img: "bfdi-lollipop.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Loser",
    img: "bfdi-loser.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Marker",
    img: "bfdi-marker.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Match",
    img: "bfdi-match.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Naily",
    img: "bfdi-naily.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Needle",
    img: "bfdi-needle.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Nickel",
    img: "bfdi-nickel.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Pen",
    img: "bfdi-pen.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Pencil",
    img: "bfdi-pencil.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Pie",
    img: "bfdi-pie.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Pillow",
    img: "bfdi-pillow.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Pin",
    img: "bfdi-pin.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Puffball",
    img: "bfdi-puffball.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Remote",
    img: "bfdi-remote.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Robot Flower",
    img: "bfdi-robotflower.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Roboty",
    img: "bfdi-roboty.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Rocky",
    img: "bfdi-rocky.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Ruby",
    img: "bfdi-ruby.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Saw",
    img: "bfdi-saw.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Snowball",
    img: "bfdi-snowball.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Spongy",
    img: "bfdi-spongy.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Stapy",
    img: "bfdi-stapy.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Taco (BFDI)",
    img: "bfdi-taco.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Teardrop",
    img: "bfdi-teardrop.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Tennis Ball",
    img: "bfdi-tennisball.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Tree",
    img: "bfdi-tree.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "TV",
    img: "bfdi-tv.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Woody",
    img: "bfdi-woody.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Yellow Face",
    img: "bfdi-yellowface.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Four",
    img: "bfdi-four.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "X",
    img: "bfdi-x.png",
    opts: {
      series: ["BFDI"]
    }
  },
  {
    name: "Miyako Yoshika",
    img: "6jq6eh6.png",
    opts: {
      series: ["TD", "HM", "ISC"],
      stage: ["st3", "st4"]
    }
  },
  {
    name: "Kaku Seiga",
    img: "090hLPL.png",
    opts: {
      series: ["TD", "HM", "ISC"],
      stage: ["st4"]
    }
  },
  {
    name: "Soga no Tojiko",
    img: "y0UXwFO.png",
    opts: {
      series: ["TD", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "Mononobe no Futo",
    img: "WTZ97LE.png",
    opts: {
      series: ["TD", "HM", "ISC", "ULiL", "AoCF"],
      stage: ["st5"]
    }
  },
  {
    name: "Toyosatomimi no Miko",
    img: "3Xiqd22.png",
    opts: {
      series: ["TD", "HM", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Futatsuiwa Mamizou",
    img: "gMpWdmA.png",
    opts: {
      series: ["TD", "HM", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Hata no Kokoro",
    img: "fxCGmUk.png",
    opts: {
      series: ["book", "HM", "ULiL", "AoCF"],
      stage: ["st6"]
    }
  },
  {
    name: "Wakasagihime",
    img: "brWCLVx.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st1"]
    }
  },
  {
    name: "Sekibanki",
    img: "VAMLiJD.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st2"]
    }
  },
  {
    name: "Imaizumi Kagerou",
    img: "qwwL0bB.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st3"]
    }
  },
  {
    name: "Tsukumo Benben",
    img: "vWNeMaH.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Tsukumo Yatsuhashi",
    img: "EJFQHQN.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Kijin Seija",
    img: "16RUacj.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "Sukuna Shinmyoumaru",
    img: "Zl2tN7W.png",
    opts: {
      series: ["DDC", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Horikawa Raiko",
    img: "SLLEccR.png",
    opts: {
      series: ["DDC", "ISC", "AoCF", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Usami Sumireko",
    img: "mc7ICW6.png",
    opts: {
      series: ["ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Seiran",
    img: "0ra00WG.png",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st1"]
    }
  },
  {
    name: "Ringo",
    img: "xQOsFlZ.png",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st2"]
    }
  },
  {
    name: "Doremy Sweet",
    img: "rGS7dyn.png",
    opts: {
      series: ["LoLK", "AoCF", "VD"],
      stage: ["st3", "ex"]
    }
  },
  {
    name: "Kishin Sagume",
    img: "HLT338X.png",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st4"]
    }
  },
  {
    name: "Clownpiece",
    img: "9Jje7ZQ.jpg",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Junko",
    img: "NsfLZjY.jpg",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Hecatia Lapislazuli",
    img: "EH3Ulol.png",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Eternity Larva",
    img: "ql5KxJH.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st1"]
    }
  },
  {
    name: "Sakata Nemuno",
    img: "gYFhJ3Y.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st2"]
    }
  },
  {
    name: "Komano Aunn",
    img: "wWUStkF.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st3"]
    }
  },
  {
    name: "Yatadera Narumi",
    img: "wrPVhAo.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st4"]
    }
  },
  {
    name: "Nishida Satono",
    img: "8w9gAy2.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Teireida Mai",
    img: "DesAqAC.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Matara Okina",
    img: "icWvMyo.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Yorigami Shion",
    img: "LenxXR4.png",
    opts: {
      series: ["AoCF"],
      stage: ["st6"]
    }
  },
  {
    name: "Yorigami Joon",
    img: "V9OznT1.png",
    opts: {
      series: ["AoCF"],
      stage: ["st6"]
    }
  },
  {
    name: "Ebisu Eika",
    img: "Ke3316E.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st1"]
    }
  },
  {
    name: "Ushizaki Urumi",
    img: "ru2vIIW.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st2"]
    }
  },
  {
    name: "Niwatari Kutaka",
    img: "QTQt0ZL.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st3"]
    }
  },
  {
    name: "Kicchou Yachie",
    img: "CzcIMxF.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st4"]
    }
  },
  {
    name: "Joutouguu Mayumi",
    img: "GxeziYO.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st5"]
    }
  },
  {
    name: "Haniyasushin Keiki",
    img: "Z4jclTi.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st6"]
    }
  },
  {
    name: "Kurokoma Saki",
    img: "H2v2GPy.png",
    opts: {
      series: ["WBaWC"],
      stage: ["ex"]
    }
  },
  {
    name: "Goutokuji Mike",
    img: "FltSdtv.png",
    opts: {
      series: ["UM"],
      stage: ["st1"]
    }
  },
  {
    name: "Yamashiro Takane",
    img: "Aaq99GQ.png",
    opts: {
      series: ["UM"],
      stage: ["st2"]
    }
  },
  {
    name: "Komakusa Sannyo",
    img: "DKupiv1.png",
    opts: {
      series: ["UM"],
      stage: ["st3"]
    }
  },
  {
    name: "Tamatsukuri Misumaru",
    img: "BHwfCAQ.png",
    opts: {
      series: ["UM"],
      stage: ["st4"]
    }
  },
  {
    name: "Kudamaki Tsukasa",
    img: "KNy3FZq.png",
    opts: {
      series: ["UM"],
      stage: ["st5", "st6", "ex"]
    }
  },
  {
    name: "Iizunamaru Megumu",
    img: "QA63m27.png",
    opts: {
      series: ["UM"],
      stage: ["st5"]
    }
  },
  {
    name: "Tenkyuu Chimata",
    img: "Ga4AYtv.png",
    opts: {
      series: ["UM"],
      stage: ["st6"]
    }
  },
  {
    name: "Himemushi Momoyo",
    img: "iH2wqbd.png",
    opts: {
      series: ["UM"],
      stage: ["ex"]
    }
  },
  {
    name: "Hieda no Akyuu",
    img: "ogONuLZ.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  { 
    name: "Tokiko",
    img: "Y4maOc8.png", 
    opts: {
      series: ["book"],
      stage: [],
      nameless: true
    } 
  },
  {
    name: "Reisen (Manga)",
    img: "cWjCo2j.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Watatsuki no Toyohime",
    img: "uEBxsEX.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Watatsuki no Yorihime",
    img: "Txu2P7S.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Maribel Hearn",
    img: "XUI9vPo.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Usami Renko",
    img: "1P5EXRt.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Ibaraki Kasen",
    img: "dQHnPPe.png",
    opts: {
      series: ["book", "ULiL", "AoCF"],
      stage: ["st5"]
    }
  },
  {
    name: "Motoori Kosuzu",
    img: "jEsJJo8.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Okunoda Miyoi",
    img: "a5V63gx.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Hakurei Reimu (PC-98)",
    img: "IZsGAMS.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  {
    name: "Shingyoku (Female)",
    img: "KuPiR2k.png",
    opts: {
      series: ["HRtP"],
      stage: ["st1"]
    }
  },
  {
    name: "Mima",
    img: "odH03t2.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "MS"],
      stage: ["st3", "st5", "st6"]
    }
  },
  {
    name: "Elis",
    img: "ytnL1xd.png",
    opts: {
      series: ["HRtP"],
      stage: ["st5"]
    }
  },
  {
    name: "Kikuri",
    img: "fX2Kqik.png",
    opts: {
      series: ["HRtP"],
      stage: ["st5"]
    }
  },
  {
    name: "Sariel",
    img: "Wyc7YFw.png",
    opts: {
      series: ["HRtP"],
      stage: ["st6"]
    }
  },
  {
    name: "Konngara",
    img: "dg9jLHv.png",
    opts: {
      series: ["HRtP"],
      stage: ["st6"]
    }
  },
  {
    name: "Rika",
    img: "02Xb4pU.png",
    opts: {
      series: ["SoEW"],
      stage: ["st1", "ex"]
    }
  },
  {
    name: "Meira",
    img: "p529JgT.png",
    opts: {
      series: ["SoEW"],
      stage: ["st2"]
    }
  },
  {
    name: "Kirisame Marisa (PC-98)",
    img: "wxE7cBm.png",
    opts: {
      series: ["SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  { name: "Ellen", img: "3iNNL0c.png", opts: {
      series: ["PoDD"],
      stage: []
    } },
  {
    name: "Kotohime",
    img: "kRSGtpq.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Kana Anaberal",
    img: "rBvKMk5.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Asakura Rikako",
    img: "VIf5gUK.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Kitashirakawa Chiyuri",
    img: "tZFBycy.png",
    opts: {
      series: ["PoDD"],
      stage: ["st5"]
    }
  },
  {
    name: "Okazaki Yumemi",
    img: "c9rnG3n.png",
    opts: {
      series: ["PoDD"],
      stage: ["st6"]
    }
  },
  {
    name: "Ruukoto",
    img: "dko67SJ.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Orange",
    img: "m8wXE5U.png",
    opts: {
      series: ["LLS"],
      stage: ["st1"]
    }
  },
  {
    name: "Kurumi",
    img: "0rvq1ph.png",
    opts: {
      series: ["LLS"],
      stage: ["st2"]
    }
  },
  {
    name: "Elly",
    img: "iIPftHn.png",
    opts: {
      series: ["LLS"],
      stage: ["st3"]
    }
  },
  {
    name: "Yuuka (PC-98)",
    img: "ivUSwxp.png",
    opts: {
      series: ["LLS", "MS"],
      stage: ["st5", "st6"],
      pc98: true
    }
  },
  {
    name: "Mugetsu",
    img: "bYA9E16.png",
    opts: {
      series: ["LLS"],
      stage: ["ex"]
    }
  },
  {
    name: "Gengetsu",
    img: "TIOTtV9.png",
    opts: {
      series: ["LLS"],
      stage: ["ex"]
    }
  },
  {
    name: "Sara",
    img: "2QUbCrU.png",
    opts: {
      series: ["MS"],
      stage: ["st1"]
    }
  },
  {
    name: "Louise",
    img: "nDM5aB6.png",
    opts: {
      series: ["MS"],
      stage: ["st2", "st4"]
    }
  },
  {
    name: "Alice (PC-98)",
    img: "KaBuRTW.png",
    opts: {
      series: ["MS"],
      stage: ["st3", "ex"],
      pc98: true
    }
  },
  {
    name: "Yuki",
    img: "FfcmDgp.png",
    opts: {
      series: ["MS"],
      stage: ["st4"]
    }
  },
  { name: "Mai", img: "r6w7TX1.png", opts: {
      series: ["MS"],
      stage: ["st4"]
    } },
  {
    name: "Yumeko",
    img: "PcPqkdO.png",
    opts: {
      series: ["MS"],
      stage: ["st5"]
    }
  },
  {
    name: "Shinki",
    img: "gPE95S7.png",
    opts: {
      series: ["MS"],
      stage: ["st6"]
    }
  },
  {
    name: "Mimi-chan",
    img: "zBl2zlv.png",
    opts: {
      series: ["PoDD"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Unzan",
    img: "r5eWREh.png",
    opts: {
      series: ["UFO", "DS", "HM", "ULiL", "AoCF"],
      stage: ["st3"],
      notgirl: true
    }
  },
  {
    name: "Genji",
    img: "LoUqOuH.png",
    opts: {
      series: ["SoEW", "PoDD", "LLS", "MS"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Shingyoku (Male)",
    img: "a5uwlgN.png",
    opts: {
      series: ["HRtP"],
      stage: ["st1"],
      notgirl: true 
    }
  },
  {
    name: "YuugenMagan",
    img: "IOW8GdU.png",
    opts: {
      series: ["HRtP"],
      stage: ["st3"],
      notgirl: true 
    }
  },
  {
    name: "Evil Eye Sigma",
    img: "rAFUMwE.png",
    opts: {
      series: ["SoEW"],
      stage: ["ex"],
      notgirl: true 
    }
  },
  {
    name: "Great Catfish",
    img: "BgRi9Oh.png",
    opts: {
      series: ["soku", "AoCF"],
      stage: ["st6"],
      notgirl: true,
      nameless: true
    }
  },
  {
    name: "Morichika Rinnosuke",
    img: "ITUhsGj.png",
    opts: {
      series: ["book", "HM"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Fortune Teller",
    img: "BYot23O.png",
    opts: {
      series: ["book"],
      stage: [],
      notgirl: true,
      nameless: true
    }
  },
  {
    name: "Hisoutensoku",
    img: "P4JZ2it.png",
    opts: {
      series: ["soku"],
      stage: [],
      notgirl: true 
    }
  }
];
