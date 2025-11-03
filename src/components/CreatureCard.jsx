import React, { useEffect, useState } from "react";

export default function CreatureCard({ id, creature: creatureProp }) {
  const [creature, setCreature] = useState(creatureProp ?? null);

  useEffect(() => {
    // If a creature prop was provided, skip dynamic loading.
    if (creatureProp) return;

    let mounted = true;
    import(`../data/entities/${id}.json`)
      .then((data) => {
        if (mounted) setCreature(data);
      })
      .catch((err) => console.error("Error loading creature:", err));

    return () => {
      mounted = false;
    };
  }, [id, creatureProp]);

  if (!creature) return <p>Loading...</p>;

  return (
    <div className="p-4 border rounded-2xl bg-slate-900 text-slate-100 shadow-lg">
      <h2 className="text-xl font-bold">{creature.name}</h2>
      <p className="text-sm opacity-70">Species: {creature.species}</p>

      <pre className="mt-2 font-mono text-green-400 text-sm">
        {creature.appearance.ascii.join("\n")}
      </pre>

      <div className="mt-3">
        <p>❤️ Health: {creature.stats.health}</p>
        <p>⚡ Energy: {creature.stats.energy}</p>
        <p>🍖 Hunger: {creature.stats.hunger}</p>
      </div>
    </div>
  );
}
