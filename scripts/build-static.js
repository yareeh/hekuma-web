import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Configuration
const staticDir = path.join(rootDir, 'static');
const outputDir = path.join(rootDir, 'out');

// Function to delete directory recursively
function deleteDirRecursive(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = path.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteDirRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dirPath);
    console.log(`✅ Deleted directory: ${dirPath}`);
  }
}

// Function to copy directory recursively
function copyDirRecursive(src, dest) {
  // Check if source directory exists
  if (!fs.existsSync(src)) {
    throw new Error(`Source directory does not exist: ${src}`);
  }

  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Main function
async function buildStatic() {
  try {
    console.log('🚀 Starting static site generation...');
    
    // Step 1: Delete existing static directory
    console.log('🗑️ Cleaning up existing static directory...');
    deleteDirRecursive(staticDir);
    
    // Also clean up previous output directory if it exists
    if (fs.existsSync(outputDir)) {
      console.log('🗑️ Cleaning up previous output directory...');
      deleteDirRecursive(outputDir);
    }
    
    // Step 2: Build the Next.js app with static export 
    console.log('🔨 Building Next.js app with static export...');
    execSync('npx next build', { stdio: 'inherit' });
    
    // Step 3: Verify the output directory exists
    if (!fs.existsSync(outputDir)) {
      console.error(`❌ Output directory not found: ${outputDir}`);
      console.error('Make sure your next.config.js has output: "export" configured');
      process.exit(1);
    }
    
    // Step 4: Copy the output to static directory
    console.log('📦 Copying output to static directory...');
    copyDirRecursive(outputDir, staticDir);
    
    console.log('✨ Static site successfully generated in the "static" directory!');
  } catch (error) {
    console.error('❌ Error generating static site:', error);
    process.exit(1);
  }
}

// Run the build
buildStatic(); 