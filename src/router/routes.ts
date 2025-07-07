const routes = {
  dashboard: {
    races: "races",
    race: "races/:id",
    classes: "classes",
    class: "classes/:id",
    skills: "skills",
    skill: "skills/:id",
    feats: "feats",
    feat: "feats/:id",
    spells: "spells",
    spell: "spells/:id",
    items: "items",
    item: "items/:id",
  },
};

export const navigation = {
  getHome: () => `/`,
  getRaces: () => `/${routes.dashboard.races}`,
  getRace: (id: number) => `/${routes.dashboard.races}/${id}`,
  getClasses: () => `/${routes.dashboard.classes}`,
  getClass: (id: number) => `/${routes.dashboard.classes}/${id}`,
  getSkills: () => `/${routes.dashboard.skills}`,
  getSkill: (id: number) => `/${routes.dashboard.skills}/${id}`,
  getFeats: () => `/${routes.dashboard.feats}`,
  getFeat: (id: number) => `/${routes.dashboard.feats}/${id}`,
};

export default routes;
