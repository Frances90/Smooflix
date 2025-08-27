
/* Smoothie generieren Button ein click Event geben */
document.getElementById('button_smoothie').addEventListener('click', function() {
    var nameValue = document.getElementById('input_smoothie_name').value;
    localStorage.setItem('inputWert',nameValue);
    
    document.getElementById("zutaten-list").innerHTML = "";

    ladeDaten(nameValue);

    document.getElementById('input_smoothie_name').value = '';
    
});

async function ladeDaten(nameSmoothie) {
    try {
        var url = "https://storage01.dbe.academy/fswd/api-smoothie-mixer/?smoothiename=" + nameSmoothie;
        var response = await fetch(url);
        var daten = await response.json();

        } catch (error) {
        console.error("Fehler:", error);
        alert("Fehler beim Laden der Daten.");
    }
  
        console.log(daten.data.name);
        document.getElementById("smoothie_name").innerHTML = daten.data.name;
        document.getElementById("img_smoothie").src = daten.data.image;
        document.getElementById("p_geschmachsrichtung").innerHTML = daten.data.taste;

        for(var i = 0; i < daten.data.ingredients.length; i++){
            console.log(daten.data.ingredients[i]);
            var newZutat = document.createElement('li');
            newZutat.textContent = daten.data.ingredients[i];
            newZutat.id = "li_zutat";
                        
            // Das neue Element zur Liste hinzufügen
            document.getElementById('zutaten-list').appendChild(newZutat);
        }

        localStorage.setItem('smoothie', JSON.stringify(daten));
    
}

function datenAuslesen(){

    /* Inputfeld wieder aus dem Lokalstorage laden */
    document.getElementById('input_smoothie_name').value = localStorage.getItem('inputWert');

    /* Daten für den Smoothie aus dem Lokalstorage laden */
    var smoothieobjekt = localStorage.getItem('smoothie');
    var smoothieobjParse = JSON.parse(localStorage.getItem('smoothie'));

    document.getElementById("smoothie_name").innerHTML = smoothieobjParse.data.name;
    document.getElementById("img_smoothie").src = smoothieobjParse.data.image;
    document.getElementById("p_geschmachsrichtung").innerHTML = smoothieobjParse.data.taste;

    for(var i = 0; i < smoothieobjParse.data.ingredients.length; i++){
            console.log(smoothieobjParse.data.ingredients[i]);
            var newZutat = document.createElement('li');
            newZutat.textContent = smoothieobjParse.data.ingredients[i];
            newZutat.id = "li_zutat";
                        
            // Das neue Element zur Liste hinzufügen
            document.getElementById('zutaten-list').appendChild(newZutat);
    }


    /* Du hast Smooflix bereits programmiert – stark! 
    Jetzt soll es noch ein bisschen smarter werden: 
    Beim Neuladen der Seite soll das letzte Suchergebnis automatisch wieder angezeigt werden. 
    Auch das Suchfeld soll den zuletzt eingegebenen Namen behalten.
    Speichere hierzu diese Daten im LocalStorage. */
}

datenAuslesen();



/* if(window.XMLHttpRequest){
            

            /* var request = new XMLHttpRequest();
            request.open("GET", "https://storage01.dbe.academy/fswd/api-smoothie-mixer/?smoothiename=DrachenSmoothie"); */
            
           /*  response.onreadystatechange = function(){
                if(response.readyState == 4 && request.status == 200){
                    console.log(daten);
                    document.getElementById("smoothie_name").innerHTML = daten.data.name;

                    for(var i = 0; i < daten.data.ingredients.length; i++){
                        console.log(daten.data.ingredients[i]);
                        var newZutat = document.createElement('li');
                        newZutat.textContent = daten.data.ingredients[i];
                        newZutat.id = "li_zutat";
                        
                        // Das neue Element zur Liste hinzufügen
                        document.getElementById('zutaten-list').appendChild(newZutat);
                    }
                }
            }
            response.send();

        }else{
            alert("Warnung: XMLHttpRequest nicht vorhanden!");
        }  */