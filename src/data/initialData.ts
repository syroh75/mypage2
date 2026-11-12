import { VideoItem, CreativeProject, CreativeNote } from '../types'

export const INITIAL_VIDEOS: VideoItem[] = [
  {
    id: 'vid-01',
    title: 'THE SYNTHETIC HORIZON: AI 비주얼 오디세이',
    category: 'AI Video',
    year: '2026',
    role: 'Creative Direction & AI Video Production',
    summary: '아이디어에서 영상까지, 생성형 AI 도구를 융합해 구현한 감각적 SF 비주얼 쇼케이스.',
    intention: '상상 속의 미래 도시와 자연의 조화를 독창적인 비주얼 언어로 시각화하고, AI 영상의 연출적 가능성을 탐구.',
    direction: '미니멀한 모노톤과 형광 연두색의 대비를 활용한 하이엔드 테크 비주얼 톤앤매너 연출.',
    aiTools: ['Midjourney v6', 'Runway Gen-3', 'Luma Dream Machine', 'Premiere Pro'],
    process: '1. 콘셉트 기획 및 무드보드 설정\n2. 씬별 프롬프트 엔지니어링 및 키프레임 생성\n3. 비디오 생성 및 카메라 무빙 제어\n4. 타이밍 편집, 컬러 그레이딩 및 사운드 디자인',
    videoUrl: '',
    isPublic: true,
    accentColorPattern: 1,
  },
  {
    id: 'vid-02',
    title: 'NARRATIVE IN MOTION: 비주얼 스토리텔링 필름',
    category: 'Visual Storytelling',
    year: '2026',
    role: 'Content Planning & Video Direction',
    summary: '인간과 기술의 상호작용을 주제로 한 서사적 단편 비주얼 필름.',
    intention: '단순한 영상 생성을 넘어 메시지와 감정선이 살아 있는 스토리를 전달.',
    direction: '정적인 여백과 동적인 카메라 워크의 균형을 통한 서사적 긴장감 조성.',
    aiTools: ['ChatGPT Plus (Story Script)', 'Sora', 'Runway Gen-3', 'After Effects'],
    process: '1. 스토리보드 및 대본 기획\n2. 캐릭터 일관성 프롬프트 튜닝\n3. 씬별 생성 및 시퀀스 연결\n4. 후반 마스터링',
    videoUrl: '',
    isPublic: true,
    accentColorPattern: 2,
  },
  {
    id: 'vid-03',
    title: 'ECHOES OF TOMORROW: 브랜드 콘셉트 영상',
    category: 'Creative Direction',
    year: '2025',
    role: 'Creative Direction & Concept Design',
    summary: '글로벌 테크 브랜드를 위한 콘셉트 티저 영상 기획 및 연출.',
    intention: '브랜드의 미래 지향적 정체성을 세련된 영상 감각으로 각인.',
    direction: '기하학적 도형과 조명 효과를 활용한 미니멀리즘 에이전시 스타일 연출.',
    aiTools: ['Midjourney', 'Kling AI', 'Topaz Video AI', 'DaVinci Resolve'],
    process: '1. 브랜드 아이덴티티 분석\n2. 비주얼 키 콘셉트 도출\n3. 고해상도 비디오 업스케일링 및 후반 편집',
    videoUrl: '',
    isPublic: true,
    accentColorPattern: 3,
  },
  {
    id: 'vid-04',
    title: 'MICRO-IMPACT: 숏폼 크리에이티브 시리즈',
    category: 'Short-form',
    year: '2025',
    role: 'Short-form Planning & Video Production',
    summary: '소셜 미디어 환경에 최적화된 고임팩트 AI 숏폼 영상 시리즈.',
    intention: '3초 이내에 시선을 사로잡는 시각적 후킹과 메시지 전달 실험.',
    direction: '속도감 있는 화면 전환과 직관적인 그래픽 모션 구성.',
    aiTools: ['Runway Gen-2', 'Pika Labs', 'CapCut Pro'],
    process: '1. 숏폼 포맷별 후킹 포인트 기획\n2. 5초 단위 씬 생성\n3. 모바일 세로 비율 편집 및 사운드 싱크',
    videoUrl: '',
    isPublic: true,
    accentColorPattern: 1,
  },
]

