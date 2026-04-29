import { useEffect, useState } from "react";

import FrontEnd from "../../assets/svg/FrontEnd"
import SVGhtml from "../../assets/svg/html";
import SVGcss from "../../assets/svg/css";
import SVGSass from "../../assets/svg/sass";
import SVGJS from "../../assets/svg/js";
import SVGTS from "../../assets/svg/ts";
import SVGBootstrap from "../../assets/svg/Bootstrap";
import SVGRedux from "../../assets/svg/Redux";
import SVGReact from "../../assets/svg/svgreact";
import SVGastro from "../../assets/svg/astro";
import SVGTailwind from "../../assets/svg/Tailwind";
import SVGVite from "../../assets/svg/Vite";

import BackEnd from "../../assets/svg/BackEnd";
import SVGphp from "../../assets/svg/php";
import SVGlaravel from "../../assets/svg/laravel";
import SVGnode from "../../assets/svg/node";

import DataBase from "../../assets/svg/Database";
import SVGmysql from "../../assets/svg/mysql";
import SVGsqlite from "../../assets/svg/sqlite";
import SVGpostgresql from "../../assets/svg/postgresql";

import Learning from "../../assets/svg/Learning"
import SVGVue from "../../assets/svg/Vue";

import Tools from "../../assets/svg/Tools";
import SVGgit from "../../assets/svg/git";
import SVGgitHub from "../../assets/svg/Github2";
import SVGnpm from "../../assets/svg/npm";
import SVGpnpm from "../../assets/svg/pnpm";
import SVGgulp from "../../assets/svg/gulp";
import SVGpostman from "../../assets/svg/postman";
import SVGfigma from "../../assets/svg/figma";
import SVGcanva from "../../assets/svg/canva";

export const StackInfo = [
    {
        id: 1,
        name: "Front-end",
        stacks: [
            { stack: <FrontEnd />, isImage: false, },
        ],

        icons: [
            { icon: <SVGhtml />, Background: "bg-orange-500", textSvg: "HTML", isImage: false },
            { icon: <SVGcss />, Background: "bg-indigo-500", textSvg: "CSS", isImage: false },
            { icon: <SVGSass />, Background: "bg-pink-500", textSvg: "Sass", isImage: false },
            { icon: <SVGJS />, Background: "bg-yellow-500", textSvg: "JavaScript", isImage: false },
            { icon: <SVGTS />, Background: "bg-blue-500", textSvg: "TypeScript", isImage: false },
            { icon: <SVGBootstrap />, Background: "bg-violet-500", textSvg: "Bootstrap", isImage: false },
            { icon: <SVGRedux />, Background: "bg-purple-500", textSvg: "Redux", isImage: false },
            { icon: <SVGReact />, Background: "bg-sky-500", textSvg: "React", isImage: false },
            { icon: <SVGastro />, Background: "bg-orange-500", textSvg: "Astro", isImage: false },
            { icon: <SVGTailwind />, Background: "bg-cyan-500", textSvg: "Tailwind_CSS", isImage: false },
            { icon: <SVGVite />, Background: "bg-violet-500", textSvg: "Vite", isImage: false },

        ],
    },

    {
        id: 2,
        name: "Back-end",
        stacks: [
            { stack: <BackEnd />, isImage: false, },
        ],

        icons: [
            { icon: <SVGphp />, Background: "bg-indigo-500", textSvg: "PHP", isImage: false },
            { icon: <SVGlaravel />, Background: "bg-red-500", textSvg: "Laravel", isImage: false },
            { icon: <SVGnode />, Background: "bg-lime-500", textSvg: "Node", isImage: false },
        ],
    },

    {
        id: 3,
        name: "Base de Datos",
        stacks: [
            { stack: <DataBase />, isImage: false, },
        ],

        icons: [
            { icon: <SVGmysql />, Background: "bg-orange-500", textSvg: "MySQL", isImage: false },
            { icon: <SVGsqlite />, Background: "bg-sky-500", textSvg: "SQLite", isImage: false },
            { icon: <SVGpostgresql />, Background: "bg-blue-500", textSvg: "PostgreSQL", isImage: false },
        ],
    },

    {
        id: 4,
        name: "Aprendiendo",
        stacks: [
            { stack: <Learning />, isImage: false, },
        ],

        icons: [
            { icon: <SVGVue />, Background: "bg-emerald-500", textSvg: "Vue", isImage: false },
        ],
    },
    {
        id: 5,
        name: "Herramientas",
        stacks: [
            { stack: <Tools />, isImage: false, },
        ],

        icons: [
            { icon: <SVGgit />, Background: "bg-orange-500", textSvg: "Git", isImage: false },
            { icon: <SVGgitHub />, Background: "bg-neutral-900", textSvg: "GitHub", isImage: false },
            { icon: <SVGnpm />, Background: "bg-red-500", textSvg: "NPM", isImage: false },
            { icon: <SVGpnpm />, Background: "bg-amber-500", textSvg: "PNPM", isImage: false },
            { icon: <SVGgulp />, Background: "bg-rose-500", textSvg: "Gulp", isImage: false },
            { icon: <SVGpostman />, Background: "bg-orange-500", textSvg: "Postman", isImage: false },
            { icon: <SVGfigma />, Background: "bg-pink-500", textSvg: "Figma", isImage: false },
            { icon: <SVGcanva />, Background: "bg-cyan-500", textSvg: "Canva", isImage: false },
            { icon: "/img/Clerk.webp", Background: "bg-purple-500", textSvg: "Clerk", isImage: true },

        ],
    },
];