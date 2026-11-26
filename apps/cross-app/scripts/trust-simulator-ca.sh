#!/usr/bin/env bash
# Trusts the corporate TLS-inspection root CA (default: Zscaler) in the booted iOS simulator,
# whose trust store is separate from the Mac's, so HTTPS images and requests stop failing with -1202.
set -euo pipefail

CA_NAME="${1:-${CORPORATE_CA_NAME:-Zscaler Root CA}}"
CA_FILE="$(mktemp "${TMPDIR:-/tmp}/corporate-ca.XXXXXX")"
trap 'rm -f "$CA_FILE"' EXIT

security find-certificate -c "$CA_NAME" -p /Library/Keychains/System.keychain >"$CA_FILE"
if [ ! -s "$CA_FILE" ]; then
  echo "Certificate '$CA_NAME' not found in the System keychain." >&2
  exit 1
fi

xcrun simctl keychain booted add-root-cert "$CA_FILE"
echo "'$CA_NAME' is now trusted by the booted simulator. Reload the app."
