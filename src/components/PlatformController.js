const PlatformController = ({ platform, deskRender, mobRender }) => {
  return platform === "desktop" ? deskRender : mobRender;
};

export default PlatformController;
