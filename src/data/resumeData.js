export const personalInfo = {
    name: "Keshav Mohta",
    title: "Software Development Engineer",
    tagline: "Backend systems, data platforms & open-source",
    intro:
        "I build backend systems and data platforms using Python and Django. Currently working on metadata ingestion at Collate/OpenMetadata, and always tinkering with open-source on the side.",
    email: "keshavmohta09@gmail.com",
    linkedin: "https://www.linkedin.com/in/keshavmohta09/",
    github: "https://github.com/keshavmohta09",
    resumeUrl: "/portfolio/resume/resume.pdf",
};

export const stats = [
    { label: "Yrs Experience", value: "4+" },
    { label: "Projects Built", value: "10+" },
    { label: "Platforms", value: "15+" },
    { label: "PRs Merged", value: "100+" },
];

export const aboutText = {
    summary:
        "I'm a backend engineer who enjoys building things that work well at scale. Over the past 4+ years, I've worked on REST APIs, event-driven systems, ingestion pipelines, and data platforms - mostly with Python and Django.",
    description:
        "Right now, I'm on the Integration team at Collate, the company behind OpenMetadata. I work on connectors that pull metadata from platforms like BigQuery, Snowflake, Hive, Databricks, Redshift, Superset, and others. I also contribute to the OpenMetadata open-source project - reviewing code, fixing bugs, and improving performance.",
    expertise: [
        "Metadata Ingestion & Connectors",
        "REST APIs & Django",
        "Event-Driven Architecture",
        "Data Governance & Lineage",
        "Cloud Platforms (GCP, AWS)",
        "Database Design & Optimization",
        "Performance & Scalability",
        "Open Source Contributions",
    ],
};

export const openSourceHighlight = {
    project: "OpenMetadata",
    role: "Contributor & Maintainer",
    description:
        "I contribute to OpenMetadata, an open-source metadata platform used for data discovery, governance, and observability. My work spans the ingestion framework, connectors, and reverse metadata features.",
    link: "https://github.com/open-metadata/OpenMetadata",
    contributions: [
        "Ingestion framework and connector development",
        "Connectors for BigQuery, Snowflake, Hive, Databricks, Redshift, and more",
        "Data governance and lineage features",
        "Code reviews and production debugging",
        "Performance improvements",
    ],
};

export const skills = [
    {
        category: "Backend & APIs",
        color: "from-primary-500 to-primary-700",
        icon: "backend",
        items: ["Python", "Django", "Django REST Framework", "Flask", "RESTful APIs", "Microservices", "Celery"],
    },
    {
        category: "Data & Infrastructure",
        color: "from-accent-cyan to-primary-500",
        icon: "data",
        items: ["Apache Airflow", "Kafka", "dbt", "Trino", "Debezium", "Apache Ranger", "Google Pub/Sub"],
    },
    {
        category: "Databases & Warehouses",
        color: "from-accent-green to-accent-cyan",
        icon: "database",
        items: ["PostgreSQL", "MySQL", "Snowflake", "Databricks", "BigQuery", "Oracle", "Redshift", "Hive", "Cassandra", "Redis"],
    },
    {
        category: "Cloud & DevOps",
        color: "from-accent-amber to-accent-rose",
        icon: "cloud",
        items: ["AWS", "Google Cloud (GCP)", "Azure", "S3", "ADLS", "GCS", "Docker", "CI/CD"],
    },
    {
        category: "Data Platforms & Tools",
        color: "from-primary-400 to-accent-cyan",
        icon: "platform",
        items: ["OpenMetadata", "Superset", "Salesforce", "Unity Catalog", "Metadata Ingestion", "Data Lineage"],
    },
];

