#!/bin/bash

# Load environment variables
source .env

# Configuration
SERVER_USER="${DEPLOY_SERVER_USER}"
SERVER_IP="${DEPLOY_SERVER_IP}"
PROJECT_PATH="${DEPLOY_PROJECT_PATH}"
PROJECT_NAME="${DEPLOY_PROJECT_NAME}"
SSH_KEY="${DEPLOY_SSH_KEY}"
DEPLOY_PORT="${DEPLOY_PORT}"

# SSH and SCP commands with specific key
SSH_CMD="ssh -i $SSH_KEY"
SCP_CMD="scp -i $SSH_KEY"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to log messages
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
    exit 1
}

# Check if project directory exists
log "Checking remote directory..."
$SSH_CMD $SERVER_USER@$SERVER_IP "mkdir -p $PROJECT_PATH" || error "Failed to create project directory"

# Build the project
log "Building project..."
npm run build || error "Build failed"

# Create deployment archive
log "Creating deployment archive..."
tar -czf build.tar.gz .next package.json package-lock.json public node_modules || error "Failed to create archive"

# Upload to server
log "Uploading to server..."
$SCP_CMD build.tar.gz $SERVER_USER@$SERVER_IP:$PROJECT_PATH/build.tar.gz || error "Failed to upload archive"

# Execute commands on server
log "Deploying on server..."
$SSH_CMD $SERVER_USER@$SERVER_IP "cd $PROJECT_PATH && \
    (echo 'Stopping existing PM2 process...' && \
    pm2 delete $PROJECT_NAME || true) && \
    (echo 'Cleaning up old files...' && \
    rm -rf .next node_modules package-lock.json) && \
    (echo 'Extracting new files...' && \
    tar -xzf build.tar.gz) && \
    (echo 'Installing dependencies...' && \
    npm cache clean --force && \
    npm install) && \
    (echo 'Creating font manifest...' && \
    mkdir -p .next/server && \
    echo '{}' > .next/server/font-manifest.json) && \
    (echo 'Starting PM2 process...' && \
    NODE_ENV=production pm2 start npm --name $PROJECT_NAME -- start -- -p $DEPLOY_PORT || (echo 'PM2 start failed' >&2; exit 1)) && \
    (echo 'Saving PM2 configuration...' && \
    pm2 save || (echo 'PM2 save failed' >&2; exit 1))" || error "Failed to deploy on server"

# Clean up local archive
log "Cleaning up..."
rm build.tar.gz

log "Deployment completed successfully!"
