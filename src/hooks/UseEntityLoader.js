import { useState, useEffect } from "react";

export function useEntityLoader(entityId) {
  const [entity, setEntity] = useState(null);

  useEffect(() => {
    import(`../data/entities/${entityId}.json`)
      .then((data) => setEntity(data))
      .catch((err) => console.error("Error loading entity:", err));
  }, [entityId]);

  return entity;
}
