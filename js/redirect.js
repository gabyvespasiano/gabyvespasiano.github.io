if (location.host.includes("gabyvespa") && location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
  }else if (location.host.includes("gabyvespasiano.github.io")){
    location.replace("https://gabyvespa.ar/");
  }