#!/bin/bash

# Pre-push hook to check for references to old Artifactory registry
# This script prevents push if any references to "glouton" are found

echo "🔍 Checking files..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Term to search for
FORBIDDEN_TERM="glouton"

# Function to check files
check_files() {
    local found_files=()
    local directories_to_check=("packages" "examples" ".")

    # Search only in specific directories for better performance
    for dir in "${directories_to_check[@]}"; do
        if [ -d "$dir" ]; then
            while IFS= read -r -d '' file; do
                if grep -l "$FORBIDDEN_TERM" "$file" 2>/dev/null; then
                    found_files+=("$file")
                fi
            done < <(find "$dir" -maxdepth 3 -type f \
                ! -path "*/node_modules/*" \
                ! -path "*/.git/*" \
                ! -path "*/dist/*" \
                ! -path "*/build/*" \
                ! -path "*/.cache/*" \
                ! -path "*/scripts/*" \
                ! -name "*.png" \
                ! -name "*.jpg" \
                ! -name "*.jpeg" \
                ! -name "*.gif" \
                ! -name "*.ico" \
                ! -name "*.svg" \
                ! -name "*.woff" \
                ! -name "*.woff2" \
                ! -name "*.ttf" \
                ! -name "*.eot" \
                ! -name "*.otf" \
                ! -name "*.pdf" \
                ! -name "*.zip" \
                ! -name "*.tar.gz" \
                ! -name "*.tgz" \
                ! -name "*.exe" \
                ! -name "*.dll" \
                ! -name "*.so" \
                ! -name "*.dylib" \
                -print0)
        fi
    done

    if [ ${#found_files[@]} -gt 0 ]; then
        echo -e "${RED}❌ ERROR: References to '$FORBIDDEN_TERM' found!${NC}"
        echo -e "${YELLOW}Files containing references:${NC}"
        for file in "${found_files[@]}"; do
            echo -e "  ${RED}• $file${NC}"
            # Show lines containing the reference
            echo -e "${YELLOW}    Found lines:${NC}"
            grep -n "$FORBIDDEN_TERM" "$file" | head -3 | while read -r line; do
                echo -e "      ${RED}$line${NC}"
            done
            echo
        done
        echo -e "${RED}🚫 Push cancelled to prevent propagation of old registry references.${NC}"
        echo -e "${YELLOW}💡 Recommended actions:${NC}"
        echo -e "   1. Remove references to '$FORBIDDEN_TERM'"
        echo -e "   2. Regenerate package-lock.json if needed: ${GREEN}npm install${NC}"
        echo -e "   3. Check .npmrc configuration: ${GREEN}cat .npmrc${NC}"
        echo
        return 1
    fi

    return 0
}

# Specific check for package-lock.json files
check_package_lock() {
    local package_lock_files=(
        "package-lock.json"
        "examples/mobile-expo/package-lock.json"
    )

    for file in "${package_lock_files[@]}"; do
        if [ -f "$file" ]; then
            if grep -q "$FORBIDDEN_TERM" "$file" 2>/dev/null; then
                echo -e "${RED}❌ ERROR: $file contains references to '$FORBIDDEN_TERM'!${NC}"
                echo -e "${YELLOW}💡 Solution: Regenerate the file with:${NC}"
                if [ "$file" = "package-lock.json" ]; then
                    echo -e "   ${GREEN}rm package-lock.json && npm install --legacy-peer-deps${NC}"
                else
                    echo -e "   ${GREEN}rm $file && cd $(dirname $file) && npm install --legacy-peer-deps${NC}"
                fi
                return 1
            fi
        fi
    done

    return 0
}

# Check npm configuration
check_npm_config() {
    if [ -f ".npmrc" ]; then
        if grep -q "$FORBIDDEN_TERM" ".npmrc" 2>/dev/null; then
            echo -e "${RED}❌ ERROR: .npmrc contains a reference to '$FORBIDDEN_TERM'!${NC}"
            echo -e "${YELLOW}💡 Solution: Fix .npmrc with:${NC}"
            echo -e "   ${GREEN}echo 'registry=https://registry.npmjs.org/' > .npmrc${NC}"
            return 1
        fi
    fi

    return 0
}

# Run checks
echo "📋 Checking files..."
if ! check_files; then
    exit 1
fi

echo "📦 Checking package-lock.json files..."
if ! check_package_lock; then
    exit 1
fi

echo "⚙️  Checking npm configuration..."
if ! check_npm_config; then
    exit 1
fi

# If everything is OK
echo -e "${GREEN}✅ No references to '$FORBIDDEN_TERM' found!${NC}"
echo -e "${GREEN}🚀 Push allowed.${NC}"
echo

exit 0
