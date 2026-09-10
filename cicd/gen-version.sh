# Get the latest tag if available
if latest_tag=$(git describe --tags --abbrev=0 2>/dev/null); then
    latest_tag=$(echo "$latest_tag" | sed 's/v//g')
else
    latest_tag=""
fi

# If there are no tags, set the next version to v1.0.0
if [ -z "$latest_tag" ]; then
   next_version="v1.0.0"
else
    # Get the major, minor, and patch versions
    major=$(echo "$latest_tag" | cut -d. -f1)
    minor=$(echo "$latest_tag" | cut -d. -f2)
    patch=$(echo "$latest_tag" | cut -d. -f3)
    # Increment the version based on the current branch DEVELOP
    if [ "$current_branch" = "develop" ]; then
        minor=$((minor + 1))
        patch=0
    fi

    # Increment the version based on the current branch MAIN
    if [ "$current_branch" = "main" ]; then
        major=$((major + 1))
        minor=0
        patch=0
    fi

    # Set the next version
    next_version="v$major.$minor.$patch"

fi
