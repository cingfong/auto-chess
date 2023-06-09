export default {
  cavalry: {
    chname: "騎兵",
    name: "cavalry",
    race: "cavalry",
    attack: 25,
    health: 150,
    counter: ["shield"],
    price: 20,
    skill: "",
    effect: ["cut-effect", "cut-effect-2"],
  },
  shield: {
    chname: "盾兵",
    name: "shield",
    race: "shield",
    attack: 25,
    health: 150,
    counter: ["spearman"],
    price: 20,
    skill: "",
    effect: ["cut-effect", "cut-effect-2"],
  },
  spearman: {
    chname: "槍兵",
    name: "spearman",
    race: "spearman",
    attack: 25,
    health: 150,
    counter: ["cavalry"],
    price: 20,
    skill: "",
    effect: ["cut-effect", "cut-effect-2"],
  },
  archer: {
    chname: "弓兵",
    name: "archer",
    race: "archer",
    attack: 40,
    health: 75,
    counter: ["handCannoneer", "spearman"],
    price: 20,
    skill: "",
    effect: ["bow-effect", "bow-effect-2"],
  },
  handCannoneer: {
    chname: "火槍兵",
    name: "handCannoneer",
    race: "handCannoneer",
    attack: 40,
    health: 75,
    counter: ["horseArcher", "cavalry"],
    price: 20,
    skill: "",
    effect: ["bow-effect", "bow-effect-2"],
  },
  horseArcher: {
    chname: "弓騎兵",
    name: "horseArcher",
    race: "horseArcher",
    attack: 40,
    health: 75,
    counter: ["archer", "shield"],
    price: 20,
    skill: "",
    effect: ["bow-effect", "bow-effect-2"],
  },
  ninja: {
    chname: "忍者",
    name: "ninja",
    race: "ninja",
    attack: 10,
    health: 50,
    counter: "",
    price: 20,
    skill: "appendAttack",
    effect: ["raid-effect-1"],
  },
  drummer: {
    chname: "戰鼓者",
    name: "drummer",
    race: "drummer",
    attack: 0,
    health: 50,
    counter: "",
    price: 20,
    skill: "addAttack",
    effect: ["add-attack-effect", "add-attack-effect-2"],
  },
  medic: {
    chname: "醫療兵",
    name: "medic",
    race: "medic",
    attack: 0,
    health: 50,
    counter: "",
    price: 20,
    skill: "anyTreat",
    effect: ["treat-effect", "treat-effect-2"],
  },
};
