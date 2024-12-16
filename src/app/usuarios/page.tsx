"use client";
import { useEffect, useState } from "react";

interface User {
  id: number;
  username: string;
  email: string;
}

export default function UsuariosPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users"); // Llamada a la API
        if (!response.ok) {
          throw new Error("Error al obtener usuarios");
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
