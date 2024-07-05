import { execSync } from 'child_process';

try {
  console.log('Checking for updates...');

  // Check for outdated dependencies
  const outdated = execSync('ncu --json').toString();
  const outdatedDependencies = JSON.parse(outdated);

  if (Object.keys(outdatedDependencies).length > 0) {
    console.log('Outdated packages detected:');
    console.log(outdatedDependencies);

    console.log('\nUpdating packages to match the project versions...');
    execSync('ncu -u'); // Update package.json
    execSync('npm install'); // Install updated versions

    console.log('\nAll packages have been updated.');
  } else {
    console.log('All packages are up-to-date.');
  }
} catch (error) {
  console.error('Error checking or updating packages:', error);
}
