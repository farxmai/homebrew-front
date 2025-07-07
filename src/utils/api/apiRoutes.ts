const apiRoutes = {
  characters: {
    base: "/characters",
    byId: (id: string) => `/characters/${id}`,
  },
  classes: {
    base: "/classes",
    byId: (id: string) => `/classes/${id}`,
  },
  races: {
    base: "/races",
    byId: (id: string) => `/races/${id}`,
  },
  skills: {
    base: "/skills",
    byId: (id: string) => `/skills/${id}`,
  },
  feats: {
    base: "/feats",
    byId: (id: string) => `/feats/${id}`,
  },
};

export default apiRoutes;
