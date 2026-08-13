var SPECIAL_DOMAINS = [
  "api.abyss-prod.dotabyss.dmmgames.com",
  // "another.example.com",
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
    return "PROXY 127.0.0.1:8123";
  }

  return "PROXY 127.0.0.1:7897";
}
