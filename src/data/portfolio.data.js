// Static data for portfolio
export const portfolioData = {
  personal: {
    name: "Devin Abreu",
    title: "Software Developer",
    industry: "Full-Stack Development",
    location: "Cypress, TX",
    email: "devinabreu99@outlook.com",
    phone: "+1 (555) 123-4567",
    bio: "Passionate software developer with 3+ years of experience building robust, scalable enterprise applications. Committed to writing clean, maintainable code and staying up to date with emerging technologies.",
    skills: [
      "Java", "Python", "JavaScript", "React", "Node.js", "Spring Boot",
      "MongoDB", "PostgreSQL", "AWS", "Docker", "Kubernetes", "Git",
      "REST APIs", "Microservices", "Financial APIs", "Payment Gateways",
      "Regulatory Compliance", "Security Best Practices"
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/devin-abreu/",
      github: "https://github.com/devinabreu10",
    }
  },
  
  projects: [
    {
      id: 1,
      title: "Digital Banking Platform",
      description: "A comprehensive digital banking solution enabling customers to manage accounts, transfer funds, and access financial services securely. Built with microservices architecture for high availability and scalability.",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
      features: [
        "Real-time account management",
        "Secure fund transfers",
        "Transaction history and analytics",
        "Multi-factor authentication",
        "Responsive mobile-first design"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
      status: "Live"
    },
    {
      id: 2,
      title: "Payment Processing API",
      description: "RESTful API system for processing various payment methods including credit cards, ACH transfers, and digital wallets. Handles millions of transactions with 99.9% uptime and PCI DSS compliance.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Kubernetes"],
      features: [
        "Multi-payment gateway integration",
        "Real-time transaction processing",
        "Fraud detection algorithms",
        "Comprehensive logging and monitoring",
        "PCI DSS compliant architecture"
      ],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
      status: "Live"
    },
    {
      id: 3,
      title: "Risk Management Dashboard",
      description: "Interactive dashboard for monitoring and analyzing financial risks across different portfolios. Features real-time data visualization, automated alerts, and comprehensive reporting capabilities.",
      technologies: ["Python", "React", "D3.js", "Flask", "TimescaleDB"],
      features: [
        "Real-time risk analytics",
        "Interactive data visualizations",
        "Automated risk alerts",
        "Custom reporting tools",
        "Portfolio performance tracking"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
      status: "Development"
    },
    {
      id: 4,
      title: "Regulatory Compliance Toolkit",
      description: "Automated compliance monitoring system that ensures banking operations adhere to regulatory requirements. Includes automated reporting, audit trails, and compliance scoring.",
      technologies: ["Java", "Apache Kafka", "Elasticsearch", "React", "Docker"],
      features: [
        "Automated compliance monitoring",
        "Real-time regulatory reporting",
        "Audit trail management",
        "Compliance scoring system",
        "Integration with banking systems"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
      status: "Live"
    }
  ]
};

// Contact form submission - mock function
export const submitContactForm = async (formData) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Contact form submitted:', formData);
      resolve({ success: true, message: 'Thank you for your message! I\'ll get back to you soon.' });
    }, 1000);
  });
};