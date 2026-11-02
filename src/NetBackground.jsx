import { useEffect, useRef } from "react";

export default function NetBackground({
    count = 110,          // max number of dots
    linkDistance = 130,   // dot to dot line distance
    mouseDistance = 160,  // dot to mouse line distance
}) {
    const ref = useRef(null);

    useEffect(() => {
        const canvas = ref.current;
        const ctx = canvas.getContext("2d");
        const dpr = window.devicePixelRatio || 1;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const dark = window.matchMedia("(prefers-color-scheme: dark)");
        const mouse = { x: -999, y: -999 };
        let W, H, raf, dots = [];

        const resize = () => {
            W = window.innerWidth; H = window.innerHeight;
            canvas.width = W * dpr; canvas.height = H * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const n = Math.min(count, Math.floor((W * H) / 14000));
            while (dots.length < n)
                dots.push({
                    x: Math.random() * W, y: Math.random() * H,
                    vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
                });
            dots.length = n;
        };

        const draw = () => {
            ctx.clearRect(0, 0, W, H);
            const col = dark.matches ? "108,132,255" : "61,90,254";
            for (let i = 0; i < dots.length; i++) {
                const a = dots[i];
                if (!reduce) {
                    a.x += a.vx; a.y += a.vy;
                    if (a.x < 0 || a.x > W) a.vx *= -1;
                    if (a.y < 0 || a.y > H) a.vy *= -1;
                }
                ctx.beginPath();
                ctx.arc(a.x, a.y, 1.8, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${col},.55)`;
                ctx.fill();

                for (let j = i + 1; j < dots.length; j++) {
                    const b = dots[j], d = Math.hypot(a.x - b.x, a.y - b.y);
                    if (d < linkDistance) {
                        ctx.strokeStyle = `rgba(${col},${0.28 * (1 - d / linkDistance)})`;
                        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
                    }
                }
                const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
                if (md < mouseDistance) {
                    ctx.strokeStyle = `rgba(22,184,144,${0.5 * (1 - md / mouseDistance)})`;
                    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
                }
            }
            if (!reduce) raf = requestAnimationFrame(draw);
        };

        const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
        const onTouch = (e) => { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; };
        const onResize = () => { resize(); if (reduce) draw(); };

        resize(); draw();
        window.addEventListener("resize", onResize);
        window.addEventListener("mousemove", onMove);
        window.addEventListener("touchmove", onTouch, { passive: true });

        return () => {                                  // cleanup on unmount
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", onResize);
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("touchmove", onTouch);
        };
    }, [count, linkDistance, mouseDistance]);

    return (
        <canvas
            ref={ref}
            aria-hidden="true"
            style={{
                position: "fixed", left: 0, top: 0,
                width: "100%", height: "100%",
                zIndex: -1, pointerEvents: "none",
            }}
        />
    );
}