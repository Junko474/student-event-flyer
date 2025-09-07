import React from "react";

export default function Flyer() {
  return (
    <div className="w-full h-full bg-white p-6">
      {/* 上半分 写真＋タイトル */}
      <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-md">
       <img
  src="/escon-field.jpg"   // public フォルダ直下の画像を読み込む
  alt="エスコンフィールド"
  className="w-full h-full object-cover"
/>
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-6">
          <p className="text-lg font-semibold tracking-wide">学生会特別企画</p>
          <h1 className="text-4xl font-bold mt-3 leading-snug">
            エスコンフィールド見学ツアー<br />& 懇親会
          </h1>
        </div>
      </div>

      {/* 下半分 情報まとめ */}
      <div className="mt-8 grid gap-5 text-gray-800">
        <div className="p-5 bg-gray-100 rounded-2xl shadow-sm">
          <h2 className="text-xl font-bold mb-2">📅 開催日程</h2>
          <ul className="space-y-1 text-base">
            <li>2026年2月27日（金）14:00～15:00　エスコンフィールド見学ツアー</li>
            <li>2026年2月27日（金）17:00～　学生会 懇親会</li>
            <li>2026年2月28日（土）午前中　フリータイム（各自でお楽しみください）</li>
            <li>2026年2月28日（土）13:30～　産業能率大学講師によるセッション</li>
          </ul>
        </div>

        <div className="p-5 bg-gray-100 rounded-2xl shadow-sm">
          <h2 className="text-xl font-bold mb-2">👥 参加条件</h2>
          <p>学生会メンバー・OB/OG歓迎（10名以上で開催確定）</p>
        </div>

        <div className="p-5 bg-gray-100 rounded-2xl shadow-sm">
          <h2 className="text-xl font-bold mb-2">💰 参加費</h2>
          <ul className="list-disc list-inside">
            <li>ツアー代金：1,000円</li>
            <li>懇親会費：6,000円</li>
            <li>合計：7,000円（事前振込制）</li>
          </ul>
          <p className="mt-3 font-semibold">申込締切：2026年1月30日（金）</p>
        </div>

        <div className="p-5 bg-gray-100 rounded-2xl shadow-sm">
          <h2 className="text-xl font-bold mb-2">🚌 集合場所・アクセス</h2>
          <p>エスコンフィールドHOKKAIDO（北広島市）</p>
          <p>新千歳空港から約◯◯分／札幌駅から約◯◯分</p>
        </div>

        <div className="p-5 bg-gray-100 rounded-2xl shadow-sm text-center">
          <h2 className="text-xl font-bold mb-2">🎓 主催</h2>
          <p className="text-lg font-semibold">産業能率大学 北海道学生会</p>

 {/* フォームリンク追加 */}
 <div className="p-5 bg-gray-100 rounded-2xl shadow-sm text-center">
  <h2 className="text-xl font-bold mb-2">🎓 主催</h2>
  <p className="text-lg font-semibold">産業能率大学 北海道学生会</p>
  {/* ダミーリンクでボタン表示 */}
  <a
    href="#"
    className="mt-3 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
  >
    参加申込フォーム
  </a>
</div>





        </div>
      </div>
    </div>
  );
}
