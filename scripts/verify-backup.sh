#!/bin/sh
set -eu
backup_path="${1:?Usage: scripts/verify-backup.sh BACKUP.sqlite}"
test -f "$backup_path" || exit 1
test -f "$backup_path.sha256" && shasum -a 256 -c "$backup_path.sha256"
result=$(sqlite3 "$backup_path" "PRAGMA integrity_check;")
test "$result" = "ok" || { echo "$result" >&2; exit 1; }
echo "Backup integrity verified: $backup_path"
