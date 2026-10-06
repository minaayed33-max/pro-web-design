import React from 'react';
import { StatItem } from '../types';
import { COLOR_THEMES } from '../data/presets';
import { 
  Users, 
  TrendingUp, 
  Coins, 
  Award, 
  Building, 
  HardHat, 
  CheckCircle, 
  Smile, 
  UserCheck, 
  Heart, 
  ShieldCheck, 
  FileText, 
  Scale, 
  Smartphone, 
  Server, 
  Cpu, 
  Utensils, 
  Coffee, 
  Star 
} from 'lucide-react';

interface StatsBarProps {
  stats: StatItem[];
  themeId: string;
}

export const StatsBar: React.FC<StatsBarProps> = ({ stats, themeId }) => {
  const theme = COLOR_THEMES[themeId] || COLOR_THEMES.blue;

  const renderIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-slate-400 group-hover:text-white transition-colors" };
    switch (iconName) {
      case 'Users': return <Users {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Coins': return <Coins {...props} />;
      case 'Award': return <Award {...props} />;
      case 'Building': return <Building {...props} />;
      case 'HardHat': return <HardHat {...props} />;
      case 'CheckCircle': return <CheckCircle {...props} />;
      case 'Smile': return <Smile {...props} />;
      case 'UserCheck': return <UserCheck {...props} />;
      case 'Heart': return <Heart {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'FileText': return <FileText {...props} />;
      case 'Scale': return <Scale {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Server': return <Server {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      case 'Coffee': return <Coffee {...props} />;
      case 'Star': return <Star {...props} />;
      default: return <Award {...props} />;
    }
  };

  return (
    <section className="border-y border-slate-800/80 bg-slate-900/60 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-800">
          {stats.map((stat) => (
            <div key={stat.id} className="p-4 space-y-2 group">
              <div className="flex justify-center mb-1">
                {renderIcon(stat.icon)}
              </div>
              <div className={`text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientText} tracking-tight`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
