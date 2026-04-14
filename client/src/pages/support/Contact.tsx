import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Mail, MessageSquare, ExternalLink, BarChart3 } from 'lucide-react';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

export default function Contact() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

        {/* Header */}
        <div
          className="border-b border-border py-16"
          style={{ background: 'linear-gradient(135deg, #FAFAF9 0%, #FEFCE8 100%)' }}
        >
          <div className="container">
            <MotionContainer direction="up">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
                style={{ background: '#F2C811', color: '#1a1a1a' }}
              >
                <Mail className="w-4 h-4" />
                聯絡我們
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">聯絡我們</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                有任何問題或建議？我們很樂意聽取您的意見。
              </p>
            </MotionContainer>
          </div>
        </div>

        <div className="container py-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <MotionContainer direction="left" delay={0.1}>
                <HoverScale>
                  <Card
                    className="border-border bg-card h-full transition-[box-shadow] duration-300 hover:[box-shadow:0_0_30px_rgba(0,0,0,0.10)]"
                    style={{ boxShadow: '0 0 20px rgba(0,0,0,0.06)' }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: '#F2C811' }}
                        >
                          <Mail className="w-5 h-5" style={{ color: '#1a1a1a' }} />
                        </div>
                        <CardTitle className="text-card-foreground">電子郵件</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-sm">
                        發送郵件至我們的支援團隊，我們將在 1–2 個工作天內回覆。
                      </p>
                      <a href="mailto:support@powerbi-edu.com" className="font-semibold hover:underline" style={{ color: '#CA8A04' }}>
                        support@powerbi-edu.com
                      </a>
                    </CardContent>
                  </Card>
                </HoverScale>
              </MotionContainer>

              <MotionContainer direction="right" delay={0.1}>
                <HoverScale>
                  <Card
                    className="border-border bg-card h-full transition-[box-shadow] duration-300 hover:[box-shadow:0_0_30px_rgba(0,0,0,0.10)]"
                    style={{ boxShadow: '0 0 20px rgba(0,0,0,0.06)' }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: '#F2C811' }}
                        >
                          <MessageSquare className="w-5 h-5" style={{ color: '#1a1a1a' }} />
                        </div>
                        <CardTitle className="text-card-foreground">反饋表單</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-sm">
                        填寫表單提交您的意見和建議，幫助我們改善教學內容。
                      </p>
                      <a href="#" className="font-semibold flex items-center gap-2 hover:underline" style={{ color: '#CA8A04' }}>
                        打開反饋表單 <ExternalLink className="w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                </HoverScale>
              </MotionContainer>
            </div>

            <MotionContainer direction="up">
              <section className="border-t border-border pt-12 mb-12">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                  style={{ background: '#FEFCE8', color: '#CA8A04' }}
                >
                  其他資源
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-8">其他資源</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <HoverScale>
                    <a href="https://learn.microsoft.com/zh-tw/power-bi/" target="_blank" rel="noopener noreferrer">
                      <Card
                        className="border-border bg-card cursor-pointer h-full transition-[box-shadow] duration-300 hover:[box-shadow:0_0_30px_rgba(0,0,0,0.10)]"
                        style={{ boxShadow: '0 0 20px rgba(0,0,0,0.06)' }}
                      >
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#FEFCE8' }}>
                              <BarChart3 className="w-4 h-4" style={{ color: '#CA8A04' }} />
                            </div>
                            <CardTitle className="text-card-foreground">Microsoft Learn</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4 text-sm">
                            官方 Power BI 文件和教程，包含完整的 DAX 函數參考與最佳實踐指南。
                          </p>
                          <Button variant="ghost" className="gap-2 p-0 font-semibold" style={{ color: '#CA8A04' }}>
                            前往 Microsoft Learn <ArrowRight className="w-4 h-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    </a>
                  </HoverScale>
                  <HoverScale>
                    <a href="https://app.powerbi.com" target="_blank" rel="noopener noreferrer">
                      <Card
                        className="border-border bg-card cursor-pointer h-full transition-[box-shadow] duration-300 hover:[box-shadow:0_0_30px_rgba(0,0,0,0.10)]"
                        style={{ boxShadow: '0 0 20px rgba(0,0,0,0.06)' }}
                      >
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#FEFCE8' }}>
                              <BarChart3 className="w-4 h-4" style={{ color: '#CA8A04' }} />
                            </div>
                            <CardTitle className="text-card-foreground">Power BI 服務</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4 text-sm">
                            開始使用 Power BI 服務，發布與共享你的第一份報表。
                          </p>
                          <Button variant="ghost" className="gap-2 p-0 font-semibold" style={{ color: '#CA8A04' }}>
                            前往 Power BI <ArrowRight className="w-4 h-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    </a>
                  </HoverScale>
                </div>
              </section>
            </MotionContainer>

            <MotionContainer direction="up" delay={0.2}>
              <Link href="/">
                <HoverScale>
                  <Button variant="outline" size="lg" className="gap-2">
                    返回首頁 <ArrowRight className="w-4 h-4" />
                  </Button>
                </HoverScale>
              </Link>
            </MotionContainer>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
