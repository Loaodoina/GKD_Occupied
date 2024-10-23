import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mihoyo.hyperion',
  name: '米游社',
  groups: [
    {
      key: 1,
      name: '功能类-崩坏三自动签到',
      desc: '点击签到-关闭弹窗-返回',
      forcedTime: 5000,
      activityIds: 'com.mihoyo.hyperion.web2.MiHoYoWebActivity',
      rules: [
        {
          key: 0,
          name: '点击签到',
          matches: '[text="【崩坏3】每日签到"] >4 View > View + TextView',
          exampleUrls: 'https://e.gkd.li/d9200396-df61-4a3b-8f86-973977c19621',
          snapshotUrls: [
            'https://i.gkd.li/i/17483577',
            'https://i.gkd.li/i/17452726',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '关闭签到后的弹窗',
          matches: '[text="【崩坏3】每日签到"] >3 TextView[visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/d335b286-9776-4193-a7bb-ad5702241111',
          snapshotUrls: [
            'https://i.gkd.li/i/17452725',
            'https://i.gkd.li/i/14967631', // clickable=false
          ],
        },
        {
          preKeys: 1,
          key: 2,
          name: '返回上一个页面',
          matches:
            '[text="【崩坏3】每日签到"] > View > View[index=0] >3 TextView[clickable=true]',
          exampleUrls: 'https://e.gkd.li/62322e24-e53a-4f79-ab4d-411e5c902651',
          snapshotUrls: 'https://i.gkd.li/i/17452951',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-绝区零自动签到',
      desc: '点击签到-关闭弹窗-返回',
      forcedTime: 5000,
      activityIds: 'com.mihoyo.hyperion.web2.MiHoYoWebActivity',
      rules: [
        {
          key: 0,
          name: '点击签到',
          matches: '[text="【绝区零】每日签到"] >4 View > View + TextView',
          exampleUrls: 'https://e.gkd.li/f779184c-bfe2-40eb-a0f6-61cdf3d2aeca',
          snapshotUrls: [
            'https://i.gkd.li/i/17452942',
            'https://i.gkd.li/i/17452943',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '关闭签到后的弹窗',
          matches:
            '[text="【绝区零】每日签到"] >3 TextView[visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/3babb231-30a7-4891-9c4a-c11946838741',
          snapshotUrls: [
            'https://i.gkd.li/i/14371787',
            'https://i.gkd.li/i/14967631', // clickable=false
          ],
        },
        {
          preKeys: 1,
          key: 2,
          name: '返回上一个页面',
          matches:
            '[text="【绝区零】每日签到"] > View > View[index=0] >3 TextView[clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/d8031907-105b-4d37-8542-b71e854b3b8a',
          snapshotUrls: 'https://i.gkd.li/i/14371790',
        },
      ],
    },
  ],
});
