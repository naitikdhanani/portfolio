export const siteConfig = {
  name: "Naitik Dhanani",
  title: "Software Engineer | BITS Pilani | FRND | ex-Moveworks",
  description: "Portfolio website of Naitik Dhanani",
  accentColor: "#1d4ed8",
  social: {
    email: "epostnaitikdhanani@gmail.com",
    linkedin: "https://in.linkedin.com/in/naitik-dhanani",
    github: "https://github.com/naitikdhanani",
  },
  aboutMe:
    "Backend Developer with expertise in building scalable systems and microservices architecture. Experienced in Python, Django, and modern backend technologies, with a proven track record of improving system performance and user engagement. Passionate about solving complex problems through efficient code and innovative solutions. Currently working at FRND, ColdBrewTech, where I've driven significant improvements in system scalability and user retention.",
  skills: [
    "Python",
    "Django",
    "Java",
    "JavaScript",
    "TypeScript",
    "GoLang",
    "ReactJS",
    "NodeJS",
    "Docker",
    "Kafka",
    "Redis",
    "SQL",
    "gRPC",
    "Celery",
  ],
  projects: [
    {
      name: "Autocomplete Chatbot",
      description:
        "Built a Chatbot using ReactJS frontend and NodeJS/Express server, integrating OpenAI's completions API. Created a REST API with ExpressJS to route prompts from the frontend, resulting in a 25% increase in completion accuracy and 30% reduced response time.",
      link: "https://custom-chat-gpt-frontend.vercel.app",
      skills: ["React", "Node.js", "Express.js", "OpenAI API"],
    },
    {
      name: "Stock Price Prediction using LSTM",
      description:
        "Analyzed stock market data for top 5 technology stocks using yfinance library. Conducted comprehensive stock information retrieval with Seaborn and Matplotlib for visualization. Implemented LSTM, XGBoost and Linear Regression models for future stock price predictions.",
      link: "",
      skills: ["Python", "LSTM", "Machine Learning", "Data Analysis"],
    },
    {
      name: "Exploratory Data Analysis on EPL 20-21",
      description:
        "Conducted EDA on the Premier League 2020-21 season using Kaggle dataset. Focused on KPIs such as Expected Goals (xG) and Expected Assists (xA) to evaluate player and team performances. Identified trends in passing accuracy, shots on target, and defensive solidity.",
      link: "https://github.com/naitikdhanani/EPL_20-21_EDA",
      skills: ["Python", "Pandas", "Seaborn", "Numpy"],
    },
  ],
  experience: [
    {
      company: "FRND, ColdBrewTech",
      title: "Backend Developer",
      dateRange: "Aug 2024 - Present",
      bullets: [
        "Developed a personalized notification dashboard that scheduled and sent user-specific notifications based on language, gender, and device type, increasing user engagement by 30%",
        "Migrated analytics DB queries from immediate writes to Kafka-backed bulk updates, reducing database query load by 75% and significantly improving system scalability under high traffic",
        "Implemented event-triggering logic based on user activity, improving marketing analytics with real-time websocket events, increasing user retention by 25% and enabling 40% more accurate targeting",
        "Upgraded Python to 3.11 and Django to 5.0 across the entire codebase, resulting in a 15% boost in performance through improved async syntax, static typing, and optimized database models",
        "Migrated from requirements.txt to Poetry, streamlining dependency management and better separation of direct and indirect dependencies",
      ],
    },
    {
      company: "Moveworks",
      title: "SDE Intern",
      dateRange: "Jul 2023 - Dec 2023",
      bullets: [
        "Created a custom React component that accepted JSON configs as input with features like error detection, syntax highlighting, and indentation correction, reducing processing time by 60%",
        "Developed a microservice to identify and mask sensitive information from data received from Kafka topics using Python regex before ingesting it into the OpenSearch Dashboard",
        "Wrote multiple user journey tests using Cypress for automated end-to-end testing in local and dev environments, preventing regression errors before deployment",
        "Reengineered logs service architecture by decoupling internal functions into microservices, supporting 3x higher payloads and enhancing scalability by 40%, leading to a 25% reduction in processing time",
      ],
    },
  ],
  education: [
    {
      school: "BITS Pilani K K Birla Goa Campus",
      degree: "Bachelor of Engineering in Electronics and Instrumentation",
      dateRange: "May 2020 - Jun 2024",
      achievements: [
        "GPA: 8.30/10.0",
      ],
    },
  ],
};