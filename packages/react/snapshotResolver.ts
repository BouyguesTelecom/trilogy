export default {
  // Résout le chemin d'accès de test au snapshot
  resolveSnapshotPath: (testPath: string, snapshotExtension: string) => testPath.replace('.tsx', `.tsx${snapshotExtension}`),

  // Résout depuis le snapshot vers le chemin de test
  resolveTestPath: (snapshotFilePath: string, snapshotExtension: string) =>
    snapshotFilePath.replace(`.tsx${snapshotExtension}`, '.tsx'),

  // Exemple de chemin de test, utilisé pour vérifier la cohérence de l'implémentation ci-dessus
  testPathForConsistencyCheck: 'some/example.test.tsx',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
}
