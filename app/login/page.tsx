"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function signup() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    setMessage(error ? error.message : "Compte créé ! Vérifie tes e-mails.");
  }

  async function login() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setMessage(error ? error.message : "Connexion réussie !");
  }

  return (
    <main style={{ maxWidth: 400, margin: "60px auto", padding: 20 }}>
      <h1>DevisPro</h1>
      <h2>Connexion / Inscription</h2>
      <input
        placeholder="Adresse e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", width: "100%", padding: 12, marginBottom: 12 }}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", width: "100%", padding: 12, marginBottom: 12 }}
      />
      <button onClick={signup}>Créer un compte</button>
      <button onClick={login} style={{ marginLeft: 10 }}>Se connecter</button>
      <p>{message}</p>
    </main>
  );
}
