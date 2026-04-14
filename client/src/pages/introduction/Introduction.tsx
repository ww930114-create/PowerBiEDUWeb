import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowRight, BookOpen, Database, Zap, BarChart3, Share2,
  Lightbulb, CheckCircle2, Monitor, Cloud, TrendingUp, FileText,
} from 'lucide-react';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

export default function Introduction() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div
          className="border-b border-border py-12"
          style={{ background: 'linear-gradient(135deg, #FAFAF9 0%, #FEFCE8 100%)' }}
        >
          <div className="container max-w-4xl">
            <MotionContainer direction="up">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
                style={{ background: '#F2C811', color: '#1a1a1a' }}
              >
                <BookOpen className="w-4 h-4" />
                入門指南
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Power BI 是什麼？</h1>
              <p className="text-lg text-muted-foreground">
                Microsoft Power BI 是一個商務分析平台，協助將數據轉換成可採取行動的深入解析。
                本頁將介紹 Power BI 的基本概念、四大核心功能與關鍵名詞。
              </p>
            </MotionContainer>
          </div>
        </div>

        {/* ── Main Content ─────────────────────────────────────────────────── */}
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">

            {/* Power BI 四個面向 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  基本介紹
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Power BI 的四個組成面向</h2>
              </MotionContainer>

              <MotionContainer direction="up" delay={0.1}>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <BarChart3 className="w-5 h-5" />,
                      title: '商務分析平台',
                      desc: 'Microsoft Power BI 是一個商務分析平台，協助將數據轉換成可採取行動的深入解析，涵蓋從資料取得到視覺化呈現的完整流程。',
                      color: '#F2C811',
                    },
                    {
                      icon: <BookOpen className="w-5 h-5" />,
                      title: '多元使用者族群',
                      desc: '商務使用者用自然語言提問，分析師建立互動式報表，開發人員自訂與擴充，IT 管理員治理與管理。',
                      color: '#CA8A04',
                    },
                    {
                      icon: <Cloud className="w-5 h-5" />,
                      title: '雲端原生服務',
                      desc: 'Power BI 服務（powerbi.com）是 SaaS 平台，用於發布、共享、治理與協作。所有成果集中在一處，團隊即時查看。',
                      color: '#eab308',
                    },
                    {
                      icon: <Monitor className="w-5 h-5" />,
                      title: '免費本地工具',
                      desc: 'Power BI Desktop 是免費的本地應用程式，用於建立語意模型與互動式報表。分析師 90% 的工作在這裡完成。',
                      color: '#f59e0b',
                    },
                  ].map((item) => (
                    <HoverScale key={item.title}>
                      <Card className="border-border bg-card h-full">
                        <CardHeader>
                          <CardTitle className="text-sm flex items-center gap-2 text-card-foreground">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                              style={{ backgroundColor: `${item.color}18`, color: item.color }}
                            >
                              {item.icon}
                            </div>
                            <span className="font-semibold">{item.title}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                          {item.desc}
                        </CardContent>
                      </Card>
                    </HoverScale>
                  ))}
                </div>
              </MotionContainer>
            </section>

            {/* Desktop vs 服務 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  工具分工
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Power BI Desktop 與 Power BI 服務的分工
                </h2>
                <p className="text-muted-foreground mb-8">
                  Desktop 是「工廠」（建立報表），服務是「展示中心」（共享與治理）。
                  了解兩者的分工，才能知道什麼事情該在哪裡做。
                </p>
              </MotionContainer>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Monitor className="w-6 h-6" />,
                    title: 'Power BI Desktop',
                    subtitle: '本地應用程式（免費）',
                    points: ['連接與匯入資料', 'Power Query 清理與轉換資料', '建立語意模型與關聯性', '設計互動式報表與視覺效果', '發布至 Power BI 服務'],
                    note: '分析師建立語意模型和報表的主要工具，90% 的工作在這裡完成。',
                    color: '#F2C811',
                  },
                  {
                    icon: <Cloud className="w-6 h-6" />,
                    title: 'Power BI 服務',
                    subtitle: '雲端 SaaS 平台',
                    points: ['發布與共享報表', '工作區協作與權限管理', '排程資料刷新', '發布應用程式控制存取範圍', 'Teams 與 SharePoint 整合'],
                    note: '報表展示、治理與團隊協作的集中平台，老闆和同事在此查看與互動。',
                    color: '#CA8A04',
                  },
                ].map((item, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                    <Card className="border-border bg-card h-full">
                      <CardHeader>
                        <CardTitle className="text-sm flex items-start gap-3 text-card-foreground">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `${item.color}18`, color: item.color }}
                          >
                            {item.icon}
                          </div>
                          <div>
                            <span className="font-semibold">{item.title}</span>
                            <p className="text-xs text-muted-foreground font-normal mt-0.5">{item.subtitle}</p>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1.5 mb-4">
                          {item.points.map((p) => (
                            <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: item.color }} />
                              {p}
                            </li>
                          ))}
                        </ul>
                        <div className="p-3 rounded-lg text-xs" style={{ backgroundColor: `${item.color}10`, color: item.color }}>
                          {item.note}
                        </div>
                      </CardContent>
                    </Card>
                  </MotionContainer>
                ))}
              </div>
            </section>

            {/* 四大核心功能 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  核心功能
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Power BI 的四大核心功能</h2>
              </MotionContainer>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Database className="w-5 h-5" />,
                    title: '資料連接',
                    desc: '支援約 250 個原生連接器，涵蓋資料庫、雲端服務、Excel、Web 等主流資料來源。',
                    bullets: ['SQL Server、MySQL、PostgreSQL 等關聯式資料庫', 'Azure Data Lake、Google BigQuery 等雲端資料倉儲', 'Excel、CSV、JSON 等多種檔案格式', 'Salesforce、SAP、OData 等企業應用連接器'],
                    color: '#F2C811',
                  },
                  {
                    icon: <Zap className="w-5 h-5" />,
                    title: '資料轉換（Power Query）',
                    desc: '使用 Power Query（M 語言）進行 ETL，清理、塑造、合併來自多個來源的資料，且不修改原始來源。',
                    bullets: ['移除重複值和空白，處理異常資料', '欄位拆分、合併、重新排列和類型轉換', '連接多個資料表，進行聯合和交叉合併', '條件式篩選、分組聚合、自訂公式轉換'],
                    color: '#CA8A04',
                  },
                  {
                    icon: <BarChart3 className="w-5 h-5" />,
                    title: '視覺化設計',
                    desc: '30+ 種內建圖表類型，搭配 AppSource 數百款自訂視覺，建立互動式報表與儀表板。',
                    bullets: ['柱狀圖、折線圖、散佈圖等基礎圖表', '矩陣圖、KPI 卡片、地圖等進階視覺', '交叉篩選、下鑽分析、書籤導航', 'AI 驅動視覺效果（分解樹、異常偵測）'],
                    color: '#eab308',
                  },
                  {
                    icon: <Share2 className="w-5 h-5" />,
                    title: '共享與協作',
                    desc: '工作區管理、應用程式發佈、即時協作，並與 Microsoft Teams、SharePoint 深度整合。',
                    bullets: ['工作區角色權限管理（檢視者、貢獻者、管理員）', '應用程式發佈，控制使用者訪問範圍', '排程刷新、即時資料流、推送資料集', 'Teams 頻道整合、SharePoint 內嵌、Excel 分析'],
                    color: '#f59e0b',
                  },
                ].map((item, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.08}>
                    <Card className="border-border bg-card h-full">
                      <CardHeader>
                        <CardTitle className="text-sm flex items-center gap-2 text-card-foreground">
                          <div
                            className="w-7 h-7 rounded flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `${item.color}18`, color: item.color }}
                          >
                            {item.icon}
                          </div>
                          <span className="font-semibold">{item.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground">
                        <p className="mb-3">{item.desc}</p>
                        <div className="space-y-1.5">
                          {item.bullets.map((b) => (
                            <div key={b} className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: item.color, opacity: 0.7 }} />
                              <span className="text-xs">{b}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </MotionContainer>
                ))}
              </div>
            </section>

            {/* 關鍵名詞 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  名詞解釋
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-6">關鍵名詞解釋</h2>
              </MotionContainer>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: '語意模型（Semantic Model）', desc: '代表已備妥可供報表使用的資料來源。包含資料表、欄位、關聯性、計算欄位、量值，是所有報表的唯一可信來源。', color: '#F2C811' },
                  { title: '報告（Report）', desc: '以語意模型為基礎的互動式視覺效果集合。可在 Power BI Desktop 建立並發布至 Power BI 服務，支援篩選、下鑽、書籤等互動功能。', color: '#CA8A04' },
                  { title: '儀表板（Dashboard）', desc: '單一螢幕上由多個報表視覺效果釘選而成的監控頁面，用於追蹤關鍵指標或敘述數據故事，提供高層次的概覽。', color: '#eab308' },
                  { title: '工作區（Workspace）', desc: '協作區域，用來儲存和管理語意模型、報告、儀表板。透過角色型存取控制（檢視者、貢獻者、管理員）管理權限。', color: '#f59e0b' },
                ].map((item, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.08}>
                    <div className="p-5 rounded-lg border bg-card">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full shrink-0" style={{ background: item.color }} />
                        <span className="font-semibold text-foreground text-sm">{item.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </MotionContainer>
                ))}
              </div>
            </section>

            {/* 學習路徑 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  學習路徑
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">建議的學習順序</h2>
                <p className="text-muted-foreground mb-8">
                  Power BI 涵蓋從資料取得到視覺化呈現的多個環節。以下學習順序由淺入深。
                </p>
              </MotionContainer>

              <div className="space-y-6">
                {[
                  { num: '1', title: '認識 Power BI 與核心名詞（本頁）', desc: '了解 Power BI 是什麼、四大核心功能，以及語意模型、報告、儀表板等關鍵名詞。', color: '#F2C811' },
                  { num: '2', title: '掌握核心概念', desc: '學習四步工作流程：取得資料 → Power Query 轉換 → 建立模型 → 使用 DAX 公式計算。', color: '#CA8A04' },
                  { num: '3', title: '視覺化設計與互動', desc: '學習選擇正確的圖表類型，建立交叉篩選、下鑽分析與書籤導航的互動式報表。', color: '#eab308' },
                  { num: '4', title: '資料建模進階', desc: '深入了解星型結構、角色扮演維度、緩時變維度與 DAX 時間智慧函數的進階應用。', color: '#f59e0b' },
                ].map((step, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                    <div className="flex gap-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                        style={{ background: step.color }}
                      >
                        {step.num}
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                    {idx < 3 && <div className="ml-5 pl-0.5 border-l-2 border-border h-6 mt-2 mb-2" />}
                  </MotionContainer>
                ))}
              </div>
            </section>

            {/* 提示框 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="rounded-xl p-6 border-l-4"
                  style={{ background: '#FEFCE8', borderColor: '#CA8A04' }}
                >
                  <div className="flex gap-4">
                    <Lightbulb className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#CA8A04' }} />
                    <div>
                      <p className="font-semibold text-foreground mb-1">給新手的防雷建議</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        剛接觸時最痛苦的，通常不是「這圖表怎麼畫」，而是「為什麼我的資料丟進去，畫出來的數字是錯的」。
                        Power BI 不是 Excel！它是基於「資料庫邏輯」運作的，資料表之間靠「關聯」互相影響，而不是儲存格對儲存格相加。
                      </p>
                    </div>
                  </div>
                </div>
              </MotionContainer>
            </section>

            {/* 下一步 */}
            <MotionContainer direction="up">
              <section className="rounded-xl p-8 text-center border border-border" style={{ background: '#FAFAF9' }}>
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: '#F2C811' }}>
                  <TrendingUp className="w-6 h-6" style={{ color: '#1a1a1a' }} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">基本概念建立完畢，開始學習核心技能</h3>
                <p className="text-muted-foreground mb-6">
                  了解 Power BI 的基本架構之後，接下來學習四步工作流程：
                  取得資料 → Power Query 轉換 → 建立資料模型 → 使用 DAX 公式計算。
                </p>
                <Link href="/concepts/core">
                  <HoverScale>
                    <Button size="lg" className="font-semibold" style={{ background: '#F2C811', color: '#1a1a1a', border: 'none' }}>
                      前往核心概念
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </HoverScale>
                </Link>
              </section>
            </MotionContainer>

          </div>
        </div>

      </div>
    </PageTransition>
  );
}
