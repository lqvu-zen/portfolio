// Pixel-art sprites drawn as text grids. Each character maps to a colour in
// the sprite's palette; "." is transparent. Rendered by <Sprite /> as crisp SVG.

export type SpriteDef = { rows: string[]; palette: Record<string, string> };

export const car: SpriteDef = {
  rows: [
    '........KKKKKKKKK.......',
    '......KKCCCCKCCCCKK.....',
    '.....KCCCCCCKCCCCCCK....',
    '.KKKKRRRRRRRRRRRRRRRKKK.',
    'KRRRRRRRRRRRRRRRRRRRRRYK',
    'KRRRRRRRRRRRRRRRRRRRRRRK',
    'KTTRRRKKKKRRRRRRKKKKRRRK',
    '.KKKKKGGGGKKKKKKGGGGKKK.',
    '.....KGLLGK....KGLLGK...',
    '......KGGK......KGGK....',
  ],
  palette: {
    K: '#07061a',
    R: 'var(--red)',
    C: 'var(--blue)',
    Y: 'var(--gold)',
    T: '#ff2e4d',
    G: '#4b4770',
    L: '#b9b3d8',
  },
};

export const trophy: SpriteDef = {
  rows: [
    '..YYYYYYYY..',
    'YYYYYYYYYYYY',
    'Y.YYYYYYYY.Y',
    'Y.YYWYYYYY.Y',
    '.YYYWYYYYYY.',
    '..YYYYYYYY..',
    '...YYYYYY...',
    '.....YY.....',
    '.....YY.....',
    '....YYYY....',
    '...OOOOOO...',
    '...OOOOOO...',
  ],
  palette: { Y: 'currentColor', W: '#ffffff', O: '#4b3a2a' },
};

export const heart: SpriteDef = {
  rows: ['.RR.RR.', 'RWRRRRR', 'RRRRRRR', '.RRRRR.', '..RRR..', '...R...'],
  palette: { R: 'var(--red)', W: '#ffd0d8' },
};

export const star: SpriteDef = {
  rows: ['..Y..', '.YYY.', 'YYYYY', '.YYY.', '..Y..'],
  palette: { Y: 'currentColor' },
};

export const check: SpriteDef = {
  rows: ['......K', '.....KK', 'K...KK.', 'KK.KK..', '.KKK...', '..K....'],
  palette: { K: 'currentColor' },
};

export const lock: SpriteDef = {
  rows: [
    '..KKKK..',
    '.K....K.',
    '.K....K.',
    'YYYYYYYY',
    'YYYKKYYY',
    'YYYKKYYY',
    'YYYYKYYY',
    'YYYYYYYY',
  ],
  palette: { K: 'var(--ink-dim)', Y: 'var(--gold)' },
};

export const avatar: SpriteDef = {
  rows: [
    '................',
    '.....HHHHHH.....',
    '...PHHHHHHHHP...',
    '..PHHHHHHHHHHP..',
    '..PHHSSSSSSHHP..',
    '..PHSSSSSSSSHP..',
    '..PSSKSSSSKSSP..',
    '..PSSSSSSSSSSP..',
    '...SSSSMMSSSS...',
    '....SSSSSSSS....',
    '.....SSSSSS.....',
    '....BBBBBBBB....',
    '...BBBBBBBBBB...',
    '..BBBBBGGBBBBB..',
    '..BBBBBBBBBBBB..',
    '..BBBBBBBBBBBB..',
  ],
  palette: {
    H: '#2a2340',
    P: 'var(--gold)',
    S: '#f2c39b',
    K: '#1a1530',
    M: '#d48f74',
    B: 'var(--blue)',
    G: 'var(--gold)',
  },
};
