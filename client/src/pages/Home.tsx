import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, BarChart3, Zap, Users, CheckCircle2, ChevronRight,
  Database, Share2, PieChart, Table2, Filter,
  MessageSquare, FileSpreadsheet, Globe, Cpu, Shield,
} from 'lucide-react';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446932732/47KbkvpLmL9hw6oikty2zt/hero-background-f72QBXASMByD6dkQHLkYv3.webp';

const GRID_SVG = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23F2C811' stroke-width='0.4' opacity='0.25'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section
          className="relative min-h-[680px] flex items-center justify-center text-center py-24 overflow-hidden"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, transparent 40%, hsl(var(--background)) 100%)' }}
          />
          <div
            className="absolute left-0 top-0 w-1 h-full"
            style={{ background: 'linear-gradient(to bottom, #F2C811, #CA8A04, transparent)' }}
          />

          <div className="relative z-10 container max-w-3xl px-6">
            <MotionContainer direction="up" delay={0.1}>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-8"
                style={{ background: '#F2C811', color: '#1a1a1a' }}
              >
                <BarChart3 className="w-4 h-4" />
                Microsoft Power BI 完整教學
              </div>
            </MotionContainer>

            <MotionContainer direction="up" delay={0.2}>
              <h1
                className="font-bold text-foreground mb-6 leading-none"
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
              >
                用資料說故事
              </h1>
            </MotionContainer>

            <MotionContainer direction="up" delay={0.3}>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                Microsoft Power BI 是全球最廣泛使用的商務分析平台。
                本教學帶你從零開始，系統性地掌握資料視覺化、建模與分析的每一個關鍵技能。
              </p>
            </MotionContainer>

            <MotionContainer direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/introduction">
                  <HoverScale>
                    <Button
                      size="lg"
                      className="px-8 font-semibold"
                      style={{ background: '#F2C811', color: '#1a1a1a', border: 'none' }}
                    >
                      立即開始學習
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </HoverScale>
                </Link>
                <Link href="/concepts/core">
                  <HoverScale>
                    <Button size="lg" variant="outline" className="px-8 font-semibold w-full sm:w-auto bg-background/80">
                      查看核心概念
                    </Button>
                  </HoverScale>
                </Link>
              </div>
            </MotionContainer>

            <MotionContainer direction="up" delay={0.5}>
              <div className="flex flex-wrap justify-center gap-10 mt-16 pt-10 border-t border-border">
                {[
                  { num: '250+', label: '原生資料連接器' },
                  { num: '30+', label: '內建視覺類型' },
                  { num: '3', label: '系統化學習階段' },
                  { num: '100%', label: '繁體中文教學' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl font-bold text-foreground" style={{ letterSpacing: '-0.02em' }}>
                      {stat.num}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </MotionContainer>
          </div>
        </section>

        {/* ── FEATURES ──────────────────────────────────────────────────── */}
        <section className="py-24 bg-background border-b border-border">
          <div className="container max-w-5xl">
            <MotionContainer direction="up">
              <div className="mb-12">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
                  style={{ background: '#F2C811', color: '#1a1a1a' }}
                >
                  核心優勢
                </div>
                <h2 className="text-4xl font-bold text-foreground" style={{ letterSpacing: '-0.02em' }}>
                  為什麼選擇 Power BI？
                </h2>
                <p className="text-muted-foreground mt-3 max-w-2xl">
                  Power BI 是 Microsoft Fabric 的核心分析元件，整合了從資料連接到共享的完整工作流程，讓每個人都能做出資料驅動的決策。
                </p>
              </div>
            </MotionContainer>

            <div className="grid md:grid-cols-3 gap-0 border border-border rounded-2xl overflow-hidden">
              {[
                {
                  num: '01', icon: <BarChart3 className="w-5 h-5" />,
                  title: '強大的視覺化能力',
                  desc: '30+ 種內建圖表類型，從基本的長條圖、折線圖到矩陣圖、KPI 卡片，搭配 AppSource 數百款第三方自訂視覺，可滿足各種產業的報表需求。所有視覺效果均支援互動式篩選與下鑽分析。',
                  color: '#F2C811',
                  bullets: ['互動式交叉篩選', '多層次下鑽分析', 'AppSource 自訂視覺擴充'],
                  bulletIcon: <PieChart className="w-3 h-3" />,
                },
                {
                  num: '02', icon: <Zap className="w-5 h-5" />,
                  title: '低程式碼，高效率',
                  desc: '拖放式介面讓非技術使用者也能在幾分鐘內建立互動報表。需要進階計算時，DAX（資料分析運算式）提供強大的公式語言，Power Query 的 M 語言則讓資料清理變得直觀。',
                  color: '#CA8A04',
                  bullets: ['拖放建立報表，無需編程', 'DAX 處理複雜商業計算', 'Power Query 清理與塑形資料'],
                  bulletIcon: <Cpu className="w-3 h-3" />,
                },
                {
                  num: '03', icon: <Users className="w-5 h-5" />,
                  title: '企業級協作與安全',
                  desc: '透過工作區進行團隊協作，以應用程式集中發布報表給業務使用者。列層級安全性（RLS）確保不同角色只能看到授權的資料範圍，滿足企業治理與法規要求。',
                  color: '#eab308',
                  bullets: ['工作區角色權限管理', '列層級安全性（RLS）', '稽核紀錄與使用量分析'],
                  bulletIcon: <Shield className="w-3 h-3" />,
                },
              ].map((f, idx) => (
                <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                  <div
                    className="p-8 h-full hover:bg-muted/40 transition-colors duration-200 flex flex-col"
                    style={{ borderRight: idx < 2 ? '1px solid hsl(var(--border))' : 'none' }}
                  >
                    <p
                      className="text-6xl font-bold mb-6 leading-none select-none"
                      style={{ color: f.color, opacity: 0.18, letterSpacing: '-0.04em' }}
                    >
                      {f.num}
                    </p>
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${f.color}18`, color: f.color }}
                    >
                      {f.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{f.desc}</p>
                    <div className="mt-auto space-y-2 pt-4 border-t border-border">
                      {f.bullets.map((b) => (
                        <div key={b} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span style={{ color: f.color }}>{f.bulletIcon}</span>
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionContainer>
              ))}
            </div>
          </div>
        </section>

        {/* ── WORKFLOW ──────────────────────────────────────────────────── */}
        <section className="py-24" style={{ background: '#FAFAF9' }}>
          <div className="container max-w-5xl">
            <MotionContainer direction="up">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
                style={{ background: '#FEFCE8', color: '#CA8A04' }}
              >
                工作流程
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-3" style={{ letterSpacing: '-0.02em' }}>
                從資料到洞察的五個步驟
              </h2>
              <p className="text-muted-foreground mb-12 max-w-2xl">
                Power BI 將資料分析的完整流程整合在單一平台中，每個步驟都有對應的工具支援，不需要在多個軟體之間切換。
              </p>
            </MotionContainer>

            <div className="grid md:grid-cols-5 gap-0 border border-border rounded-2xl overflow-hidden bg-background">
              {[
                { icon: <Database className="w-5 h-5" />, step: '連接', desc: '從 250+ 資料來源取得資料，包含 Excel、SQL、雲端服務、API 等', color: '#F2C811' },
                { icon: <Filter className="w-5 h-5" />, step: '轉換', desc: '透過 Power Query 清理、合併、重塑資料，不修改原始來源', color: '#CA8A04' },
                { icon: <Table2 className="w-5 h-5" />, step: '建模', desc: '建立資料表關聯，用 DAX 撰寫量值與計算欄位，定義業務邏輯', color: '#F59E0B' },
                { icon: <PieChart className="w-5 h-5" />, step: '視覺化', desc: '拖放欄位建立圖表，設計互動式報表頁面，加入篩選器與書籤', color: '#eab308' },
                { icon: <Share2 className="w-5 h-5" />, step: '共享', desc: '發布至 Power BI 服務，設定排程刷新，透過應用程式或連結共享', color: '#16a34a' },
              ].map((s, idx, arr) => (
                <MotionContainer key={idx} direction="up" delay={idx * 0.08}>
                  <div
                    className="p-6 h-full flex flex-col items-center text-center hover:bg-muted/40 transition-colors duration-200"
                    style={{ borderRight: idx < arr.length - 1 ? '1px solid hsl(var(--border))' : 'none' }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-4 shrink-0"
                      style={{ backgroundColor: `${s.color}18`, color: s.color }}
                    >
                      {s.icon}
                    </div>
                    <p className="font-bold text-foreground text-sm mb-2">{s.step}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </MotionContainer>
              ))}
            </div>

            <MotionContainer direction="up" delay={0.3}>
              <p className="text-center text-xs text-muted-foreground mt-4">
                每個步驟環環相扣，並可隨時回頭修改，構成完整的自助式分析迴圈
              </p>
            </MotionContainer>
          </div>
        </section>

        {/* ── LEARNING PATH ─────────────────────────────────────────────── */}
        <section className="py-24 bg-background border-b border-border">
          <div className="container max-w-5xl">
            <MotionContainer direction="up">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
                style={{ background: '#FEFCE8', color: '#CA8A04' }}
              >
                學習路徑
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-3" style={{ letterSpacing: '-0.02em' }}>
                三階段，循序漸進
              </h2>
              <p className="text-muted-foreground mb-12 max-w-2xl">
                不論你是完全的新手，還是已有 Excel 基礎想進一步提升，這個學習路徑都能帶你系統性地建立 Power BI 的完整能力。
              </p>
            </MotionContainer>

            <div className="rounded-2xl border border-border overflow-hidden bg-background">
              {[
                {
                  step: '01', stage: '第一階段', title: '理解基礎概念',
                  desc: '在動手操作之前，先建立正確的心智模型。了解 Power BI Desktop 與 Power BI 服務的差異、語意模型、報告、儀表板等核心名詞的定義。',
                  link: '/introduction', linkText: '前往入門指南',
                  tags: ['Power BI 介紹', 'Desktop vs Service', '語意模型', 'Microsoft Fabric'],
                  learns: ['Power BI 是什麼、解決什麼問題', 'Desktop 建立 / Service 共享的分工', '核心名詞：語意模型、報告、儀表板、工作區', '適合哪些人學習與使用'],
                  color: '#F2C811',
                },
                {
                  step: '02', stage: '第二階段', title: '掌握核心技能',
                  desc: '這是最關鍵的階段，涵蓋視覺化設計原則、資料建模的最佳實踐（星型結構），以及 DAX 公式語言的基礎語法。學完這個階段，你將能獨立完成一份具有商業價值的互動式報表。',
                  link: '/concepts/core', linkText: '前往核心概念',
                  tags: ['視覺化', '資料建模', 'DAX', 'Power Query', '星型結構'],
                  learns: ['選擇正確的圖表類型呈現不同資料', 'Power Query ETL 資料清理與轉換', '建立資料表關聯與星型模型設計', 'DAX 量值、計算欄位、時間智慧函數'],
                  color: '#CA8A04',
                },
                {
                  step: '03', stage: '第三階段', title: '實踐應用情境',
                  desc: '將前兩階段的技能套用到真實的工作情境中。同時學習如何發布與管理報表、設定資料刷新排程，以及與 Teams、Excel 整合的實用技巧。',
                  link: '/scenarios', linkText: '前往應用情境',
                  tags: ['實戰情境', '發布共享', 'Teams 整合', '排程刷新', '最佳實踐'],
                  learns: ['銷售、庫存、工廠常見報表範本', '設定資料集排程自動刷新', '在 Teams 頻道嵌入互動報表', '使用「在 Excel 中分析」匯出資料'],
                  color: '#eab308',
                },
              ].map((item, idx, arr) => (
                <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                  <div
                    className="group flex gap-8 p-8 transition-colors duration-200 hover:bg-muted/30 cursor-default"
                    style={{
                      borderBottom: idx < arr.length - 1 ? '1px solid hsl(var(--border))' : 'none',
                      borderLeft: '3px solid transparent',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderLeftColor = item.color)}
                    onMouseLeave={e => (e.currentTarget.style.borderLeftColor = 'transparent')}
                  >
                    <div className="shrink-0 pt-1">
                      <p
                        className="text-5xl font-bold leading-none"
                        style={{ color: item.color, opacity: 0.18, letterSpacing: '-0.04em' }}
                      >
                        {item.step}
                      </p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: item.color }}>{item.stage}</p>
                      <h3 className="text-xl font-bold text-foreground mb-2" style={{ letterSpacing: '-0.01em' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{item.desc}</p>

                      <div className="bg-muted/40 rounded-xl p-4 mb-5">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">你將學到</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {item.learns.map((l) => (
                            <div key={l} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: item.color }} />
                              {l}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map(tag => (
                            <span
                              key={tag}
                              className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link href={item.link}>
                          <span className="inline-flex items-center gap-1 text-sm font-semibold hover:underline ml-auto" style={{ color: item.color }}>
                            {item.linkText}
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </MotionContainer>
              ))}
            </div>
          </div>
        </section>

        {/* ── M365 INTEGRATION ──────────────────────────────────────────── */}
        <section className="py-24" style={{ background: '#FAFAF9' }}>
          <div className="container max-w-5xl">
            <MotionContainer direction="up">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
                style={{ background: '#FEFCE8', color: '#CA8A04' }}
              >
                生態系整合
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-3" style={{ letterSpacing: '-0.02em' }}>
                與 Microsoft 365 完美整合
              </h2>
              <p className="text-muted-foreground mb-12 max-w-2xl">
                Power BI 是 Microsoft Fabric 的核心分析元件，與 Microsoft 365 深度整合，讓資料洞察自然融入每天的工作流程。
              </p>
            </MotionContainer>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: <MessageSquare className="w-5 h-5" />, app: 'Microsoft Teams', title: '在 Teams 頻道直接使用報表', desc: '將 Power BI 報表新增為 Teams 頻道頁籤，讓所有成員在不離開 Teams 的情況下查看即時數據，並直接在頁籤中互動篩選。', color: '#F2C811' },
                { icon: <FileSpreadsheet className="w-5 h-5" />, app: 'Microsoft Excel', title: '在 Excel 中分析 Power BI 資料', desc: '透過「在 Excel 中分析」功能，將 Power BI 語意模型直接連接到 Excel，使用熟悉的樞紐分析表工具查詢資料，且資料不會被複製。', color: '#CA8A04' },
                { icon: <Globe className="w-5 h-5" />, app: 'Microsoft SharePoint', title: '嵌入 SharePoint 頁面', desc: '使用 Power BI 網頁組件，將報表或儀表板直接嵌入 SharePoint 內部網站，讓不需要 Power BI 帳號的讀者也能查看即時數據。', color: '#eab308' },
                { icon: <Cpu className="w-5 h-5" />, app: 'Microsoft Copilot', title: '透過 AI Copilot 獲取洞察', desc: '啟用 Copilot 後，使用者可以用自然語言向報表提問，Copilot 會自動生成視覺化摘要，大幅降低資料分析門檻。', color: '#f59e0b' },
              ].map((item, idx) => (
                <MotionContainer key={idx} direction="up" delay={idx * 0.08}>
                  <div className="p-6 rounded-xl border border-border bg-background hover:border-primary/30 transition-colors duration-200 h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${item.color}18`, color: item.color }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: item.color }}>{item.app}</p>
                        <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </MotionContainer>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)' }}
        >
          <div className="absolute inset-0" style={{ backgroundImage: GRID_SVG }} />
          <div
            className="absolute left-0 top-0 w-1 h-full"
            style={{ background: 'linear-gradient(to bottom, #F2C811, #CA8A04, transparent)' }}
          />

          <div className="relative z-10 container max-w-3xl text-center">
            <MotionContainer direction="up">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#F2C811' }}>
                開始你的學習之旅
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                style={{ letterSpacing: '-0.02em' }}
              >
                準備好開始了嗎？
              </h2>
              <p className="text-white/60 mb-4 leading-relaxed max-w-xl mx-auto">
                只需 30 分鐘，您就能掌握 Power BI 的基礎概念，建立第一張互動式報表。
                從入門指南出發，按照三階段學習路徑，系統性地建立完整技能。
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-white/50">
                {['免費 Power BI Desktop', '無需程式背景', '繁體中文全程說明'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" style={{ color: '#F2C811' }} />
                    {t}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/introduction">
                  <HoverScale>
                    <Button
                      size="lg"
                      className="px-10 font-semibold"
                      style={{ background: '#F2C811', color: '#1a1a1a', border: 'none' }}
                    >
                      立即開始
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </HoverScale>
                </Link>
                <Link href="/support/faq">
                  <HoverScale>
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-10 font-semibold border-white/30 text-white hover:bg-white/10 bg-transparent"
                    >
                      查看常見問題
                    </Button>
                  </HoverScale>
                </Link>
              </div>
            </MotionContainer>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
