#!/bin/bash

# Create a simple orange square as base image
convert -size 512x512 xc:#ff6b00 base.png

# Generate different sizes
convert base.png -resize 16x16 public/favicon-16x16.png
convert base.png -resize 32x32 public/favicon-32x32.png
convert base.png -resize 180x180 public/apple-touch-icon.png
convert base.png -resize 192x192 public/android-chrome-192x192.png
convert base.png -resize 512x512 public/android-chrome-512x512.png

# Create ICO file
convert base.png -resize 16x16 public/favicon.ico

# Create SVG for Safari pinned tab
echo '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><rect width="512" height="512" fill="#ff6b00"/></svg>' > public/safari-pinned-tab.svg

# Clean up
rm base.png 