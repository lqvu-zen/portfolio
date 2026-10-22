// Everything about "the character" lives here, so the About page and
// the home page stay in sync. Edit numbers and text freely.

export const profile = {
  name: 'Lê Quang Vũ',
  role: 'Senior Engine Programmer',
  guild: 'Gameloft Vietnam',
  base: 'Ho Chi Minh City',
  speaks: 'Vietnamese · English',
  bio: [
    'Engine programmer at Gameloft Vietnam, building and maintaining in-house game engines across mobile, PC and console.',
    'Contributed to Asphalt Legends, played by 100M+ people worldwide. Happiest when chasing frame time, porting to a new platform, or making an engine more robust.',
  ],
  email: 'lqvu.zen@gmail.com',
  github: 'https://github.com/lqvu-zen',
  linkedin: 'https://www.linkedin.com/in/lqvu',
  resume: '/resume.pdf',
};

// Shown as the arcade HUD on the title screen.
export const hud = [
  { label: 'Years', value: '04+' },
  { label: 'Players', value: '100M+' },
  { label: 'Platforms', value: '05' },
];

// Stat bars on the character sheet (0–100, drawn as 10 blocks).
export const statGroups = [
  {
    name: 'Languages',
    color: 'gold',
    stats: [
      { name: 'C++ (14/17/20)', value: 97 },
      { name: 'Python', value: 80 },
      { name: 'Java', value: 75 },
      { name: 'Objective-C', value: 70 },
      { name: 'Vulkan', value: 65 },
    ],
  },
  {
    name: 'Platforms',
    color: 'blue',
    stats: [
      { name: 'Android', value: 93 },
      { name: 'Windows / PC', value: 90 },
      { name: 'iOS / macOS', value: 83 },
      { name: 'Xbox', value: 78 },
      { name: 'Linux', value: 72 },
    ],
  },
  {
    name: 'Engine & systems',
    color: 'red',
    stats: [
      { name: 'In-house engine dev', value: 95 },
      { name: 'Platform porting', value: 92 },
      { name: 'Performance', value: 90 },
      { name: 'CI/CD pipelines', value: 85 },
      { name: 'Unity / C#', value: 70 },
    ],
  },
  {
    name: 'Equipment',
    color: 'green',
    stats: [
      { name: 'Git / GitLab', value: 92 },
      { name: 'Visual Studio / VS Code', value: 90 },
      { name: 'Tracy Profiler', value: 85 },
      { name: 'Android Studio', value: 78 },
    ],
  },
] as const;

export const achievements = [
  { place: '1st', year: 2021, title: 'Academic Challenge 2021', detail: 'Academic Competition Challenge, VNU-HCM', medal: 'gold' },
  { place: '2nd', year: 2018, title: 'National Informatics Contest', detail: 'National High School Informatics Olympiad', medal: 'silver' },
  { place: '3rd', year: 2018, title: 'ICPC Asia South', detail: 'International Collegiate Programming Contest', medal: 'bronze' },
  { place: '3rd', year: 2020, title: 'HCMUS-CTF 2020', detail: 'Computer security · Capture the Flag', medal: 'bronze' },
] as const;
