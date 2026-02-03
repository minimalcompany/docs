#!/bin/bash

# Convert images to half size WebP format
# Usage: ./convert-images.sh <path>

if [ -z "$1" ]; then
    echo "Usage: $0 <path>"
    exit 1
fi

path="$1"

if [ ! -d "$path" ]; then
    echo "Error: '$path' is not a valid directory"
    exit 1
fi

# Find and convert images
find "$path" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) | while read -r img; do
    output="${img%.*}.webp"
    echo "Converting: $img -> $output"
    magick "$img" "$output"
done

echo "Done!"
