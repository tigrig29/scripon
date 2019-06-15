<template>
  <div>
    <Header :title="title" />
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

const title = 'Scripon!'

export default {
  head() {
    return {
      title: `${title} | ノベルゲーム制作のスクリプト作業を簡単に！`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'ノベルゲーム制作のスクリプト作業といえば、クリック待ちタグの挿入、記号の置換など、単純作業の連続で大変……。' +
            'そんなあなたにスクリプト作業簡易化アプリ『Scripon!』。' +
            'シナリオテキストを入力してクリック待ちタグや置換文字を指定すれば、Pon!と自動でスクリプトを出力します。'
        },
        { name: 'author', content: 'TigRig' },
        {
          name: 'format-detection',
          content: 'telephone=no,address=no,email=no'
        },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@TigRig_TRNS' },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Scripon!'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://scripon.toranos.net/'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'ノベルゲーム制作のスクリプト作業を簡単に！'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://scripon.toranos.net/scripon-logo.png'
        },
        { hid: 'og:site_name', name: 'og:site_name', content: 'Scripon!' }
      ],
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://scripon.toranos.net/' }
      ]
    }
  },
  components: {
    Header
  },
  data() {
    return {
      title
    }
  }
}
</script>
