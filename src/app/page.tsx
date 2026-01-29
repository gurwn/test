import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ScanFace } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-md w-full space-y-8 animate-in-fade">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-medium text-gray-300">AI Based Hair Consulting</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Find Your <br />
            <span className="text-gradient">Perfect Fit</span>
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed">
            AI가 얼굴형, 두상, 모질을 분석하여<br />
            당신에게 가장 잘 어울리는 인생 머리를 찾아드려요.
          </p>
        </div>

        <div className="space-y-4 pt-8">
          <Link href="/analyze" className="w-full block">
            <Button size="lg" className="w-full h-14 text-lg font-semibold bg-white text-black hover:bg-white/90 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all transform hover:scale-[1.02]">
              무료로 분석 시작하기
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>

          <p className="text-xs text-muted-foreground/60">
            *사진은 서버에 저장되지 않고 100% 안전하게 처리됩니다.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-12 border-t border-white/5">
          <div className="space-y-2">
            <div className="mx-auto w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
              <ScanFace className="w-5 h-5 text-indigo-400" />
            </div>
            <p className="text-xs text-muted-foreground font-medium">얼굴형 분석</p>
          </div>
          <div className="space-y-2">
            <div className="mx-auto w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-xs text-muted-foreground font-medium">스타일 추천</p>
          </div>
          <div className="space-y-2">
            <div className="mx-auto w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center border border-pink-500/20">
              <span className="text-sm font-bold text-pink-400">Top5</span>
            </div>
            <p className="text-xs text-muted-foreground font-medium">맞춤 리포트</p>
          </div>
        </div>
      </div>
    </main>
  );
}
