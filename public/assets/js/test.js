function openURL()
  {
      var shell = new ActiveXObject("Microsoft.XMLDOM");
      shell.run("Firefox http://www.google.com");
  }
