import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowRight, CheckCircle2, Lightbulb,
  Database, Zap, BarChart3, Share2,
  RefreshCw, Merge, SplitSquareHorizontal,
  GitBranch, Filter, Layers, Table2, Sigma,
} from 'lucide-react';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

export default function CoreConcepts() {
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
                核心概念
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                四步掌握 Power BI
              </h1>
              <p className="text-lg text-muted-foreground">
                從連接資料、清理轉換、建立模型到使用 DAX 撰寫公式 —
                這四個核心技能是建立任何 Power BI 解決方案的基礎。
              </p>
            </MotionContainer>
          </div>
        </div>

        {/* ── Main Content ─────────────────────────────────────────────────── */}
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">

            {/* 四個步驟 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  完整工作流程
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">建立 Power BI 報表的四個步驟</h2>
                <p className="text-muted-foreground mb-8">
                  每個步驟環環相扣，正確掌握每個環節，才能建立出高效且值得信賴的 Power BI 語意模型。
                </p>
              </MotionContainer>

              <div className="space-y-6">
                {[
                  { num: '1', title: '連接與取得資料', desc: '從超過 250 個資料來源將資料載入 Power BI Desktop，涵蓋資料庫、雲端服務、檔案與 Web API。', color: '#F2C811' },
                  { num: '2', title: '使用 Power Query 轉換資料', desc: '清理、合併與塑造資料，使用 Power Query（M 語言）以視覺化方式處理，不修改原始來源。', color: '#CA8A04' },
                  { num: '3', title: '建立資料模型與關聯', desc: '定義資料表之間的關聯性，遵循星型架構建立維度表與事實表，讓資料能被正確彙總與分析。', color: '#eab308' },
                  { num: '4', title: '使用 DAX 建立計算', desc: '以 DAX 公式建立量值與計算欄，處理複雜的商業邏輯與時間智慧分析，讓報表真正說故事。', color: '#f59e0b' },
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

            {/* 步驟一：取得資料 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  步驟一
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">取得資料</h2>
                <p className="text-muted-foreground mb-8">
                  Power BI Desktop 支援超過 250 個原生連接器，涵蓋資料庫、雲端服務、線上服務、檔案等多種來源類型。
                </p>
              </MotionContainer>

              <MotionContainer direction="up" delay={0.1}>
                <div className="rounded-xl p-6 border border-border bg-background">
                  <h3 className="text-base font-bold mb-4 text-foreground">常見資料連接器分類</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { group: '資料庫', items: ['SQL Server', 'MySQL / PostgreSQL', 'Oracle', 'Azure SQL Database'], color: '#F2C811' },
                      { group: '雲端資料倉儲', items: ['Azure Data Lake', 'Google BigQuery', 'Snowflake', 'Amazon Redshift'], color: '#CA8A04' },
                      { group: '檔案與資料夾', items: ['Excel (.xlsx)', 'CSV / Text', 'JSON / XML', 'SharePoint 資料夾'], color: '#eab308' },
                      { group: 'Microsoft 生態系', items: ['SharePoint Online', 'OneDrive for Business', 'Dynamics 365', 'Microsoft Teams'], color: '#f59e0b' },
                      { group: '企業應用程式', items: ['Salesforce', 'SAP', 'SAP OData', 'HubSpot'], color: '#ca8a04' },
                      { group: 'Web 與分析平台', items: ['Web 網頁', 'Google Analytics', 'Facebook', 'OData / REST API'], color: '#a16207' },
                    ].map((cat) => (
                      <div key={cat.group} className="p-4 bg-muted/50 border border-border rounded-lg">
                        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: cat.color }}>
                          {cat.group}
                        </p>
                        {cat.items.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground py-0.5">
                            <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: cat.color, opacity: 0.6 }} />
                            {item}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </MotionContainer>
            </section>

            {/* 步驟二：轉換資料 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  步驟二
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">轉換資料（Power Query）</h2>
                <p className="text-muted-foreground mb-8">
                  Power Query 是 Power BI 內建的 ETL 工具，使用 M 語言讓您能以視覺化方式清理、塑造與合併多個來源的資料，且不修改原始來源。
                </p>
              </MotionContainer>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: <SplitSquareHorizontal className="w-5 h-5" />, title: '欄位拆分與合併', desc: '將「姓名」拆成「名」與「姓」兩欄，或將多欄合併成單一欄位，用於標準化資料格式。', color: '#F2C811' },
                  { icon: <RefreshCw className="w-5 h-5" />, title: '類型轉換與格式化', desc: '將文字轉換為數字或日期、統一格式（如「2024/1/15」與「Jan 15, 2024」），確保模型能正確彙總。', color: '#CA8A04' },
                  { icon: <Merge className="w-5 h-5" />, title: '附加查詢與交叉合併', desc: '附加查詢將多個結構相同的資料表垂直合併；交叉合併則用於對照表，查詢時再與事實表關聯。', color: '#eab308' },
                  { icon: <Filter className="w-5 h-5" />, title: '條件式資料清理', desc: '使用自訂資料行依條件替換或移除異常值，例如將負數庫存設為 0，或標記低於門檻的銷售記錄。', color: '#f59e0b' },
                  { icon: <GitBranch className="w-5 h-5" />, title: '分組與聚合', desc: '將多筆相似記錄合併為分組，並計算各組的總和、平均、計數等彙總值，減少模型大小。', color: '#ca8a04' },
                  { icon: <Table2 className="w-5 h-5" />, title: '資料剖析（Profiling）', desc: '使用「資料剖析」功能自動分析每個欄位的分佈情形，快速發現空值、錯誤值和異常資料。', color: '#a16207' },
                ].map((op, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.08}>
                    <Card className="border-border bg-card h-full">
                      <CardHeader>
                        <CardTitle className="text-sm flex items-center gap-2 text-card-foreground">
                          <div className="w-7 h-7 rounded flex items-center justify-center shrink-0" style={{ backgroundColor: `${op.color}18`, color: op.color }}>
                            {op.icon}
                          </div>
                          <span className="font-semibold">{op.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground">
                        {op.desc}
                      </CardContent>
                    </Card>
                  </MotionContainer>
                ))}
              </div>

              <MotionContainer direction="up" delay={0.3}>
                <div className="mt-6 rounded-xl p-5 border-l-4" style={{ background: '#FEFCE8', borderColor: '#CA8A04' }}>
                  <div className="flex gap-4">
                    <Lightbulb className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#CA8A04' }} />
                    <div>
                      <p className="font-semibold text-foreground mb-1 text-sm">Power Query 資料剖析工具</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        取得資料後，Power Query 編輯器的「資料剖析」窗格會自動分析每個欄位的分佈情形，幫助你快速發現空值、錯誤值和異常資料。
                      </p>
                    </div>
                  </div>
                </div>
              </MotionContainer>
            </section>

            {/* 步驟三：建立資料模型 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  步驟三
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">建立資料模型</h2>
                <p className="text-muted-foreground mb-8">
                  語意模型是 Power BI 報表的核心。星型架構（Star Schema）是最推薦的建模方式 —
                  中心是包含數值的事實資料表，周圍是以維度鍵關聯的維度資料表。
                </p>
              </MotionContainer>

              <MotionContainer direction="up" delay={0.1}>
                <div className="rounded-xl p-6 border border-border bg-background mb-6">
                  <h3 className="text-base font-bold mb-4 text-foreground">語意模型核心概念</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { icon: <Layers className="w-5 h-5" />, title: '維度資料表', desc: '描述商務實體的資料表，用於篩選與群組資料。通常資料列數較少，但欄位結構複雜。', color: '#F2C811' },
                      { icon: <Sigma className="w-5 h-5" />, title: '事實資料表', desc: '儲存觀察事件或交易的資料表。包含維度鍵欄（用於關聯）與數值量值欄（用於彙總）。', color: '#CA8A04' },
                      { icon: <BarChart3 className="w-5 h-5" />, title: '星型結構', desc: '中心為事實資料表，周圍為維度資料表。是 Power BI 語意模型的最佳實踐，確保查詢效能穩定。', color: '#eab308' },
                    ].map((item) => (
                      <HoverScale key={item.title}>
                        <Card className="border-border bg-card h-full">
                          <CardHeader>
                            <CardTitle className="text-sm flex items-center gap-2 text-card-foreground">
                              <div className="w-7 h-7 rounded flex items-center justify-center shrink-0" style={{ backgroundColor: `${item.color}18`, color: item.color }}>
                                {item.icon}
                              </div>
                              <span className="font-semibold text-xs">{item.title}</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm text-muted-foreground">
                            {item.desc}
                          </CardContent>
                        </Card>
                      </HoverScale>
                    ))}
                  </div>
                </div>
              </MotionContainer>

              <MotionContainer direction="up" delay={0.2}>
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-base font-bold mb-4 text-foreground">關聯性基數類型</h3>
                  <div className="space-y-3">
                    {[
                      { label: '一對多（1:*）', desc: '維度表的鍵是唯一的，事實表可重複。最常見的關聯類型。', color: '#F2C811' },
                      { label: '多對一（*:1）', desc: '與一對多相同，只是方向相反。Power BI 會自動偵測。', color: '#CA8A04' },
                      { label: '一對一（1:1）', desc: '兩個資料表的鍵都唯一。通常代表設計問題，建議合併資料表。', color: '#f59e0b' },
                      { label: '多對多（*:*）', desc: '兩個資料表都可包含重複鍵。用於複雜情境如學生與課程的對應。', color: '#ca8a04' },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-3 items-start">
                        <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: item.color }} />
                        <div>
                          <span className="text-sm font-semibold text-foreground">{item.label}</span>
                          <span className="text-sm text-muted-foreground"> — {item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </MotionContainer>
            </section>

            {/* 步驟四：DAX 公式 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  步驟四
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">使用 DAX 公式</h2>
                <p className="text-muted-foreground mb-8">
                  DAX（Data Analysis Expressions）是 Power BI 的公式語言，用於建立量值與計算欄。與 Excel 公式相似，但專為處理關聯性資料而設計。
                </p>
              </MotionContainer>

              <Tabs defaultValue="measure" className="w-full">
                <MotionContainer direction="up" delay={0.1}>
                  <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted text-muted-foreground">
                    <TabsTrigger value="measure" className="data-[state=active]:bg-background data-[state=active]:text-foreground text-xs sm:text-sm">
                      <Sigma className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      量值與計算欄
                    </TabsTrigger>
                    <TabsTrigger value="function" className="data-[state=active]:bg-background data-[state=active]:text-foreground text-xs sm:text-sm">
                      <Layers className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      常用函數
                    </TabsTrigger>
                  </TabsList>
                </MotionContainer>

                <TabsContent value="measure" className="space-y-6">
                  <MotionContainer direction="up">
                    <div className="rounded-xl p-6 border border-border bg-background">
                      <h3 className="text-base font-bold mb-4 text-foreground">量值 vs 計算欄：何時使用哪一個？</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          {
                            icon: <Sigma className="w-5 h-5" />,
                            title: '量值（Measure）',
                            points: ['動態計算，隨報表篩選上下文改變結果', '不佔用模型儲存空間（以公式儲存）', '適合所有彙總：總和、平均、計數、最大最小值'],
                            color: '#F2C811',
                          },
                          {
                            icon: <Table2 className="w-5 h-5" />,
                            title: '計算欄（Calculated Column）',
                            points: ['對每一列進行計算，結果寫入資料表', '增加模型大小（結果會實際儲存）', '適合需要在每一列顯示的靜態值'],
                            color: '#CA8A04',
                          },
                        ].map((item) => (
                          <HoverScale key={item.title}>
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
                                <div className="space-y-2">
                                  {item.points.map((p) => (
                                    <div key={p} className="flex items-start gap-2">
                                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: item.color }} />
                                      <span>{p}</span>
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          </HoverScale>
                        ))}
                      </div>
                    </div>
                  </MotionContainer>

                  <MotionContainer direction="up">
                    <div className="border border-border rounded-xl p-6">
                      <h3 className="text-base font-bold mb-4 text-foreground">常見 DAX 公式範例</h3>
                      <div className="space-y-4">
                        {[
                          { name: '總銷售額（量值）', formula: 'Total Sales = SUM(Sales[SalesAmount])', note: '最基本的彙總量值，加總 SalesAmount 欄的所有值。', color: '#F2C811' },
                          { name: '利潤（計算欄）', formula: '利潤 = Sales[銷售金額] - Sales[成本]', note: '對每一列進行計算，結果存入資料表。', color: '#CA8A04' },
                          { name: '北部銷售額（量值）', formula: '北部銷售 = CALCULATE(SUM(Sales[金額]), Sales[區域] = "北部")', note: '使用 CALCULATE 覆寫篩選上下文，只加總北部地區的銷售額。', color: '#eab308' },
                          { name: 'YoY 同比增長（量值）', formula: 'YoY 增長 = DIVIDE(...)', note: '時間智慧函數：計算與去年同期相比的營收成長率。', color: '#f59e0b' },
                        ].map((ex) => (
                          <div key={ex.name} className="p-4 bg-muted/50 rounded-lg border border-border">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 rounded-full shrink-0" style={{ background: ex.color }} />
                              <span className="font-semibold text-sm text-foreground">{ex.name}</span>
                            </div>
                            <code className="block text-xs text-muted-foreground bg-background px-3 py-2 rounded mb-2 font-mono overflow-x-auto">
                              {ex.formula}
                            </code>
                            <p className="text-xs text-muted-foreground">{ex.note}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </MotionContainer>
                </TabsContent>

                <TabsContent value="function" className="space-y-6">
                  <MotionContainer direction="up">
                    <div className="rounded-xl p-6 border border-border bg-background">
                      <h3 className="text-base font-bold mb-4 text-foreground">DAX 核心函數</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { icon: <Sigma className="w-5 h-5" />, title: '彙總函數', desc: 'SUM、AVERAGE、COUNT、MAX、MIN 等，用於對數值欄位執行基本彙總計算。', color: '#F2C811' },
                          { icon: <Layers className="w-5 h-5" />, title: 'CALCULATE 函數', desc: 'DAX 最核心的函數，用於覆寫或修改篩選上下文。例如：只加總北部地區的銷售額。', color: '#CA8A04' },
                          { icon: <Filter className="w-5 h-5" />, title: '篩選函數', desc: 'FILTER、ALL、ALLEXCEPT、REMOVEFILTERS，用於在公式中手動控制篩選範圍。', color: '#eab308' },
                          { icon: <GitBranch className="w-5 h-5" />, title: '時間智慧函數', desc: 'PREVIOUSQUARTER、SAMEPERIODLASTYEAR、DATESYTD，用於處理日期相關的動態計算。', color: '#f59e0b' },
                        ].map((item) => (
                          <Card key={item.title} className="border-border bg-card h-full">
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
                        ))}
                      </div>
                    </div>
                  </MotionContainer>

                  <MotionContainer direction="up" delay={0.2}>
                    <div className="rounded-xl p-6 border border-border" style={{ background: '#FEFCE8' }}>
                      <h3 className="text-base font-bold mb-3 text-foreground">CALCULATE 的使用時機</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        CALCULATE 是 DAX 最核心也最強大的函數。它的作用是：<strong className="text-foreground">在現有篩選上下文的基礎上，加上或移除額外的篩選條件。</strong>
                        當你需要「只計算某一年的總和」或「排除某個類別」時，就需要 CALCULATE。
                        基本語法：`CALCULATE( 要計算的公式, 篩選條件1, 篩選條件2, ... )`
                      </p>
                    </div>
                  </MotionContainer>
                </TabsContent>
              </Tabs>
            </section>

            {/* 建模防雷建議 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  實務經驗
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-6">建模防雷建議</h2>
              </MotionContainer>

              <div className="space-y-4">
                {[
                  { icon: <CheckCircle2 className="w-4 h-4" />, title: 'Power BI 不是 Excel', desc: '不要用「儲存格對儲存格相加」的邏輯操作它。Power BI 是基於資料庫邏輯運作的，資料表之間靠「關聯」而非公式格子互相影響。', color: '#F2C811' },
                  { icon: <CheckCircle2 className="w-4 h-4" />, title: '先把星型結構想清楚', desc: '建立報表之前，先規劃好維度表與事實表的關聯性。星型結構想清楚了，後續拉視覺效果的效能和正確性才有保障。', color: '#CA8A04' },
                  { icon: <CheckCircle2 className="w-4 h-4" />, title: '數字對不上？先檢查模型', desc: '遇到數值異常時，先檢查維度表是否正確關聯，再檢查量值的彙總邏輯，最後才懷疑原始資料。大多數數值問題的根源都在模型層。', color: '#eab308' },
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

            {/* 提示框 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div className="rounded-xl p-6 border-l-4" style={{ background: '#FEFCE8', borderColor: '#CA8A04' }}>
                  <div className="flex gap-4">
                    <Lightbulb className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#CA8A04' }} />
                    <div>
                      <p className="font-semibold text-foreground mb-1">四個步驟，缺一不可</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        取得資料 → Power Query 清理 → 建立模型 → DAX 計算 —
                        這四個步驟構成 Power BI 的完整工作流程。不要跳過前面的步驟直接做報表，
                        因為前面的基礎沒打好，後面的視覺效果和數值都會出問題。
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
                <h3 className="text-xl font-bold text-foreground mb-4">掌握核心概念，繼續深入學習</h3>
                <p className="text-muted-foreground mb-6">
                  有了四個步驟的完整理解，接下來可以深入視覺化設計、資料建模或 DAX 進階技巧。
                </p>
                <Link href="/concepts/visualization">
                  <HoverScale>
                    <Button size="lg" className="font-semibold" style={{ background: '#F2C811', color: '#1a1a1a', border: 'none' }}>
                      前往視覺化設計
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
