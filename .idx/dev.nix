{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
    # Add wrangler for Cloudflare deployment
    pkgs.wrangler
    # Add packages for Korean input
    pkgs.ibus
    pkgs.ibus-hangul
    pkgs.noto-fonts-cjk-compact
  ];
  # Sets environment variables in the workspace
  env = {
    LANG = "ko_KR.UTF-8";
    LC_ALL = "ko_KR.UTF-8";
    GTK_IM_MODULE = "ibus";
    QT_IM_MODULE = "ibus";
    XMODIFIERS = "@im=ibus";
  };
  # Fast way to run commands without creating a full environment
  scripts = {
    "hello" = {
      help = "prints a friendly message";
      exec = ''
        echo "hello from the dev environment"
      '';
    };
  };
}
