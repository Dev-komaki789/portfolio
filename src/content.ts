// ===== ポートフォリオの内容はこのファイルを編集するだけで更新できます =====

export const profile = {
  // ↓↓↓ ここを自分の情報に書き換えてください ↓↓↓
  name: '小牧 慎太郎',
  // ヒーロー（最上部）に大きく出るサイト名とサブタイトル
  siteName: 'Komaki Lab',
  siteSub: 'WMS / Engineering Portfolio',
  tagline: '業務システム（WMS）を作るエンジニアを目指しています',
  bio: 'Web アプリ開発を学び、倉庫管理システム(WMS)と、それに連携する EC サイトを設計・開発し、AWS に本番公開しました。現場で使われる業務システムに興味があり、要件の理解から設計・実装・運用までを一気通貫で作れることを目指しています。',
  // 連絡先・リンク
  email: 'shintarokomaki592@gmail.com',
  github: 'https://github.com/Dev-komaki789',
}

// 「About this site」セクションの本文
export const aboutSite =
  'このサイトは、私（小牧）がこれまでに作ってきた制作物と、学んできた技術をまとめたポートフォリオです。フロントエンドの基礎から始め、Python / Django でのバックエンド開発、AWS での本番運用まで、手を動かしながら学んだ過程を記録しています。React + Vite + Tailwind CSS で制作し、Vercel に公開しています。'

// 「About me」セクション。リンクは好きなだけ追加できます。
export const aboutMe = {
  text:
    '業務システムを作るエンジニアを目指して学習中です。倉庫管理システム(WMS)と、それに連携する EC サイトをひとりで設計・実装し、AWS に本番公開しました。「現場で実際に使われる仕組み」を、要件の理解から運用まで一気通貫で作れることを目標にしています。',
  links: [
    { label: 'GitHub', href: 'https://github.com/Dev-komaki789' },
    { label: 'WMS（本番サイト）', href: 'https://komaki-wms.com' },
    { label: 'EC サイト（本番）', href: 'https://ec.komaki-wms.com' },
  ],
}

// ===== スキル（レーダーチャート） =====
// value は 1〜5 の習熟度の目安。axes は 5〜6 個が見栄えが良いです。
export interface SkillChart {
  title: string
  axes: { label: string; value: number }[]
}

export const skillCharts: SkillChart[] = [
  {
    title: 'バックエンド',
    axes: [
      { label: 'Python', value: 4 },
      { label: 'Django', value: 4 },
      { label: 'DRF', value: 4 },
      { label: 'API 設計', value: 3 },
      { label: 'PostgreSQL', value: 3 },
      { label: '認証', value: 3 },
    ],
  },
  {
    title: 'フロントエンド',
    axes: [
      { label: 'HTML/CSS', value: 4 },
      { label: 'JavaScript', value: 4 },
      { label: 'TypeScript', value: 3 },
      { label: 'React', value: 3 },
      { label: 'Tailwind', value: 3 },
      { label: 'UI 設計', value: 3 },
    ],
  },
  {
    title: 'インフラ / ツール',
    axes: [
      { label: 'AWS', value: 3 },
      { label: 'nginx', value: 3 },
      { label: 'gunicorn', value: 3 },
      { label: 'Docker', value: 3 },
      { label: 'Git', value: 4 },
      { label: 'Linux', value: 3 },
    ],
  },
]

// ===== Profile（タイムライン） =====
// period は「2024」「STEP 1」など自由な見出し。image は public/shots/ に置いた画像パス。
// 画像が無いときは自動で頭文字アイコンになります。
export interface TimelineItem {
  period: string
  title: string
  body: string
  image?: string
}

export const timeline: TimelineItem[] = [
  {
    period: 'はじまり',
    title: 'プログラミングを学び始める',
    body: 'もの作りに興味を持ち、独学でプログラミングの学習を始めました。まずは手を動かして「動くもの」を作ることを目標にしました。',
  },
  {
    period: 'STEP 1',
    title: 'フロントエンドの基礎を身につける',
    body: 'HTML / CSS / JavaScript を学び、ブラウザだけで動くアプリを制作。サイバーパンク風メモ帳や4択クイズアプリを作り、データと画面の分け方を学びました。',
  },
  {
    period: 'STEP 2',
    title: 'Python / Django を学び始める',
    body: 'バックエンドに興味を持ち、Python と Django を学習。データベースを使った Web アプリの仕組みを、自分で説明できる範囲を増やしながら理解していきました。',
  },
  {
    period: 'STEP 3',
    title: '倉庫管理システム(WMS)を設計・開発',
    body: '入荷・出荷・在庫・棚卸・マスタ管理を備えた業務系 Web アプリを開発。ハンディ端末でのバーコード運用や発注点アラートなど、現場で必要な機能を実装しました。',
  },
  {
    period: 'STEP 4',
    title: 'EC サイトを WMS と連携',
    body: 'DRF で WMS を API 化し、消費者向け EC サイト(React + TypeScript)と連携。別 DB の制約を「マスタのコピー＋ID 参照」で解決する設計に挑戦しました。',
  },
  {
    period: 'STEP 5',
    title: 'AWS に本番公開',
    body: 'EC2 / RDS / nginx / gunicorn で WMS と EC サイトを HTTPS 本番公開。ビルド時の OOM 対策など、運用面の課題にも対応しました。',
  },
  {
    period: 'これから',
    title: '業務システムエンジニアへ',
    body: '要件の理解から設計・実装・運用までを一気通貫で担える、現場で頼られるエンジニアを目指して学習を続けています。',
  },
]

export interface Project {
  title: string
  subtitle: string
  description: string
  highlights: string[]
  tech: string[]
  liveUrl?: string
  repoUrl?: string
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
    accent: 'from-indigo-500 to-blue-600',
    images: ['/shots/wms-1.png', '/shots/wms-2.png', '/shots/wms-3.png', '/shots/wms-4.png'],
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
    images: ['/shots/quiz-1.png', '/shots/quiz-2.png'],
  },
]
