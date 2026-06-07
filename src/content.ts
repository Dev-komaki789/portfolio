// ===== ポートフォリオの内容はこのファイルを編集するだけで更新できます =====

export const profile = {
  // ↓↓↓ ここを自分の情報に書き換えてください ↓↓↓
  name: '小牧 慎太郎',
  tagline: '業務システム（WMS）を作るエンジニアを目指しています',
  bio: 'Web アプリ開発を学び、倉庫管理システム(WMS)と、それに連携する EC サイトを設計・開発し、AWS に本番公開しました。現場で使われる業務システムに興味があり、要件の理解から設計・実装・運用までを一気通貫で作れることを目指しています。',
  // 連絡先・リンク
  email: 'shintarokomaki592@gmail.com',
  github: 'https://github.com/Dev-komaki789',
}

export const skills: { group: string; items: string[] }[] = [
  { group: 'バックエンド', items: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL'] },
  { group: 'フロントエンド', items: ['TypeScript', 'React', 'Vite', 'Tailwind CSS'] },
  { group: 'インフラ / ツール', items: ['AWS (EC2 / RDS)', 'nginx', 'gunicorn', 'Git / GitHub', 'Docker'] },
]

export interface Project {
  title: string
  subtitle: string
  description: string
  highlights: string[]
  tech: string[]
  liveUrl?: string
  repoUrl?: string
  accent: string // カード上部のグラデーション
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
  },
]
