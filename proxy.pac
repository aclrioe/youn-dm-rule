var SPECIAL_DOMAIN = "api.abyss-prod.dotabyss.dmmgames.com";

function FindProxyForURL(url, host) {
  if (host.toLowerCase() === SPECIAL_DOMAIN) {
    return "PROXY 127.0.0.1:8123";
  }

  return "PROXY 127.0.0.1:7897";
}
