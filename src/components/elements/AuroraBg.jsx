import { cn } from "../../lib/utils";

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}) => {
    return (
        <main>
            <div
                className={cn(
                    "transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-blue-50",
                    className
                )}
                {...props}>
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                        "--aurora":
                            "repeating-linear-gradient(100deg,#2563eb_10%,#93c5fd_15%,#60a5fa_20%,#a5b4fc_25%,#ddd6fe_30%)",

                        "--white-gradient":
                            "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",

                        "--blue-300": "#93c5fd",
                        "--blue-400": "#60a5fa",
                        "--blue-500": "#2563eb",
                        "--indigo-300": "#a5b4fc",
                        "--violet-200": "#ddd6fe",
                        "--white": "#fff",
                        "--transparent": "transparent",

                        "--right-blue": "#2563eb"

                    }}>
                    <div
                        className={cn(
                            `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""]`,
                            showRadialGradient &&
                            `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
                        )}></div>
                </div>
                {children}
            </div>
        </main>
    );
};
