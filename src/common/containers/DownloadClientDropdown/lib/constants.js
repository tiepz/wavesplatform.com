import { fileUrl } from 'src/common/utils/url';

export const HANDLERS = {
  Windows: 'onWindowsClick',
  Mac: 'onMacClick',
  Linux: 'onLinuxClick',
};

export const OPTIONS = [
  { value: 'initial', label: 'cta.getClient' },
  {
    value: 'Windows',
    label: 'cta.getClient.windows',
    link: fileUrl('WavesClient-win.zip'),
    handler: HANDLERS.Windows,
  },
  {
    value: 'Mac',
    label: 'cta.getClient.mac',
    link: fileUrl('WavesClient-mac.dmg'),
    handler: HANDLERS.Mac,
  },
  {
    value: 'Linux',
    label: 'cta.getClient.linux',
    link: fileUrl('WavesClient-linux.deb'),
    handler: HANDLERS.Linux,
  },
];
