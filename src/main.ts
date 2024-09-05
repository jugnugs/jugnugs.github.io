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
                "bio": "I’m a software engineer with passion for frontend web development, based in Tokyo, Japan. I love building things in React or Vue, but I also have some backend experience as well. Let’s build something together!"
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
                "bio": "フロントエンド技術を中心として、東京都在住のソフトウェアエンジニア、Juliaと申します。ここまではReactかVueをメインにしており、C#など、バックの経験もあります。一緒になにか作り上げましょうか？"
            }, 
            "Skills": {
                "resume": "レジュメはこちら"
            }, 
            "Footer": {
                "header": "ご連絡をお待ちしております！"
            }
        }
    }
});

createApp(App).use(i18n).mount('#app')