export const INITIAL_PROJECTS: CreativeProject[] = [
  {
    id: 'proj-01',
    title: 'AI 기반 캐릭터 제작 및 비주얼 시스템',
    category: 'AI Character Design',
    description: '일관된 시각적 정체성을 지닌 오리지널 AI 캐릭터 세계관 구축 프로젝트.',
    intention: '생성형 AI의 한계인 시각적 일관성을 극복하고 다각도·다양한 포즈의 일관된 캐릭터 자산 개발.',
    process: '프롬프트 시드 고정 및 LoRA 미세조정을 통한 스타일 일관성 확보, 표정 및 제스처 바리에이션 생성.',
    outcome: '다양한 미디어 포맷(영상, 웹, 굿즈)에 확장 가능한 고해상도 캐릭터 비주얼 에셋 세트 완성.',
    tools: ['Midjourney', 'Stable Diffusion', 'Photoshop'],
  },
  {
    id: 'proj-02',
    title: '반려견 캐릭터 콘텐츠 프로젝트',
    category: 'Character Content',
    description: '반려견의 감정과 일상을 독창적인 시각 언어로 풀어낸 캐릭터 콘텐츠 기획.',
    intention: '반려동물과의 정서적 교감을 감각적이고 따뜻한 비주얼 스토리로 브랜딩.',
    process: '실제 반려견 행동 분석 -> 캐릭터화 스케치 -> AI 렌더링 -> 숏폼 애니메이션 컷 제작.',
    outcome: '시리즈형 캐릭터 일러스트 및 소셜용 모션 숏폼 콘텐츠 10편 기획 및 릴리즈.',
    tools: ['Generative AI', 'Character Rigging', 'After Effects'],
  },
  {
    id: 'proj-03',
    title: '웹앱 및 디지털 서비스 기획',
    category: 'Digital Service UI/UX',
    description: '창작자와 기획자를 위한 AI 보조 크리에이티브 서비스 기획 및 인터페이스 프로토타이핑.',
    intention: '복잡한 AI 생성 툴을 직관적으로 사용할 수 있는 워크플로 UI 설계.',
    process: '사용자 여정 지도 작성 -> 와이어프레임 기획 -> 인터랙티브 프로토타입 구현.',
    outcome: '반응형 웹앱 기획서 및 고화질 디자인 시스템 컴포넌트 라이브러리.',
    tools: ['Figma', 'React', 'Tailwind CSS'],
  },
  {
    id: 'proj-04',
    title: 'AI 활용 비주얼 콘텐츠 실험',
    category: 'Visual Experiment',
    description: '기존에 불가능했던 복합 조명과 초현실주의적 구도를 탐구하는 비주얼 R&D 실험.',
    intention: '상업 영상과 아트 디렉션의 경계를 허무는 새로운 비주얼 스타일 확립.',
    process: '다양한 AI 모델 교차 검증 및 프롬프트 문법 비교 분석.',
    outcome: '독창적인 룩앤필을 담은 비주얼 스타일 가이드 및 프롬프트 아카이브 구축.',
    tools: ['Midjourney', 'Magnific AI', 'Cinema 4D'],
  },
  {
    id: 'proj-05',
    title: '브랜드 및 숏폼 콘텐츠 기획',
    category: 'Brand & Short-form Strategy',
    description: '신규 브랜드를 위한 옴니채널 비주얼 전략 및 숏폼 캠페인 기획.',
    intention: '빠르게 소비되는 디지털 환경에서 브랜드의 본질적 가치를 각인시키는 콘텐츠 구조화.',
    process: '타깃 오디언스 분석 -> 핵심 메시지 도출 -> 15초/30초 포맷별 시나리오 작성.',
    outcome: '캠페인 기획서 및 숏폼 비주얼 프로토타입 5종 완성.',
    tools: ['Content Strategy', 'Video Scripting', 'Visual Prototyping'],
  },
]

export const INITIAL_NOTES: CreativeNote[] = [
  {
    id: 'note-01',
    title: 'AI 영상 연출에서 일관성을 확보하는 프롬프트 구조화 기법',
    category: '영상 연출 아이디어',
    date: '2026.02',
    summary: '생성형 비디오 모델에서 카메라 움직임과 인물 특성을 제어하는 실전 워크플로 기록.',
    content: `AI 영상 제작에서 가장 큰 도전 과제는 '랜덤성'을 '연출 의도'로 전환하는 것입니다.

1. 시드와 레퍼런스 이미지의 조합
단일 텍스트 프롬프트에 의존하지 않고, 직접 설계한 키프레임 이미지를 이미지-투-비디오(Image-to-Video) 입력으로 활용할 때 구도와 빛의 일관성이 극대화됩니다.

2. 카메라 무빙 텍스트 명령의 계층화
패닝, 틸트, 줌 인 등의 카메라 워크는 씬의 서사적 의미와 일치해야 합니다. 과도한 무빙보다는 절제된 달리 인(Dolly In) 기법이 시청자의 집중도를 높입니다.`,
  },
  {
    id: 'note-02',
    title: '콘텐츠 기획 노트: 아이디어를 비주얼 시스템으로 변환하기',
    category: '콘텐츠 기획 노트',
    date: '2026.01',
    summary: '추상적인 아이디어를 구체적인 비주얼 콘텐츠와 영상으로 구체화하는 4단계 프로세스.',
    content: `기획 없는 비주얼은 단발성 이미지에 불과합니다.

- 1단계: 핵심 키워드 3가지 정의 (본질, 감정, 시각적 질감)
- 2단계: 무드보드 및 색상 팔레트 제한 (먹색과 연두색처럼 단일 강조색 중심)
- 3단계: 스토리 아크(기승전결)의 비주얼 매핑
- 4단계: AI 도구별 특성에 맞춘 파이프라인 분배`,
  },
  {
    id: 'note-03',
    title: '새로운 비주얼 스타일 연구: 미니멀리즘과 네오 퓨처리즘의 교차점',
    category: '비주얼 스타일 연구',
    date: '2025.12',
    summary: '복잡성을 덜어내고 선과 여백, 빛의 대비만으로 완성하는 크리에이티브 디렉션.',
    content: `최근 생성형 AI 콘텐츠는 과도하게 복잡한 렌더링으로 피로도를 낳기 쉽습니다.

이에 대한 대안으로 '극단적 미니멀리즘'과 '기하학적 조형미'를 결합한 스타일을 연구하고 있습니다. 짙은 먹색의 캔버스 위에 하나의 강력한 조명선이나 도형을 배치하여, 메시지의 명료성과 고급스러움을 극대화하는 방식입니다.`,
  },
]
