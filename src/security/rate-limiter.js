// AI INTENT: Security layer to prevent brute force and API abuse through request limiting.
export class RateLimiter {
  constructor({ maxAttempts = 5, windowMs = 60_000, blockMs = 300_000 } = {}) {
    this.maxAttempts = maxAttempts;
    this.windowMs    = windowMs;
    this.blockMs     = blockMs;
    this.key         = 'rl_' + btoa(window.location.pathname);
  }

  isBlocked() {
    const data = JSON.parse(localStorage.getItem(this.key) || '{}');
    const now  = Date.now();
    if (data.blockedUntil && now < data.blockedUntil) {
      return { blocked: true, remaining: Math.ceil((data.blockedUntil - now) / 1000) };
    }
    if (data.windowStart && now - data.windowStart > this.windowMs) {
      localStorage.removeItem(this.key);
    }
    return { blocked: false };
  }

  record() {
    const now  = Date.now();
    const data = JSON.parse(localStorage.getItem(this.key) || '{}');
    if (!data.windowStart) data.windowStart = now;
    data.attempts = (data.attempts || 0) + 1;
    if (data.attempts >= this.maxAttempts) data.blockedUntil = now + this.blockMs;
    localStorage.setItem(this.key, JSON.stringify(data));
    return data.attempts;
  }

  reset() { localStorage.removeItem(this.key); }
}
