module.exports = async function firebaseCli(args, reactNativeConfig) {
  // uncomment to sign-in
  await require('./helpers/firebase').auth.authWithBrowser();

  // const account = require('./helpers/firebase').auth.getAccount();
  // const api = require('./helpers/firebase').api(account);

  // const firebaseProjects = await api.management.getProjects();
  const selectedProject = await require('./helpers/prompt').selectFirebaseProject();

  console.dir(selectedProject);
};
