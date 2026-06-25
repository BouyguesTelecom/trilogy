export type LogLevel = "info" | "warn" | "error";

function redact(value: unknown): unknown {
  if (!value || typeof value !== "object") {
    return value;
  }

  const sensitive = ["token", "password", "secret", "key", "auth", "cookie"];
  const input = value as Record<string, unknown>;
  const output: Record<string, unknown> = {};

  for (const [k, v] of Object.entries(input)) {
    if (sensitive.some((s) => k.toLowerCase().includes(s))) {
      output[k] = "[REDACTED]";
    } else if (v && typeof v === "object") {
      output[k] = redact(v);
    } else {
      output[k] = v;
    }
  }

  return output;
}

export function log(level: LogLevel, message: string, meta?: Record<string, unknown>): void {
  const entry = {
    ts: new Date().toISOString(),
    level,
    message,
    ...(meta ? { meta: redact(meta) } : {}),
  };

  process.stderr.write(`${JSON.stringify(entry)}\n`);
}
