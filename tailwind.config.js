/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                pacifico: ['Pacifico', "cursive"],
                titalium: ['Titillium Web', "sans-serif"],
            },
            colors: {
                primary: "#2B1712",
                page: {
                    first: "#492D26",
                    second: "#65463E",
                    third: "#DDB66F",
                },
            },
            borderRadius: {
                'big': '80px'
            },
            fontSize: {
                "biggest": "28px",
                "big": "28px",
                "big-desktop": "50px",
                "biggest-desktop": "72px"
            }
        },
    },
    plugins: [],
};

