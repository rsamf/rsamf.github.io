type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  isYouTube?: boolean
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end?: string
  link: string
  description: string
  id: string
  image: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  date: string
}

type Publication = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type GymPolicy = {
  name: string
  duration: string
  image: string
  link: string
  bodyName: string
}

export const GYM_POLICIES: GymPolicy[] = [
  {
    name: 'Dance',
    duration: '02:11',
    image: '/policy-videos/dance.gif',
    link: 'https://github.com/rsamf/add-gym',
    bodyName: 'Unitree G1',
  },
  {
    name: 'Run',
    duration: '01:55',
    image: '/policy-videos/run.gif',
    link: 'https://github.com/rsamf/add-gym',
    bodyName: 'Unitree G1',
  },
  {
    name: 'Walk',
    duration: '02:04',
    image: '/policy-videos/walk.gif',
    link: 'https://github.com/rsamf/add-gym',
    bodyName: 'Unitree G1',
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Asimov RGMT',
    description: 'A general motion-tracking policy trained with dynamics-conditioning and command-aggregation outputting residual actions on top of PD tracking',
    link: 'https://github.com/rsamf/asimov-rgmt',
    video: '/clips/asimov-rgmt.mp4', // source: https://youtu.be/Cqr67H9y91E
    id: 'project7'
  },
  {
    name: 'Nebo',
    description: 'A modern logging SDK for multi-modal data built for humans and AI agents',
    link: 'https://github.com/rsamf/nebo',
    image: '/nebo.gif',
    id: 'project6',
  },
  {
    name: 'ADD Gym',
    description: 'Humanoid robots trained to mimic a range of human animations with deep reinforcement learning using the Unitree G1',
    link: 'https://github.com/rsamf/add-gym',
    image: '/policy-videos/dance.gif',
    id: 'project0',
  },
  {
    name: 'Wear - AI Virtual Try-On',
    description: 'A large diffusion-based try-on model allowing users to virtually try on clothing from any store with this app on iOS, Android, and Chrome',
    link: 'https://heddle.ai/wear',
    video: '/clips/wear.mp4', // source: https://youtube.com/shorts/rerPcTzZz8U
    id: 'project1',
  },
  {
    name: 'Graphbook',
    description: 'Open-source observability and DAG-execution framework for building highly parallelized AI-driven data processing pipelines.',
    link: 'https://github.com/graphbookai/graphbook',
    video: '/clips/graphbook.mp4', // source: https://www.youtube.com/watch?v=kIvTRSGnT0U
    id: 'project2',
  },
  {
    name: 'WoW Fishing Bot',
    description: 'Fishing automation in World of Warcraft using Computer Vision methods with Python and OpenCV.',
    link: 'https://github.com/rsamf/wow-fishing-bot',
    video: '/clips/wow-fishing-bot.mp4', // source: https://youtu.be/6conRJqjcTE
    id: 'project4',
  },
  {
    name: 'Limelight',
    description: 'iOS app that turns Spotify playlists into a public music queue. Users can vote and add tracks to play on a host device.',
    link: 'https://appadvice.com/app/limelight-collaborative-dj/1430951858',
    video: '/clips/limelight.mp4', // source: https://youtu.be/Ji0dGdRMqEA
    id: 'project3',
  },
  {
    name: 'Ping Pong Shooting Robot',
    description: 'The final project for the hardest course (CMPE118) at University of California, Santa Cruz. The robot was designed to navigate tape, avoid obstacles, and shoot ping pong balls at a 2kHZ emitting IR beacon.',
    link: 'https://sites.google.com/ucsc.edu/cmpe-118l/home',
    image: '/pingpongshooting.jpg',
    id: 'project5',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Apron Health',
    title: 'AI Engineer',
    start: 'Apr 2026',
    link: 'https://apron.health',
    id: 'work0',
    description: 'AI for medical clinics',
    image: '/work/apron.png',
  },
  {
    company: 'Heddle AI, Inc.',
    title: 'Technical Founder; ML Engineer',
    start: 'Aug 2023',
    end: 'Aug 2025',
    link: 'https://heddle.ai',
    id: 'work1',
    description: 'Founded an AI startup focused on building a large virtual try-on model. From research papers to product, I curated a large dataset and developed the model to support Wear, a virtual try-on app that allows users to see how clothes will look on them before buying.',
    image: '/work/heddle.png',
  },
  {
    company: 'Maxar Technologies',
    title: 'Software Development Engineer',
    start: 'Jan 2020',
    end: 'Sep 2022',
    link: 'https://www.maxar.com',
    id: 'work2',
    description: 'Worked on distributed systems to ingest, archive, and process satellite imagery, contributing to geospatial intelligence solutions. Designed deepfake detection pipelines and developed internal tools to optimize data processing workflows, improving efficiency and accuracy in satellite image analysis.',
    image: '/work/maxar.png',
  },
  {
    company: 'Ultimate Software, Inc.',
    title: 'Software Engineer Intern',
    start: 'Jun 2018',
    end: 'Sep 2018',
    link: 'https://www.ukg.com',
    id: 'work3',
    description: 'Interned at Ultimate Software, where I contributed to the development of HR software and automated testing tools.',
    image: '/work/ultimate.png',
  },
]

export const PUBLICATIONS: Publication[] = [
  {
    title: 'Text-Guided Mixup Towards Long-Tailed Image Categorization',
    description: 'Research paper published at BMVC 2024 on improving long-tailed visual recognition',
    link: 'https://arxiv.org/abs/2409.03583',
    uid: 'pub-1',
  },
  {
    title: 'SolarDetector: Transformer-based Neural Network for Solar Panel Detection',
    description:
      'Research paper published at ACM SIGSPATIAL 2023 on detecting and masking solar panels',
    link: 'https://dl.acm.org/doi/10.1145/3589132.3625649',
    uid: 'pub-2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Agentic ML Training',
    description: 'What happens when Claude Code runs the loop overnight',
    link: '/blog/agentic-ml-training',
    uid: 'blog-3',
    date: '2026-08-14',
  },
  {
    title: 'Why I Declined my Google Job Offer And You Shouldn\'t',
    description: 'Choosing meaning over prestige, and why I bet on myself instead',
    link: '/blog/why-i-declined-google',
    uid: 'blog-2',
    date: '2025-11-21',
  },
  {
    title: 'Main, Models, Push!',
    description: 'A working git branching model for ML Training',
    link: '/blog/main-models-push',
    uid: 'blog-1',
    date: '2026-02-01',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/rsamf',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/rsamf',
  },
]

export const QUOTE = {
  text: 'A human being should be able to change a diaper, plan an invasion, butcher a hog, conn a ship, design a building, write a sonnet, balance accounts, build a wall, set a bone, comfort the dying, take orders, give orders, cooperate, act alone, solve equations, analyse a new problem, pitch manure, program a computer, cook a tasty meal, fight efficiently, die gallantly. Specialization is for insects.',
  author: 'Robert A. Heinlein',
  source: 'Time Enough for Love',
}

export const EMAIL = 'rsamfranklin@gmail.com'
