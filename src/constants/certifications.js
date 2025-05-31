// src/constants/certifications.js

export const certifications = [
  {
    id: "cert-1",
    title: "AWS Certified Cloud Practitioner",
    image: "/assets/projects/game-engine.jpg", // Biarkan path gambar default
    issuer: "Amazon Web Services",
    technologies: ["React"], // Contoh penyesuaian untuk match tagIcons
    date: "March 2024",
    link: "https://www.credly.com/badges/your-aws-badge-id",
    category: "Cloud Computing",
    description: "Memahami dasar-dasar cloud AWS, layanan inti, keamanan, arsitektur, dan model harga.",
  },
  {
    id: "cert-2",
    title: "Meta Front-End Developer Professional Certificate",
    image: "/assets/projects/game-engine.jpg",
    issuer: "Coursera / Meta",
    technologies: ["React", "JavaScript", "HTML", "CSS", "TailwindCSS"], // Menambahkan TailwindCSS
    date: "February 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/your-meta-cert-id",
    category: "Web Development",
    description: "Menguasai keterampilan pengembangan front-end esensial termasuk React, JavaScript, HTML, dan CSS.",
  },
  {
    id: "cert-3",
    title: "Microsoft Certified: Azure Fundamentals",
    image: "/assets/projects/game-engine.jpg",
    issuer: "Microsoft",
    // Mengganti "Azure" dan "Cloud"
    technologies: ["TypeScript"], // Contoh penyesuaian
    date: "April 2023",
    link: "https://learn.microsoft.com/en-us/credentials/certification/your-azure-id",
    category: "Cloud Computing",
    description: "Memperoleh pemahaman dasar tentang konsep cloud, layanan Azure inti, dan arsitektur cloud Microsoft.",
  },
  {
    id: "cert-4",
    title: "Google Project Management Certificate",
    image: "/assets/projects/game-engine.jpg",
    issuer: "Coursera / Google",
    // Mengganti "Project Management", "Agile", "Scrum"
    technologies: ["User Research", "UI/UX Design"], // Contoh penyesuaian
    date: "November 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/your-google-pm-cert-id",
    category: "Project Management",
    description: "Mengembangkan keterampilan penting dalam perencanaan, eksekusi, dan manajemen proyek.",
  },
];