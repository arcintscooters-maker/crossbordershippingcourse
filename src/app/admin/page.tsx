"use client";

import { useState, useEffect } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [saving, setSaving] = useState(false);
  const [config, setConfig] = useState({
    whatsappNumber: "",
    whatsappMessage: "",
  });

  // Load current config on login
  useEffect(() => {
    if (!loggedIn) return;
    fetch("/api/config")
      .then((r) => r.json())
      .then((data) => {
        setConfig({
          whatsappNumber: data.whatsappNumber || "",
          whatsappMessage: data.whatsappMessage || "",
        });
      })
      .catch(() => setError("Failed to load config"));
  }, [loggedIn]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // Verify password by making a test request
    const res = await fetch("/api/config", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": password,
      },
      body: JSON.stringify(config),
    });
    if (res.ok) {
      setLoggedIn(true);
    } else {
      setError("Invalid password");
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);
    try {
      const res = await fetch("/api/config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
        body: JSON.stringify(config),
      });
      if (res.ok) {
        setSuccess("Settings saved successfully!");
        setTimeout(() => setSuccess(""), 3000);
      } else {
        const data = await res.json();
        setError(data.error || "Failed to save");
      }
    } catch {
      setError("Network error");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-white">
            <span className="text-teal">Ship</span>Overseas Admin
          </h1>
          <p className="mt-1 text-sm text-gray-400">Manage website settings</p>
        </div>

        {!loggedIn ? (
          /* ── LOGIN ── */
          <form
            onSubmit={handleLogin}
            className="rounded-2xl border border-gray-700 bg-navy-light p-8"
          >
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Admin Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mb-4 w-full rounded-lg border border-gray-600 bg-navy px-4 py-3 text-white outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
              placeholder="Enter admin password"
            />
            {error && (
              <p className="mb-4 text-sm text-red-400">{error}</p>
            )}
            <button
              type="submit"
              className="w-full rounded-lg bg-teal py-3 font-semibold text-navy transition hover:bg-teal-dark"
            >
              Login
            </button>
          </form>
        ) : (
          /* ── SETTINGS ── */
          <form
            onSubmit={handleSave}
            className="rounded-2xl border border-gray-700 bg-navy-light p-8"
          >
            <h2 className="mb-6 text-lg font-bold text-white">
              WhatsApp Settings
            </h2>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-gray-300">
                WhatsApp Number
              </label>
              <input
                type="text"
                value={config.whatsappNumber}
                onChange={(e) =>
                  setConfig({ ...config, whatsappNumber: e.target.value })
                }
                className="w-full rounded-lg border border-gray-600 bg-navy px-4 py-3 text-white outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                placeholder="+65 9123 4567"
              />
              <p className="mt-1 text-xs text-gray-500">
                Include country code (e.g. +65 for Singapore)
              </p>
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Default Message
              </label>
              <textarea
                value={config.whatsappMessage}
                onChange={(e) =>
                  setConfig({ ...config, whatsappMessage: e.target.value })
                }
                rows={3}
                className="w-full rounded-lg border border-gray-600 bg-navy px-4 py-3 text-white outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                placeholder="Hi, I'm interested in..."
              />
              <p className="mt-1 text-xs text-gray-500">
                Pre-filled message when users click the WhatsApp icon
              </p>
            </div>

            {error && (
              <p className="mb-4 text-sm text-red-400">{error}</p>
            )}
            {success && (
              <p className="mb-4 text-sm text-green-400">{success}</p>
            )}

            <button
              type="submit"
              disabled={saving}
              className="w-full rounded-lg bg-orange py-3 font-semibold text-white transition hover:bg-orange-dark disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Settings"}
            </button>

            <div className="mt-6 rounded-lg border border-gray-600 bg-navy p-4">
              <p className="text-xs text-gray-400">
                <strong className="text-gray-300">Preview:</strong> The WhatsApp
                icon will link to:
              </p>
              <p className="mt-1 break-all text-xs text-teal">
                wa.me/{config.whatsappNumber.replace(/[^0-9]/g, "")}
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setLoggedIn(false);
                setPassword("");
              }}
              className="mt-4 w-full text-center text-sm text-gray-500 hover:text-gray-300"
            >
              Logout
            </button>
          </form>
        )}

        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-gray-500 hover:text-teal">
            &larr; Back to website
          </a>
        </div>
      </div>
    </div>
  );
}
