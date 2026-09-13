var SPECIAL_DOMAINS = [
  // dotabyss game
  "api.abyss-prod.dotabyss.dmmgames.com",
  // legeclo game
  "front.legend-clover.net",
  "asset.legend-clover.net",
  "misc.legend-clover.net",
  "notification.legend-clover.net",
  "pcg.legend-clover.net",
  "pbs.twimg.com",
];

function isSpecialDomain(host) {
  host = host.toLowerCase();
  for (var i = 0; i < SPECIAL_DOMAINS.length; i++) {
    if (host === SPECIAL_DOMAINS[i]) {
      return true;
    }
  }
  return false;
}

function FindProxyForURL(url, host) {
  if (isSpecialDomain(host)) {
    return "PROXY 127.0.0.1:7890";
  }

  return "PROXY 127.0.0.1:7897";
}
