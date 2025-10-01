import React, { useEffect, useRef } from "react";
import "./NebulaBackground.css";

const NebulaBackground = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const scrollRef = useRef(0);
  const driftRef = useRef({ x: 0, y: 0, dx: 0.05, dy: 0.03 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const numStars = 1000;
    let stars = [];

    const resize = () => {
      const oldWidth = canvas.width || window.innerWidth;
      const oldHeight = canvas.height || document.body.scrollHeight;

      // 👇 Full document height instead of just viewport
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;

      stars.forEach((star) => {
        star.x = (star.x / oldWidth) * canvas.width;
        star.y = (star.y / oldHeight) * canvas.height;
      });
    };

    window.addEventListener("resize", resize);
    resize();

    function initStars() {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        const layer = Math.random() < 0.5 ? "background" : "foreground";
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius:
            (layer === "foreground"
              ? Math.random() * 1.8 + 0.7
              : Math.random() * 1.2) * 3,
          alpha: Math.random() * 0.8 + 0.2,
          flickerSpeed: 0.01 + Math.random() * 0.02,
          driftX: (Math.random() - 0.5) * (layer === "foreground" ? 0.15 : 0.05),
          driftY: (Math.random() - 0.5) * (layer === "foreground" ? 0.15 : 0.05),
          layer,
          hue: Math.random() * 360,
        });
      }
      starsRef.current = stars;
    }

    function getNebulaHue(x, y, width, height) {
      let linearHue = (x / width) * 360;
      const rad1X = 0.3 * width;
      const rad1Y = 0.3 * height;
      const rad2X = 0.7 * width;
      const rad2Y = 0.7 * height;

      const dist1 = Math.hypot(x - rad1X, y - rad1Y) / Math.hypot(width, height);
      const dist2 = Math.hypot(x - rad2X, y - rad2Y) / Math.hypot(width, height);

      const radHue1 = 30;
      const radHue2 = 280;

      const combinedHue =
        linearHue * 0.6 +
        radHue1 * (1 - Math.min(dist1, 1)) * 0.2 +
        radHue2 * (1 - Math.min(dist2, 1)) * 0.2;

      return combinedHue % 360;
    }

    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      driftRef.current.x += driftRef.current.dx;
      driftRef.current.y += driftRef.current.dy;
      if (driftRef.current.x > 20 || driftRef.current.x < -20)
        driftRef.current.dx *= -1;
      if (driftRef.current.y > 15 || driftRef.current.y < -15)
        driftRef.current.dy *= -1;

      const scrollOffset = scrollRef.current;

      starsRef.current.forEach((star) => {
        star.alpha += star.flickerSpeed * (Math.random() > 0.5 ? 1 : -1);
        star.alpha = Math.max(0.2, Math.min(1, star.alpha));

        star.x += star.driftX;
        star.y += star.driftY;

        const parallaxFactor = star.layer === "foreground" ? 0.3 : 0.1;
        let drawX = star.x + driftRef.current.x * parallaxFactor;
        let drawY =
          star.y + scrollOffset * parallaxFactor + driftRef.current.y * parallaxFactor;

        drawX = (drawX + canvas.width) % canvas.width;
        drawY = (drawY + canvas.height) % canvas.height;

        const nebulaHue = getNebulaHue(drawX, drawY, canvas.width, canvas.height);
        star.hue += 0.2;
        if (star.hue > 360) star.hue = 0;

        const starHue = (360 - nebulaHue + star.hue) % 360;
        ctx.fillStyle = `hsl(${starHue}, 80%, 70%)`;
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animateStars);
    }

    initStars();
    animateStars();

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="stars"
      className="absolute inset-0 -z-10 w-full h-full overflow-x-hidden bg-black"
    ></canvas>
  );
};

export default NebulaBackground;
