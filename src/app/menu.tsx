"use client";

import { useState } from "react";

import "./styles.css";
import Image from "next/image";

export default function Menu({}: {}) {
  const [class1, setClass1] = useState<"is-close" | "is-open">("is-close");

  return (
    <nav className={`group ${class1}`}>
      <div className="nav-header">
        <div className="group-[.is-close]:hidden">Menú</div>
        <Image
          className="group-[.is-open]:hidden h-4"
          src="Icono.svg"
          width={150}
          height={150}
          alt="Icono"
        />
        <Image
          className="group-[.is-open]:hidden h-4 ml-2"
          src="Nombre.svg"
          width={300}
          height={62}
          alt="Nombre"
        />
        <div
          className="my-auto ml-auto mr-2 px-2 rounded group-[.is-open]:after:content-['X'] group-[.is-close]:after:content-['+'] after:ml-0.5 shadow shadow-white"
          onClick={(e) => {
            if (class1 == "is-open") {
              setClass1("is-close");
            } else {
              setClass1("is-open");
            }
          }}
        ></div>
      </div>
      <div className="nav-body">
        <a className="contents" href="/">
          <Image
            className="max-w-32 sm:hidden"
            src="Logo Completo.svg"
            width={150}
            height={150}
            alt="Logo"
          />
        </a>
        <hr className="w-full border-2 border-white rounded-full sm:hidden" />
        <a href="/servicios">Servicios</a>
        <a href="/proyectos">Proyectos</a>
        <a href="/blog">Mi blog</a>
      </div>
    </nav>
  );
}
