import html from  '../assets/techStack/frontEnd/html.png'
import css from  '../assets/techStack/frontEnd/css.png'
import tailwind from  '../assets/techStack/frontEnd/tailwind.png'
import javascript from  '../assets/techStack/frontEnd/javascript.png'
import typescript from  '../assets/techStack/frontEnd/typescript.png'
import vite from  '../assets/techStack/frontEnd/vite.png'
import react from  '../assets/techStack/frontEnd/react.png'
import vercel from  '../assets/techStack/frontEnd/vercel.png'

import express from  '../assets/techStack/backEnd/express.png'
import node from  '../assets/techStack/backEnd/node.png'
import postgres from  '../assets/techStack/backEnd/postgres.png'
import supabase from  '../assets/techStack/backEnd/supabase.png'
import render from  '../assets/techStack/backEnd/render.png'

export const techStackData = [
    {
        id: "frontend",
        techStackType: "Frontend",
        techStack: [
            { name: "HTML", color: "white", backgroundColor: "#312C6D",  logo: html , fontSize: "0.8rem"},
            { name: "CSS", color: "white", backgroundColor: "#312C6D",  logo: css , fontSize: "0.8rem"},
            { name: "Tailwind CSS", color: "white", backgroundColor: "#312C6D",  logo: tailwind , fontSize: "0.8rem"},
            { name: "Javascript", color: "white", backgroundColor: "#312C6D",  logo: javascript , fontSize: "0.8rem"},
            { name: "Typescript", color: "white", backgroundColor: "#312C6D",  logo: typescript , fontSize: "0.8rem"},
            { name: "React", color: "white", backgroundColor: "#312C6D",  logo: react , fontSize: "0.8rem"},
            { name: "Vite", color: "white", backgroundColor: "#312C6D",  logo: vite , fontSize: "0.8rem"},
            { name: "Vercel", color: "white", backgroundColor: "#312C6D",  logo: vercel , fontSize: "0.8rem"},
        ],
    },
    {
        id: "backEnd",
        techStackType: "Back End",
        techStack: [
            {name:"Express.js", backgroundColor:"#312C6D", color:"white", logo: express, fontSize: "0.8rem" },
            {name:"Node.js", backgroundColor:"#312C6D", color:"white", logo: node, fontSize: "0.8rem" },
            {name:"PosgreSQL", backgroundColor:"#312C6D", color:"white", logo: postgres, fontSize: "0.8rem" },
            {name:"Supabase", backgroundColor:"#312C6D", color:"white", logo: supabase, fontSize: "0.8rem" },
            { name: "Render",backgroundColor: "#312C6D", color: "white",  logo: render , fontSize: "0.8rem"},
        ]
    },
]