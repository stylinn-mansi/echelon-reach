import * as React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  href,
  variant = 'default',
  size = 'md',
  className,
  children,
  showArrow = false,
  ...props
}, ref) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-out rounded-[52px] gap-2";
  
  const variants = {
    default: "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-[#8D70ED] via-[#873CDF] to-[#863CDF] text-white hover:opacity-90 shadow-[0_0_20px_rgba(141,112,237,0.3)] hover:shadow-[0_0_25px_rgba(141,112,237,0.5)]",
    outline: "border-2 border-[#8D70ED] text-[#8D70ED] hover:bg-gradient-to-r hover:from-[#8D70ED] hover:to-[#873CDF] hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(141,112,237,0.3)]",
    ghost: "text-[#8D70ED] hover:bg-[#8D70ED]/10 hover:shadow-[0_0_20px_rgba(141,112,237,0.15)]"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm min-w-[100px] h-[40px]",
    md: "px-6 py-3 text-base min-w-[120px] h-[48px]",
    lg: "px-8 py-4 text-base min-w-[215px] h-[56px]"
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight 
          className="w-6 h-6 transform rotate-45 transition-transform group-hover:rotate-0 group-hover:translate-x-1" 
          strokeWidth={2}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={cn(classes, "group")}>
        {content}
      </Link>
    );
  }

  return (
    <button ref={ref} className={cn(classes, "group")} {...props}>
      {content}
    </button>
  );
});

Button.displayName = "Button";
