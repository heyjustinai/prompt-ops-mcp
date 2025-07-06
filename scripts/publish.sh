#!/bin/bash

# Publish script for prompt-ops-mcp
# This script helps ensure proper build and publish process

set -e

echo "🚀 Starting publish process..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not in a git repository"
    exit 1
fi

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "❌ There are uncommitted changes. Please commit or stash them first."
    exit 1
fi

# Clean and build
echo "🧹 Cleaning previous builds..."
rm -rf dist/

echo "🏗️  Building project..."
npm run build

# Run tests if they exist
if [ -f "package.json" ] && grep -q "\"test\"" package.json; then
    echo "🧪 Running tests..."
    npm test || {
        echo "❌ Tests failed. Please fix before publishing."
        exit 1
    }
fi

# Lint the code
echo "📋 Linting code..."
npm run lint || {
    echo "❌ Linting failed. Please fix linting errors before publishing."
    exit 1
}

# Check if already published
PACKAGE_NAME=$(node -p "require('./package.json').name")
PACKAGE_VERSION=$(node -p "require('./package.json').version")

if npm view "$PACKAGE_NAME@$PACKAGE_VERSION" > /dev/null 2>&1; then
    echo "❌ Version $PACKAGE_VERSION already published. Please bump version first."
    exit 1
fi

echo "📦 Publishing $PACKAGE_NAME@$PACKAGE_VERSION..."

# Publish to NPM
npm publish

echo "✅ Successfully published $PACKAGE_NAME@$PACKAGE_VERSION!"
echo "🎉 Package is now available via: npm install -g $PACKAGE_NAME"
echo "📚 Documentation: https://github.com/yourusername/prompt-ops-mcp" 