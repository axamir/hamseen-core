#!/bin/sh
set -eu
source_path="${1:-apps/mvp/data/hamseen.sqlite}"
backup_dir="${2:-.backups}"
test -f "$source_path" || { echo "Database not found: $source_path" >&2; exit 1; }
mkdir -p "$backup_dir"
stamp=$(date -u +%Y%m%dT%H%M%SZ)
target="$backup_dir/hamseen-$stamp.sqlite"
sqlite3 "$source_path" ".backup '$target'"
shasum -a 256 "$target" > "$target.sha256"
echo "$target"
