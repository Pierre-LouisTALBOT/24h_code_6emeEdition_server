var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');


function controller(response, request) {
  console.log("Le gestionnaire 'controller' est appelé.");

  html = '<!DOCTYPE html><html lang="en"><head><title>Interface</title><meta charset="utf-8"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script><style>body {font: 400 15px/1.8 Lato, sans-serif;color: #777;}h3, h4 {margin: 10px 0 30px 0;letter-spacing: 10px;      font-size: 20px;color: #111;}.container {padding: 80px 120px;}.bg-1 {background: #2d2d30;color: #bdbdbd;}.bg-1 h3 {color: #fff;}.bg-1 p {font-style: italic;}.list-group-item:first-child {border-top-right-radius: 0;border-top-left-radius: 0;}.list-group-item:last-child {border-bottom-right-radius: 0;border-bottom-left-radius: 0;}.btn {padding: 10px 20px;background-color: #333;color: #f1f1f1;border-radius: 0;transition: .2s;}.btn:hover, .btn:focus {border: 1px solid #333;background-color: #fff;color: #000;}.form-control {border-radius: 0;}.switch {position: relative;display: inline-block;width: 60px;height: 34px;}.switch input {display:none;}.slider {position: absolute;cursor: pointer;top: 0;left: 0;right: 0;bottom: 0;background-color: #ccc;-webkit-transition: .4s;transition: .4s;}.slider:before {position: absolute;content: "";height: 26px;width: 26px;left: 4px;bottom: 4px;background-color: white;-webkit-transition: .4s;transition: .4s;}input:checked + .slider {background-color: #2196F3;}input:focus + .slider {box-shadow: 0 0 1px #2196F3;}input:checked + .slider:before { -webkit-transform: translateX(26px);-ms-transform: translateX(26px);transform: translateX(26px);}.slider.round {border-radius: 34px;}.slider.round:before {border-radius: 50%;}</style></head><body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="50"><div id="contact" class="container"><h3 class="text-center">Interface</h3><div class="row"><div class="col-sm-2"> </div><div class="col-md-8"><div class="row"><div class="col-sm-6 form-group"><input class="form-control" id="name" name="name" placeholder="Vitesse" type="number" min="-1" max="3" required></div><div class="col-sm-6 form-group"><SELECT name="nom" size="1"><OPTION>Tout droit</OPTION><OPTION>Droite</OPTION><OPTION>Gauche</OPTION></SELECT></div><br><br><div class="form-group"><div class="row"><div class="col-sm-8"><p> Feux avant </p><label class="switch"><input type="checkbox"><div class="slider"></div></label><p> Feux arrière </p><label class="switch"><input type="checkbox"><div class="slider"></div></label></div><div class="col-sm-4"><p> Essuie-glaces </p><label class="switch"><input type="checkbox"><div class="slider round"></div></label></div></div></div><div class="form-group"><input class="form-control" id="email" name="email" placeholder="Compteur tour" min="0" max="10000" type="number" required></div><br><div class="row"><div class="col-md-12 form-group"><button class="btn pull-right" type="submit">Envoyer</button></div></div></div></div></div></body></html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(html);

  response.end();
}

function exportPlayersToJSON() {
  var json =  "{\n";

  for (var i in player) {
    json = json + "\t\"joueur"+ i + "\": ";
    json = json + JSON.stringify(player[i]);
  
    if (i != player.length - 1 ) {
      json = json + ",";
    }
    json = json + "\n";
  }

  json = json + "}";
  fs.writeFileSync("players.json", json, "UTF-8");
}


exports.controller = controller;