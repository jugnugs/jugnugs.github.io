import './assets//styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n, type I18n } from 'vue-i18n'

const i18n: I18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: {
            "TitleCard": {
                "title": "Frontend Developer",
                "contact": "contact",
                "scroll": "scroll down"
            },
            "Description": {
                "header": "Hi, I'm Julia",
                "bio": "Since learning HTML/CSS as a child, I’ve been building web frontends for over 10 years. I’m currently software engineer with an emphasis on frontend development based in Tokyo, Japan. I love building things in React or Vue, but I have some backend experience in C#, SQL, etc. as well.  I have a passion for making clean interfaces and adhering to responsive design. I am open to working on projects to flex my creative muscles, so please feel free to reach out if you want to collaborate on something together!"
            },
            "Skills": {
                "resume": "see my full resume?"
            }, 
            "Footer": {
                "header": "get in touch"
            }
        },
        ja: {
            "TitleCard": {
                "title": "フロントエンド開発者",
                "contact": "お問い合わせ",
                "scroll": "スクロールする"
            },
            "Description": {
                "header": "はじめまして。Juliaです",
                "bio": "HTMLとCSSを子供の頃に学んで以来、10年以上ウェブフロントエンドの開発に携わってきました。現在は東京を拠点とし、フロントエンド開発を中心にしたソフトウェアエンジニアとして活動しています。ここまではReactやVueを使った開発がメインですが、C#やSQLなどのバックエンド技術の経験もあります。クリーンなインターフェースの作成とレスポンシブデザインの実現に情熱を注いでいます。創造力を発揮できるプロジェクトに取り組むことに前向きですので、一緒に実現したいプロジェクトがあれば、お気軽にご連絡ください！"
            },
            "Skills": {
                "resume": "レジュメはこちら"
            },
            "Footer": {
                "header": "ご連絡お待ちしています！"
            }
        }
    }
});

createApp(App).use(i18n).mount('#app')
