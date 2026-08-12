// ===== ポートフォリオの内容はこのファイルを編集するだけで更新できます =====

export const profile = {
  // ↓↓↓ ここを自分の情報に書き換えてください ↓↓↓
  name: '小牧 慎太郎',
  // ヒーロー（最上部）に大きく出るサイト名とサブタイトル
  siteName: 'Shintaro Komaki',
  siteSub: 'Backend Engineer Portfolio',
  tagline: 'API とデータベースを設計し、本番環境まで運用するエンジニアを目指しています',
  bio: 'SQL プログラマーとして5年半、業務システムのデータベース開発に携わってきました。現在は Web アプリケーションのバックエンドを中心に、API 設計・テーブル設計から本番環境の構築・運用までを個人開発で一通り経験しています。要件の理解から設計・実装・運用までを一気通貫で作れるエンジニアを目指しています。',
  // 連絡先・リンク
  email: 'shintarokomaki592@gmail.com',
  github: 'https://github.com/Dev-komaki789',
}

// 「About this site」セクションの本文
export const aboutSite =
  'このサイトは、私がこれまでに作ってきた制作物と、学んできた技術をまとめたポートフォリオです。API 設計・データベース設計から\nAWS での本番運用まで、実際に手を動かしながら学んできた過程を記録しています。'

// 「About me」セクション。リンクは好きなだけ追加できます。
export const aboutMe = {
  text:
    '大学卒業後、倉庫管理システムを扱う会社で SQL プログラマーとして5年半勤務し、業務データの抽出・加工やバッチ処理など、データベースを中心とした開発を担当しました。その後は別の業種で経験を積みましたが、「もう一度システムを作る側に戻りたい」という思いが強くなり、現在は Web アプリ開発の職業訓練校に通いながら、自宅でも開発を続けて学習しています。\n\nこれまでに3つの Web アプリケーションを個人で開発し、AWS・Render 上に本番公開しました。テーブル設計・API 設計・認証・トランザクション処理といったバックエンドの設計は、生成 AI と壁打ちしながら選択肢を整理し、最終的な判断は自分で行っています。現場で実際に使われる業務システムにも強い関心があり、5年半データベースを扱ってきた経験を土台に、サーバーサイド開発で力を発揮したいと考えています。',
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
    note: '業務で 5 年半使用（データ抽出・帳票・バッチ開発）',
    items: ['SQL'],
  },
  {
    label: '構築できる',
    note: '個人開発で一通り実装・本番公開した',
    items: [
      'Python',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'REST API 設計',
      'JWT / トークン認証',
      'C#',
      'HTML / CSS',
      'JavaScript',
      'Git / GitHub',
    ],
  },
  {
    label: '学習中',
    note: '勉強しながら使っている',
    items: [
      'AWS (EC2 / RDS)',
      'Linux (Ubuntu)',
      'nginx',
      'gunicorn',
      'Docker',
      'React',
      'TypeScript',
      'Tailwind CSS',
    ],
  },
]

