// Static data for portfolio
export const portfolioData = {
  personal: {
    name: "Devin Abreu",
    title: "Software Developer",
    industry: "Full-Stack Development",
    email: "devinabreu99@outlook.com",
    location: "Houston, TX",
    bio: "Passionate software developer with 3+ years of experience building robust, scalable enterprise applications. Committed to writing clean, maintainable code and staying up to date with emerging technologies.",
    skills: [
      "Java", "Spring Boot", "Spring Batch", "Apache Maven", 
      "JavaScript", "Typescript", "HTML", "CSS", "Angular", "React", 
      "Python", "FastAPI", "PostgreSQL", "MongoDB", "Git", "Docker", "AWS", "Kubernetes",
      "REST APIs", "Microservices", "Object-Oriented Design", "Shell Scripting"
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/devin-abreu/",
      github: "https://github.com/devinabreu10",
    }
  },
  
  projects: [
    {
      id: 1,
      title: "RP0 Banking Platform",
      description: "A comprehensive digital banking solution enabling customers to manage accounts, transfer funds, and access financial services securely. Built with microservices architecture for high availability and scalability.",
      technologies: ["Java", "Spring Boot", "Apache Maven", "TypeScript", "Angular", "PostgreSQL", "REST API", "Docker"],
      features: [
        "Responsive mobile-first design",
        "Real-time account management",
        "Secure fund transfers",
        "Transaction history and analytics"
      ],
      image: "/rp0-bank-homepage.png",
      demoUrl: "https://rp0-bankapp-ui.onrender.com/",
      githubUrl: "https://github.com/devinabreu10/rp0-bankapp-ui",
      status: "Live"
    },
    {
      id: 2,
      title: "Personal Portfolio",
      description: "A modern, responsive personal portfolio website showcasing my software development skills and projects. Built with React and styled with Tailwind CSS, featuring theme toggle, smooth animations, and contact form integration.",
      technologies: ["JavaScript", "React", "Tailwind CSS", "AWS CDK", "EmailJS", "Python"],
      features: [
        "Responsive design with mobile-first approach",
        "Smooth scroll animations and transitions",
        "Infrastructure as Code (IaC) for AWS S3 and ECS Fargate deployment",
        "Contact form with EmailJS or Python Email Service integration",
        "Dark/light theme toggle functionality",
        "Deployed on Netlify with CI/CD",
      ],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      demoUrl: "https://devin-abreu-portfolio.netlify.app/",
      githubUrl: "https://github.com/devinabreu10/devin-abreu-portfolio",
      status: "Live"
    },
    {
      id: 3,
      title: "Loan Eligibility Microservice",
      description: "A planned Python FastAPI microservice that leverages a PyTorch machine learning model to assess customer loan eligibility based on a variety of financial and personal factors. Designed to integrate with the RP0 Banking Platform, this service will enable real-time, automated loan decisioning and risk assessment.",
      technologies: ["Python", "FastAPI", "PyTorch", "Apache Kafka", "Docker"],
      features: [
        "Machine learning-based loan eligibility assessment",
        "RESTful API endpoints for loan evaluation",
        "Integration with RP0 Banking Platform via Apache Kafka",
        "Scalable microservice architecture",
        "Real-time decisioning and risk scoring"
      ],
      image: "/python-fastapi-pytorch.png",
      demoUrl: "",
      githubUrl: "",
      status: "Planning"
    },
    {
      id: 4,
      title: "Multi-Cloud Infrastructure Orchestrator",
      description: "A comprehensive infrastructure management platform that enables seamless deployment and orchestration of microservices across multiple cloud providers (AWS, Azure, GCP) using Kubernetes. The system will feature automated scaling, load balancing, and disaster recovery capabilities, with a focus on enterprise-grade security and compliance.",
      technologies: ["Kubernetes", "Docker", "AWS", "TypeScript", "React", "Spring Boot", "MongoDB", "Shell Scripting"],
      features: [
        "Multi-cloud Kubernetes cluster management",
        "Automated service discovery and load balancing",
        "Infrastructure as Code (IaC) with Terraform integration",
        "Real-time monitoring and alerting dashboard",
        "Automated backup and disaster recovery",
        "Security compliance and audit logging",
        "Cost optimization and resource allocation"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      demoUrl: "",
      githubUrl: "",
      status: "Planning"
    }
  ]
};