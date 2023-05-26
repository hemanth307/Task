/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 1px 4px rgba(0, 0, 0, 0.25)',
        'xxl': '0px 0px 4px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        'my-gray': '#F1F2F6',
        'tc':'#1A1A1A',
        'nc':'#7F7F7F',
        'pw':'#4D4D4D',
        'pw2':'#F1F2F6',
        'i':'#E1E8ED',
        'border': '#EBEBEB'

      },
      backgroundImage: {
        'profilePic': "url('E:/task/src/assets/pfpic.jpeg')",
        'miles': "url('E:/task/src/assets/miles.jpeg')",
        'post': "url('E:/task/src/assets/post.jpeg')",
        'iitm1': "url('E:/task/src/assets/iitm1.jpeg')",
        'iitm2': "url('E:/task/src/assets/iitm2.jpeg')",
        'not1': "url('E:/task/src/assets/not1.jpeg')",
        'not2': "url('E:/task/src/assets/not2.jpeg')",
        'not3': "url('E:/task/src/assets/not3.jpeg')",
        'not4': "url('E:/task/src/assets/not4.jpeg')",
        'not5': "url('E:/task/src/assets/not5.jpeg')",
        'req': "url('E:/task/src/assets/req.jpeg')",
      },
      spacing: {
        'x': '476px',
        'y':'607px',
        'z':'646px',
        'pw':'498px',
        'iw':'477px',
        'ih':'376px',
        'ip':'18px',
        'ipw':'440px',
        'iph':'113px',
        'nw':'86px',
        'nwt':'123px',
        'tp':'10px',
        'osf':'176px',
        'osd':'109px',
        'imp':'180px',
        'reqh':'780px',
        'mpw':'928px',
        'mpw2':'70px',
        'mpw3':'295px',
        'mpw4':'594px',
        'mpw5':'633px',
        'mpw6':'350px',
        'mpw7':'73px'
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.01em',
        widest: '.1em',
        widest: '.25em',
      },
      margin: {
        's': '558px',
        'd':'88px'
      },
      borderRadius: {
        'none': '30px',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
      },
      placeholderColor: {
        'primary': '#4D4D4D',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      },
      fontFamily: {
        rob:['Roboto']
      }
    },
  },
  plugins: [],
}

