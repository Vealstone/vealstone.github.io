


function innerG () {
    var Rollingriches = document.getElementById(Rollingriches).value;
    var numPlayer = document.getElementById(numPlayer).value;
    var potBankCap = document.getElementById(potBankCap).value;
    var GameLobby = RollingRiches + " " + numPlayer;

    if (GameLobby.length >4 || GameLobby.length <2) {
        // if (GameLobby.length >4 || GameLobby <2) {
              document.getElementById("loginStatus").innerHTML = "EventName has invalid number of characters!";}
        
    else if (numPlayer > 4 || numPlayer < 2) 
        {document.getElementById("loginStatus").innerHTML = "Number of participants is  an invalid number!";}
    
    else if (potBankCap > 1000 || potBankCap <100)
        {document.getElementById("loginStatus").innerHTML = " Bank value invalid, please choose a multiple of 10 between 100-1000";}

    else
        {alert("Access Granted, Welcome " + GameLobby + "!");
            location.replace("Craps Vealstone.html");}
    }
     