// スキル名 → アイコンの対応表。
// 値は Devicon(https://devicon.dev) の「フォルダ名/ファイル名」。CDN から自動で読み込みます。
// 対応表に無いスキルはアイコンなし（テキストのみ）で表示されます。
// 'db' は公式ロゴが無い SQL 用の内蔵データベースアイコンです。
export const skillIcons: Record<string, string> = {
  SQL: 'db',
  PostgreSQL: 'postgresql/postgresql-original',
  'Linux (Ubuntu)': 'linux/linux-original',
  Python: 'python/python-original',
  Django: 'django/django-plain',
  'C#': 'csharp/csharp-original',
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

// ===== Interests（その他の活動・趣味） =====
// icon は Devicon のパス（skillIcons と同じ書式）。
export const interestsNote =
  '興味を持ったことは、手を動かして形にするのが好きです。\n仕事や Web 開発とは別に、3D 制作やゲーム開発にも取り組んでいます。'

export interface Interest {
  name: string
  detail: string
  icon: string
  description?: string
  // 画像があるカードはクリックでギャラリー（モーダル）が開きます。
  images?: string[]
}

export const interests: Interest[] = [
  {
    name: 'Blender',
    detail: '3D モデリング',
    icon: 'blender/blender-original',
    description:
      '趣味で 3D モデリングに取り組んでいます。モデリングから質感（マテリアル）・ライティング・レンダリングまでを学びながら、いくつか作品を制作しました。',
    images: [
      '/shots/blender-1.webp',
      '/shots/blender-2.webp',
      '/shots/blender-3.webp',
      '/shots/blender-4.webp',
      '/shots/blender-5.webp',
    ],
  },
  { name: 'Unity', detail: 'ゲーム開発（C#）', icon: 'unity/unity-original' },
]

export interface Project {
  title: string
  subtitle: string
  description: string
  highlights: string[]
  tech: string[]
  liveUrl?: string
  repoUrl?: string
  // デモ用ログイン情報（設定するとモーダルに表示されます）。accounts は複数可。
  // ※ ここに書いた内容は公開リポジトリに載るため、必ず「デモ専用」の捨てアカウントを使ってください。
  demo?: {
    note?: string
    accounts: { label?: string; id: string; password: string }[]
  }
  featured?: boolean // true にすると Works の先頭で横長の大きいカードになります
  // 開発中の作品につけるラベル（例: '開発中'）。カードとモーダルにバッジが出ます。
  status?: string
  // 画像に添える注記（例: モックアップである旨）。モーダルの画像下に出ます。
  imageNote?: string
  // 画像が縦長（スマホ画面）のときに true。切り抜かずに全体を表示します。
  portraitImages?: boolean
  accent: string // カードのアクセント色（マーカー風ハイライト）
  // 作品モーダルに表示するキャプチャ画像のパス。
  // public/shots/ にファイルを置くだけで表示されます（例: public/shots/wms-1.webp）。
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
      '在庫・ロケーション・入出荷履歴を中心としたテーブル設計と、権限(ロール)による画面 / API の出し分け',
      '入荷 → 棚入れ → ピッキング → 検品 → 出荷 の在庫推移を、トランザクションで整合性を保って更新',
      'DRF で外部システム向けの REST API を提供し、API キー認証でアクセス制御',
      'AWS(EC2/RDS) + nginx + gunicorn で HTTPS 本番公開し、継続的にデプロイ・運用',
      'ハンディ端末向け画面（バーコード/カメラ）と PC 全画面の両対応',
    ],
    tech: ['Django', 'DRF', 'PostgreSQL', 'AWS', 'nginx'],
    liveUrl: 'https://komaki-wms.com',
    repoUrl: 'https://github.com/Dev-komaki789/wms',
    demo: {
      note: 'Admin 機能は制限しています。データは定期的にリセットされます。',
      accounts: [
        { label: 'PC ユーザー', id: 'demo', password: 'wms-demo-2026' },
        { label: 'ハンディ・スマホ ユーザー', id: 'worker1', password: 'worker-wms-2026' },
      ],
    },
    featured: true,
    accent: 'from-indigo-500 to-blue-600',
    images: ['/shots/wms-2.webp', '/shots/wms-1.webp', '/shots/wms-3.webp', '/shots/wms-4.webp'],
  },
  {
    title: 'おぼえがき（会話記録アプリ）',
    subtitle: '職業訓練校の卒業制作 / 個人開発（現在開発中）',
    status: '開発中',
    description:
      '接客業・営業職の方が、繰り返し会う相手との会話を記録し、次に会う直前に「何を話すか」を判断できるアプリ。既存の人メモアプリがすべて自由記述である点に対し、話題を構造化データとして持つ設計にしました。これにより、盛り上がりの点数化と、話題ごとの可視化（バブル表示）を可能にしています。',
    highlights: [
      '8 テーブルのデータ設計と、盛り上がりスコアの算出方式を設計書にまとめてから着手',
      '集計処理とスコア算出は API 側に実装し、SQL は自分で設計',
      '話題を「大枠」、キーワードを「具体」とする2層構造で、同じ話題の重複を判定できるように',
      'スコアは時間減衰を入れ、古い盛り上がりが残り続けないよう算出方式を検証',
      '競合3アプリを調査し、自由記述ではなく構造化データで持つ方針を決定',
    ],
    tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'PWA'],
    imageNote: '画像は実装前のモックアップです（タブレット3枚・スマホ4枚）。',
    portraitImages: true,
    accent: 'from-sky-500 to-indigo-500',
    images: [
      '/shots/obk-1.webp',
      '/shots/obk-2.webp',
      '/shots/obk-3.webp',
      '/shots/obk-4.webp',
      '/shots/obk-5.webp',
      '/shots/obk-6.webp',
      '/shots/obk-7.webp',
    ],
  },
  {
    title: 'EC サイト（WMS 連携）',
    subtitle: 'サービス間連携を伴うバックエンド設計（マイクロサービス的分離）',
    description:
      'WMS と HTTP API で連携する EC サイト。DB を分けた2サービス間で、商品マスタは日次バッチで同期、在庫はリクエスト都度 API で照会し、注文確定時に WMS へ出荷指示を作成する構成です。',
    highlights: [
      'DB 分離で外部キーが張れない制約を「マスタのコピー＋ID 参照＋日次同期」で解決（B パターン）',
      'JWT 認証・カート・注文・注文履歴の API を DRF で実装',
      '注文確定は在庫引当と WMS への出荷指示 POST を含むため、失敗時はトランザクションでロールバック',
      '在庫参照は将来キャッシュ(Redis)へ差し替えられるよう関数で抽象化',
      'WMS と同一 EC2 に nginx の vhost ＋ 別 gunicorn プロセスで相乗りデプロイ',
    ],
    tech: ['Django', 'DRF', 'React', 'TypeScript', 'AWS'],
    liveUrl: 'https://ec.komaki-wms.com',
    repoUrl: 'https://github.com/Dev-komaki789/ec',
    demo: {
      note: 'デモ用の会員アカウントです。',
      accounts: [{ label: '会員ユーザー', id: 'demo@gmail.com', password: 'demo-2026' }],
    },
    accent: 'from-emerald-500 to-teal-600',
    images: ['/shots/ec-1.webp', '/shots/ec-2.webp', '/shots/ec-3.webp'],
  },
  {
    title: '貯めモン（家計簿アプリ）',
    subtitle: 'React + Django(DRF) + pandas のフルスタック家計簿アプリ',
    description:
      '支出の記録・カテゴリ・予算管理に加え、pandas で前月比・来月予測・曜日別などを分析する家計簿アプリ。記録するとコインが貯まり、そのコインで 3D モデルを集められます。フロント(React)と API(Django)を分離し、Render + Neon(PostgreSQL) に本番公開しました。',
    highlights: [
      'トークン認証でユーザーごとに支出・カテゴリ・予算を分離した REST API を DRF で実装',
      'pandas で集計 API を実装（前月比・来月予測・カテゴリ別月推移・曜日別・支出トップ5）',
      '予算管理と使いすぎアラート、月ごとの切り替え表示',
      'フロント(React) と API(Django) を分離し、Render + Neon(PostgreSQL) で本番公開',
      '記録でコインが貯まり、ショップで 3D モデルを購入して集められる（model-viewer 表示）',
      'スマホ / PC でレイアウトを出し分けるレスポンシブ対応',
    ],
    tech: ['React', 'Django', 'DRF', 'pandas', 'PostgreSQL', 'Render'],
    liveUrl: 'https://tamemon-frontend.onrender.com',
    repoUrl: 'https://github.com/Dev-komaki789/tamemon-app',
    demo: {
      note: '誰でも新規登録もできます。デモデータは変更・リセットされることがあります。無料サーバーのため初回表示に少し時間がかかります。',
      accounts: [{ label: 'デモユーザー', id: 'tanaka', password: 'tamemon-demo-2026' }],
    },
    accent: 'from-amber-400 to-emerald-500',
    images: [
      '/shots/tamemon-1.webp',
      '/shots/tamemon-2.webp',
      '/shots/tamemon-3.webp',
      '/shots/tamemon-4.webp',
      '/shots/tamemon-5.webp',
      '/shots/tamemon-6.webp',
    ],
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
    images: ['/shots/quiz-1.webp', '/shots/quiz-2.webp', '/shots/quiz-3.webp'],
  },
]
