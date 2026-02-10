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
  end: string
  link: string
  id: string
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
    name: 'Wear - AI Virtual Try-On',
    description:
      'AI Virtual Try-On app for iOS, Android, and Chrome allowing users to virtually try on clothing from any store.',
    link: 'https://heddle.ai/wear',
    video: 'https://youtube.com/shorts/rerPcTzZz8U?feature=share',
    isYouTube: true,
    id: 'project1',
  },
  {
    name: 'Graphbook',
    description: 'Open-source observability and DAG-execution framework for building highly parallelized AI-driven data processing pipelines.',
    link: 'https://graphbook.ai',
    video: 'https://www.youtube.com/watch?v=kIvTRSGnT0U',
    isYouTube: true,
    id: 'project2',
  },
  {
    name: 'Limelight',
    description: 'iOS app that turns Spotify playlists into a public music queue. Users can vote and add tracks to play on a host device.',
    link: 'https://appadvice.com/app/limelight-collaborative-dj/1430951858',
    video: 'https://youtu.be/Ji0dGdRMqEA',
    isYouTube: true,
    id: 'project3',
  },
  {
    name: 'WoW Fishing Bot',
    description: 'Fishing automation in World of Warcraft using Computer Vision methods with Python and OpenCV.',
    link: 'https://github.com/rsamf/wow-fishing-bot',
    video: 'https://youtu.be/6conRJqjcTE',
    isYouTube: true,
    id: 'project4',
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
    company: 'Heddle AI, Inc.',
    title: 'Technical Founder',
    start: 'Aug 2023',
    end: 'Aug 2025',
    link: 'https://heddle.ai',
    id: 'work1',
  },
  {
    company: 'Maxar Technologies',
    title: 'Software Development Engineer',
    start: 'Jan 2020',
    end: 'Sep 2022',
    link: 'https://www.maxar.com',
    id: 'work2',
  },
  {
    company: 'Ultimate Software, Inc.',
    title: 'Software Engineer Intern',
    start: 'Jun 2018',
    end: 'Sep 2018',
    link: 'https://www.ukg.com',
    id: 'work3',
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
    title: 'Why I Declined my Google Job Offer And You Shouldn\'t',
    description: 'Choosing meaning over prestige, and why I bet on myself instead',
    link: '/blog/why-i-declined-google',
    uid: 'blog-1',
    date: '2025-11-21',
  },
  {
    title: 'Main, Models, Push!',
    description: 'A working git branching model for ML Training',
    link: '/blog/main-models-push',
    uid: 'blog-2',
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

export const EMAIL = 'rsamfranklin@gmail.com'
