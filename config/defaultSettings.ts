import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = ProSettings & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true, // 如果设置为false，则底部收起按钮消失
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: 'Ant Design Pro',
  pwa: false,
  iconfontUrl: '',
};

export type { DefaultSettings };

export default proSettings;
