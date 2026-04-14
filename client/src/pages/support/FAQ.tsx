import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, HelpCircle, RefreshCw, Link2, Shield,
  Calculator, ChevronDown, ChevronUp,
  Clock, Database, Lock, Zap, AlertTriangle, Server,
  Settings, CheckCircle2, XCircle,
} from 'lucide-react';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

type Category = {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
  faqs: { q: string; a: string }[];
};

const categories: Category[] = [
  {
    id: 'gateway',
    label: '資料閘道與排程刷新',
    icon: <RefreshCw className="w-4 h-4" />,
    color: '#F2C811',
    bg: '#FEFCE8',
    faqs: [
      {
        q: '報表出現「無法連線至資料來源」錯誤，但網路明明正常？',
        a: '這通常不是網路問題，而是「內部部署資料閘道」未啟動或狀態異常。請確認：(1) 安裝閘道的電腦已開機且已登入；(2) 閘道服務正在執行（系統匣中查看）；(3) 閘道已連上 Microsoft Entra ID 並維持連線。若閘道已離線超過數小時，可能需要重新啟動服務或重新設定連線。',
      },
      {
        q: '排程刷新設定了，但資料都沒有自動更新？',
        a: '依序檢查以下三點：(1) 確認資料集已指派正確的閘道，且閘道狀態為「線上」；(2) 確認排程刷新的時段落在 Power BI Pro 的「每日 8 次」限制內（Premium 容量無此限制）；(3) 若使用 Excel 或 CSV 作為來源，需確認檔案存放於 Power BI 可存取的位置（OneDrive for Business 或 SharePoint），而非本機資料夾。',
      },
      {
        q: '閘道狀態顯示「需要更新」，該怎麼處理？',
        a: '微軟會定期發布閘道更新以提升安全性與穩定性。開啟「內部部署資料閘道」應用程式，若有可用更新，點選「更新」按鈕即可。更新期間閘道會短暫離線，建議選擇非工作時段執行，並通知相關使用者可能暫時無法刷新。',
      },
      {
        q: '刷新時出現逾時錯誤，該如何縮短刷新時間？',
        a: '資料量過大時可從幾個方向優化：(1) 在 Power Query 中移除不必要的欄位與資料列；(2) 啟用「增量刷新」，只同步最近變動的資料而非每次全量；(3) 將資料庫查詢改為 DirectQuery 模式（犧牲即時性換取效能）；(4) 若使用 SQL 資料庫，在來源端建立適當索引。',
      },
    ],
  },
  {
    id: 'connection',
    label: '資料連線與效能問題',
    icon: <Link2 className="w-4 h-4" />,
    color: '#CA8A04',
    bg: '#FEF9E0',
    faqs: [
      {
        q: '匯入 Excel 檔案後，資料量很大的時候開啟報表很慢？',
        a: '建議改用「匯入 + 增量刷新」模式，在 Power Query 中設定「日期或時間範圍參數」，只載入最近 N 天的資料。初次建置時先以少量資料確認模型正確，再擴大範圍。若 Excel 檔案存放於 SharePoint，可設定為每小時自動同步，減少手動上傳的頻率。',
      },
      {
        q: '連線到公司 SQL 資料庫時被拒絕存取，該怎麼確認權限？',
        a: '首先確認兩個層級：(1) Power BI Desktop 使用的驗證方式是否與 Power BI 服務一致（建議使用「組織帳戶」而非「基本」）；(2) SQL 資料庫本身是否允許該帳號讀取對應的資料表或檢視。若不確定帳號權限，請聯繫 IT 管理員協助確認，切勿直接將資料庫帳密以明碼寫入報表設定中。',
      },
      {
        q: '報表在 Power BI Desktop 跑很快，但發布到雲端後很慢？',
        a: '雲端報表使用查詢快取、匯總表（Aggregations）和磁碟資源，與本機記憶體效能不同。可嘗試：(1) 在 Power BI 服務的資料集設定中開啟「增強型資料集中繼資料」；(2) 啟用「自動頁面版面更新」並設定合理的最低頻率；(3) 減少同一頁面的視覺物件數量，每頁建議不超過 8 個圖表。',
      },
      {
        q: '想從公司 ERP 系統匯入資料，該用哪種連接方式？',
        a: '若 ERP 支援 ODBC、OData 或 REST API，直接透過 Power BI 的「取得資料」建立連線。若 ERP 資料量非常大或需要即時資料，建議由 IT 在 SQL Server 建立 ERP 的「資料檢視」或「同步資料庫」，再讓 Power BI 連線該資料庫，而非直接穿透 ERP 生產環境。',
      },
    ],
  },
  {
    id: 'permissions',
    label: '權限、共用與共同作業',
    icon: <Shield className="w-4 h-4" />,
    color: '#16a34a',
    bg: '#F0FDF4',
    faqs: [
      {
        q: '報表分享給同事後，對方只能看見空白頁面？',
        a: '這通常是「建置權限」或「讀取權限」不足導致。檢查：(1) 對方是否已獲授與該工作區的「成員」或更高角色；(2) 若使用「應用程式」分享，確認應用程式已發布且對方已完成安裝；(3) 若資料集使用了「列層級安全性（RLS）」，確認對方的 Microsoft 帳號已列入對應的角色中。',
      },
      {
        q: '如何在 Power BI 中設定不同部門只能看到自己的資料？',
        a: '使用「列層級安全性（RLS）」。在 Power BI Desktop 的「模型檢視」中建立角色（例如「業務部」、「財務部」），並以 DAX 公式定義各角色的資料範圍。例如：`[部門] = USERPRINCIPALNAME()` 可讓每個使用者只看見自己部門的資料。設定完成後發布，並在 Power BI 服務中將對應的 Microsoft 帳號指派至各角色。',
      },
      {
        q: '想讓國外部門也能看到報表，但不想讓他們有編輯權限？',
        a: '在 Power BI Pro 中，可將報表發布至「我的工作區」再分享連結給外部使用者（需對方有 Microsoft 帳號並接受邀請）。若組織有 Premium 容量，也可使用「外部企業來賓（B2B）」功能，將外部帳號加入自己的工作區並指派「檢視者」角色，完全防止編輯。',
      },
      {
        q: '同事反應看不到我分享的報表，檢查清單怎麼做？',
        a: '依序檢查：(1) 對方的 Microsoft 帳號是否與當初授與權限的帳號一致（避免個人 Gmail 與公司帳號混淆）；(2) 確認 Power BI Pro 授權是否有效（免費帳號無法檢視組織內的分享內容）；(3) 確認報表未發布在「我的工作區」（需改用「工作區」才能正式分享）；(4) 查看 Power BI 服務的「監視」頁面確認分享記錄。',
      },
    ],
  },
  {
    id: 'modeling',
    label: '資料建模與 DAX 公式',
    icon: <Calculator className="w-4 h-4" />,
    color: '#7c3aed',
    bg: '#F5F3FF',
    faqs: [
      {
        q: 'DAX 公式一直出現錯誤，什麼是最常見的新手失誤？',
        a: '最常見的問題是「量值」與「計算欄」的使用情境混淆。計算欄會在資料刷新時預先計算，佔用模型空間；量值則在查詢時即時計算，通常是更好的選擇。另一個常見錯誤是在量值中使用列上下文而非篩選上下文，解決方式是使用 CALCULATE() 包覆表達式。建議從 SUM()、COUNTROWS()、FILTER() 這些簡單函數開始練習。',
      },
      {
        q: '想把兩個資料表的資料關聯起來，但拖放後沒有產生正確結果？',
        a: '這通常是「關聯性方向」設定問題。Power BI 的關聯性預設為「單向」（一對多），若需要雙向交叉篩選（例如業務與客戶雙向查找），需在「模型檢視」中將關聯性改為「雙向」。也可使用 CROSSFILTER() DAX 函數在特定公式中臨時開啟雙向過濾，但建議先從模型設計層面解決。',
      },
      {
        q: '時間智慧函數（如 TOTALYTD、SAMEPERIODLASTYEAR）算出來的數字不對？',
        a: '時間智慧函數需要一個「日期資料表」且必須標記為日期資料表。確認：(1) 日期資料表中每一天都有完整記錄（不能有缺口）；(2) 該資料表已正確設定為「日期資料表」（在 Power BI Desktop 中右鍵點擊日期欄位 →「標記為日期資料表」）；(3) 若使用 Power BI 服務的自動日期功能，確認資料中確實有日期類型的欄位。',
      },
      {
        q: '模型中有多個日期欄位，報表切片器無法同時控制多個圖表？',
        a: '每個視覺物件預設只會響應與自己有直接關聯的切片器。若要一個日期切片器控制多個圖表，需確保所有圖表的資料表都透過「一對多」關聯連接到同一個「日期資料表」，而不是各自擁有獨立的日期欄位。建議建立一個統一的「日期資料表」，讓所有事實資料表都與它建立關聯。',
      },
    ],
  },
];

