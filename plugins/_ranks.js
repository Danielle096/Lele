global.rpg = {
  role(level) {
    level = parseInt(level);
    if (isNaN(level)) return { name: "", level: "" };

    const role = [
      { name: "مبتدأ", level: 0 },
      { name: "ازاكانا", level: 5 }, //»»————⍟——««\n
      { name: "كازيتانا", level: 10 },
      { name: "تنين", level: 15 },
      { name: "🐬 وحش البحر", level: 20 },
      { name: "🥷 صائد ازاكانا", level: 25 }, //𐏓・,〔𒁷, 𒆜〢
      { name: "⚔ سياف", level: 30 },
      { name: "👑 سياف ملكي", level: 35 },
      { name: "🪼  متحكم ملكي", level: 40 },
      { name: "🐍 سفير الازاكانا", level: 45 },
      { name: "👹 ملك الازاكانا", level: 50 },
      { name: "🧙‍♂️ ساحر ملكي", level: 60 },
      { name: "🧝‍♂️ سيد السيافين", level: 70 },
      { name: "🐲 تنين اسطوري", level: 80 },
      { name: "🔮 ملك البحر 🔮", level: 90 },
      { name: "🔱 امبراطور البحار السبعة 🔱", level: 100 },
    ];

    return role.reverse().find((role) => level >= role.level);
  },
};
