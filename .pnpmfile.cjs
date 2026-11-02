// typescript-eslint ne supporte pas TS 7 : on lui impose l'API TS 6 (peer dep -> dep)
const NEEDS_TS6 = /^(@typescript-eslint\/|ts-api-utils$)/

module.exports = {
  hooks: {
    readPackage(pkg) {
      if (NEEDS_TS6.test(pkg.name) && pkg.peerDependencies?.typescript) {
        delete pkg.peerDependencies.typescript
        pkg.dependencies = { ...pkg.dependencies, typescript: "6.0.3" }
      }
      return pkg
    },
  },
}
