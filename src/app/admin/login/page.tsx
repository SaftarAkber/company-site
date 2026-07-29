"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Şifrə yanlışdır");
    }
  }

  return (
    <div className="max-w-sm mx-auto py-24 px-4">
      <h1 className="text-2xl font-bold mb-6">Admin Girişi</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Şifrə"
          className="border p-2 w-full rounded"
          required
          autoFocus
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="bg-ink text-paper px-4 py-2 rounded w-full transition-colors duration-300 hover:bg-accent disabled:opacity-50"
        >
          {loading ? "Yoxlanılır..." : "Daxil ol"}
        </button>
      </form>
    </div>
  );
}