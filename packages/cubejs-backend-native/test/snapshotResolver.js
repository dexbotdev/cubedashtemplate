const path = require('path');
const fs = require('fs');
const native = require('../dist/js');

// Ugly hack to ignore obsolete snapshots for fallback build
// https://github.com/jestjs/jest/issues/4898
if (native.isFallbackBuild()) {
  const snapshotsDir = path.join(process.cwd(), 'test', '__snapshots__');
  if (fs.existsSync(snapshotsDir)) {
    fs.rmSync(snapshotsDir, {
      recursive: true
    });
  }
}

function resolveSnapshotPath(testPath, snapshotExtension) {
  const testSourcePath = testPath.replace('dist/', '');
  const testDirectory = path.dirname(testSourcePath);
  const testFilename = path.basename(testSourcePath).replace('.js', '.ts');

  return `${testDirectory}/__snapshots__/${testFilename}${snapshotExtension}`;
}

function resolveTestPath(snapshotFilePath, snapshotExtension) {
  const testSourceFile = snapshotFilePath
    .replace('test/__snapshots__', 'dist/test')
    .replace('.ts', '.js')
    .replace(snapshotExtension, '');

  return testSourceFile;
}

module.exports = {
  resolveSnapshotPath,
  resolveTestPath,

  testPathForConsistencyCheck: 'dist/test/Test.spec.js'
};
