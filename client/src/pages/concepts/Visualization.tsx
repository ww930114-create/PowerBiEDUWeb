import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowRight, BarChart3, TrendingUp, PieChart, Table2,
  MapPin, Gauge, BrainCircuit, Filter, MousePointerClick,
  Star, CheckCircle2, Lightbulb,
  LineChart, Layers, Target, Sparkles,
  AreaChart, GitBranch, BookOpen, Zap, Eye, Sliders,
} from 'lucide-react';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

export default function Visualization() {
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
                <BarChart3 className="w-4 h-4" />
                視覺化設計
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">視覺化設計：選擇與操作</h1>
              <p className="text-lg text-muted-foreground">
                Power BI 提供 30+ 種內建視覺效果，加上 AppSource 數百款自訂視覺。
                本頁將完整說明每種視覺效果的適用場景，以及建立與優化視覺效果的實務操作。
              </p>
            </MotionContainer>
          </div>
        </div>

        {/* ── Main Content ─────────────────────────────────────────────────── */}
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">

            {/* 建立步驟 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  實作流程
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-6">建立視覺效果的三個步驟</h2>
              </MotionContainer>

              <div className="space-y-6">
                {[
                  { num: '1', title: '拖曳欄位，Power BI 自動推薦', desc: '從「欄位」窗格拖曳欄位至視覺化窗格，Power BI 會根據欄位類型自動推薦適合的圖表。數值欄位預設柱狀圖，日期欄位預設折線圖，地點欄位則推薦地圖。', color: '#F2C811' },
                  { num: '2', title: '選擇或更換圖表類型', desc: '從 30+ 種內建視覺效果中選擇，或從 AppSource 下載自訂視覺。透過格式面板調整色彩、標籤、標題、背景等屬性，打造符合品牌風格的版面。', color: '#CA8A04' },
                  { num: '3', title: '設定交叉篩選互動 + 下鑽分析', desc: '選取任一視覺中的資料點，所有其他視覺會同步篩選。透過具有階層結構的維度（年→季→月→日）點擊下鑽，或使用分解樹讓 AI 輔助探索。', color: '#eab308' },
                ].map((step, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0" style={{ background: step.color }}>
                        {step.num}
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                    {idx < 2 && <div className="ml-5 pl-0.5 border-l-2 border-border h-6 mt-2 mb-2" />}
                  </MotionContainer>
                ))}
              </div>
            </section>

            {/* 視覺效果類型總覽 — Tabs 切換 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  視覺效果
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">視覺效果類型完整指南</h2>
                <p className="text-muted-foreground mb-8">
                  Power BI 視覺效果分為八大類別，針對不同的資料型態與分析目的而設計。
                  了解每種視覺效果的適用場景，才能選擇最能說明資料故事的呈現方式。
                </p>
              </MotionContainer>

              <Tabs defaultValue="basic" className="w-full">
                <MotionContainer direction="up" delay={0.1}>
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-muted text-muted-foreground">
                    <TabsTrigger value="basic" className="data-[state=active]:bg-background data-[state=active]:text-foreground text-xs sm:text-sm">
                      <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />基礎圖表
                    </TabsTrigger>
                    <TabsTrigger value="part" className="data-[state=active]:bg-background data-[state=active]:text-foreground text-xs sm:text-sm">
                      <PieChart className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />部分與整體
                    </TabsTrigger>
                    <TabsTrigger value="distribution" className="data-[state=active]:bg-background data-[state=active]:text-foreground text-xs sm:text-sm">
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />分布與關係
                    </TabsTrigger>
                    <TabsTrigger value="ai" className="data-[state=active]:bg-background data-[state=active]:text-foreground text-xs sm:text-sm">
                      <BrainCircuit className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />AI 驅動
                    </TabsTrigger>
                  </TabsList>
                </MotionContainer>

                {/* Tab 1: 基礎圖表 */}
                <TabsContent value="basic" className="space-y-6">
                  {[
                    { title: '比較與趨勢圖表', visuals: [
                      { icon: <BarChart3 className="w-5 h-5" />, name: '柱狀圖 / 橫條圖', badge: '基礎', use: '跨類別數值比較；橫條圖適合長類別名稱（如產品名稱）。', badgeColor: '#F2C811' },
                      { icon: <TrendingUp className="w-5 h-5" />, name: '折線圖', badge: '基礎', use: '展示連續時間的趨勢與變化形狀，是 Power BI 預設的日期欄位圖表。', badgeColor: '#CA8A04' },
                      { icon: <AreaChart className="w-5 h-5" />, name: '分區圖', badge: '基礎', use: '填滿折線與軸線之間的區域，強調累積量與變化幅度。', badgeColor: '#eab308' },
                      { icon: <LineChart className="w-5 h-5" />, name: '組合圖', badge: '進階', use: '柱狀圖＋折線圖同時呈現，可比較不同範圍的多個指標（如銷售額與毛利）。', badgeColor: '#f59e0b' },
                    ]},
                    { title: 'KPI 與指標卡片', visuals: [
                      { icon: <Star className="w-5 h-5" />, name: '卡片', badge: '基礎', use: '大字體單一數值，如「總銷售額 NT$12,340,000」，一目了然。', badgeColor: '#F2C811' },
                      { icon: <Gauge className="w-5 h-5" />, name: 'KPI 視覺效果', badge: '基礎', use: '顯示與目標之間的差距與進度百分比，標示「好／尚可／差」三種狀態。', badgeColor: '#CA8A04' },
                      { icon: <Sliders className="w-5 h-5" />, name: '徑向儀表', badge: '進階', use: '指針＋陰影弧線顯示進度，適合單一指標的達成率健康狀態呈現。', badgeColor: '#eab308' },
                      { icon: <Target className="w-5 h-5" />, name: '目標視覺效果', badge: '進階', use: '目標追蹤、狀態燈號與差額顯示，適合組織 OKR 管理與績效儀表板。', badgeColor: '#f59e0b' },
                    ]},
                    { title: '表格與矩陣', visuals: [
                      { icon: <Table2 className="w-5 h-5" />, name: '資料表', badge: '基礎', use: '精確呈現數值，適合需要看到每一筆資料橫向比較的場景。', badgeColor: '#F2C811' },
                      { icon: <Sliders className="w-5 h-5" />, name: '矩陣視覺效果', badge: '進階', use: '階梯式佈局自動彙總，支援任意維度下鑽，是 Power BI 最靈活的樞紐分析工具。', badgeColor: '#CA8A04' },
                    ]},
                    { title: '地圖視覺效果', visuals: [
                      { icon: <MapPin className="w-5 h-5" />, name: '填滿地圖', badge: '基礎', use: '地圖區域依數值填色，適合地理區域（國家、省份、城市）的數值比較。', badgeColor: '#F2C811' },
                      { icon: <MapPin className="w-5 h-5" />, name: '泡泡圖（地圖版）', badge: '基礎', use: '以泡泡大小代表數值大小，適合同時呈現多個地點的覆蓋度與規模。', badgeColor: '#CA8A04' },
                    ]},
                  ].map((group) => (
                    <MotionContainer key={group.title} direction="up">
                      <div className="rounded-xl p-6 border border-border bg-background">
                        <h3 className="text-base font-bold mb-4 text-foreground">{group.title}</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {group.visuals.map((v) => (
                            <HoverScale key={v.name}>
                              <Card className="border-border bg-card h-full">
                                <CardHeader>
                                  <CardTitle className="text-sm flex items-center gap-2 text-card-foreground">
                                    <div className="w-7 h-7 rounded flex items-center justify-center" style={{ backgroundColor: `${v.badgeColor}18`, color: v.badgeColor }}>
                                      {v.icon}
                                    </div>
                                    <span className="font-semibold">{v.name}</span>
                                    <span className="ml-auto text-xs px-2 py-0.5 rounded font-medium" style={{ backgroundColor: `${v.badgeColor}18`, color: v.badgeColor }}>
                                      {v.badge}
                                    </span>
                                  </CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                  {v.use}
                                </CardContent>
                              </Card>
                            </HoverScale>
                          ))}
                        </div>
                      </div>
                    </MotionContainer>
                  ))}
                </TabsContent>

                {/* Tab 2: 部分與整體 */}
                <TabsContent value="part" className="space-y-6">
                  <MotionContainer direction="up">
                    <div className="rounded-xl p-6 border border-border bg-background">
                      <h3 className="text-base font-bold mb-4 text-foreground">部分到整體關係圖表</h3>
                      <p className="text-sm text-muted-foreground mb-6">
                        這類圖表用於了解各個部分如何對總數產生影響，適合展示組成結構與佔比變化的情境。
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { icon: <PieChart className="w-5 h-5" />, name: '圓形圖', badge: '基礎', use: '顯示類別佔整體的比例，適合少於 7 個類別的情境。', badgeColor: '#F2C811' },
                          { icon: <PieChart className="w-5 h-5" />, name: '環圈圖', badge: '基礎', use: '中心空白可放置 KPI 數值，視覺更清爽，適合儀表板設計。', badgeColor: '#CA8A04' },
                          { icon: <Layers className="w-5 h-5" />, name: '樹狀圖', badge: '進階', use: '以巢狀矩形顯示階層資料，適合大量類別的佔比一目了然（如產品分類）。', badgeColor: '#eab308' },
                          { icon: <Sliders className="w-5 h-5" />, name: '漏斗圖', badge: '進階', use: '展示階段性轉換，常用於銷售管道分析，每層的流失率一目了然。', badgeColor: '#f59e0b' },
                          { icon: <Zap className="w-5 h-5" />, name: '瀑布圖', badge: '進階', use: '追蹤正負變動如何累積成最終結果，例如：營收 → 成本 → 利潤的拆解。', badgeColor: '#ca8a04' },
                        ].map((v) => (
                          <HoverScale key={v.name}>
                            <Card className="border-border bg-card h-full">
                              <CardHeader>
                                <CardTitle className="text-sm flex items-center gap-2 text-card-foreground">
                                  <div className="w-7 h-7 rounded flex items-center justify-center" style={{ backgroundColor: `${v.badgeColor}18`, color: v.badgeColor }}>
                                    {v.icon}
                                  </div>
                                  <span className="font-semibold">{v.name}</span>
                                  <span className="ml-auto text-xs px-2 py-0.5 rounded font-medium" style={{ backgroundColor: `${v.badgeColor}18`, color: v.badgeColor }}>
                                    {v.badge}
                                  </span>
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="text-sm text-muted-foreground">
                                {v.use}
                              </CardContent>
                            </Card>
                          </HoverScale>
                        ))}
                      </div>
                    </div>
                  </MotionContainer>
                </TabsContent>

                {/* Tab 3: 分布與關係 */}
                <TabsContent value="distribution" className="space-y-6">
                  <MotionContainer direction="up">
                    <div className="rounded-xl p-6 border border-border bg-background">
                      <h3 className="text-base font-bold mb-4 text-foreground">分布與關係圖表</h3>
                      <p className="text-sm text-muted-foreground mb-6">
                        這類圖表用於了解資料的分佈情形與變數之間的關聯性，適合探索性分析與發現資料中的隱藏模式。
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { icon: <Eye className="w-5 h-5" />, name: '散佈圖', badge: '基礎', use: '顯示兩個數值欄位的交點，揭示相關性與群集，適合探索兩變數之間的關係。', badgeColor: '#F2C811' },
                          { icon: <Zap className="w-5 h-5" />, name: '泡泡圖', badge: '進階', use: '以泡泡大小增加第三維度，適合 X軸、Y軸、泡泡大小三個變數的聯合分析。', badgeColor: '#CA8A04' },
                          { icon: <MousePointerClick className="w-5 h-5" />, name: '點圖', badge: '進階', use: 'X 軸可使用類別資料（不限於數值），適合類別×數值×數值三維分析。', badgeColor: '#eab308' },
                          { icon: <Sliders className="w-5 h-5" />, name: '緞帶圖', badge: '進階', use: '視覺化排名變動，最高值永遠在最上層，適合展示一段時間內的排名消長。', badgeColor: '#f59e0b' },
                        ].map((v) => (
                          <HoverScale key={v.name}>
                            <Card className="border-border bg-card h-full">
                              <CardHeader>
                                <CardTitle className="text-sm flex items-center gap-2 text-card-foreground">
                                  <div className="w-7 h-7 rounded flex items-center justify-center" style={{ backgroundColor: `${v.badgeColor}18`, color: v.badgeColor }}>
                                    {v.icon}
                                  </div>
                                  <span className="font-semibold">{v.name}</span>
                                  <span className="ml-auto text-xs px-2 py-0.5 rounded font-medium" style={{ backgroundColor: `${v.badgeColor}18`, color: v.badgeColor }}>
                                    {v.badge}
                                  </span>
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="text-sm text-muted-foreground">
                                {v.use}
                              </CardContent>
                            </Card>
                          </HoverScale>
                        ))}
                      </div>
                    </div>
                  </MotionContainer>
                </TabsContent>

                {/* Tab 4: AI 驅動 */}
                <TabsContent value="ai" className="space-y-6">
                  <MotionContainer direction="up">
                    <div className="rounded-xl p-6 border border-border" style={{ background: '#FEFCE8', borderColor: '#CA8A04' }}>
                      <div className="flex items-center gap-2 mb-1">
                        <BrainCircuit className="w-4 h-4" style={{ color: '#CA8A04' }} />
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#CA8A04' }}>AI 驅動</span>
                      </div>
                      <h3 className="text-base font-bold mb-2 text-foreground">不需要任何設定，AI 幫你自動探索洞察</h3>
                      <p className="text-sm text-muted-foreground mb-6">
                        不需要寫任何 DAX 或建立複雜模型，AI 視覺效果會自動分析資料並找出有意義的模式。
                        非常適合剛接觸資料探索的使用者，快速建立對資料的直覺理解。
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { icon: <GitBranch className="w-5 h-5" />, name: '分解樹', badge: 'AI', use: '任意維度下鑽，AI 自動偵測下一個最有價值的探索方向，快速找出影響 KPI 的關鍵因素。', badgeColor: '#F2C811' },
                          { icon: <Target className="w-5 h-5" />, name: '關鍵影響因數', badge: 'AI', use: '自動分析哪些因素對目標指標影響最大，結果以文字與圖表並茂呈現。', badgeColor: '#CA8A04' },
                          { icon: <BookOpen className="w-5 h-5" />, name: '智慧敘事', badge: 'AI', use: '自動為圖表產生文字摘要，例如：「總銷售額較上月成長 12%，主要受北部地區驅動。」', badgeColor: '#eab308' },
                          { icon: <Sparkles className="w-5 h-5" />, name: '異常偵測', badge: 'AI', use: '自動在折線圖上標記異常的峰值與低谷，Power BI 會根據歷史資料自動學習正常範圍。', badgeColor: '#f59e0b' },
                        ].map((v) => (
                          <HoverScale key={v.name}>
                            <Card className="border-border bg-card h-full">
                              <CardHeader>
                                <CardTitle className="text-sm flex items-center gap-2 text-card-foreground">
                                  <div className="w-7 h-7 rounded flex items-center justify-center" style={{ backgroundColor: `${v.badgeColor}18`, color: v.badgeColor }}>
                                    {v.icon}
                                  </div>
                                  <span className="font-semibold">{v.name}</span>
                                  <span className="ml-auto text-xs px-2 py-0.5 rounded font-medium" style={{ backgroundColor: `${v.badgeColor}18`, color: v.badgeColor }}>
                                    {v.badge}
                                  </span>
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="text-sm text-muted-foreground">
                                {v.use}
                              </CardContent>
                            </Card>
                          </HoverScale>
                        ))}
                      </div>
                    </div>
                  </MotionContainer>
                </TabsContent>
              </Tabs>
            </section>

            {/* 視覺化設計原則 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  實務原則
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-6">視覺化設計原則</h2>
              </MotionContainer>

              <div className="space-y-4">
                {[
                  { icon: <CheckCircle2 className="w-4 h-4" />, title: '選擇正確的圖表類型', desc: '根據資料型態與目的選擇視覺效果：類別比較用柱狀圖，趨勢用折線圖，比例用圓形圖，分布用散佈圖。錯誤的圖表選擇會讓資料故事說錯方向。', color: '#F2C811' },
                  { icon: <CheckCircle2 className="w-4 h-4" />, title: '限制每個視覺的欄位數量', desc: '微軟建議將每個視覺效果的欄位控制在 10–20 個以內。過多欄位不只影響效能，也會降低可讀性。', color: '#CA8A04' },
                  { icon: <CheckCircle2 className="w-4 h-4" />, title: '利用交叉篩選與交叉高亮', desc: 'Power BI 視覺效果之間會自動互相影響。選取任一視覺中的某一筆，所有報表視覺會同步篩選到該類別。', color: '#eab308' },
                  { icon: <CheckCircle2 className="w-4 h-4" />, title: '使用條件格式突顯重要資料', desc: '背景、字型顏色、圖示都可以根據欄位值自動變化。例如：利潤率超過 20% 顯示綠色，低於 0% 顯示紅色。', color: '#f59e0b' },
                ].map((tip, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.08}>
                    <div className="p-5 rounded-lg border bg-card" style={{ borderLeft: `3px solid ${tip.color}` }}>
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-0.5" style={{ color: tip.color }}>{tip.icon}</div>
                        <div>
                          <h3 className="font-semibold text-foreground text-sm mb-1">{tip.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{tip.desc}</p>
                        </div>
                      </div>
                    </div>
                  </MotionContainer>
                ))}
              </div>
            </section>

            {/* 互動功能 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  互動功能
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">視覺效果之間的互動功能</h2>
                <p className="text-muted-foreground mb-8">
                  Power BI 視覺效果之間的互動是它與靜態 Excel 圖表最大的區別。
                  當你在任一視覺中選取資料，所有相關視覺會同步響應，讓讀者以自己的方式探索資料。
                </p>
              </MotionContainer>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: <MousePointerClick className="w-5 h-5" />, title: '交叉篩選（Cross-Filter）', desc: '選取某個視覺中的資料點，其他視覺會自動篩選到該範圍。例如：點擊北部地區柱狀圖，所有折線圖、矩陣、地圖都只看北部資料。', color: '#F2C811' },
                  { icon: <Layers className="w-5 h-5" />, title: '交叉高亮（Cross-Highlight）', desc: '只淡化（而非移除）非選取範圍，保持整體上下文可見。適合需要同時看到總體與局部的分析情境。', color: '#CA8A04' },
                  { icon: <TrendingUp className="w-5 h-5" />, title: '下鑽分析（Drill-Down）', desc: '具有階層結構的維度（年→季→月→日）可以點擊層層深入。矩陣視覺支援任意維度的下鑽，分解樹則由 AI 輔助最佳下鑽路徑。', color: '#eab308' },
                  { icon: <Star className="w-5 h-5" />, title: '書籤導航（Bookmarks）', desc: '將報表的不同狀態（特定篩選組合、視覺可見性）儲存為書籤，用按鈕控制讀者的視圖，創造引導式閱讀體驗。', color: '#f59e0b' },
                  { icon: <Filter className="w-5 h-5" />, title: '切片器（Slicer）', desc: '在報表中放置切片器控制項，提供日期範圍、類別清單、按鈕式等多種形式，讓讀者自行篩選感興趣的資料視圖。', color: '#ca8a04' },
                  { icon: <LineChart className="w-5 h-5" />, title: '視覺化層級計算', desc: '在視覺化層級直接建立 DAX 計算（如移動平均、累計總量、總數百分比），不需要理解複雜的篩選上下文。', color: '#a16207' },
                ].map((item, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.06}>
                    <Card className="border-border bg-card h-full">
                      <CardHeader>
                        <CardTitle className="text-sm flex items-center gap-2 text-card-foreground">
                          <div className="w-7 h-7 rounded flex items-center justify-center shrink-0" style={{ backgroundColor: `${item.color}18`, color: item.color }}>
                            {item.icon}
                          </div>
                          <span className="font-semibold">{item.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground">
                        {item.desc}
                      </CardContent>
                    </Card>
                  </MotionContainer>
                ))}
              </div>
            </section>

            {/* 提示框 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div className="rounded-xl p-6 border-l-4" style={{ background: '#FEFCE8', borderColor: '#CA8A04' }}>
                  <div className="flex gap-4">
                    <Lightbulb className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#CA8A04' }} />
                    <div>
                      <p className="font-semibold text-foreground mb-1">視覺化設計的第一個原則</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        「圖表是手段，洞察是目的。」在新增任何視覺效果之前，先問自己：「這張圖表要回答什麼問題？」
                        如果答案不明確，寧可少放一張圖也不要放一張讓人困惑的圖。
                        一份好的 Power BI 報表，通常每個頁面不超過 4–6 個視覺效果，留白與呼吸空間同樣重要。
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
                  <BarChart3 className="w-6 h-6" style={{ color: '#1a1a1a' }} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">掌握視覺化，繼續實戰應用</h3>
                <p className="text-muted-foreground mb-6">
                  視覺效果只是表面，真正支撐分析能力的是底層的資料模型與 DAX 計算，
                  以及將所有技能整合到實際工作情境中的能力。
                </p>
                <Link href="/concepts/data-modeling">
                  <HoverScale>
                    <Button size="lg" className="font-semibold" style={{ background: '#F2C811', color: '#1a1a1a', border: 'none' }}>
                      前往資料建模
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
