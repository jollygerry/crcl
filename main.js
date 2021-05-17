var form = document.getElementById('getCrcl');
        form.addEventListener('submit', runCalc);
        function runCalc(e){
          e.preventDefault();
          var newAge = document.getElementById('age').value;
          var newWeight = document.getElementById('weight').value;
          var newScr = document.getElementById('scr').value;
          var outputDiv = document.getElementById('output');
          var femaleSex = document.getElementById('female');
          var maleSex = document.getElementById('male');
    
          if (femaleSex.checked==true) {
            var output = Math.round((140 - newAge)*(0.85*newWeight)/(72 * newScr));
          }
          else if (maleSex.checked==true) {
            var output = Math.round((140 - newAge)*(newWeight)/(72 * newScr));
          }
          else {
            alert ('sex.');
          }
          outputDiv.innerHTML = output + " mg/dL";
        }
          var form1 = document.getElementById("obesity");
          form1.addEventListener('submit', isObese);
          function isObese(e) {
            e.preventDefault();
            var actualWeight = document.getElementById('weight1').value;
            var height1 = document.getElementById('height1').value;
            var outputDiv1 = document.getElementById('output1');
            var ibw = (height1 - 60)*2.3 + 50;
            var abw = (actualWeight-ibw)*0.4 + ibw;
            if (actualWeight > 1.2*ibw) {
              var output1 = "YUP, my guy (or girl) is obese. Use Adjusted Body Weight of " + Math.round(abw) + " kg to calculate CrCl";
            }
            else if (actualWeight < ibw) {
              var output1 = "Ope! This patient is underweight. Use his or her actual body weight to calculate CrCl."
            }
            else {
              var output1 = "Nope! Normal body weight here! Use " + Math.round(ibw) + " kg for CrCl calculation"
            }
            outputDiv1.innerHTML = output1;
          }