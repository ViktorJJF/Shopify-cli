var link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://databot-api-2.herokuapp.com/dist_files/databot.css";
link.defer = true;

document.getElementsByTagName("head")[0].appendChild(link);
