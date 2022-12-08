export function getNamespacedGettersObject(getters, startsWith) {
  return Object.entries(getters).reduce(
    (acc, [k, v]) => ({
      ...acc,
      ...(k.startsWith(startsWith)
        ? {
            [k]: v,
          }
        : {}),
    }),
    {}
  );
}
