// our products
export const ONLINE_BETA_CLIENT_CLICK = 'GetClient.OnlineBeta.Click';
export const NEW_DEX_CLICK = 'GetClient.NewDex.Click';
export const ONLINE_CLIENT_CLICK = 'GetClient.Online.Click';

export const ELECTRON_CLIENT_WINDOWS_CLICK = 'GetClient.Windows.Click';
export const ELECTRON_CLIENT_MAC_CLICK = 'GetClient.Mac.Click';
export const ELECTRON_CLIENT_LINUX_CLICK = 'GetClient.Linux.Click';

export const GET_WAVES_CLICK = 'GetWavesClick';
export const ANDROID_CLIENT_CLICK = 'GetClient.Android.Click';
export const IOS_CLIENT_CLICK = 'GetClient.Ios.Click';

// developers
export const API_DOCUMENTATION_CLICK = 'DocumentationClick';
export const API_CLIENT_CLICK = 'ClientApiClick';
export const WAVES_NODE_CLICK = 'WavesNodeClick';
export const WAVES_NODE_INSTALL_CLICK = 'WavesNodeInstallClick';
export const DEX_API_CLICK = 'DexApiClick';

// files downloads
export const WHITEPAPER_DOWNLOAD = 'WhitepaperDownload';
export const BRANDING_PACKAGE_DOWNLOAD = 'BrandingPackageDownload';
export const SMART_CONTRACTS_WP_DOWNLOAD = 'SmartContracts.WhitepaperDownload';

// contact
export const SUBMIT_RESUME_CLICK = 'SubmitResumeClick';
export const SUBSCRIBE = 'Subscribe';
export const FEEDBACK_FORM_SUBMIT = 'FeedbackFormSubmit';

// telegram
export const TELEGRAM_POPUP_JOIN_CLICK = 'TelegramPopup.Join.Click';
export const TELEGRAM_POPUP_CLOSE = 'TelegramPopup.Close';

// Cookies
export const COOKIES_CONSENT_ALLOW = 'CookieConsent.Allow.Click';
export const COOKIES_CONSENT_DISABLE = 'CookieConsent.Disable.Click';
export const COOKIES_CONSENT_RESET = 'CookieConsent.Reset.Click';

// export const GIVE_FEEDBACK_CLICK = 'GiveFeedbackClick';
// export const GIVE_FEEDBACK_CLOSE = 'GiveFeedbackClose';
// export const GIVE_FEEDBACK_SHOW = 'GiveFeedbackShow';

const createAC = type => meta => ({
  type,
  log: true,
  ...meta,
});

// Cookies
export const cookiesAllowClick = createAC(COOKIES_CONSENT_ALLOW);
export const cookiesDisableClick = createAC(COOKIES_CONSENT_DISABLE);
export const cookiesResetClick = createAC(COOKIES_CONSENT_RESET);

// our products
export const newClientClick = createAC(ONLINE_BETA_CLIENT_CLICK);
export const newDexClick = createAC(NEW_DEX_CLICK);
export const getClientClick = createAC(ONLINE_CLIENT_CLICK);
export const getWavesClick = createAC(GET_WAVES_CLICK);
export const androidClientClick = createAC(ANDROID_CLIENT_CLICK);
export const iosClientClick = createAC(IOS_CLIENT_CLICK);
export const getElectronWindowsClick = createAC(ELECTRON_CLIENT_WINDOWS_CLICK);
export const getElectronMacClick = createAC(ELECTRON_CLIENT_MAC_CLICK);
export const getElectronLinuxClick = createAC(ELECTRON_CLIENT_LINUX_CLICK);

// developers
export const apiDocumentationClick = createAC(API_DOCUMENTATION_CLICK);
export const apiClientClick = createAC(API_CLIENT_CLICK);
export const dexApiClick = createAC(DEX_API_CLICK);
export const wavesNodeClick = createAC(WAVES_NODE_CLICK);
export const wavesNodeInstallClick = createAC(WAVES_NODE_INSTALL_CLICK);

// files downloads
export const whitepaperDownload = createAC(WHITEPAPER_DOWNLOAD);
export const brandingPackageDownload = createAC(BRANDING_PACKAGE_DOWNLOAD);
export const smartContractsWPDownload = createAC(SMART_CONTRACTS_WP_DOWNLOAD);

// contact
export const submitResumeClick = createAC(SUBMIT_RESUME_CLICK);
export const subscribe = createAC(SUBSCRIBE);
export const feedbackFormSubmit = createAC(FEEDBACK_FORM_SUBMIT);

// telegram
export const joinTelegramClick = createAC(TELEGRAM_POPUP_JOIN_CLICK);
export const closeTelegramClick = createAC(TELEGRAM_POPUP_CLOSE);

// export const giveFeedbackShow = createAC(GIVE_FEEDBACK_SHOW);
// export const giveFeedbackClick = createAC(GIVE_FEEDBACK_CLICK);
// export const giveFeedbackClose = createAC(GIVE_FEEDBACK_CLOSE);
