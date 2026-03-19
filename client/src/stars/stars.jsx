import starinfo from './starinfo.json';
import './stars.css';
import { useEffect, useRef, useMemo, useState, useCallback } from 'react';

function parseRA(ra) {
    const [h, m, s] = ra.split(":").map(parseFloat);
    return (h + m / 60 + s / 3600) * 15;
}

function parseDEC(dec) {
    const sign = dec.startsWith("-") ? -1 : 1;
    const [d, m, s] = dec.replace(/[+-]/, "").split(":").map(parseFloat);
    return sign * (d + m / 60 + s / 3600);
}

const computed = starinfo.map(star => ({
    ...star,
    dec: parseDEC(star.DEC),
    ra: parseRA(star.RA),
    mag: Number(star.MAG),
}));

export default function Stars() {
    const canvasRef = useRef(null);
    const [hoveredStar, setHoveredStar] = useState(null);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

    const drawStars = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const { width, height } = canvas;

        ctx.clearRect(0, 0, width, height);

        const cx = width / 2;
        const cy = height / 2;
        const radius = Math.min(cx, cy);

        computed.forEach(star => {
            const r = (90 - Math.abs(star.dec)) / 90;
            const angle = star.ra * Math.PI / 180;
            const x = cx + r * Math.cos(angle) * radius;
            const y = cy + r * Math.sin(angle) * radius;
            const size = Math.max(0.4, 2.5 / Math.sqrt(star.mag));

            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, 1.2 / Math.sqrt(star.mag))})`;
            ctx.fill();
        });
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const observer = new ResizeObserver(() => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            drawStars();
        });
        observer.observe(canvas);
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        drawStars();
        return () => observer.disconnect();
    }, [drawStars]);

    const handleMouseMove = useCallback((e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const radius = Math.min(cx, cy);

        const hit = computed.find(star => {
            const r = (90 - Math.abs(star.dec)) / 90;
            const angle = star.ra * Math.PI / 180;
            const x = cx + r * Math.cos(angle) * radius;
            const y = cy + r * Math.sin(angle) * radius;
            return Math.hypot(mx - x, my - y) < 6;
        });

        setHoveredStar(hit || null);
        setTooltipPos({ x: mx + 12, y: my + 12 });
    }, []);

    const handleMouseLeave = useCallback(() => setHoveredStar(null), []);

    return (
        <div className="stars-wrapper">
            <canvas
                ref={canvasRef}
                className="star-canvas"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            />
            {hoveredStar && (
                <div className="star-tooltip" style={{ left: tooltipPos.x, top: tooltipPos.y }}>
                    <h4>{hoveredStar.Title_HD}</h4>
                    <p>RA: {hoveredStar.RA}</p>
                    <p>DEC: {hoveredStar.DEC}</p>
                    <p>MAG: {hoveredStar.mag.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
}