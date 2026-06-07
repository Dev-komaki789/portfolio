// ===== ポートフォリオの内容はこのファイルを編集するだけで更新できます =====

export const profile = {
  // ↓↓↓ ここを自分の情報に書き換えてください ↓↓↓
  name: '小牧 慎太郎',
  // ヒーロー（最上部）に大きく出るサイト名とサブタイトル
  siteName: 'Shintaro Komaki',
  siteSub: 'WMS / Engineering Portfolio',
  tagline: '業務システム（WMS）を作るエンジニアを目指しています',
  bio: 'Web アプリ開発を学び、倉庫管理システム(WMS)と、それに連携する EC サイトを設計・開発し、AWS に本番公開しました。現場で使われる業務システムに興味があり、要件の理解から設計・実装・運用までを一気通貫で作れることを目指しています。',
  // 連絡先・リンク
  email: 'shintarokomaki592@gmail.com',
  github: 'https://github.com/Dev-komaki789',
}

// 「About this site」セクションの本文
export const aboutSite =
  'このサイトは、私がこれまでに作ってきた制作物と、学んできた技術をまとめたポートフォリオです。フロントエンドの基礎から始め、Python / Django によるバックエンド開発、AWS での本番運用まで、実際に手を動かしながら学んできた過程を記録しています。'

// 「About me」セクション。リンクは好きなだけ追加できます。
export const aboutMe = {
  text:
    '大学卒業後、倉庫管理システム(WMS)を扱う会社で SQL プログラマーとして5年半勤務しました。その後は別の業種で経験を積みましたが、「もう一度、倉庫管理システムの開発に携わりたい」という思いが強くなり、現在は Web アプリ開発の職業訓練校に通いながら、自宅でも開発を続けて学習しています。\n\nこれまでに、倉庫管理システム(WMS)と、それに連携する EC サイトの2つを個人で開発し、AWS に本番公開しました。設計の判断は自分で行い、実装には生成 AI も活用しながら、要件の理解から設計・実装・運用までを一通り経験しています。「現場で実際に使われる仕組み」を一気通貫で作れるエンジニアを目指しています。',
  links: [
    { label: 'GitHub', href: 'https://github.com/Dev-komaki789' },
    { label: 'WMS（本番サイト）', href: 'https://komaki-wms.com' },
    { label: 'EC サイト（本番）', href: 'https://ec.komaki-wms.com' },
  ],
}

// ===== スキル（習熟度を3段階で分類） =====
// label は段階名、note は補足（任意）、items はその段階のスキル名。
// 上から「得意な順」に並べると見やすいです。
export interface SkillTier {
  label: string
  note?: string
  items: string[]
}

export const skillTiers: SkillTier[] = [
  {
    label: '実務で使える',
    note: '業務で 5 年半使用した技術',
    items: ['SQL'],
  },
  {
    label: '構築できる',
    note: '個人開発で一通り実装・本番公開した',
    items: [
      'Python',
      'Django',
      'Django REST Framework',
      'HTML / CSS',
      'JavaScript',
      'AWS (EC2 / RDS)',
      'nginx',
      'gunicorn',
    ],
  },
  {
    label: '学習中',
    note: '勉強しながら使っている',
    items: ['Git / GitHub', 'React', 'TypeScript', 'Tailwind CSS', 'Docker'],
  },
]

// スキル名 → アイコンの対応表。
// 値は Devicon(https://devicon.dev) の「フォルダ名/ファイル名」。CDN から自動で読み込みます。
// 対応表に無いスキルはアイコンなし（テキストのみ）で表示されます。
// 'db' は公式ロゴが無い SQL 用の内蔵データベースアイコンです。
export const skillIcons: Record<string, string> = {
  SQL: 'db',
  Python: 'python/python-original',
  Django: 'django/django-plain',
  'HTML / CSS': 'html5/html5-original',
  JavaScript: 'javascript/javascript-original',
  'AWS (EC2 / RDS)': 'amazonwebservices/amazonwebservices-original-wordmark',
  nginx: 'nginx/nginx-original',
  'Git / GitHub': 'git/git-original',
  React: 'react/react-original',
  TypeScript: 'typescript/typescript-original',
  'Tailwind CSS': 'tailwindcss/tailwindcss-original',
  Docker: 'docker/docker-original',
}

