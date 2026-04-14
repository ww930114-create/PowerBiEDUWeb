import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowRight, CheckCircle2, Lightbulb, Database, Link2,
  GitBranch, Clock, Layers, Zap, Sigma, Table2, Network, BarChart3,
} from 'lucide-react';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

export default function DataModeling() {
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
                <Database className="w-4 h-4" />
                資料建模
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                資料建模：從結構到計算
              </h1>
              <p className="text-lg text-muted-foreground">
                星型架構、表格關聯性、DAX 語法 — 掌握這三個核心概念，
                才能建立高效且值得信賴的 Power BI 分析模型。
              </p>
            </MotionContainer>
          </div>
        </div>

        {/* ── Main Content ─────────────────────────────────────────────────── */}
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">

            {/* 建立模型三步驟 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  完整工作流程
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">建立資料模型的三個步驟</h2>
                <p className="text-muted-foreground mb-8">
                  從資料整理到公式建立，Power BI 建模的完整工作流程分為三個主要階段。
                </p>
              </MotionContainer>

              <div className="space-y-6">
                {[
                  { num: '1', title: '整理並載入資料表', desc: '使用 Power Query 將資料來源轉換成多個正規化資料表。遵循星型架構原則，分離事實資料表與維度資料表。', color: '#F2C811' },
                  { num: '2', title: '建立資料表之間的關聯', desc: '在 Power BI Desktop 模型檢視中，建立資料表之間的關聯性。Power BI 會自動偵測基數（一對多、多對多等），您也可以手動調整交叉篩選方向。', color: '#CA8A04' },
                  { num: '3', title: '建立量值與計算欄', desc: '使用 DAX 公式建立量值（動態計算）和計算欄（每列固定值）。量值用於摘要，計算欄用於維度屬性或複雜判斷邏輯。', color: '#eab308' },
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

            {/* 星型架構 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  星型架構
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">星型架構（Star Schema）</h2>
                <p className="text-muted-foreground mb-8">
                  星型架構是關聯式資料倉儲廣泛採用的成熟建模方法。
                  Power BI 語意模型的查詢特性（篩選→分組→摘要）與星型架構的設計原則高度吻合。
                </p>
              </MotionContainer>

              <MotionContainer direction="up" delay={0.1}>
                <div className="rounded-xl p-6 border border-border bg-background mb-6">
                  <h3 className="text-base font-bold mb-4 text-foreground">維度 vs 事實：兩種資料表的角色</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { icon: <Table2 className="w-5 h-5" />, title: '維度資料表', desc: '描述商務實體，用於篩選與群組資料。通常資料列數少但欄位多（描述性）。', color: '#F2C811' },
                      { icon: <Sigma className="w-5 h-5" />, title: '事實資料表', desc: '儲存觀察事件，包含維度鍵欄與數值量值欄，用於彙總。', color: '#CA8A04' },
                      { icon: <BarChart3 className="w-5 h-5" />, title: '星型結構', desc: '中心為事實資料表，周圍為維度資料表。是 Power BI 語意模型的最佳實踐。', color: '#eab308' },
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
                <div className="rounded-xl p-6 border-l-4" style={{ background: '#FEFCE8', borderColor: '#CA8A04' }}>
                  <div className="flex gap-4">
                    <Lightbulb className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#CA8A04' }} />
                    <div>
                      <p className="font-semibold text-foreground mb-1">正規化與反正規化</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        正規化是將資料分散到多個資料表以減少重複。反正規化則是將詳細資料直接存入事實表。
                        Power BI 中，建議以正規化資料表載入，再合併成單一反正規化模型資料表（用於維度），以獲得最佳查詢效能。
                      </p>
                    </div>
                  </div>
                </div>
              </MotionContainer>
            </section>

            {/* 表格關聯性 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  關聯性
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">表格關聯性（Relationships）</h2>
                <p className="text-muted-foreground mb-8">
                  模型關聯性會將一個資料表的欄位上套用的篩選條件傳播至另一個資料表。
                  關聯性的四個屬性決定了篩選如何流動。
                </p>
              </MotionContainer>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: <Network className="w-5 h-5" />, title: '基數（Cardinality）', desc: '決定一對多、多對一、一對一或多對多四種關聯類型。Power BI 會自動偵測，多對多需要手動設定。', color: '#F2C811' },
                  { icon: <Link2 className="w-5 h-5" />, title: '交叉篩選方向', desc: '單向表示從「一」端傳到「多」端；雙向表示兩邊可互相影響。雙向關聯可能造成效能問題與路徑歧義，應盡量避免。', color: '#CA8A04' },
                  { icon: <Zap className="w-5 h-5" />, title: '作用中 vs 非作用中關聯', desc: '兩個資料表之間只能有一個作用中關聯，其餘必須設為非作用中。可透過 USERELATIONSHIP 在特定計算中啟用。', color: '#eab308' },
                  { icon: <CheckCircle2 className="w-5 h-5" />, title: '假設參考完整性', desc: '啟用時，Power BI 會用 INNER JOIN 代替 OUTER JOIN，提高查詢效能。當「多」端不包含空值且資料完整性良好時，建議啟用。', color: '#f59e0b' },
                ].map((item, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.08}>
                    <Card className="border-border bg-card h-full">
                      <CardHeader>
                        <CardTitle className="text-sm flex items-start gap-2 text-card-foreground">
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

              <MotionContainer direction="up">
                <div className="rounded-xl p-6 border border-border bg-background">
                  <h3 className="text-base font-bold mb-4 text-foreground">基數類型快速參照</h3>
                  <div className="space-y-3">
                    {[
                      { label: '一對多（1:*）', desc: '維度表的鍵是唯一的，事實表可重複。最常見的關聯類型。', color: '#F2C811' },
                      { label: '多對一（*:1）', desc: '與一對多相同，只是方向相反。Power BI 會自動偵測。', color: '#CA8A04' },
                      { label: '一對一（1:1）', desc: '兩個資料表的鍵都唯一。通常代表設計問題，建議合併資料表。', color: '#f59e0b' },
                      { label: '多對多（*:*）', desc: '兩個資料表都可包含重複鍵。用於複雜情境如銷售目標與產品類別的對應。', color: '#ca8a04' },
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

            {/* 特殊維度類型 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  進階維度
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">特殊的維度類型</h2>
                <p className="text-muted-foreground mb-8">
                  除了基本的維度與事實資料表之外，實務上還有多種特殊的維度設計模式，用於處理複雜的商業情境。
                </p>
              </MotionContainer>

              <div className="space-y-4">
                {[
                  { icon: <GitBranch className="w-5 h-5" />, title: '雪花維度（Snowflake Dimension）', desc: '將正規化的多個資料表保留為多個資料表。Power BI 中建議合併為單一反正規化資料表，可定義階層並減少關聯路徑長度。', color: '#F2C811' },
                  { icon: <Clock className="w-5 h-5" />, title: '角色扮演維度（Role-Playing）', desc: '同一個維度在不同情境下扮演不同角色。例如：日期維度可同時用於訂單日期、出貨日期、到貨日期。建立多個資料表副本或使用 USERELATIONSHIP 來處理。', color: '#CA8A04' },
                  { icon: <Layers className="w-5 h-5" />, title: '垃圾維度（Junk Dimension）', desc: '將許多小維度屬性（狀態、性別、年齡層等）合併成單一維度，目的是減少模型資料表數量並降低儲存大小。', color: '#eab308' },
                  { icon: <Zap className="w-5 h-5" />, title: '退化維度（Degenerate Dimension）', desc: '將事實資料表中需要用於篩選的屬性（例如訂單編號）保留在事實資料表中，而非另外建立獨立維度資料表。可避免增加資料表數量與關聯路徑複雜度。', color: '#f59e0b' },
                  { icon: <Clock className="w-5 h-5" />, title: '緩時變維度（SCD）', desc: '當維度屬性隨時間變化時，Type 1 會覆寫最新值（適用於聯絡資訊），Type 2 會保留歷史版本（適用於銷售區域變動）。Type 2 需要代理鍵與日期範圍欄位。', color: '#ca8a04' },
                ].map((dim, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.07}>
                    <div className="p-5 rounded-lg border bg-card">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${dim.color}18`, color: dim.color }}>
                          {dim.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground text-sm mb-1">{dim.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{dim.desc}</p>
                        </div>
                      </div>
                    </div>
                  </MotionContainer>
                ))}
              </div>
            </section>

            {/* DAX 基礎 — Tabs */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  DAX 語法
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">DAX 語法與核心概念</h2>
                <p className="text-muted-foreground mb-8">
                  DAX（Data Analysis Expressions）是 Power BI 用於建立量值、計算欄和計算資料表的公式語言。
                  掌握語法、函數與上下文，是建立強大模型的關鍵。
                </p>
              </MotionContainer>

              <Tabs defaultValue="basics" className="w-full">
                <MotionContainer direction="up" delay={0.1}>
                  <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted text-muted-foreground">
                    <TabsTrigger value="basics" className="data-[state=active]:bg-background data-[state=active]:text-foreground text-xs sm:text-sm">
                      <Sigma className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      量值與計算欄
                    </TabsTrigger>
                    <TabsTrigger value="context" className="data-[state=active]:bg-background data-[state=active]:text-foreground text-xs sm:text-sm">
                      <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      上下文概念
                    </TabsTrigger>
                  </TabsList>
                </MotionContainer>

                <TabsContent value="basics" className="space-y-6">
                  <MotionContainer direction="up">
                    <div className="rounded-xl p-6 border border-border bg-background">
                      <h3 className="text-base font-bold mb-4 text-foreground">量值、計算欄與計算資料表的使用時機</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { icon: <Sigma className="w-5 h-5" />, title: '量值（Measure）', desc: '動態計算，隨報表篩選上下文改變結果。不佔用模型儲存空間。適合所有彙總：總和、平均、計數、最大最小值。', color: '#F2C811' },
                          { icon: <Table2 className="w-5 h-5" />, title: '計算欄（Calculated Column）', desc: '對每一列進行計算，結果寫入資料表。增加模型大小（結果會實際儲存）。適合需要在每一列顯示的靜態值。', color: '#CA8A04' },
                          { icon: <Database className="w-5 h-5" />, title: '計算資料表（Calculated Table）', desc: '以 DAX 公式建立的資料表。適合用於角色扮演維度（建立多個日期資料表副本）或建立特定條件的資料子集。', color: '#eab308' },
                          { icon: <Layers className="w-5 h-5" />, title: 'CALCULATE 函數', desc: 'DAX 最核心也最強大的函數。用於覆寫或修改篩選上下文。例如：只加總北部地區的銷售額。', color: '#f59e0b' },
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
                                {item.desc}
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
                          { name: '含稅銷售額（量值）', formula: 'Total w/ Tax = [Total Sales] * 1.1', note: '引用另一個量值進行計算，DAX 公式可互相參照。', color: '#CA8A04' },
                          { name: '類別名稱（計算欄）', formula: 'Category Label = [Calendar Year] & " Q" & [Calendar Quarter]', note: '將兩個文字欄串接，產生「2023 Q1」的格式。', color: '#eab308' },
                          { name: '上一季銷售（量值）', formula: 'Prev Quarter Sales = CALCULATE([Total Sales], PREVIOUSQUARTER(Calendar[DateKey]))', note: '使用 CALCULATE 加上時間智慧函數回溯上一季。', color: '#f59e0b' },
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

                <TabsContent value="context" className="space-y-6">
                  <MotionContainer direction="up">
                    <div className="rounded-xl p-6 border border-border" style={{ background: '#FEFCE8', borderColor: '#CA8A04' }}>
                      <h3 className="text-base font-bold mb-3 text-foreground">什麼是上下文（Context）？</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        上下文是 DAX 最核心也最難理解的概念。不同的上下文會讓相同的公式產生完全不同的結果。
                        DAX 有兩種主要上下文：列上下文和篩選上下文。
                      </p>
                    </div>
                  </MotionContainer>

                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: <Layers className="w-5 h-5" />, title: '列上下文（Row Context）', desc: '公式在資料表的目前資料列上執行。計算欄自然具備列上下文；量值則需要使用 Iterator 函數（SUMX、FILTERX 等）才能套用列上下文。', color: '#F2C811' },
                      { icon: <Lightbulb className="w-5 h-5" />, title: '篩選上下文（Filter Context）', desc: '由報表視覺效果、切片器、交叉篩選所決定的資料子集。DAX 公式在該上下文內評估。例如：選取某年的資料，量值只計算該年的總和。', color: '#CA8A04' },
                    ].map((item, idx) => (
                      <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                        <Card className="border-border bg-card h-full">
                          <CardHeader>
                            <CardTitle className="text-sm flex items-start gap-2 text-card-foreground">
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

                  <MotionContainer direction="up">
                    <div className="rounded-xl p-6 border border-border bg-background">
                      <h3 className="text-base font-bold mb-3 text-foreground">上下文的實際例子</h3>
                      <div className="space-y-3">
                        {[
                          { q: '什麼情況下會產生列上下文？', a: '當你在計算欄中寫公式時，公式會對資料表的每一列逐一計算，產生列上下文。使用 Iterator 函數（SUMX、FILTERX 等）的量值也會產生列上下文。' },
                          { q: '什麼情況下會產生篩選上下文？', a: '當報表視覺效果套用篩選（例如：只顯示 2023 年）、切片器選取值、或公式中使用 CALCULATE 改變上下文時，就會產生篩選上下文。' },
                          { q: '兩種上下文可以同時存在嗎？', a: '可以。DAX 會先套用列上下文，再套用篩選上下文。在有列上下文的計算欄中使用 CALCULATE，會在該列的基礎上再加上額外的篩選。' },
                        ].map((qa, idx) => (
                          <div key={idx} className="border-b border-border last:border-0 pb-3 last:pb-0">
                            <p className="font-semibold text-sm text-foreground mb-1">Q：{qa.q}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">A：{qa.a}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </MotionContainer>
                </TabsContent>
              </Tabs>
            </section>

            {/* 設計原則 */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  實務原則
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-6">資料建模設計原則</h2>
              </MotionContainer>

              <div className="space-y-4">
                {[
                  { icon: <CheckCircle2 className="w-4 h-4" />, title: '遵循星型架構原則', desc: '將資料表明確區分為維度表或事實表，避免混用。良好的星型結構是高效能查詢的基礎。', color: '#F2C811' },
                  { icon: <CheckCircle2 className="w-4 h-4" />, title: '建立適當的關聯性路徑', desc: '避免過長的關聯鏈（一個維度透過多個事實表連到另一個維度）。過長的路徑會增加篩選傳播的複雜度與效能負擔。', color: '#CA8A04' },
                  { icon: <CheckCircle2 className="w-4 h-4" />, title: '使用代理鍵確保唯一性', desc: '當維度資料表沒有自然鍵時，使用 Power Query 的「新增索引資料行」建立 Surrogate Key，避免建立關聯時出錯。', color: '#eab308' },
                  { icon: <CheckCircle2 className="w-4 h-4" />, title: '盡量避免雙向交叉篩選', desc: '雙向關聯容易造成篩選路徑歧義與效能問題。只有在需要 RLS（列層級安全性）跨表傳播時，才考慮使用雙向篩選。', color: '#f59e0b' },
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
                      <p className="font-semibold text-foreground mb-1">建模的第一個原則</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        「好的模型是科學，也是藝術。」遵循星型架構是起點，但不必死守每一條規則。
                        有時候，合理的變通（例如合併雪花維度、建立角色扮演維度的副本）能帶來更好的效能或可用性。
                        重要的是：永遠以報表使用者的查詢效能為首要考量。
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
                <h3 className="text-xl font-bold text-foreground mb-4">掌握建模之後，開始實戰應用</h3>
                <p className="text-muted-foreground mb-6">
                  有了良好的資料模型基礎，將所學套用到真實的工作情境中，
                  並學習如何發布共享、與 Teams 整合，以及日常的實務操作技巧。
                </p>
                <Link href="/scenarios">
                  <HoverScale>
                    <Button size="lg" className="font-semibold" style={{ background: '#F2C811', color: '#1a1a1a', border: 'none' }}>
                      前往應用情境
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
