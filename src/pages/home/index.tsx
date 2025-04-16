import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme/theme-toggle'

export default function HomePage() {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden"
    >
      {/* Theme toggle button */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      {/* Main content */}
      <div className="text-center backdrop-blur-sm bg-black/20 rounded-xl p-6 md:p-8 shadow-lg mx-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">
          Modern React Template
        </h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8 text-white/60">
          A starter template built with the latest tech stack
        </p>
        <div className="space-x-4">
          <Button size="lg" variant="default">Get Started</Button>
          <Button variant="secondary" size="lg">GitHub</Button>
        </div>
      </div>
    </div>
  )
} 