function AccordionItem({ q, a, color }: { q: string; a: string; color: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full text-left py-5 flex items-start gap-3 hover:bg-muted/30 transition-colors duration-150 px-2 rounded-lg"
        onClick={() => setOpen(!open)}
      >
        <div
          className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5"
          style={{ background: `${color}20`, color }}
        >
          {open ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-foreground leading-snug">{q}</p>
          {open && (
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p>
          )}
        </div>
      </button>
    </div>
  );
}

function CategorySection({ cat }: { cat: Category }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="rounded-2xl border border-border overflow-hidden bg-background">
      {/* Category Header */}
      <button
        className="w-full text-left px-6 py-5 flex items-center gap-3 hover:bg-muted/30 transition-colors duration-150"
        style={{ background: cat.bg }}
        onClick={() => setExpanded(!expanded)}
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: `${cat.color}25`, color: cat.color }}
        >
          {cat.icon}
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-foreground text-base">{cat.label}</h2>
          <p className="text-xs text-muted-foreground mt-0.5">{cat.faqs.length} 個相關問題</p>
        </div>
        {expanded ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        )}
      </button>

      {/* FAQ Items */}
      {expanded && (
        <div className="px-6 pb-2">
          {cat.faqs.map((faq, idx) => (
            <AccordionItem key={idx} q={faq.q} a={faq.a} color={cat.color} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <div
          className="border-b border-border py-20 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #FAFAF9 0%, #FEFCE8 60%, #FAFAF9 100%)' }}
        >
          <div
            className="absolute left-0 top-0 w-1 h-full"
            style={{ background: 'linear-gradient(to bottom, #F2C811, #CA8A04, transparent)' }}
          />
          <div className="container max-w-4xl relative z-10">
            <MotionContainer direction="up">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
                style={{ background: '#F2C811', color: '#1a1a1a' }}
              >
                <HelpCircle className="w-4 h-4" />
                常見問題與解決方案
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
                疑難排解中心
              </h1>
              <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
                依照瀚荃員工最常見的 Power BI 使用情境分類，整理出四大類問題。
                點擊各分類展開，點選問題查看微軟官方建議的解決方案。
              </p>
            </MotionContainer>

            {/* Quick Stats */}
            <MotionContainer direction="up" delay={0.15}>
              <div className="flex flex-wrap gap-6 mt-8">
                {[
                  { icon: <RefreshCw className="w-4 h-4" />, label: '資料閘道與刷新', color: '#F2C811' },
                  { icon: <Link2 className="w-4 h-4" />, label: '資料連線效能', color: '#CA8A04' },
                  { icon: <Shield className="w-4 h-4" />, label: '權限與共用', color: '#16a34a' },
                  { icon: <Calculator className="w-4 h-4" />, label: '建模與 DAX', color: '#7c3aed' },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span style={{ color: s.color }}>{s.icon}</span>
                    {s.label}
                  </div>
                ))}
              </div>
            </MotionContainer>
          </div>
        </div>

        {/* ── FAQ CATEGORIES ────────────────────────────────────────────── */}
        <div className="container max-w-4xl py-20">
          <div className="space-y-5">
            {categories.map((cat) => (
              <MotionContainer key={cat.id} direction="up">
                <CategorySection cat={cat} />
              </MotionContainer>
            ))}
          </div>

          {/* ── STILL NEED HELP ───────────────────────────────────────── */}
          <MotionContainer direction="up" delay={0.2}>
            <section
              className="mt-20 rounded-3xl p-12 text-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)' }}
            >
              <div
                className="absolute left-0 top-0 w-1 h-full"
                style={{ background: 'linear-gradient(to bottom, #F2C811, #CA8A04, transparent)' }}
              />
              <div className="w-12 h-12 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: '#F2C811' }}>
                <HelpCircle className="w-6 h-6" style={{ color: '#1a1a1a' }} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ letterSpacing: '-0.01em' }}>
                找不到你要的答案？
              </h2>
              <p className="text-white/60 mb-3 max-w-md mx-auto text-sm">
                若有特定問題或系統性錯誤訊息，建議先截圖錯誤畫面再聯繫 IT 人員。
              </p>
              <p className="text-white/40 mb-8 max-w-md mx-auto text-xs">
                錯誤代碼可至 Microsoft Learn 的「
                <a
                  href="https://learn.microsoft.com/power-bi/enterprise/service-premium-error-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white/70 transition-colors"
                  style={{ color: '#F2C811' }}
                >
                  Power BI Premium 錯誤代碼
                </a>
                」查詢詳細說明。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/support/contact">
                  <HoverScale>
                    <Button
                      size="lg"
                      className="px-10 font-semibold"
                      style={{ background: '#F2C811', color: '#1a1a1a', border: 'none' }}
                    >
                      聯絡 IT 支援
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </HoverScale>
                </Link>
                <Link href="/introduction">
                  <HoverScale>
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-10 font-semibold border-white/30 text-white hover:bg-white/10 bg-transparent"
                    >
                      從入門指南開始
                    </Button>
                  </HoverScale>
                </Link>
              </div>
            </section>
          </MotionContainer>

          {/* ── MICROSOFT DOCS REFERENCE ───────────────────────────────── */}
          <MotionContainer direction="up" delay={0.25}>
            <div className="mt-8 p-5 rounded-xl border border-border bg-muted/30">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                微軟官方參考文件
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: 'Power BI 資料刷新概觀', url: 'https://learn.microsoft.com/power-bi/connect-data/refresh-data' },
                  { title: '內部部署資料閘道架構', url: 'https://learn.microsoft.com/data-integration/gateway/service-gateway-onprem-indepth' },
                  { title: 'Power BI 支援與疑難排解', url: 'https://learn.microsoft.com/power-bi/support/' },
                  { title: 'Premium 錯誤代碼查詢', url: 'https://learn.microsoft.com/power-bi/enterprise/service-premium-error-codes' },
                ].map((doc) => (
                  <a
                    key={doc.url}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <CheckCircle2 className="w-3 h-3 shrink-0" style={{ color: '#F2C811' }} />
                    <span className="group-hover:underline">{doc.title}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </MotionContainer>

        </div>
      </div>
    </PageTransition>
  );
}
