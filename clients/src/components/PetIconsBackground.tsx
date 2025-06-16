import { Bone, Fish, Bird, Cat, Dog, Heart, PawPrint, Star } from 'lucide-react';

const icons = [Bone, Fish, Bird, Cat, Dog, Heart, PawPrint, Star];
const colors = ['pink', 'purple', 'orange', 'blue'];

export default function PetIconsBackground({ color = "purple", density = "normal" }) {
  const iconCount = density === "high" ? 24 : density === "low" ? 8 : 16;
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(iconCount)].map((_, i) => {
        const Icon = icons[i % icons.length];
        const iconColor = colors[i % colors.length];
        const size = Math.random() * 20 + 20;
        const delay = Math.random() * 5;
        const duration = Math.random() * 5 + 10;
        const initialRotation = Math.random() * 360;
        const rotationAmount = Math.random() > 0.5 ? 360 : -360;
        
        return (
          <Icon
            key={i}
            className={`absolute text-${color}-100 animate-float`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: size,
              height: size,
              opacity: 0.1,
              animation: `float ${duration}s ease-in-out infinite, spin ${duration * 1.5}s linear infinite`,
              animationDelay: `${delay}s`,
              transform: `rotate(${initialRotation}deg)`,
              // @ts-ignore
              '--rotation-amount': `${rotationAmount}deg`,
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
}