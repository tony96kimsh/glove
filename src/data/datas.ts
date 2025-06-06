type Skill = {
  skillName: string;
  skillLogo: string;
};

type ProjectList = {
  images: string;
  title: string;
  summary: string;
  skills: Skill[];
  github?: string;
  markdown?: string;
  deploy?: string;
  url?: string;
  category: string; // desktop, web, design, 
};

export const projectList: ProjectList[] = [
  {
    images: "img/clipboard-1.png",
    title: "웹 클립보드",
    summary: "복사/붙여넣기 작업이 잦은 QA 업무에서 착안한 메모 관리 웹 앱. 빠른 복사 기능과 폴더 분류 기능을 제공.",
    skills: [
      { skillName: "TypeScript", skillLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { skillName: "React", skillLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { skillName: "Google OAuth", skillLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
      { skillName: "Supabase", skillLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    ],
    github: "https://github.com/tony96kimsh/WebClipboard",
    markdown: "./markdown/web/web-clipboard/README.md",
    deploy: "https://tony96kimsh.github.io/WebClipboard/",
    category: "web",
  },
  {
    images: "img/glove-project.png",
    title: "Glove 포트폴리오",
    summary: "QA 경험을 녹여 안정적이고 사용자 친화적으로 완성한 개발자 포트폴리오. 프로젝트와 스킬, 경험을 체계적으로 정리.",
    skills: [
      { skillName: "React", skillLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { skillName: "TypeScript", skillLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { skillName: "TailwindCSS", skillLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { skillName: "React-Bootstrap", skillLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    ],
    github: "https://github.com/tony96kimsh/glove",
    markdown: "./markdown/web/glove-portfolio/README.md",
    deploy: "https://tony96kimsh.github.io/glove",
    category: "web",
  },
{
    images: "./img/dailyArticle1.jpg",
    title: "Daily Article (영어 뉴스 리더 데스크톱 앱)",
    category: "desktop",
    summary: "WinForms 기반 데스크톱 앱으로, The Guardian 뉴스 API를 활용하여 영어 기사 정보를 매일 자동으로 불러옵니다.",
    skills: [
  {
    "skillName": "C#",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
  }
],
    github: "https://github.com/tony96kimsh/DailyArticle", 
    markdown: "./markdown/desktop/daily-article/README.md" ,
    deploy: "https://github.com/tony96kimsh/DailyArticle/releases",
  },
{
    images: "./img/auto-folder1.png",
    title: "Auto-Foldering (윈도우 파일 자동 폴더 정리 앱)",
    category: "desktop",
    summary: "UI라이브러리 윈폼을 활용하여 윈도우 파일을 생성일에 따라 폴더에 자동 정리해주는 기능의 데스크톱 어플리케이션입니다.",
    skills: [
  {
    "skillName": "C#",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
  }
],    
    github: "https://github.com/tony96kimsh/Auto-Foldering",
    markdown: "./markdown/desktop/auto-folder/README.md",
    deploy: "https://github.com/tony96kimsh/Auto-Foldering/releases"

  },
{
    images: "./img/fertility1.png",
    title: "파이썬을 통한 데이터 분석 (에너지 소비와 출산율 관계성 조사)",
    category: "desktop",
    summary: "연간 출산율과 에너지 소비량의 상관 관계를 파이썬으로 분석하였습니다.",
    skills: [
  {
    "skillName": "python",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  }
],
    github: "https://github.com/tony96kimsh/analysis-fertility",
    markdown: "./markdown/desktop/analysis-fertility/README.md"  
  },
{
    images: "./img/draw1.png",
    title: "내가 그린 그림 (그림판 웹앱)",
    category: "web",
    summary: "설치 없이 누구나 쉽게 사용 가능한 웹 기반 그림판 어플리케이션입니다.",
    skills: [
  {
    "skillName": "JavaScript",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    "skillName": "Tailwind CSS3",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  }
],
    github: "https://github.com/tony96kimsh/DrawAnyAnimal",
    markdown: "./markdown/web/DrawAnyAnimal/README.md",
    url: "https://tony96kimsh.github.io/DrawAnyAnimal/"
  },
{
    images: "./img/image%201.png",
    title: "성훈의 방명록 (그룹 스터디 및 개인 프로젝트)",
    category: "web",
    summary: "클라우드 DB와 Node.js를 사용한 방명록 사이트입니다.",
    skills: [
  {
    "skillName": "Node.js",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    "skillName": "EJS",
    "skillLogo": "./img/ejs.png"
  }
],
    github: "https://github.com/tony96kimsh/muffler",
    markdown: "./markdown/web/muffler/README.md",
    url: "https://muffler.onrender.com/"
  },
{
    images: "./img/image%203.png",
    title: "PhilPick (알라딘 Open API 도서 검색 웹 앱)",
    category: "web",
    summary: "알라딘 OpenAPI를 이용한 도서 검색 사이트입니다.",
    skills: [
  {
    "skillName": "HTML",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    "skillName": "JavaScript",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    "skillName": "Tailwind CSS3",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  },
  {
    "skillName": "Vercel",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
  }
],
    github: "https://github.com/tony96kimsh/philpick",
    markdown: "./markdown/web/philpick/README.md",
    url: "https://philpick.vercel.app",
  },
{
    images: "./img/piano.png",
    title: "Effy Sound (브라우저로 간편하게 어디서나 피아노 연주)",
    category: "web",
    summary: "키보드와 마우스로 피아노 연주가 가능한 사이트입니다.",
    skills: [
  {
    "skillName": "JavaScript",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    "skillName": "HTML",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    "skillName": "CSS",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  }
],
    markdown: "./markdown/web/piano/README.md",
    github: "https://github.com/tony96kimsh/piano",
    url: "https://tony96kimsh.github.io/piano/"

  },
{
    images: "./img/image%205.png",
    title: "한국잉! 영어 사전 (App Inventor를 통한 개발)",
    category: "web",
    summary: "한영, 국어 그리고 영어 사전을 페이지 전환없이 손쉽게 사용할 수 있는 사전 어플리케이션입니다.",
    skills: [
  {
    "skillName": "App Inventer",
    "skillLogo": "./img/app-inventer.png"
  }
],
  markdown: "./markdown/design/quad-dictionary/README.md",
  },
{
    images: "./img/image%206.png",
    title: "디자인 이력서 meta-tony-test 1.0",
    category: "web",
    summary: "퍼블리셔, 프론트엔드를 준비하며 제작한 디자인 이력서 사이트입니다.",
    skills: [
  {
    "skillName": "HTML",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    "skillName": "CSS",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  }
],
  markdown: "./markdown/design/meta-tony/README.md",
  github: "https://github.com/tony96kimsh/tony96kimsh/tree/main/01_mtt/list/design-resume",
  url: "https://tony96kimsh.github.io/tony96kimsh/01_mtt/portfolio.html",
  },
{
    images: "./img/image%2010.png",
    title: "영동군청 카피 (라이브러리 없이 jQuery 사용)",
    category: "web",
    summary: "다른 라이브러리 jQuery만 사용하여 카피한 프로젝트입니다.",
    skills: [
  {
    "skillName": "JavaScript",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"    
  },
  {
    "skillName": "jQuery",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
  },
    {
    "skillName": "HTML",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    "skillName": "CSS",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  }
],
  markdown: "./markdown/web/yeong-dong/README.md",
  github: "https://github.com/tony96kimsh/tony96kimsh/tree/main/01_mtt/list/yd",
  url: "https://tony96kimsh.github.io/tony96kimsh/01_mtt/list/yd",
  },
{
    images: "./img/image%2012.png",
    title: "KB은행 카피 (라이브러리 없이 jQuery 사용)",
    category: "web",
    summary: "다른 라이브러리 jQuery만 사용하여 카피한 프로젝트입니다.",
    skills: [
  {
    "skillName": "JavaScript",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"    
  },
  {
    "skillName": "jQuery",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
  },
  {
    "skillName": "HTML",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    "skillName": "CSS",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  }
],
  markdown: "./markdown/web/kb-Bank/README.md",
  github: "https://github.com/tony96kimsh/tony96kimsh/tree/main/01_mtt/list/kb",
  url: "https://tony96kimsh.github.io/tony96kimsh/01_mtt/list/kb",
  },
{
    images: "./img/image%2015.png",
    title: "대성 홀딩스 (리뉴얼 디자인 및 마크업)",
    category: "web",
    summary: "기존 대성 홀딩스 사이트를 리뉴얼 디자인 및 마크업 진행한 사이트입니다.",
    skills: [
  {
    "skillName": "HTML",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    "skillName": "CSS",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  }
],
  markdown: "./markdown/web/dea-sung/README.md",
  github: "https://github.com/tony96kimsh/tony96kimsh/tree/main/01_mtt/list/ds",
  url: "https://tony96kimsh.github.io/tony96kimsh/01_mtt/list/ds/index.html",
  },
{
    images: "./img/image%2018.png",
    title: "하이쥬 성형외과 (웹 사이트 디자인 및 마크업)",
    category: "web",
    summary: "성형외과의 사용자 니즈에 맞춘 트랜디한 계절감을 살린 웹  사이트입니다.",
    skills: [
  {
    "skillName": "HTML",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    "skillName": "CSS",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  }
],
  markdown: "./markdown/web/hi-jou/README.md",
  github: "https://github.com/tony96kimsh/tony96kimsh/tree/main/01_mtt/list/hj",
  url: "https://tony96kimsh.github.io/tony96kimsh/01_mtt/list/hj/",
  },
{
    images: "./img/image%2021.png",
    title: "Hello! Langth (화상영어 앱 디자인)",
    category: "design",
    summary: "화상 영어 교육 어플리케이션 디자인입니다.",
    skills: [
  {
    "skillName": "Photoshop",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg"
  }
],
  markdown: "./markdown/design/hello-length/README.md",
  url: "https://tony96kimsh.github.io/tony96kimsh/01_mtt/list/wd-1.html",
  },


{
    images: "./img/image%2025.png",
    title: "(팀 프로젝트 / 디자인담당) 반려식물 관리 앱 “목요일”",
    category: "design",
    summary: "반려 식물 가이드 모바일 어플리케이션 디자인 팀 프로젝트입니다.",
    skills: [
  {
    "skillName": "Photoshop",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg"
  },
  {
    "skillName": "Illustrator",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
  }
],
  markdown: "./markdown/design/thursday/README.md",
  url: "https://tony96kimsh.github.io/tony96kimsh/01_mtt/list/wd-2.html",
  },


{
    images: "./img/image%2030.png",
    title: "가구 쇼핑몰 반응형 웹 디자인 “HI FURNITURE”",
    category: "design",
    summary: "모바일/PC 가구 쇼핑몰 웹 사이트 디자인입니다.",
    skills: [
  {
    "skillName": "Photoshop",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg"
  }
],
  markdown: "./markdown/design/hi-furniture/README.md",
  url: "https://tony96kimsh.github.io/tony96kimsh/01_mtt/list/wd-4.html",
  },
{
    images: "./img/hl-main.jpg",
    title: "스포츠 레저 PC 웹 디자인 “HT LTP”",
    category: "design",
    summary: "스포츠 레저 사이트 디자인입니다.",
    skills: [
  {
    "skillName": "Photoshop",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg"
  },
  {
    "skillName": "Illustrator",
    "skillLogo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
  }
],
  markdown: "./markdown/design/hi-ltp/README.md",
  url: "https://tony96kimsh.github.io/tony96kimsh/01_mtt/list/wd-4.html",
  }
];