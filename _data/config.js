//imports
import { faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons"

//initialization
const configurations = {
    SEO: {
        title: 'The V2V Project',
        description: 'The V2V Project is a Black and youth-led not-for-profit organization. Our organization is dedicated to cultivating wealth in the black community by providing youth with valuable resources to aid in business development while also enhancing entrepreneurial, and communication skills overtime.',
        authors: {name: 'The V2V Project'},
        keywords: ['Non-profit', 'Black-Businesses'],
        baseUrl: 'https://www.thev2vproject.org'
    },
    ROUTING: {
        mainRoutes: [
            {
                route: 'Home',
                url: '/',
                icon: ''
            }
        ],
        authRoutes: [],
        adminRoutes: [],
        userRoutes: [],
    },
    INFORMATION: {
        email: 'thev2vproject@gmail.com',
        phone_number: '819-213-8305',
        address: '',
        social_links: [
            {
                social: 'Instagram',
                icon: faInstagram,
                url: 'https://www.instagram.com/thev2vproject/'
            },
            {
                social: 'Linkedin',
                icon: faLinkedin,
                url: 'https://www.linkedin.com/company/the-v2v-project-inc'
            },
            {
                social: 'Facebook',
                icon: faFacebook,
                url: 'https://www.facebook.com/profile.php?id=100088501689700'
            }
        ]
    }
}

export default configurations