export interface Project {
  title: string
  subtitle: string
  description: string
  highlights: string[]
  tech: string[]
  liveUrl?: string
  repoUrl?: string
  featured?: boolean // true にすると Works の先頭で横長の大きいカードになります
  accent: string // カードのアクセント色（マーカー風ハイライト）
  // 作品モーダルに表示するキャプチャ画像のパス。
  // public/shots/ にファイルを置くだけで表示されます（例: public/shots/wms-1.png）。
  // まだ画像が無い場合は自動で「準備中」プレースホルダが表示されます。
  images: string[]
}

export const projects: Project[] = [
  {
    title: '倉庫管理システム (WMS)',
    subtitle: '業務系 Web アプリ（PC ＋ ハンディ端末）',
    description:
      '入荷・出荷・在庫・棚卸・マスタ管理を備えた倉庫管理システム。ハンディ端末でのバーコード運用、発注点アラート、CSV 取込、帳票印刷(Code128) など現場で必要な機能を実装しました。',
    highlights: [
      'ハンディ端末向け画面（バーコード/カメラ）と PC 全画面を権限で出し分け',
      '入荷 → 棚入れ → ピッキング → 検品 → 出荷 の一連の業務フロー',
      'DRF で API を提供し、API キー認証で外部システムと連携',
      'AWS(EC2/RDS) + nginx + gunicorn で HTTPS 本番公開',
    ],
    tech: ['Django', 'DRF', 'PostgreSQL', 'AWS', 'nginx'],
    liveUrl: 'https://komaki-wms.com',
    repoUrl: 'https://github.com/Dev-komaki789/wms',
    featured: true,
    accent: 'from-indigo-500 to-blue-600',
    images: ['/shots/wms-2.png', '/shots/wms-1.png', '/shots/wms-3.png', '/shots/wms-4.png'],
  },
  {
    title: 'EC サイト（WMS 連携）',
    subtitle: '消費者向け SPA ＋ バックエンド（マイクロサービス的分離）',
    description:
      'WMS と HTTP API で連携する EC サイト。商品マスタは WMS から日次同期、在庫は都度 API 照会、注文確定時に WMS へ出荷指示を作成する構成です。',
    highlights: [
      '別 DB で FK が張れない制約を「マスタのコピー＋ID 参照」で解決（B パターン）',
      'JWT 認証・カート・注文・注文履歴。注文確定で WMS に出荷指示を POST',
      '在庫不足時はトランザクションで安全にロールバック',
      'React + Tailwind でスマホ対応 UI、AWS に相乗りデプロイ',
    ],
    tech: ['Django', 'DRF', 'React', 'TypeScript', 'AWS'],
    liveUrl: 'https://ec.komaki-wms.com',
    repoUrl: 'https://github.com/Dev-komaki789/ec',
    accent: 'from-emerald-500 to-teal-600',
    images: ['/shots/ec-1.png', '/shots/ec-2.png', '/shots/ec-3.png'],
  },
  {
    title: 'サイバーパンク風メモ帳',
    subtitle: 'フロントエンド学習作品（HTML / CSS / JavaScript）',
    description:
      'サイバーパンク風の UI にこだわったメモ帳アプリ。入力時のタイピング音や、ローカルストレージへの保存・読み込みを実装し、ブラウザだけで動く仕組みを学びました。',
    highlights: [
      'localStorage への保存・呼び出しでブラウザを閉じても内容が残る',
      'キー入力に合わせてタイピング音を再生（Audio API）',
      'CSS でネオン調のサイバーパンク UI を作り込み',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
    liveUrl: 'https://dev-komaki789.github.io/Cyberpunk-Notepad/',
    repoUrl: 'https://github.com/Dev-komaki789/Cyberpunk-Notepad',
    accent: 'from-fuchsia-500 to-cyan-500',
    images: ['/shots/notepad-1.png', '/shots/notepad-2.png'],
  },
  {
    title: '4択クイズアプリ',
    subtitle: 'フロントエンド学習作品（HTML / CSS / JavaScript）',
    description:
      '制限時間つきの4択クイズアプリ。クイズの問題は JSON で管理し、カテゴリごとに出題できるようにしました。データと画面ロジックを分けて扱う考え方を学びました。',
    highlights: [
      'クイズデータを JSON で外部管理し、追加・編集しやすい構成に',
      'カテゴリ分けで出題ジャンルを切り替え',
      '制限時間つきで回答するゲーム性のある UI',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'JSON'],
    liveUrl: 'https://dev-komaki789.github.io/simple-quiz-app/',
    repoUrl: 'https://github.com/Dev-komaki789/simple-quiz-app',
    accent: 'from-amber-500 to-orange-600',
    images: ['/shots/quiz-1.png', '/shots/quiz-2.png', '/shots/quiz-3.png'],
  },
]
