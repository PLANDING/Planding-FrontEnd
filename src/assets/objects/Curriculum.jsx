export const currArrDev = [
  [
    {
      content: '파트 분배',
      detail: 'Client (App, Front-End) , Server (Back-End), Data Analytics 등 역할을 정합니다.',
      curr: 1,
    },
    {
      content: '기술 스택 선정',
      detail:
        '• BackEnd - Spring, node.js, Django ... \n• Storage - MySql, Mongo DB ... \n• FrontEnd - React.js, Vue.js, Redux, JavaScript ... \n• App (Android/IOS) - Android Studio, Swift, Java, Kotlin ... \n• Data Analytics - tensorflow, python ... \n• CI/CD - Github Action with self-hosted runners ... \n• Blockchain - Solidity, Wallet Integration ... \n• Collaboration Tool  - Slack, Github, Notion ...',
      curr: 2,
    },
    {
      content: '컨벤션 설정',
      detail: '협업시 서로 간 충돌이 없도록 팀 내에서 컨벤션을 정합니다.',
      curr: 3,
    },
  ],
  [
    {
      content: 'ERD 작성',
      detail: (() => {
        const tmp =
          '<a href="https://www.erdcloud.com/">ERD Cloud</a> 와 같은 서비스를 사용하여 DB를 설계합니다.';
        return <div dangerouslySetInnerHTML={{ __html: tmp }}></div>;
      })(),
      curr: 4,
    },
    {
      content: 'API문서 작성',
      detail: (() => {
        const tmp =
          '<a href="https://www.postman.com/">Postman</a>, <a href="https://swagger.io/">Swagger</a> 와 같은 툴을 사용하여 api문서를 작성합니다.';
        return <div dangerouslySetInnerHTML={{ __html: tmp }}></div>;
      })(),
      curr: 5,
    },
  ],
  [
    { content: '프로젝트 개발 시작', detail: '각 파트와 협업하여 개발을 시작합니다.', curr: 6 },
    {
      content: '테스트 및 배포',
      detail: '• Test - Cypress, Jest, Storybook ... \n• Build - EC2, Vercel, Heroku, Notify ...',
      curr: 7,
    },
  ],
];

export const currArrPlan = [
  [
    {
      content: '가설 설정',
      detail:
        '가설 예시)\n\n나는 [어떤 사람이] [어떤 일을 할 때] [어떤 문제를] 겪는다고 생각한다.\nor\n나는 [어떤 사람이] [어떤 제약조건 때문에] [어떤 문제를] 겪는다고 생각한다.',
      curr: 1,
    },
    { content: '가설 실험', detail: '설문조사를 통해 설정한 가설의 신뢰도를 판단합니다.', curr: 2 },
    {
      content: '고객 인터뷰',
      detail: '가설 검증을 위해 전화, 화상, 대면 인터뷰 등을 진행합니다.',
      curr: 3,
    },
    {
      content: '가설검증',
      detail: '인터뷰와 설문을 바탕으로 가설을 검증하고 확정합니다.',
      curr: 4,
    },
  ],
  [
    {
      content: '문제 정의 ',
      detail: '진행한 가설 검증을 바탕으로 아이데이션 과정을 통해 서비스의 핵심 문제를 정의합니다.',
      curr: 5,
    },
    {
      content: 'MVP',
      detail:
        '최소 기능 제품으로, 소비자의 니즈와 반응을 파악하기 위해 최소한의 기능을 구현한 제품을 릴리즈하여, 사용자의 반응을 미리 파악하기 위한 것을 의미합니다.',
      curr: 6,
    },
  ],
  [
    {
      content: '기능 확정 / 기능명세서 작성',
      detail: '화면, 기능, 우선순위, 기능설명, 필요버튼, 다음화면 등의 정보를 작성합니다.',
      curr: 7,
    },
    {
      content: 'IA설계',
      detail:
        '프로젝트에서 어떤 기능을 구현할지 파악하고, 기능을 트리구조로 나타내며, 마지막 depth에는 기능 구현에 필요한 데이터를 기재합니다.',
      curr: 8,
    },
    {
      content: 'UI/UX 설계',
      detail: (() => {
        const tmp =
          '<a href="https://www.figma.com/">Figma</a>, <a href="https://zeplin.io/">Zeplin</a>, <a href="https://www.adobe.com/products/xd.html">XD</a> 와 같은 툴을 사용하여 UI/UX를 설계합니다.';
        return <div dangerouslySetInnerHTML={{ __html: tmp }}></div>;
      })(),
      curr: 9,
    },
  ],
  [
    {
      content: '개발 시작',
      detail: '개발 진행 중 수정, 변경 되는 기능이 있는지 체크하며 진행합니다.',
      curr: 10,
    },
    {
      content: 'QA진행 및 릴리즈',
      detail:
        '개발된 사항을 확인하고, 올바른 방향에 맞게 완료 되었는지, 품질 저하 요소를 발견하여 해당 프로젝트의 품질을 높여 기능 테스트를 진행합니다. QA 과정이 진행되면, 릴리즈 과정을 수행합니다.',
      curr: 11,
    },
  ],
];
