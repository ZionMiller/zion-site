const profileData = {
  name: "Zion Miller",
  bio: "My career began in an unconventional way as a professional downhill skateboard racer. Traveling the world and competing at speeds over 60 mph, learning the importance of instinct, pattern recognition, and quick decision making skills. While pursuing this passion, I balanced my time with academics, earning an international finance degree and gaining experiences such as; living in Japan, working for Hewlett-Packard, and founding an equity analysis business.\n\nIt was during this entrepreneurial chapter that I became captivated by the technical challenges in business, where I took on problems such as automating data pipelines for equity reports and DCF models. This experience ignited my passion for technology and its ability to enhance problem-solving and creativity. To deepen my skills, I formalized my education through a coding bootcamp, contributed to open-source projects, and secured a role at a Series A startup in Los Angeles.\n\nToday, I focus on tackling challenges across the stack, DB, cloud infrastructure, AI integration, and CI/CD pipelines. Outside of work, you’ll likely find me surfing or skating down hills, always driven by the same love for speed and creativity that started my journey.",
  email: "zionmillerbusiness@gmail.com",
  topSkills: [
    "Python", "JavaScript", "Postgresql", "AWS"
  ],
  languagesAndFrameworks: [
    "Ruby", "React", "Redux", "NodeJs", "Flask",
    "FastAPI", "HTML5", "CSS3", "TypeScript"
  ],
  cloudDatabasesAndManagement: [
    "AWS", "Azure", "MongoDB", "MySQL", "Pinecone", "Redis",
    "Elasticsearch"
  ],
  devOpsAIAndMisc: [
    "Docker", "Kubernetes", "Terraform", "Cloudflare", "GitLab", "PyTorch",
    "LangChain", "HuggingFace", "Git", "GitHub", "JIRA", "Confluence"
  ],
  socials: {
    linkedIn: "https://www.linkedin.com/in/zion-miller-b15344170/",
    github: "https://github.com/ZionMiller",
    twitter: "https://x.com/zion_code",
    medium: "https://medium.com/@zionmiller",
    leetcode: "https://leetcode.com/u/zioncode/"
  },
  projects: {
    pulsely: {
      title: "Pulseco.ai",
      description: "Pulseco.ai is a SaaS product in production. Pulse provides sales intelligence, and relationship solutions. I have contributed across the stack here from Redux, to Ques, and a lot inbetween.",
      links: {
        deployed_url: "https://sales.pulseco.ai",
        notes: "please contact for walkthrough"
      },
      techUsed: ["Private Repo"]
    },
    biobreak: {
      title: "BioBreak",
      description: "BioBreak helps biotech investors save time with novel data visualizations that consolidate KPIs from SEC filings, clinical trials, and more, simplifying access to essential data with a single click.",
      links: {
        github: "https://github.com/biobreak",
        youtube: "https://www.youtube.com/watch?v=OSvQ1FB_MKY"
      },
      techUsed: ["React", "Python", "Aws", "PostgreSQL", "MongoDB"]
    },
    summary_co_pilot: {
      title: "Summary Co Pilot",
      description: "Summary Co Pilot uses Python, MongoDB, AWS Lambda, and OpenAI to summarize sales calls for different stakeholders, in order to refocus teams on revenue producing activities.",
      links: {
        github: "https://github.com/ZionMiller/summary_copilot",
      },
      techUsed: ["Python", "Aws Lambda", "OpenAI API", "MongoDB"]
    },
    smallest_triangle: {
      title: "Smallest Tetrahedron",
      description: "Python service which ingests .txt files containing n number of entries consisting of 3 floats and an int. Smallest Tetrahedron will process these TXT files and determine the smallest valid entry present in the file.",
      links: {
        github: "https://github.com/ZionMiller/find_small_tetrahedron",
      },
      techUsed: ["Python"]
    },
    ruby_faker: {
      title: "Ruby Faker",
      description: "Contributed a global airport information generator, with accompanying tests to Ruby Faker, to enable seeding for travel apps",
      links: {
        github: "https://github.com/faker-ruby/faker/pull/2682",
        medium: "https://medium.com/@zionmiller/contributing-to-faker-97582603d050"
      },
      techUsed: ["React", "Python", "Aws", "PostgreSQL", "MongoDB"]
    },
    cpr_santa_fe: {
      title: "CPR Class NM",
      description: "Informational and booking site for CPR Santa Fe, incorporating existing Square Space shop for payments, and scheduling via a Python service.",
      links: {
        deployed_url: "https://cprclassnm.com/",
        github: "https://github.com/ZionMiller/cpr-santafe"
      },
      techUsed: ["Next.JS", "Python", "Aws", "PostgreSQL"]
    },
    flightFinder: {
      title: "Flight Finder",
      description: "Flight Finder ranks the cheapest flights to a desired destination by considering surrounding airports within a specified circumference.",
      links: {
        github: "https://github.com/ZionMiller/flight-positioning-app"
      },
      techUsed: ["React", "Rails", "PostgreSQL"]
    },
    cardGame: {
      title: "Card Game",
      description: "A project built in a week to emulate basic gameplay of Hearthstone with unlikely combatants. Developed using React and Rails.",
      links: {
        github: "https://github.com/Garret-Gallant/Phase-3-Project-Backend",
      },
      techUsed: ["React", "Rails", "PostgreSQL"]
    },
    coderCheatSheet: {
      title: "Coder's Keys",
      description: "A one-stop shop for code snippets and shortcuts.",
      links: {
        github: "https://github.com/nickwarren47/phase2-react-project"
      },
      techUsed: ["React"]
    },
  },
  experience: {
    experienceOne: {
      company: "Pulsely",
      timeFrame: "2024-present",
      location: "Los Angeles, CA",
      role: "Software Engineer"
    },
    experienceTwo: {
      company: "Involve.AI",
      timeFrame: "2023-2024",
      location: "Los Angeles, CA",
      role: "Software Engineer"
    },
    experienceThree: {
      company: "Biotech Winners",
      timeFrame: "2018-2023",
      location: "Santa Fe, NM",
      role: "Co-Founder & Software Engineer"
    },
    experienceFour: {
      company: "Hewlett Packard",
      timeFrame: "2018-2020",
      location: "Rio Rancho, NM",
      role: "Services Specialist Intern"
    }
  }
};

export default profileData;
