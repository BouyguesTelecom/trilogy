#!/bin/bash

# Script to install Git hooks for all team members
# This ensures everyone has the same protection against old registry references

echo "🔧 Installing Git hooks for trilogy project..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Create hooks directory if it doesn't exist
mkdir -p .git/hooks

# Copy pre-push hook
if [ -f "scripts/pre-push-hook.sh" ]; then
    cp scripts/pre-push-hook.sh .git/hooks/pre-push
    chmod +x .git/hooks/pre-push
    echo -e "${GREEN}✅ Pre-push hook installed successfully${NC}"
else
    echo -e "${RED}❌ Error: scripts/pre-push-hook.sh not found${NC}"
    exit 1
fi

# Test the hook
echo "🧪 Testing hook installation..."
if [ -x ".git/hooks/pre-push" ]; then
    echo -e "${GREEN}✅ Hook is executable and ready${NC}"
else
    echo -e "${RED}❌ Hook installation failed${NC}"
    exit 1
fi

echo -e "${GREEN}🎉 Git hooks installation completed!${NC}"
echo -e "${YELLOW}💡 The pre-push hook will now prevent pushing files containing references${NC}"
echo
