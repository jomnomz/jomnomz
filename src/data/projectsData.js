import scanpassLogin from '../assets/scanpassLogin.png'
import scanpassLogo from '../assets/scanpassLogo.png'


export const projectsData = [
    {   id: "scanpass",
        projectName: "Scanpass",
        projectDescription: "ScanPass is a QR code-based attendance system that replaces manual tracking in schools, letting teachers see students...",
        projectDescriptionFull: "ScanPass is a QR code-based attendance system that replaces manual tracking in schools, letting teachers see student time-in/time-out instantly while automatically notifying parents when their child arrives or leaves school.",
        projectType: "QR Code-Based Attendance Tracking System",
        projectImages: [
            scanpassLogin, 
        ],
        projectLogo: scanpassLogo,
        projectBullets: [
            "Piloted with 38 students over 3 days, achieving a 98.5% scan success rate and reducing attendance recording to seconds, versus the 5–10 minutes per period reported under the manual process it replaced.",
            "Engineered RESTful Node.js/Express APIs with Supabase for data storage and auth, handling attendance events, automated daily/weekly/monthly reports, and role-based access control (admins vs. section-restricted teachers).",
            "Implemented automated notifications: email for temporary teacher credentials, SMS for real-time guardian alerts on student arrivals/departures.",
        ],
        projectAchievements: "Presented at PLDT's MSME Day (Parañaque), pitching to startup founders and industry professionals.",
        projectTechStack: [
            { name: "React", color: "white", backgroundColor: "#1A2236",  size: "wOIcon", fontSize: "0.8rem"},
            { name: "Vite", color: "white", backgroundColor: "#1A2236",  size: "wOIcon", fontSize: "0.8rem"},
            { name: "Node.js", color: "white", backgroundColor: "#1A2236",  size: "wOIcon", fontSize: "0.8rem"},
            { name: "Express.js", color: "white", backgroundColor: "#1A2236",  size: "wOIcon", fontSize: "0.8rem"},
            { name: "Supabase", color: "white", backgroundColor: "#1A2236",  size: "wOIcon", fontSize: "0.8rem"},
            { name: "Vercel", color: "white", backgroundColor: "#1A2236",  size: "wOIcon", fontSize: "0.8rem"},
            { name: "Render", color: "white", backgroundColor: "#1A2236",  size: "wOIcon", fontSize: "0.8rem"},
        ],
    },

    {   id: "scanpass1",
        projectName: "Scanpass",
        projectDescription: "ScanPass is a QR code-based attendance system that replaces manual tracking in schools, letting teachers see students...",
        projectDescriptionFull: "ScanPass is a QR code-based attendance system that replaces manual tracking in schools, letting teachers see student time-in/time-out instantly while automatically notifying parents when their child arrives or leaves school.",
        projectType: "QR Code-Based Attendance Tracking System",
        projectImages: [
            scanpassLogin, 
        ],
        projectLogo: scanpassLogo,
        projectBullets: 
        [
            "Piloted with 38 students over 3 days, achieving a 98.5% scan success rate and reducing attendance recording to seconds, versus the 5–10 minutes per period reported under the manual process it replaced.",
            "Engineered RESTful Node.js/Express APIs with Supabase for data storage and auth, handling attendance events, automated daily/weekly/monthly reports, and role-based access control (admins vs. section-restricted teachers).",
            "Implemented automated notifications: email for temporary teacher credentials, SMS for real-time guardian alerts on student arrivals/departures.",
        ],
        projectAchievements: "Presented at PLDT's MSME Day (Parañaque), pitching to startup founders and industry professionals.",
        projectTechStack: [
            { name: "React", color: "white", backgroundColor: "#1A2236",  size: "wOIcon", fontSize: "0.8rem"},
            { name: "Vite", color: "white", backgroundColor: "#1A2236",  size: "wOIcon", fontSize: "0.8rem"},
            { name: "Node.js", color: "white", backgroundColor: "#1A2236",  size: "wOIcon", fontSize: "0.8rem"},
            { name: "Express.js", color: "white", backgroundColor: "#1A2236",  size: "wOIcon", fontSize: "0.8rem"},
            { name: "Supabase", color: "white", backgroundColor: "#1A2236",  size: "wOIcon", fontSize: "0.8rem"},
            { name: "Vercel", color: "white", backgroundColor: "#1A2236",  size: "wOIcon", fontSize: "0.8rem"},
            { name: "Render", color: "white", backgroundColor: "#1A2236",  size: "wOIcon", fontSize: "0.8rem"},
        ],
    },
    
]