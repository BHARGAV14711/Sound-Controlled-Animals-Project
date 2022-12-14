function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/AGHj-fxIY/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResults)
    console.log('Model is Loaded')
}
function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      rgb_r = Math.floor(Math.random() * 255) + 1;
      rgb_g = Math.floor(Math.random() * 255) + 1;
      rgb_b = Math.floor(Math.random() * 255) + 1;

      bgn = 0
      lion = 0
      cow = 0
      cat = 0
      dog = 0
  
      document.getElementById("dvoL").innerHTML = 'Detected voice of '+ results[0].label;
      document.getElementById("dvoL").style.color = "rgb("+rgb_r+","+rgb_g+","+rgb_b+")";
      
      document.getElementById("bgnL").innerHTML = 'Detected Background noise - '+bgn;
      document.getElementById("bgnL").style.color = "rgb("+rgb_r+","+rgb_g+","+rgb_b+")";


      document.getElementById("lionL").innerHTML = 'Detected Lion -'+lion;
      document.getElementById("lionL").style.color = "rgb("+rgb_r+","+rgb_g+","+rgb_b+")"


      document.getElementById("cowL").innerHTML = 'Detected Cow - '+cow;
      document.getElementById("cowL").style.color = "rgb("+rgb_r+","+rgb_g+","+rgb_b+")";


      document.getElementById("catL").innerHTML = 'Detected Cat- '+cat;
      document.getElementById("catL").style.color = "rgb("+rgb_r+","+rgb_g+","+rgb_b+")";


      document.getElementById("dogL").innerHTML = 'Detected Dog - '+dog;
      document.getElementById("dogL").style.color = "rgb("+rgb_r+","+rgb_g+","+rgb_b+")";

      

      if (results[0].label == "Barking") {
        document.getElementById("img").src = 'https://shravaripatil.github.io/Sound_controlled_animals/bark.gif';
        dog = dog+1;
      } else if (results[0].label == "Meowing") {
        document.getElementById("img").src = 'https://shravaripatil.github.io/Sound_controlled_animals/meow.gif';
        cat = cat + 1;
      } else if (results[0].label == "Mooing") {
        document.getElementById("img").src = 'https://cdn.dribbble.com/users/242629/screenshots/1642483/cow.gif';
        cow = cow + 1;
      }else if (results[0].label == "Roaring") {
        document.getElementById("img").src = 'https://acegif.com/wp-content/uploads/2020/07/lion-roar.gif';
        lion = lion + 1;
      } else{
        document.getElementById("img").src = 'https://shravaripatil.github.io/Sound_controlled_animals/listen.gif';
        bgn = bgn + 1;
      } 
    }
  }