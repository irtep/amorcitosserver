const fs = require('fs-extra');
const path = require('path');

// Define your paths
const publicDir = path.join(__dirname, 'server/src/public');
const portalUiBuildDir = path.join(__dirname, 'portal_ui/build');
const iz4UiBuildDir = path.join(__dirname, 'iz4_ui/build');
const distPublicDir = path.join(__dirname, 'server/dist/public');

// Function to delete all files in the directory, leaving directories intact
const cleanPublicDir = async (dir) => {
    const files = await fs.readdir(dir);
    await Promise.all(files.map(async (file) => {
        const filePath = path.join(dir, file);
        const stats = await fs.stat(filePath);
        if (stats.isFile()) {
            await fs.unlink(filePath);
            console.log(`Deleted file: ${filePath}`);
        }
        // If it's a directory, do nothing (leave it intact)
    }));
};

// Function to copy files from source to target
const copyFiles = async (source, target) => {
    await fs.copy(source, target);
    console.log(`Copied files from ${source} to ${target}`);
};

// Function to delete the directory
const deleteDir = async (dir) => {
    await fs.remove(dir);
    console.log(`Deleted directory: ${dir}`);
};

// Execute the functions in sequence
const run = async () => {
    try {
        // Step 1: Clean the public directory
        await cleanPublicDir(publicDir);

        // Step 2: Copy from portal_ui/build to server/src/public
        await copyFiles(portalUiBuildDir, publicDir);

        // Step 3: Copy from iz4_ui/build to server/src/public/iz4
        await copyFiles(iz4UiBuildDir, path.join(publicDir, 'iz4'));

        // Step 4: Delete server/dist/public
        await deleteDir(distPublicDir);

        // Step 5: Copy from server/src/public to server/dist/public
        await copyFiles(publicDir, distPublicDir);

        console.log('Build and deploy process completed successfully.');
    } catch (err) {
        console.error(err);
    }
};

// Run the script
run();
