import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, BarChart3, PieChart, Table2,
  MapPin, Gauge, Target, Database } from 'lucide-react';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

// Power BI brand yellow
const YELLOW = '#F2C811';
const YELLOW_BG = '#FEFCE8';
const YELLOW_DARK = '#CA8A04';

export default function Scenarios() {
  const scenarios = [
    {
      num: '01',
      title: '銷售目標追蹤',
      subtitle: 'Sales Performance Tracking',
      scenario: '月底才能確認當月是否有達成銷售目標，往往發現落後時已來不及補救。',
      solution: '串聯 ERP 訂單資料，即時呈現每位業務員的目標達成進度，落後第一時間預警。',
      visual: <BarChart3 className="w-full h-full" />,
      chartType: '群組長條圖',
      chartColor: '#3b82f6',
      fields: [
        { label: '銷售額', source: 'ERP - 訂單主檔' },
        { label: '銷售目標', source: 'ERP - 年度目標設定' },
        { label: '業務員', source: 'ERP - 人員組織' },
        { label: '客戶所在縣市', source: 'ERP - 客戶主檔' },
      ],
      steps: [
        '將 ERP 的訂單主檔與年度目標匯入 Power BI Desktop',
        '建立「銷售事實表」與「業務員維度表」的星型資料模型',
        '新增量值：達成率 = DIVIDE(SUM(銷售額), MAX(銷售目標), 0)',
        '使用群組長條圖呈現各業務員本月實際 vs 目標',
        '在 Power BI Service 設定_THRESHOLD Alert，落後自動通知',
      ],
    },
    {
      num: '02',
      title: '工廠產量分析',
      subtitle: 'Production Line Analytics',
      scenario: '多條產線的產量數據要隔天早上才能看到，無法在第一時間調配資源。',
      solution: '串聯 MES 系統即時資料，儀表板呈現各產線的產量、良率與產能利用率。',
      visual: <Gauge className="w-full h-full" />,
      chartType: 'KPI + 資料表',
      chartColor: '#6366f1',
      fields: [
        { label: '日產量', source: 'MES - 機台日累計' },
        { label: '產能上限', source: 'MES - 產線產能設定' },
        { label: '不良率', source: 'MES - IQC/OQC 記錄' },
        { label: '換線時間', source: 'MES - 製程日志' },
      ],
      steps: [
        '串聯 MES 系統的產量、不良率、換線時間等資料至 Power BI',
        '建立「事實產量表」與「產線維度表」的星型模型',
        '使用條件格式：產能 > 95% 顯示深紅色，< 70% 顯示黃色',
        '用折線圖追蹤不良率每日趨勢，設定 ±2σ 警戒線',
        '發布至 Power BI Service，加入 Teams 工作區域供工廠主管查看',
      ],
    },
    {
      num: '03',
      title: '產品與客戶營收分析',
      subtitle: 'Revenue Mix Analysis',
      scenario: '想知道哪些產品最賺錢、哪些客戶貢獻最多營收，但資料分散在不同系統難以整合。',
      solution: 'Power BI 整合多來源資料，一張報表看盡產品別、地區別、客戶別所有維度的營收。',
      visual: <PieChart className="w-full h-full" />,
      chartType: '圓形圖 + 矩陣',
      chartColor: '#10b981',
      fields: [
        { label: '產品類別', source: 'ERP - 產品主檔' },
        { label: '客戶名稱', source: 'CRM / ERP 客戶主檔' },
        { label: '銷售額 / 毛利', source: 'ERP - 銷貨明細' },
        { label: '報價版本', source: '報價系統' },
      ],
      steps: [
        '使用 Power Query 合併 ERP、CRM 與報價系統的資料',
        '建立「事實銷售表」串聯產品、客戶與時間維度',
        '用圓形圖呈現各產品線營收佔比，找出核心營收來源',
        '以矩陣視覺效果做產品別 × 地區別交叉分析',
        '新增「AI 相關營收」資料欄位，設定為新事業追蹤口徑',
      ],
    },
    {
      num: '04',
      title: '庫存水位管理',
      subtitle: 'Inventory Level Management',
      scenario: '暢銷品時常缺貨才發現庫存不足，滞銷品堆滿倉庫佔用大量資金。',
      solution: '自動計算每個 SKU 的週轉天數，設定安全庫存門檻，低於天數自動推播警示。',
      visual: <Table2 className="w-full h-full" />,
      chartType: 'KPI + 資料表',
      chartColor: '#f59e0b',
      fields: [
        { label: '目前庫存', source: 'ERP - 庫存台帳' },
        { label: '入庫日期 / 批號', source: 'ERP - 入庫記錄' },
        { label: '領料 / 銷售記錄', source: 'ERP - 庫存異動' },
        { label: '安全庫存天數', source: 'ERP - 物料設定' },
      ],
      steps: [
        '串聯 ERP 的進貨、領料與銷售資料建立庫存週轉分析模型',
        '新增量值：週轉天數 = AVERAGEA(庫存台帳[庫存天數])',
        '設定安全庫存門檻：A 級品 30 天、B 級品 60 天、C 級品 90 天',
        '以資料表的顏色符號欄呈現庫存狀態：綠（正常）、黃（偏低）、紅（需補貨）',
        '於 Power BI Service 設定每日訂閱，將滞銷品報表自動寄送給倉管與 PM',
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

        {/* ── Header（Power BI Yellow 風格）─────────────────────────────────── */}
        <div
          className="border-b border-border py-16"
          style={{ background: `linear-gradient(135deg, #FAFAF9 0%, #FEFCE8 100%)` }}
        >
          <div className="container max-w-5xl">
            <MotionContainer direction="up">
              {/* Power BI 風格標籤 */}
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-5"
                style={{ background: YELLOW, color: '#1a1a1a' }}
              >
                <BarChart3 className="w-4 h-4" />
                Power BI 應用情境
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">報表應用實例</h1>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                每個情境說明一個真實的業務痛點，以及如何用 Power BI
                串聯資料、建立模型、選擇正確的視覺效果，最後發布到 Power BI Service
                讓團隊隨時查看。
              </p>
            </MotionContainer>
          </div>
        </div>

        {/* ── 四個情境卡片（Power BI 報表卡風格）─────────────────────────── */}
        <div className="container py-16">
          <div className="max-w-5xl mx-auto space-y-8">

            {scenarios.map((s, idx) => (
              <MotionContainer key={idx} direction="up" delay={idx * 0.08}>

                {/* 情境卡片本體 */}
                <Card
                  className="border-border bg-card overflow-hidden"
                  style={{ boxShadow: '0 0 20px rgba(0,0,0,0.08)' }}
                >
                  <div className="flex flex-col lg:flex-row">

                    {/* 左側：情境資訊 */}
                    <div className="flex-1 p-8 flex flex-col gap-5">

                      {/* 情境編號 + 標題 */}
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0"
                          style={{ background: s.chartColor }}
                        >
                          {s.num}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{s.title}</h3>
                          <p className="text-sm text-muted-foreground mt-0.5">{s.subtitle}</p>
                        </div>
                      </div>

                      {/* 情境 / 解決方案 / 圖表推薦 */}
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: s.chartColor }}>
                            遇到的問題
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{s.scenario}</p>
                        </div>
                        <div
                          className="rounded-lg p-4 text-sm leading-relaxed"
                          style={{ background: `${s.chartColor}10`, borderLeft: `3px solid ${s.chartColor}` }}
                        >
                          <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: s.chartColor }}>
                            Power BI 解決方式
                          </p>
                          <p className="text-muted-foreground">{s.solution}</p>
                        </div>
                      </div>

                      {/* 需要的資料欄位 */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Database className="w-4 h-4" style={{ color: s.chartColor }} />
                          <p className="text-xs font-bold uppercase tracking-wider" style={{ color: s.chartColor }}>
                            需要的資料欄位
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {s.fields.map((f, fi) => (
                            <div
                              key={fi}
                              className="flex items-center gap-2 bg-muted/60 rounded-lg px-3 py-2 text-xs"
                            >
                              <div
                                className="w-2 h-2 rounded-full shrink-0"
                                style={{ background: s.chartColor }}
                              />
                              <span className="font-semibold text-foreground">{f.label}</span>
                              <span className="text-muted-foreground truncate">{f.source}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 建置步驟 */}
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                          建置步驟
                        </p>
                        <ol className="space-y-2">
                          {s.steps.map((step, si) => (
                            <li key={si} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <span
                                className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5"
                                style={{ background: s.chartColor }}
                              >
                                {si + 1}
                              </span>
                              <span className="leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    {/* 右側：圖表預覽區（Power BI Desktop 模擬） */}
                    <div
                      className="lg:w-80 p-6 flex flex-col items-center justify-center gap-4"
                      style={{ background: '#FAFAF9' }}
                    >
                      {/* 圖表卡片本體 */}
                      <div className="w-full rounded-xl p-5" style={{ background: '#fff', border: `2px solid ${s.chartColor}30` }}>
                        {/* 圖表標題列 */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ background: s.chartColor }} />
                            <span className="text-xs font-bold text-foreground">{s.chartType}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">視覺效果</span>
                        </div>
                        {/* 圖表圖示 */}
                        <div
                          className="w-full rounded-lg flex items-center justify-center"
                          style={{ height: 120, background: `${s.chartColor}10` }}
                        >
                          <div style={{ color: s.chartColor }}>
                            {s.visual}
                          </div>
                        </div>
                        {/* 模擬長條 */}
                        <div className="mt-4 flex items-end gap-2 justify-center">
                          {[0.65, 0.45, 0.9, 0.75, 0.55, 0.85].map((h, i) => (
                            <div
                              key={i}
                              className="rounded-t-sm"
                              style={{
                                width: 20,
                                height: `${h * 60}px`,
                                background: i === 2 ? s.chartColor : `${s.chartColor}60`,
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* 圖表類型標籤 */}
                      <div
                        className="w-full rounded-lg px-4 py-3 text-sm font-semibold text-center"
                        style={{ background: `${s.chartColor}15`, color: s.chartColor }}
                      >
                        推薦視覺效果：{s.chartType}
                      </div>

                      {/* Power BI Desktop 標籤 */}
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        Power BI Desktop
                      </div>
                    </div>

                  </div>
                </Card>

              </MotionContainer>
            ))}

            {/* 圖表選擇提示 */}
            <MotionContainer direction="up">
              <div
                className="rounded-2xl p-8 border"
                style={{ background: YELLOW_BG, borderColor: `${YELLOW_DARK}30` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                    style={{ background: YELLOW_DARK }}
                  >
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">如何選擇正確的視覺效果</p>
                    <p className="text-sm text-muted-foreground">先問問題，再選圖表——不同的問題適合不同的呈現方式</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { q: '各類別的數量大小？', a: '群組長條圖 / 橫條圖', color: '#3b82f6' },
                    { q: '各類別佔全體的比例？', a: '圓形圖 / 堆疊柱狀圖', color: '#10b981' },
                    { q: '數值隨時間的變化趨勢？', a: '折線圖', color: '#6366f1' },
                    { q: '單一指標是否達標？', a: 'KPI 視覺效果 / 儀表板', color: '#f59e0b' },
                    { q: '各地理區域的分佈？', a: '地圖視覺效果', color: '#ef4444' },
                    { q: '多個維度的交叉分析？', a: '矩陣視覺效果', color: '#8b5cf6' },
                    { q: '排名或清單一目了然？', a: '橫條圖（依值排序）', color: '#06b6d4' },
                    { q: '詳細資料需要向下展開？', a: '資料表 + 向下切入', color: '#64748b' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3">
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: item.color }} />
                      <span className="text-xs text-muted-foreground flex-1">{item.q}</span>
                      <span className="text-xs font-semibold shrink-0" style={{ color: item.color }}>{item.a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionContainer>

            {/* CTA */}
            <MotionContainer direction="up">
              <div className="rounded-3xl p-12 text-center" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' }}>
                <BarChart3 className="w-14 h-14 mx-auto mb-5" style={{ color: YELLOW }} />
                <h3 className="text-2xl font-bold text-white mb-3">
                  從情境學習，到親手實作
                </h3>
                <p className="text-white/60 mb-8 max-w-lg mx-auto leading-relaxed">
                  了解 Power BI 的應用情境之後，可以回到首頁查看完整學習路徑，
                  或前往核心概念頁面系統性地學習每項技能。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/">
                    <HoverScale>
                      <Button
                        size="lg"
                        className="px-10 font-semibold"
                        style={{ background: YELLOW, color: '#1a1a1a' }}
                      >
                        返回首頁
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </HoverScale>
                  </Link>
                </div>
              </div>
            </MotionContainer>

          </div>
        </div>

      </div>
    </PageTransition>
  );
}
