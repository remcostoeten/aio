
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { Palette } from "lucide-react"
import type { EditorTheme } from "@/shared/hooks/use-editor-theme"

interface ThemeSelectorProps {
  theme: EditorTheme
  onThemeChange: (theme: EditorTheme) => void
}

const THEMES: { value: EditorTheme; label: string }[] = [
  { value: "dracula", label: "Dracula" },
  { value: "monokai", label: "Monokai" },
  { value: "solarized-dark", label: "Solarized Dark" },
  { value: "vs-dark", label: "Visual Studio Dark" },
]

export function ThemeSelector({ theme, onThemeChange }: ThemeSelectorProps) {
  return (
    <div className="relative">
      <Select value={theme} onValueChange={(value) => onThemeChange(value as EditorTheme)}>
        <SelectTrigger className="w-[180px] gap-2">
          <Palette className="w-4 h-4" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {THEMES.map((theme) => (
            <SelectItem key={theme.value} value={theme.value}>
              {theme.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}