export const experience = [
    {
        title: "Software Engineer - Integration Team",
        company: "Deuex Solutions Pvt Ltd",
        companyUrl: "https://deuexsolutions.com",
        workingWith: [
            { name: "Collate", url: "https://getcollate.io" },
            { name: "OpenMetadata", url: "https://open-metadata.org" },
        ],
        period: "Nov 2024 - Present",
        location: "Mumbai, Maharashtra",
        type: "current",
        achievements: [
            "Building and maintaining metadata ingestion connectors for OpenMetadata as part of the Integration team at Collate",
            "Working on connectors for BigQuery, Superset, Redshift, Databricks, Snowflake, Hive, Unity Catalog, Salesforce, and Oracle",
            "Worked on the reverse metadata feature - pushing metadata updates from Collate back to connected data platforms",
            "Set up Azure AD authentication for Azure-managed Databricks and worked with ADLS, S3, and GCS storage integrations",
            "Optimized file reading techniques in OpenMetadata for better ingestion performance",
            "Contributing to the OpenMetadata open-source project through code reviews and pull requests",
        ],
    },
    {
        title: "SDE III - Backend",
        company: "Suraasa",
        companyUrl: "https://www.suraasa.com",
        period: "Jul 2023 - Oct 2024",
        location: "Gurgaon, India",
        type: "past",
        achievements: [
            "Co-led backend projects across Application Management and Centre University modules",
            "Built private Python libraries for event-driven communication between services",
            "Extended Django REST Framework and added support for database views and materialized views",
            "Worked cross-functionally to improve API performance by ~20% and speed up feature delivery",
        ],
    },
    {
        title: "SDE I - Backend",
        company: "Suraasa",
        companyUrl: "https://www.suraasa.com",
        period: "Sep 2022 - Jun 2023",
        location: "Gurgaon, India",
        type: "past",
        achievements: [
            "Built REST APIs using Django and Flask for various product features",
            "Integrated third-party services like Zoho CRM, Zoom, and Huddle01",
            "Set up BigQuery-based data warehousing for analytics and reporting",
            "Implemented Google Pub/Sub for async communication between microservices",
        ],
    },
    {
        title: "Backend Developer - Intern",
        company: "Suraasa",
        companyUrl: "https://www.suraasa.com",
        period: "Sep 2021 - Aug 2022",
        location: "Gurgaon, India",
        type: "past",
        achievements: [
            "Learned Django and backend fundamentals while contributing to production code",
            "Built a help desk and ticketing system from scratch",
            "Created a user tracking service that connected with marketing analytics tools",
        ],
    },
];

export const projects = [
    {
        name: "OpenMetadata",
        description:
            "An open-source metadata platform for data discovery, governance, and observability. I work on the ingestion framework, connectors for platforms like BigQuery, Snowflake, and Hive, and the reverse metadata feature that pushes updates back to source systems.",
        tech: ["Python", "Airflow", "Kafka", "Trino", "Docker"],
        github: "https://github.com/open-metadata/OpenMetadata",
        live: "https://open-metadata.org",
        liveLabel: "Website",
        featured: true,
        color: "primary",
    },
    {
        name: "dbviews-django",
        description:
            "A Django package that makes it easy to manage database views and materialized views. Define views declaratively and let the package handle migrations for you.",
        tech: ["Python", "Django", "PostgreSQL", "Open Source"],
        github: "https://github.com/keshavmohta09/dbviews-django",
        live: "https://pypi.org/project/dbviews-django/",
        liveLabel: "PyPI",
        featured: true,
        color: "cyan",
    },
    {
        name: "Suraasa Jobs",
        description:
            "A recruitment platform where teachers can apply for jobs, schools can review applications and run interviews, and hiring teams get structured reports to make decisions.",
        tech: ["Django", "REST API", "PostgreSQL", "Celery", "Redis"],
        github: null,
        live: null,
        featured: true,
        color: "green",
    },
    {
        name: "Suraasa Centres' Admin Platform",
        description:
            "An admin tool for Suraasa University to track learner progress, manage admissions, and generate analytics dashboards in real-time.",
        tech: ["Django", "BigQuery", "Google Cloud", "Microservices"],
        github: null,
        live: null,
        featured: true,
        color: "amber",
    },
    {
        name: "Suraasa LMS",
        description:
            "A learning management system covering the full learner journey - course enrollment, class management, assignments, assessments, and skill tracking.",
        tech: ["Django", "Flask", "PostgreSQL", "Pub/Sub", "Docker"],
        github: null,
        live: null,
        featured: false,
        color: "primary",
    },
];

export const achievements = [
    {
        title: "OpenMetadata Maintainer",
        issuer: "Open Source",
        description:
            "Active contributor and maintainer of the OpenMetadata project, working on the ingestion framework and connector ecosystem.",
        icon: "opensource",
        color: "primary",
    },
    {
        title: "Code Whisperer Award",
        issuer: "Suraasa",
        description:
            "Recognized for clean code, strong problem-solving, and collaborative engineering across the team.",
        icon: "award",
        color: "cyan",
    },
    {
        title: "Problem Solving",
        issuer: "HackerRank",
        date: "Jun 2021",
        description: "Certified in data structures and algorithms on HackerRank.",
        icon: "cert",
        color: "green",
    },
    {
        title: "Python",
        issuer: "HackerRank",
        date: "Oct 2021",
        description: "Certified for Python programming skills and best practices.",
        icon: "cert",
        color: "amber",
    },
    {
        title: "SQL",
        issuer: "HackerRank",
        date: "Jan 2022",
        description: "Certified for SQL query writing and database management.",
        icon: "cert",
        color: "primary",
    },
];

export const education = [
    {
        degree: "B.Tech in Computer Science & Engineering",
        institution: "Dr. A.P.J. Abdul Kalam Technical University",
        period: "Jul 2019 - Jun 2023",
        location: "Uttar Pradesh, India",
    },
];
