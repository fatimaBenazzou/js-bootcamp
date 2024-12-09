/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                bgColor: "#09090B",
                textColor: "#FFFFFF",
                subColor: "#71717A",
            },
            backgroundImage: {
                textGradient: "linear-gradient(135deg, #FFFFFF 0%, #71717A 100%)",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
