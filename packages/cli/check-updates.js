const david = require('david');
const log = require('@luar/utils/log');
const fs = require('fs');

const listDependencies = (deps) => {
  Object.keys(deps).forEach((depName) => {
    const required = deps[depName].required || '*';
    const stable = deps[depName].stable || 'None';
    const { latest } = deps[depName];
    log.debug('%s Required: %s Stable: %s Latest: %s', depName, required, stable, latest);
  });
};

const checkUpdates = (manifest) => {
  david.getDependencies(manifest, (er, deps) => {
    log.info('latest dependencies information for', manifest.name);
    listDependencies(deps);
  });

  david.getDependencies(manifest, { dev: true }, (er, deps) => {
    log.info('latest devDependencies information for', manifest.name);
    listDependencies(deps);
  });

  david.getUpdatedDependencies(manifest, (er, deps) => {
    log.info('dependencies with newer versions for', manifest.name);
    listDependencies(deps);
  });

  david.getUpdatedDependencies(manifest, { dev: true }, (er, deps) => {
    log.info('devDependencies with newer versions for', manifest.name);
    listDependencies(deps);
  });

  david.getUpdatedDependencies(manifest, { stable: true }, (er, deps) => {
    log.info('dependencies with newer STABLE versions for', manifest.name);
    listDependencies(deps);
  });

  david.getUpdatedDependencies(manifest, { dev: true, stable: true }, (er, deps) => {
    log.info('devDependencies with newer STABLE versions for', manifest.name);
    listDependencies(deps);
  });
};

const manifestPath = './package.json';
fs.readFile(manifestPath, 'utf8', (err, data) => {
  if (err) throw err;
  const manifest = JSON.parse(data);
  log.info('manifest', manifest);
  checkUpdates(manifest);
});
