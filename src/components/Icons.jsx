import { Home, Map, Bell, Shield, Users, Route, FileClock, BarChart3, ClipboardList, Settings, Smartphone, Building2, CheckCircle2, Upload, History, MapPin, Gauge, MessageSquare, UserCog } from 'lucide-react'

export const icons = {
  home: Home,
  map: Map,
  bell: Bell,
  shield: Shield,
  users: Users,
  route: Route,
  fileClock: FileClock,
  reports: BarChart3,
  attendance: ClipboardList,
  settings: Settings,
  phone: Smartphone,
  building: Building2,
  check: CheckCircle2,
  upload: Upload,
  history: History,
  pin: MapPin,
  speed: Gauge,
  chat: MessageSquare,
  userCog: UserCog,
}

export function Icon({ name, className = 'h-5 w-5 text-blue-600' }) {
  const C = icons[name] || Home
  return <C className={className} />
}
