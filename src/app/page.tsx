"use client";
import DotRing from "@/components/DotRing/DotRing";
import { Gradient } from "@/components/GradientGenerator/Gradient";
import { GradientGenerator } from "@/components/GradientGenerator/GradientGenerator";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Work } from "@/components/Work/Work";
import { Footer } from "@/components/Footer/Footer";
import { Research } from "@/components/Research/Research";
import { Projects } from "@/components/Projects/Projects";
import { useRouter } from "next/navigation";

const TEXTS = [
    "Hello, I am Matthew Hibbs.",
    "Hola, soy Matthew Hibbs.",
    "Bonjour, je suis Matthew Hibbs.",
    "Hallo, ich bin Matthew Hibbs.",
    "你好，我是马修·希布斯。",
    "こんにちは、私はマシュー・ヒブスです。",
    "Hej, jag heter Matthew Hibbs.",
    "مرحبًا ، أنا ماثيو هيبس.",
    "नमस्ते, मैं मैथ्यू हिब्स हूं।.",
    "안녕하세요 매튜 힙스입니다.",
    "Привет, я Мэтью Хиббс.",
];

export default function Home() {
    const router = useRouter();
    // Call `initGradient` with the selector to your canvas
    useEffect(() => {
        const canvasElement = document.getElementById("gradient-canvas");
        const gradient: any = new Gradient();
        if (canvasElement) {
            gradient.initGradient("#gradient-canvas");
        } else {
            gradient.pause();
        }
    }, []);

    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [hoverArrow, setHoverArrow] = useState<
        null | "work" | "projects" | "research" | "contact"
    >(null);
    const [tv, setTv] = useState<
        "canvas" | "work" | "projects" | "research" | "contact"
    >("canvas");

    useEffect(() => {
        const fadeId = setInterval(() => {
            setFade(!fade);
            if (!fade) {
                setTimeout(() => setIndex(index + 1), 100);
            }
        }, 2900);
        return () => {
            clearTimeout(fadeId);
        };
    }, [fade, index]);

    const lenisRef = useRef();

    return (
        <ReactLenis
            ref={lenisRef}
            options={{
                duration: 1.2,
                easing: (t: number) =>
                    Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            }}
            root>
            <main className="overflow-hidden flex min-h-screen flex-col items-center justify-between md:p-24 md:px-20 lg:px-44 p-4 pt-16">
                <DotRing />
                <div
                    style={{ maxWidth: "1050px" }}
                    className="w-full h-40 flex -mt-10">
                    <div className="w-20 flex-row">
                        <p
                            onClick={() => router.push("/")}
                            style={{
                                fontFamily: "roobertm",
                                fontSize: "21px",
                                letterSpacing: "-1.5px",
                            }}>
                            matthew
                        </p>
                        <p
                            onClick={() => router.push("/")}
                            style={{
                                fontFamily: "roobertm",
                                fontSize: "18.5px",
                                marginTop: "2px",
                                letterSpacing: "-1.5px",
                            }}>
                            hibbs
                        </p>
                        {/* <div>
              <svg id="third" style={{height: '14px', marginTop: '20px'}} className="fadeInAnimated sig" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="1.62 119.64 225.13 37.73"><defs id="SvgjsDefs1183"></defs><g id="SvgjsG1184"><svg xmlns="http://www.w3.org/2000/svg" width="288" height="288" viewBox="0 0 738 348"><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="5.027" d="M 10.600,185.400 C 20.200,183.200 20.311,183.576 29.800,181.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.018" d="M 29.800,181.000 C 34.311,179.776 34.228,179.472 38.600,177.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.216" d="M 38.600,177.800 C 41.028,176.872 41.090,176.985 43.400,175.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.496" d="M 43.400,175.800 C 48.890,172.985 48.855,172.895 54.200,169.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.257" d="M 54.200,169.800 C 60.255,166.295 60.324,166.387 66.200,162.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.69" d="M 66.200,162.600 C 69.324,160.587 69.207,160.409 72.200,158.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.288" d="M 72.200,158.200 C 77.607,154.209 77.810,154.455 83.000,150.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.259" d="M 83.000,150.200 C 87.810,146.256 87.695,146.100 92.200,141.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.295" d="M 92.200,141.800 C 96.495,137.700 96.604,137.786 100.600,133.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.828" d="M 100.600,133.400 C 104.804,128.786 104.749,128.713 108.600,123.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.451" d="M 108.600,123.800 C 110.549,121.313 112.895,119.792 112.200,118.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.989" d="M 112.200,118.600 C 111.495,117.392 108.825,118.149 105.800,119.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.22" d="M 105.800,119.000 C 102.425,119.949 102.375,120.245 99.400,122.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.81" d="M 99.400,122.200 C 95.375,124.845 95.305,124.885 91.800,128.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.546" d="M 91.800,128.200 C 87.905,131.885 88.123,132.135 84.600,136.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.056" d="M 84.600,136.200 C 82.923,138.135 83.018,138.214 81.400,140.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.804" d="M 81.400,140.200 C 78.618,143.614 78.420,143.469 75.800,147.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.968" d="M 75.800,147.000 C 73.820,149.669 73.813,149.697 72.200,152.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.684" d="M 72.200,152.600 C 70.813,155.097 68.936,156.169 69.800,157.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.734" d="M 69.800,157.800 C 70.736,159.569 72.745,159.400 75.800,159.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.61" d="M 75.800,159.400 C 82.145,159.400 82.428,159.505 88.600,157.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.893" d="M 88.600,157.800 C 97.628,155.305 97.625,154.898 106.200,151.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.736" d="M 106.200,151.000 C 115.225,146.898 115.091,146.563 123.800,141.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.307" d="M 123.800,141.800 C 127.891,139.563 127.787,139.378 131.800,137.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.024" d="M 131.800,137.000 C 138.587,132.978 138.475,132.766 145.400,129.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.352" d="M 145.400,129.000 C 149.875,126.566 149.926,126.621 154.600,124.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.921" d="M 154.600,124.600 C 157.326,123.421 161.231,121.517 160.200,122.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.424" d="M 160.200,122.600 C 157.231,125.717 153.395,127.793 146.600,133.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.923" d="M 146.600,133.000 C 137.995,139.593 137.874,139.442 129.400,146.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.745" d="M 129.400,146.200 C 122.074,152.042 122.084,152.069 115.000,158.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.397" d="M 115.000,158.200 C 111.684,161.069 111.589,160.997 108.600,164.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.974" d="M 108.600,164.200 C 103.189,169.997 102.948,169.869 98.200,176.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.177" d="M 98.200,176.200 C 94.548,181.069 94.198,181.085 91.800,186.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.633" d="M 91.800,186.600 C 90.198,190.285 90.200,190.640 90.200,194.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.051" d="M 90.200,194.600 C 90.200,197.240 89.729,198.521 91.800,199.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.099" d="M 91.800,199.800 C 96.529,202.721 97.776,203.089 103.800,203.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.205" d="M 103.800,203.000 C 111.376,202.889 111.540,201.638 119.000,199.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.524" d="M 119.000,199.400 C 123.540,198.038 123.482,197.782 127.800,195.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.971" d="M 127.800,195.800 C 135.682,192.182 135.707,192.205 143.400,188.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.946" d="M 143.400,188.200 C 150.307,184.605 150.353,184.650 157.000,180.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.013" d="M 157.000,180.600 C 163.153,176.850 163.022,176.632 169.000,172.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.735" d="M 169.000,172.600 C 171.622,170.832 171.671,170.896 174.200,169.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.68" d="M 174.200,169.000 C 178.071,166.096 178.200,166.214 181.800,163.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.076" d="M 181.800,163.000 C 183.800,161.214 186.514,159.905 185.400,159.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.625" d="M 185.400,159.000 C 183.314,157.305 180.271,157.128 175.400,157.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.503" d="M 175.400,157.800 C 168.671,158.728 168.586,159.491 162.200,162.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.071" d="M 162.200,162.200 C 155.386,165.091 155.490,165.410 149.000,169.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.692" d="M 149.000,169.000 C 146.090,170.610 146.122,170.687 143.400,172.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.455" d="M 143.400,172.600 C 138.722,175.887 138.495,175.656 134.200,179.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.576" d="M 134.200,179.400 C 130.695,182.456 130.618,182.525 127.800,186.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.975" d="M 127.800,186.200 C 126.018,188.525 124.131,189.489 125.000,191.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.565" d="M 125.000,191.400 C 126.131,193.889 128.222,195.251 131.800,195.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.192" d="M 131.800,195.000 C 139.622,194.451 140.103,193.123 147.800,189.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.717" d="M 147.800,189.800 C 157.704,185.524 157.580,185.107 167.000,179.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.172" d="M 167.000,179.800 C 171.780,177.107 171.723,176.977 176.200,173.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.701" d="M 176.200,173.800 C 184.123,168.177 184.049,168.065 191.800,162.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.795" d="M 191.800,162.200 C 198.849,156.865 198.945,156.977 205.800,151.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.076" d="M 205.800,151.400 C 210.745,147.377 210.633,147.237 215.400,143.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.745" d="M 215.400,143.000 C 217.833,140.837 220.834,139.144 220.200,138.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.47" d="M 220.200,138.600 C 219.434,137.944 216.196,139.068 212.600,140.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.259" d="M 212.600,140.600 C 205.396,143.668 205.409,143.868 198.600,147.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.928" d="M 198.600,147.800 C 191.209,152.068 191.306,152.262 184.200,157.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.425" d="M 184.200,157.000 C 180.506,159.462 180.437,159.394 177.000,162.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.942" d="M 177.000,162.200 C 170.637,167.394 170.456,167.253 164.600,173.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.048" d="M 164.600,173.000 C 159.656,177.853 159.518,177.866 155.400,183.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.582" d="M 155.400,183.400 C 153.118,186.466 152.509,186.657 151.800,190.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.535" d="M 151.800,190.200 C 151.309,192.657 151.117,194.270 153.000,195.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.442" d="M 153.000,195.400 C 156.117,197.270 157.654,197.479 161.800,196.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.147" d="M 161.800,196.200 C 179.054,190.879 179.654,190.741 195.800,182.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.197" d="M 195.800,182.200 C 207.254,176.141 206.689,174.972 217.000,167.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.329" d="M 217.000,167.000 C 226.089,159.972 225.812,159.615 234.600,152.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.069" d="M 234.600,152.200 C 238.612,148.815 238.645,148.852 242.600,145.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.785" d="M 242.600,145.400 C 249.645,139.252 249.703,139.312 256.600,133.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.035" d="M 256.600,133.000 C 261.503,128.512 261.501,128.499 266.200,123.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.571" d="M 266.200,123.800 C 269.101,120.899 273.079,118.440 271.800,117.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.329" d="M 271.800,117.800 C 269.879,116.840 265.194,117.864 259.800,120.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.991" d="M 259.800,120.600 C 251.394,124.864 251.845,126.001 244.200,131.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.408" d="M 244.200,131.800 C 240.245,134.801 240.330,134.920 236.600,138.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.733" d="M 236.600,138.200 C 228.730,145.120 228.664,145.054 221.000,152.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.59" d="M 221.000,152.200 C 213.864,158.854 213.843,158.846 207.000,165.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.807" d="M 207.000,165.800 C 201.443,171.446 201.423,171.452 196.200,177.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.666" d="M 196.200,177.400 C 194.223,179.652 194.326,179.748 192.600,182.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.904" d="M 192.600,182.200 C 190.526,185.147 188.255,186.131 188.600,188.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.666" d="M 188.600,188.200 C 188.855,189.731 191.351,190.173 193.800,189.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.091" d="M 193.800,189.400 C 202.751,186.573 202.760,185.508 211.400,181.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.675" d="M 211.400,181.000 C 221.160,175.908 221.168,175.879 230.600,170.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.481" d="M 230.600,170.200 C 239.768,164.679 239.644,164.468 248.600,158.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.598" d="M 248.600,158.600 C 257.044,153.068 257.081,153.119 265.400,147.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.308" d="M 265.400,147.400 C 276.281,139.919 276.323,139.965 287.000,132.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.942" d="M 287.000,132.200 C 291.723,128.765 291.628,128.634 296.200,125.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.91" d="M 296.200,125.000 C 299.428,122.435 303.207,119.713 302.600,119.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.496" d="M 302.600,119.800 C 301.807,119.913 297.821,122.334 293.400,125.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.921" d="M 293.400,125.400 C 285.421,130.934 285.385,130.932 277.800,137.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.789" d="M 277.800,137.000 C 270.385,142.932 270.438,143.026 263.400,149.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.259" d="M 263.400,149.400 C 259.838,152.626 259.928,152.730 256.600,156.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.899" d="M 256.600,156.200 C 250.528,162.530 250.331,162.370 244.600,169.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.101" d="M 244.600,169.000 C 240.131,174.170 240.243,174.287 236.200,179.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.558" d="M 236.200,179.800 C 233.643,183.287 230.495,185.592 231.400,187.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.465" d="M 231.400,187.000 C 232.295,188.392 235.819,186.799 239.800,185.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.125" d="M 239.800,185.400 C 243.219,184.199 242.977,183.558 246.200,181.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.059" d="M 246.200,181.800 C 253.977,177.558 253.981,177.564 261.800,173.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.872" d="M 261.800,173.400 C 269.381,169.364 269.465,169.519 277.000,165.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.829" d="M 277.000,165.400 C 284.465,161.319 284.388,161.178 291.800,157.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.479" d="M 291.800,157.000 C 295.388,154.978 295.419,155.034 299.000,153.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.405" d="M 299.000,153.000 C 304.219,150.034 304.084,149.773 309.400,147.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.087" d="M 309.400,147.000 C 313.284,144.973 317.400,141.661 317.400,143.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.047" d="M 317.400,143.400 C 317.400,146.461 313.451,150.031 309.400,156.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.487" d="M 309.400,156.600 C 306.051,162.031 306.137,162.094 302.600,167.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.931" d="M 302.600,167.400 C 300.937,169.894 300.644,169.695 299.000,172.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.717" d="M 299.000,172.200 C 296.444,176.095 296.276,176.047 294.200,180.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.978" d="M 294.200,180.200 C 292.877,182.847 292.626,182.923 292.200,185.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.579" d="M 292.200,185.800 C 291.826,188.323 291.341,189.063 292.600,191.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.379" d="M 292.600,191.000 C 293.941,193.063 294.762,193.158 297.400,193.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.754" d="M 297.400,193.800 C 302.162,194.958 302.440,194.825 307.400,194.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.828" d="M 307.400,194.600 C 311.240,194.425 311.357,194.305 315.000,193.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.816" d="M 315.000,193.000 C 324.757,189.505 325.187,190.051 334.200,185.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.649" d="M 334.200,185.000 C 343.387,179.851 343.334,179.416 351.400,172.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.864" d="M 351.400,172.600 C 357.534,167.416 357.244,167.010 362.600,161.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.468" d="M 362.600,161.000 C 365.444,157.810 367.800,156.554 367.800,154.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.468" d="M 367.800,154.200 C 367.800,152.754 365.001,152.569 362.600,153.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.197" d="M 362.600,153.400 C 354.601,156.169 354.540,156.980 347.000,161.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.428" d="M 347.000,161.400 C 342.940,163.780 343.141,164.122 339.400,167.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.985" d="M 339.400,167.000 C 332.741,172.122 332.623,171.991 326.200,177.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.175" d="M 326.200,177.400 C 321.223,181.591 321.133,181.547 316.600,186.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.528" d="M 316.600,186.200 C 313.533,189.347 308.490,192.372 311.000,193.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.791" d="M 311.000,193.000 C 318.090,194.772 323.918,194.066 335.800,191.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.49" d="M 335.800,191.000 C 348.718,187.666 348.212,185.628 360.600,180.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.062" d="M 360.600,180.200 C 366.012,177.828 366.072,177.952 371.400,175.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.79" d="M 371.400,175.400 C 380.272,171.152 380.250,171.097 389.000,166.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.077" d="M 389.000,166.600 C 394.650,163.697 394.594,163.590 400.200,160.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.998" d="M 400.200,160.600 C 403.594,158.790 406.261,156.472 407.000,157.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.631" d="M 407.000,157.000 C 407.661,157.472 405.361,160.117 403.000,162.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.276" d="M 403.000,162.600 C 397.561,168.317 397.219,168.020 391.400,173.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.212" d="M 391.400,173.400 C 386.619,177.820 386.580,177.778 381.800,182.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.496" d="M 381.800,182.200 C 378.580,185.178 374.099,186.980 375.400,188.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.279" d="M 375.400,188.200 C 377.299,189.980 382.092,189.523 388.200,188.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.509" d="M 388.200,188.200 C 394.092,186.923 393.993,185.967 399.400,183.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.607" d="M 399.400,183.000 C 410.393,176.967 410.318,176.791 421.000,170.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.578" d="M 421.000,170.200 C 429.118,165.191 429.042,165.063 437.000,159.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.18" d="M 437.000,159.800 C 441.442,156.863 446.251,151.675 445.800,153.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.656" d="M 445.800,153.800 C 444.851,158.275 440.091,163.456 434.200,173.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.236" d="M 434.200,173.000 C 430.091,179.656 430.000,179.600 425.800,186.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.917" d="M 425.800,186.200 C 424.400,188.400 421.631,191.193 423.000,190.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.286" d="M 423.000,190.600 C 427.631,188.593 430.721,186.236 437.800,181.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.086" d="M 437.800,181.000 C 445.321,175.436 444.706,174.589 452.200,169.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.328" d="M 452.200,169.000 C 456.506,165.789 456.536,165.109 461.400,163.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.253" d="M 461.400,163.400 C 463.936,162.509 465.257,162.365 467.000,163.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.273" d="M 467.000,163.800 C 468.657,165.165 467.914,166.358 468.200,169.000" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.774" d="M 468.200,169.000 C 468.714,173.758 467.244,174.107 468.600,178.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.994" d="M 468.600,178.600 C 470.444,184.707 469.775,187.498 474.600,190.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.31" d="M 474.600,190.200 C 479.775,193.098 481.933,191.635 488.600,189.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.163" d="M 488.600,189.800 C 503.733,185.635 503.463,184.155 518.200,178.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="1.977" d="M 518.200,178.200 C 532.663,172.355 532.502,171.942 547.000,166.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.732" d="M 547.000,166.200 C 552.702,163.942 552.751,164.047 558.600,162.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.647" d="M 558.600,162.200 C 567.951,159.247 579.609,155.838 577.400,156.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="4.059" d="M 195.000,152.600 C 206.000,156.200 205.779,157.219 217.000,159.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="3.022" d="M 217.000,159.800 C 225.779,161.819 225.979,161.715 235.000,161.800" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.416" d="M 235.000,161.800 C 247.179,161.915 247.345,162.048 259.400,160.200" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="1.941" d="M 259.400,160.200 C 277.345,157.448 277.267,156.682 295.000,152.600" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="2.324" d="M 295.000,152.600 C 305.067,150.282 305.054,150.195 315.000,147.400" className="colorStroke000 svgStroke"></path><path fill="none" stroke="#6666ff" stroke-linecap="round" stroke-width="1.762" d="M 315.000,147.400 C 335.654,141.595 360.230,134.352 356.200,135.400" className="colorStroke000 svgStroke"></path></svg></g></svg>
            </div> */}
                    </div>
                    <div className="w-50 flex ml-auto hidden lg:flex">
                        <p style={{ fontFamily: "roobert", fontSize: "12px" }}>
                            |
                        </p>
                        <p
                            className="select-none ml-5"
                            style={{ fontFamily: "roobert", fontSize: "12px" }}>
                            EN
                        </p>
                        <p
                            className="transition duration-700 ease-in-out select-none ml-5 hover:cursor-pointer text-unhovered hover:text-white"
                            style={{ fontFamily: "roobert", fontSize: "12px" }}>
                            VN
                        </p>
                        <p
                            className="transition duration-700 ease-in-out select-none ml-5 hover:cursor-pointer text-unhovered hover:text-white"
                            style={{ fontFamily: "roobert", fontSize: "12px" }}>
                            中文
                        </p>
                    </div>
                    <div className="w-20 flex-col lg:ml-36 ml-auto flex md:hidden">
                        <p>Hello</p>
                    </div>
                    <div className="w-20 flex-col lg:ml-36 ml-auto hidden md:flex">
                        <div
                            onClick={() => router.push("/work")}
                            onMouseEnter={() => {
                                setHoverArrow("work");
                            }}
                            onMouseLeave={() => setHoverArrow(null)}
                            className="group flex items-center">
                            <p
                                style={{ fontSize: "10.5px" }}
                                className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out ml-auto">
                                ➔
                            </p>
                            <p
                                className=" transition duration-700 ease-in-out select-none mt-4.5 group-hover:cursor-pointer text-unhovered group-hover:text-white"
                                style={{
                                    fontFamily: "roobert",
                                    fontSize: "12px",
                                }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WORK
                            </p>
                        </div>
                        <div
                            onClick={() => router.push("/design")}
                            onMouseEnter={() => {
                                setHoverArrow("projects");
                            }}
                            onMouseLeave={() => setHoverArrow(null)}
                            className="mt-2 group flex items-center -ml-7">
                            <p
                                style={{ fontSize: "10.5px" }}
                                className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out ml-auto">
                                ➔
                            </p>
                            <p
                                className="transition duration-700 ease-in-out select-none group-hover:cursor-pointer text-unhovered group-hover:text-white"
                                style={{
                                    fontFamily: "roobert",
                                    fontSize: "12px",
                                }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS
                            </p>
                        </div>
                        <div
                            onClick={() => setTv("research")}
                            onMouseEnter={() => {
                                setHoverArrow("research");
                            }}
                            onMouseLeave={() => setHoverArrow(null)}
                            className="mt-2 group flex items-center -ml-7">
                            <p
                                style={{ fontSize: "10.5px" }}
                                className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out ml-auto">
                                ➔
                            </p>
                            <p
                                className="transition duration-700 ease-in-out select-none group-hover:cursor-pointer text-unhovered group-hover:text-white"
                                style={{
                                    fontFamily: "roobert",
                                    fontSize: "12px",
                                }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RESEARCH
                            </p>
                        </div>
                        <div
                            onClick={() => setTv("contact")}
                            onMouseEnter={() => {
                                setHoverArrow("contact");
                            }}
                            onMouseLeave={() => setHoverArrow(null)}
                            className="mt-2 group flex items-center -ml-7">
                            <p
                                style={{ fontSize: "10.5px" }}
                                className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out ml-auto">
                                ➔
                            </p>
                            <p
                                className="transition duration-700 ease-in-out select-none group-hover:cursor-pointer text-unhovered group-hover:text-white"
                                style={{
                                    fontFamily: "roobert",
                                    fontSize: "12px",
                                }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONTACT
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{ maxWidth: "1050px" }} className="flex-col">
                    {tv === "canvas" && (
                        <canvas
                            className="mt-2"
                            style={{ zIndex: "1", borderRadius: "15px" }}
                            id="gradient-canvas"
                            data-transition-in
                        />
                    )}
                    {tv === "canvas" && (
                        <p
                            className={`fade-in-out ${index} mt-10`}
                            color="white">
                            {TEXTS[index % TEXTS.length]}
                        </p>
                    )}

                    {/* <Work />
        <Projects />
        <Research /> */}
                    <div className="lg:block">
                        <Footer />
                    </div>
                </div>
            </main>
        </ReactLenis>
    );
}
